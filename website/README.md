# Juliana Liu — Modeling Portfolio (Phase 1 Prototype)

Mobile-first premium one-page site for presenting Juliana as a professional model.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Motion (`motion/react`)
- Phosphor Icons

## Images

Prototype photos are **cropped from the Facebook/Instagram screenshots** placed in the project root:

- `Screenshot_20260717_174000_Facebook.jpg`
- `Screenshot_20260717_174909_Instagram.jpg`

Crops live in `public/images/`. Replace with original high-resolution files for the final launch.

## Develop

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Notes

- EN / 中文 toggle in the header
- Booking form is a client-side prototype (success state simulated). Wire Formspree or an API in Phase 2.
- Comp card download currently scrolls to the inquiry form until a final PDF exists.
