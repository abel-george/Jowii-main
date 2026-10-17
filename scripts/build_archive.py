#!/usr/bin/env python3
"""Build the public online archive from the source documents folder."""

from __future__ import annotations

import json
import re
import shutil
import subprocess
import sys
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET

W = "{http://schemas.openxmlformats.org/wordprocessingml/2006/main}"
REL_NS = "{http://schemas.openxmlformats.org/package/2006/relationships}"
DOC_NS = "{http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing}"
A_NS = "{http://schemas.openxmlformats.org/drawingml/2006/main}"

TITLE_OVERRIDES = {
    "JOWIH FOUNDATION": "Jowih Foundation Constitution",
    "JOWIH GOVERNANCE": "Jowih Governance & Appointment Register",
    "JOWIH CREDITS": "Jowih Credits",
    "JOWIH ECOSYSTEM INVESTMENT ARCHITECTURE": "Jowih Ecosystem Investment Architecture",
    "JOWIH MASTER SUMMARY": "Jowih Master Summary",
    "The GAG initiative": "The GAG Initiative",
    "ASTA OS": "ASTA OS Architecture",
    "HORIZON 2045": "Horizon 2045",
    "JOWIH PRELAUNCH": "Jowih Pre-launch Brief",
    "My story": "My Story",
    "THE MIRROR OF AFRICA": "The Mirror of Africa",
    "The GRid Bond": "The Grid Bond",
    "What Jowih Is": "What Jowih Is",
    "AN OPEN LETTER TO AFRICANS": "An Open Letter to Africans",
}


def slugify(value: str) -> str:
    value = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return value or "document"


def title_for(path: Path) -> str:
    stem = path.stem
    if stem in TITLE_OVERRIDES:
        return TITLE_OVERRIDES[stem]
    return re.sub(r"\s+", " ", stem.replace("_", " ")).strip().title()


def text_of(node: ET.Element) -> str:
    return "".join(node.itertext()).replace("\xa0", " ").strip()


def paragraph_info(paragraph: ET.Element) -> tuple[str, bool, bool]:
    text = "".join(node.text or "" for node in paragraph.iter(W + "t"))
    properties = paragraph.find(W + "pPr")
    style = properties.find(W + "pStyle") if properties is not None else None
    style_name = style.get(W + "val", "") if style is not None else ""
    numbered = properties is not None and properties.find(W + "numPr") is not None
    is_heading = bool(re.search(r"heading|title|subtitle", style_name, re.I))
    return text.replace("\xa0", " ").strip(), numbered, is_heading


def relationship_targets(zfile: ZipFile) -> dict[str, str]:
    try:
        root = ET.fromstring(zfile.read("word/_rels/document.xml.rels"))
    except KeyError:
        return {}
    return {item.get("Id", ""): item.get("Target", "") for item in root.findall(REL_NS + "Relationship")}


def image_markers(paragraph: ET.Element, relationships: dict[str, str]) -> list[tuple[str, str]]:
    result = []
    for drawing in paragraph.iter(DOC_NS + "inline"):
        blip = drawing.find(".//" + A_NS + "blip")
        if blip is None:
            continue
        relation = blip.get("{http://schemas.openxmlformats.org/officeDocument/2006/relationships}embed")
        target = relationships.get(relation or "")
        if not target:
            continue
        name = drawing.find(".//" + DOC_NS + "docPr")
        alt = (name.get("descr") if name is not None else None) or (name.get("name") if name is not None else None) or "Document image"
        result.append((target.replace("\\", "/").split("/")[-1], alt))
    return result


def extract_docx(path: Path, text_path: Path, media_path: Path, slug: str) -> list[str]:
    text_path.parent.mkdir(parents=True, exist_ok=True)
    media_path.mkdir(parents=True, exist_ok=True)
    lines: list[str] = []
    with ZipFile(path) as zfile:
        root = ET.fromstring(zfile.read("word/document.xml"))
        relationships = relationship_targets(zfile)
        body = root.find(W + "body")
        for child in body if body is not None else []:
            if child.tag == W + "p":
                text, numbered, is_heading = paragraph_info(child)
                images = image_markers(child, relationships)
                if text:
                    if numbered and not re.match(r"^(?:[-•*]|\d+[.)]|[A-Za-z][.)]|[ivx]+\.)\s", text, re.I):
                        text = f"• {text}"
                    lines.append(("# " if is_heading else "") + text)
                for target, alt in images:
                    source = next((name for name in zfile.namelist() if name.endswith("/" + target)), None)
                    if source:
                        output = media_path / target
                        output.write_bytes(zfile.read(source))
                        lines.append(f"[[IMAGE:/documents/archive-media/{slug}/{target}|{alt}]]")
                if text or images:
                    lines.append("")
            elif child.tag == W + "tbl":
                lines.extend(["[[TABLE]]"])
                for row in child.findall(W + "tr"):
                    cells = []
                    for cell in row.findall(W + "tc"):
                        cells.append(re.sub(r"\s+", " ", text_of(cell)))
                    lines.append("| " + " | ".join(cells) + " |")
                lines.extend(["[[/TABLE]]", ""])
    text_path.write_text("\n".join(lines).strip() + "\n", encoding="utf-8")
    return [p.name for p in media_path.iterdir()]


def extract_pdf(path: Path, text_path: Path) -> None:
    result = subprocess.run(["pdftotext", "-layout", str(path), "-"], check=True, capture_output=True, text=True)
    text_path.write_text(result.stdout.replace("\x0c", "\n"), encoding="utf-8")


def main() -> None:
    source_root = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "Documents"
    output_root = Path(sys.argv[2]) if len(sys.argv) > 2 else Path("public/documents")
    archive_root = output_root / "archive"
    media_root = output_root / "archive-media"
    archive_root.mkdir(parents=True, exist_ok=True)
    media_root.mkdir(parents=True, exist_ok=True)

    files = [p for p in source_root.iterdir() if p.is_file() and not p.name.startswith(".~") and not p.name.startswith("~$")]
    docx_files = {p.stem.lower(): p for p in files if p.suffix.lower() == ".docx"}
    candidates = [p for p in files if p.suffix.lower() == ".docx" and not p.name.startswith(".")]
    candidates += [p for p in files if p.suffix.lower() == ".pdf" and p.stem.lower() not in docx_files]
    candidates.sort(key=lambda item: title_for(item).lower())

    manifest = []
    for source in candidates:
        title = title_for(source)
        slug = slugify(title)
        text_file = archive_root / f"{slug}.txt"
        media_path = media_root / slug
        if source.suffix.lower() == ".docx":
            media = extract_docx(source, text_file, media_path, slug)
            source_type = "DOCX"
        else:
            extract_pdf(source, text_file)
            media = []
            source_type = "PDF"
        content = text_file.read_text(encoding="utf-8")
        manifest.append({
            "slug": slug,
            "title": title,
            "source": source.name,
            "sourceType": source_type,
            "textFile": f"/documents/archive/{slug}.txt",
            "media": [f"/documents/archive-media/{slug}/{name}" for name in media],
            "characters": len(content),
            "lines": len(content.splitlines()),
        })
    (output_root / "archive-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"Built {len(manifest)} archive documents")


if __name__ == "__main__":
    main()
