# Jowih Ecosystem Website

Standalone static website for the Jowih ecosystem pre-launch. It is separate from the main Super App folders and can run without installing dependencies.

## Structure

- `index.html` is the shell. Navigation opens full screens (About, GAG, Ecosystem, Partners, Documents, ticket/partner/investor/donate). Agenda stays on the home screen.
- `data/site-data.js` holds copy, agenda, documents, and form labels.
- `assets/app.js` renders screens, the partner logo marquee, speaker cards, and forms.
- `assets/styles.css` is the black and white visual system.
- `assets/hero.mp4` is the looping hero film (city, HQ, flag, and transit stills).
- `assets/logo.png` is the emblem from the Jowih flag.
- `assets/reuben-oduk.jpg` is the founder portrait (greyscale until hover).
- `assets/kisii-university.png` is the official Kisii University mark used in the animated partner row.
- `documents/` contains the downloadable briefing files.

## Run Locally

```bash
python3 -m http.server 4173 --directory jowih-ecosystem-website
```

Then open `http://localhost:4173`.

## Connect Forms

Set `submissionEndpoint` in `data/site-data.js` to a real HTTPS endpoint that accepts JSON. Until then, the form validates the submission and creates a mailto email draft instead of pretending to save data.
