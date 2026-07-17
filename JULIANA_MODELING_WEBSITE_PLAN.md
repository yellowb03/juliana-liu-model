# Juliana Liu — Premium Modeling Website Plan

## The opportunity

Juliana already has strong visual material and an established social audience, but her public profiles mix modeling, personal posts, teaching, and unrelated commercial content. A dedicated website would give casting directors, photographers, brands, and collaborators one polished destination that presents only **Juliana the model**.

This should not feel like a social feed or a generic model template. It should feel like a compact digital editorial: image-led, confident, international, and easy to book from a phone.

## Core positioning

**Working headline:**

> Juliana Liu  
> Model · Taiwan

**Working supporting line:**

> Editorial presence. Natural confidence. Available for fashion, beauty, lifestyle, and creative collaborations.

Keep the copy restrained. Her photographs should carry most of the personality.

## Recommended experience

A single premium landing page with six focused sections:

1. **Hero**
   - Full-screen signature portrait or short, silent portrait loop.
   - Name, role, Taiwan location, and one primary action: **Book Juliana**.
   - Secondary action: **View portfolio**.
   - Small language switch: EN / 中文.

2. **Selected work**
   - 8–12 strongest photographs only.
   - Mix close-up beauty, full-body fashion, lifestyle, editorial, and swimwear only if Juliana wants it included.
   - Mobile uses a deliberate vertical sequence rather than shrinking a desktop grid.
   - Optional filters should be limited to Editorial / Beauty / Lifestyle; avoid clutter if the portfolio is small.

3. **Profile / About**
   - A short 40–70 word biography.
   - A quieter portrait and concise professional positioning.
   - Mention Chinese and English, Taiwan base, and travel availability only after Juliana confirms it.

4. **Model details**
   - Height: 161 cm
   - Bust: 85 cm
   - Waist: 66 cm
   - Hips: 91 cm
   - Shoes: 24.5 cm
   - Hair: Black
   - Eyes: Brown
   - Languages: Chinese, English
   - Weight and age should be optional, not automatically public.
   - Include a **Download comp card** button once a final PDF exists.

5. **Availability / Services**
   - Editorial
   - Beauty
   - Lifestyle
   - E-commerce / lookbook
   - Brand campaigns
   - Creative collaborations
   - These are proposed categories and must be confirmed with Juliana.

6. **Booking**
   - End with a high-impact portrait and the line: **Let’s create something memorable.**
   - Primary CTA: **Request availability**.
   - Secondary links: Instagram and Facebook.
   - A short inquiry form rather than a generic “Contact me” form.

## Booking form

Ask only for information needed to qualify a project:

- Name / company
- Email or preferred contact
- Project type
- Shoot date or date range
- Location
- Estimated duration
- Budget range (optional)
- Project details

After submission, show a clear confirmation and expected response time. On mobile, keep a persistent but unobtrusive **Book** button in the lower navigation area. A direct LINE, WhatsApp, or Messenger option can be added only if Juliana prefers it for professional inquiries.

## Visual direction: Quiet Editorial Luxury

**Mood:** cinematic, poised, tactile, minimal, not flashy.

**Palette:**

- Ink black — `#0B0B0B`
- Warm ivory — `#F2EFE8`
- Soft stone — `#B7B0A6`
- Muted champagne accent — `#B99A68`

Use the champagne color sparingly for rules, focus states, and tiny details. The photographs supply the color.

**Typography:**

- Display: a high-contrast editorial serif such as Instrument Serif or Cormorant Garamond.
- Interface/body: a clean sans such as Manrope or Inter.
- Large type, generous spacing, and very little copy.

**Image treatment:**

- Full-bleed photographs with intentional crops.
- Never place text over a busy face or body area.
- Preserve natural skin texture; avoid plastic-looking retouching.
- Use real portfolio work. No AI-generated replacement images.

## Motion direction

Animations should make the site feel expensive, not busy:

- Hero image: very slow 3–5% scale drift or subtle parallax.
- Name reveal: soft mask-up animation over 700–900 ms.
- Gallery: images reveal through clean vertical crops as they enter the viewport.
- Section labels: restrained fade and 12–20 px movement.
- Image hover on desktop: slight scale and caption reveal.
- Page transition: short ivory-to-black curtain if the lightbox opens.
- Mobile: fewer effects, no scroll hijacking, no heavy custom cursor.
- Respect `prefers-reduced-motion` and provide a static experience when requested.

Avoid bouncing text, constant marquee loops, spinning elements, and animation on every paragraph.

## Mobile-first rules

Most visitors will arrive from Instagram or Facebook, so the phone experience is the main product.

- Design first at 390 × 844 px, then expand to tablet and desktop.
- Hero must communicate name, profession, and booking action in the first screen.
- Touch targets at least 44 × 44 px.
- No tiny text, horizontal scrolling, or hover-only information.
- Use one-column editorial image sequencing with varied portrait heights.
- Keep important faces inside crop-safe focal areas.
- Sticky bottom action should respect iPhone/Android safe areas.
- Compress images to AVIF/WebP with responsive sizes and blur placeholders.
- Load the first portrait immediately; lazy-load the rest.
- Target LCP below 2.5 seconds on normal mobile data.

## Suggested mobile screen sequence

```text
[ JULIANA LIU                 MENU ]
[                                ]
[        SIGNATURE HERO          ]
[                                ]
[ Model · Taiwan                 ]
[ BOOK JULIANA   ↓ PORTFOLIO     ]

[ SELECTED 01                    ]
[ FULL-WIDTH EDITORIAL PORTRAIT  ]
[                                ]
[ SPLIT DETAIL / FULL-BODY       ]

[ PROFILE                        ]
[ SHORT BIO + QUIET PORTRAIT     ]

[ DETAILS                        ]
[ STATS + DOWNLOAD COMP CARD     ]

[ LET'S CREATE SOMETHING         ]
[ MEMORABLE.                     ]
[ REQUEST AVAILABILITY           ]
```

## Content needed from Juliana

Before building the final version, request:

- 12–20 original high-resolution photographs, not social-media screenshots.
- Permission and photographer credits for each image.
- Her preferred hero photograph.
- Final professional biography in English and Chinese.
- Confirmed measurements, location, travel availability, and work categories.
- Preferred booking email/contact channel.
- Links she wants public.
- Whether lingerie/swimwear images belong in the professional portfolio.
- Any published work, client logos, testimonials, or tear sheets.
- Final comp card PDF, or permission to design one.

## Recommended build

**Simple premium stack:** Next.js or Astro, Tailwind CSS, Framer Motion or GSAP used sparingly, and a lightweight form service such as Formspree initially.

For a first presentation, build a real mobile-first one-page prototype with 6–8 approved images. It will sell the idea better than a slide deck because Juliana can open it directly on her phone.

The final site should include:

- Custom domain, ideally `julianaliu.com` or the best available alternative.
- English and Traditional Chinese content.
- Basic SEO and social sharing preview.
- Accessible focus states, alt text, and reduced motion.
- Spam-protected booking form.
- Privacy-respectful analytics.
- Easy photo/content updates without redesigning the site.

## Project phases

### Phase 1 — Direction and prototype

- Confirm positioning and portfolio categories.
- Select 6–8 images from available material.
- Design the mobile hero, selected work, stats, and booking close.
- Produce a clickable, hosted concept.

**Acceptance:** It opens from a phone link, feels coherent within five seconds, and reaches the booking action without friction.

### Phase 2 — Final content and build

- Replace all temporary imagery with original high-resolution files.
- Add bilingual content, complete gallery, comp card, and inquiry form.
- Implement responsive desktop/tablet layouts and accessible animation.

**Acceptance:** All images are credited, every CTA works, form delivery is verified, and the site performs well on a mid-range phone.

### Phase 3 — Launch and polish

- Connect domain and analytics.
- Test on iPhone Safari and Android Chrome.
- Verify social previews and production form delivery.
- Give Juliana a simple update guide.

**Acceptance:** The live domain is tested end-to-end and Juliana can confidently share it in her social bios and casting messages.

## What to present to Juliana

Show only three things in the first conversation:

1. A polished phone prototype.
2. The before/after idea: mixed social identity versus focused professional model presence.
3. The practical outcome: a link she can send to brands, photographers, agencies, and casting contacts, with a clear booking path.

Do not lead with frameworks, CMS choices, or animation libraries. Lead with how the site changes the way she is perceived and contacted.

## Suggested outreach message

> Hi Juliana — your modeling photos have a strong editorial presence, but right now they are mixed into social profiles with many other kinds of content. I would love to create a focused, high-end portfolio website for you: something elegant that presents your best work, model details, bilingual profile, and a simple booking inquiry in one link that works beautifully on a phone. I put together a visual direction specifically around your images. May I show you a short prototype?

## Scope to offer

**Recommended initial offer: Portfolio Launch Package**

- Visual direction and photo curation
- Premium one-page bilingual website
- Mobile-first responsive design
- Tasteful custom animation
- Portfolio lightbox
- Model details and downloadable comp card
- Booking inquiry form
- Domain connection and launch
- Basic SEO, social preview, and analytics
- One handoff/update guide

Keep ongoing social-media management, new photography, advanced scheduling, and agency representation outside the base scope. They can become separate services later.

## Success criteria

The website succeeds if a casting or brand contact can, from their phone:

1. Understand who Juliana is within five seconds.
2. See her strongest range within 30 seconds.
3. Find measurements and languages without searching.
4. Send a qualified inquiry in under two minutes.
5. Remember the presentation as distinctly Juliana, not as a generic template.

