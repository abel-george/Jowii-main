'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface GridImage {
  src: string;
  alt: string;
}

/**
 * Landscape pool — concept and framework imagery used across the site.
 * Paths are URL-encoded, matching lib/visual-assets.ts conventions.
 */
const LANDSCAPE_IMAGES: GridImage[] = [
  { src: '/documents/sample%20images/The%20Great%20African%20Grid.png', alt: 'Illustrative overview of the proposed Great African Grid' },
  { src: '/documents/sample%20images/airjowih2.png', alt: 'Concept illustration of proposed African air travel and airport logistics' },
  { src: '/documents/sample%20images/transportcoridor.png', alt: 'Concept illustration of a proposed transport corridor' },
  { src: '/documents/sample%20images/corridor%202.png', alt: 'Concept illustration of a proposed development corridor' },
  { src: '/documents/sample%20images/energy%20corridor.png', alt: 'Concept illustration of proposed renewable energy infrastructure' },
  { src: '/documents/sample%20images/digital%20corridor.png', alt: 'Concept illustration of proposed digital connectivity infrastructure' },
  { src: '/documents/sample%20images/jowih%20healthcare.png', alt: 'Concept illustration of proposed mobile and community health services' },
  { src: '/documents/sample%20images/jowih%20africa%20health%20fund.png', alt: 'Concept illustration for the Jowih Africa Health Fund' },
  { src: '/documents/sample%20images/jowih%20education%20framework.png', alt: 'Concept illustration of proposed education and skills infrastructure' },
  { src: '/documents/sample%20images/edujowih.png', alt: 'Concept illustration of proposed education programmes' },
  { src: '/documents/sample%20images/jowihcrtafrica.png', alt: 'Concept illustration of the proposed CRT programme across Africa' },
  { src: '/documents/sample%20images/jowihcrtprogram.png', alt: 'Concept illustration of the proposed CRT programme' },
  { src: '/documents/sample%20images/jowihcrtzairo.png', alt: 'Concept illustration of a proposed CRT deployment' },
  { src: '/documents/sample%20images/Jowih%20Ecossytem.png', alt: 'Overview illustration of the Jowih ecosystem' },
  { src: '/documents/sample%20images/jowihrobovan.png', alt: 'Concept illustration of a proposed robovan' },
  { src: '/documents/sample%20images/gaminghub.png', alt: 'Concept illustration of the proposed gaming hub' },
  { src: '/documents/sample%20images/africa.png', alt: 'Illustration of the African continent' },
  { src: '/documents/sample%20images/environmental%20framework.png', alt: 'Concept illustration of the environmental framework' },
  { src: '/assets/jowih-hero.png', alt: 'Jowih ecosystem illustration' },
  { src: '/assets/asta-super-app.jpg', alt: 'Asta Super App interface concept' },
];

/** Portrait pool — exact mobile screenshots of the Asta Super App. */
const PORTRAIT_IMAGES: GridImage[] = [
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2009-57-08.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-34-29.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-35-05.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-36-23.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-38-40.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-40-29.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/screenshots/Screenshot%20from%202026-10-12%2010-41-26.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/super%20app/Screenshot%20from%202026-10-09%2018-31-54.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/super%20app/Screenshot%20from%202026-10-09%2018-33-26.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/super%20app/Screenshot%20from%202026-10-09%2018-35-04.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/super%20app/Screenshot%20from%202026-10-09%2018-37-38.png', alt: 'Asta Super App mobile screen' },
  { src: '/assets/super%20app/Screenshot%20from%202026-10-09%2018-39-09.png', alt: 'Asta Super App mobile screen' },
];

const COVER_MS = 3000; // single hero image shown before the grid appears
const GRID_MS = 7000; // grid hero shown before returning to the single hero

/** Circular slice so every cycle surfaces a fresh set of images. */
function sliceCircular<T>(list: T[], start: number, count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i += 1) {
    out.push(list[(start + i) % list.length]);
  }
  return out;
}

/**
 * AU.int-style rotating hero: the cover image shows first; after three seconds
 * it crossfades into a five-image grid hero — one large landscape spanning to
 * mid-screen, a middle column stacked with three landscapes, and a portrait
 * column showing the Super App mobile screenshots. Each time the grid appears
 * it carries the next set of images from the site's image library, so nothing
 * loops in place.
 */
export function InstitutionalHeroSlideshow() {
  const [gridActive, setGridActive] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cancelled = false;
    const timers: number[] = [];

    const runCycle = (n: number) => {
      timers.push(
        window.setTimeout(() => {
          if (cancelled) return;
          setCycle(n);
          setGridActive(true);
          timers.push(
            window.setTimeout(() => {
              if (cancelled) return;
              setGridActive(false);
              timers.push(window.setTimeout(() => runCycle(n + 1), COVER_MS));
            }, GRID_MS),
          );
        }, COVER_MS),
      );
    };

    runCycle(0);

    return () => {
      cancelled = true;
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const landscapes = sliceCircular(LANDSCAPE_IMAGES, cycle * 4, 4);
  const [portrait] = sliceCircular(PORTRAIT_IMAGES, cycle, 1);

  return (
    <>
      <div className={`institutional-hero__image-wrapper${gridActive ? ' is-faded' : ''}`}>
        <Image
          src="/documents/sample images/HEROGAG.png.png"
          alt="Great African Grid hero"
          fill
          priority
          sizes="100vw"
          className="institutional-hero__image"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
      </div>

      <div className={`institutional-hero__grid${gridActive ? ' is-active' : ''}`} aria-hidden="true">
        <div className="institutional-hero__grid-cell institutional-hero__grid-cell--lead">
          <Image src={landscapes[0].src} alt="" fill sizes="(max-width: 767px) 100vw, 52vw" />
        </div>
        <div className="institutional-hero__grid-stack">
          {landscapes.slice(1).map((image) => (
            <div className="institutional-hero__grid-cell" key={image.src}>
              <Image src={image.src} alt="" fill sizes="(max-width: 767px) 50vw, 26vw" />
            </div>
          ))}
        </div>
        <div className="institutional-hero__grid-cell institutional-hero__grid-cell--portrait">
          <Image src={portrait.src} alt="" fill sizes="(max-width: 767px) 50vw, 22vw" />
        </div>
      </div>

      <div className="institutional-hero__shade" />
      <p className="institutional-hero__image-note">Conceptual illustration · AI-assisted · Proposed infrastructure, not an existing asset</p>
    </>
  );
}

