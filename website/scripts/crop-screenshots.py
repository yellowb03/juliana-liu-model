"""Crop portfolio images from provided social screenshots.

Usage (from repo root Juliana folder):
  python website/scripts/crop-screenshots.py
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "website" / "public" / "images"
FB = ROOT / "Screenshot_20260717_174000_Facebook.jpg"
IG = ROOT / "Screenshot_20260717_174909_Instagram.jpg"

# (left, top, right, bottom) on 1080x2340 Facebook screenshot
FB_CROPS = {
    "hero.jpg": (58, 390, 396, 900),
    "work-01.jpg": (404, 390, 716, 900),
    "work-02.jpg": (724, 390, 1022, 900),
    "work-03.jpg": (404, 910, 716, 1355),
    "work-04.jpg": (724, 910, 1022, 1355),
    "work-05.jpg": (58, 1368, 296, 1765),
    "work-06.jpg": (306, 1368, 540, 1765),
    "work-07.jpg": (550, 1368, 785, 1765),
    "about.jpg": (795, 1368, 1022, 1765),
    "stats-card.jpg": (58, 910, 396, 1355),
}

IG_CROPS = {
    "ig-01.jpg": (4, 1990, 356, 2260),
    "ig-02.jpg": (364, 1990, 716, 2260),
    "ig-03.jpg": (724, 1990, 1076, 2260),
}


def crop_save(src: Image.Image, box: tuple[int, int, int, int], dest: Path) -> None:
    im = src.crop(box)
    w, h = im.size
    pad = 2
    im = im.crop((pad, pad, w - pad, h - pad))
    im.save(dest, quality=96, optimize=True)
    print(f"{dest.name}: {im.size}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    fb = Image.open(FB)
    for name, box in FB_CROPS.items():
        crop_save(fb, box, OUT / name)

    ig = Image.open(IG)
    for name, box in IG_CROPS.items():
        crop_save(ig, box, OUT / name)
    ig.crop((48, 230, 220, 402)).save(OUT / "ig-avatar.jpg", quality=96)
    print("done")


if __name__ == "__main__":
    main()
