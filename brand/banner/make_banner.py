#!/usr/bin/env python3
"""
Dormy Google Form Banner — 1600×400
Two variants: dark (navy bg) + light (cream bg)
Exact brand colors as of v5:
  Coral  #E8735A  → RGB(232, 115, 90)
  Navy   #1B2B4B  → RGB( 27,  43, 75)
  Cream  #FDFCFA  → RGB(253, 252, 250)
  White  #FFFFFF  → RGB(255, 255, 255)
"""

from PIL import Image, ImageDraw, ImageFont
import os

FONTS_DIR = "/Users/beizhang/.claude/plugins/cache/anthropic-agent-skills/document-skills/3d5951151859/skills/canvas-design/canvas-fonts"
BRAND_DIR = "/Users/beizhang/Documents/AI_Dev/dormy_fe/brand/v5"
OUT_DIR   = "/Users/beizhang/Documents/AI_Dev/dormy_fe/brand/banner"

W, H = 1600, 400

# ── Official brand colors ────────────────────────────────────────────────────
CORAL = (232, 115,  90)   # #E8735A
NAVY  = ( 27,  43,  75)   # #1B2B4B
CREAM = (253, 252, 250)   # #FDFCFA
WHITE = (255, 255, 255)   # #FFFFFF
DARK  = ( 15,  15,  15)   # near-black used in assets


def load_font(name, size):
    return ImageFont.truetype(os.path.join(FONTS_DIR, name), size)


def remap_wordmark(target_text_color: tuple) -> Image.Image:
    """
    Tight-crop the transparent wordmark and remap the dark text pixels
    to `target_text_color` (keep coral D untouched).
    """
    wm = Image.open(os.path.join(BRAND_DIR, "wordmark-transparent.png")).convert("RGBA")
    pixels = wm.load()
    tr, tg, tb = target_text_color
    for y in range(wm.height):
        for x in range(wm.width):
            r, g, b, a = pixels[x, y]
            if a < 10:
                continue
            if r > 180 and g < 140:   # coral range → leave as-is
                continue
            t = a / 255.0
            pixels[x, y] = (
                int(r * (1 - t) + tr * t),
                int(g * (1 - t) + tg * t),
                int(b * (1 - t) + tb * t),
                a,
            )
    return wm.crop(wm.getbbox())   # tight crop: 1369×402


def composite(base: Image.Image, layer: Image.Image, xy: tuple) -> Image.Image:
    b = base.convert("RGBA")
    b.alpha_composite(layer.convert("RGBA"), dest=xy)
    return b.convert("RGB")


def draw_divider(canvas: Image.Image, x: int, color: tuple, alpha: int = 100) -> Image.Image:
    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(ov).rectangle(
        [x, H // 5, x, H * 4 // 5], fill=(*color, alpha)
    )
    result = canvas.convert("RGBA")
    result.alpha_composite(ov)
    return result.convert("RGB")


def place_text(draw, tagline, sub, split_x, pad, font_tag, font_sub,
               color_tag, color_sub):
    right_left  = split_x + pad
    right_right = W - pad
    right_w     = right_right - right_left

    # Auto-shrink if needed — tagline is Bold for visual weight
    for fs_tag, fs_sub in [(34, 23), (30, 21), (26, 18)]:
        ft = load_font("Outfit-Bold.ttf",    fs_tag)
        fs = load_font("Outfit-Regular.ttf", fs_sub)
        bt = draw.textbbox((0, 0), tagline, font=ft)
        bs = draw.textbbox((0, 0), sub,     font=fs)
        if (bt[2] - bt[0]) <= right_w and (bs[2] - bs[0]) <= right_w:
            font_tag, font_sub = ft, fs
            break

    bb_tag = draw.textbbox((0, 0), tagline, font=font_tag)
    bb_sub = draw.textbbox((0, 0), sub,     font=font_sub)
    tag_w  = bb_tag[2] - bb_tag[0]
    tag_h  = bb_tag[3] - bb_tag[1]
    sub_h  = bb_sub[3] - bb_sub[1]
    gap    = 12
    block_h = tag_h + gap + sub_h
    block_y = (H - block_h) // 2

    # Centre block in right panel
    mid_right = split_x + (W - split_x) // 2
    text_x    = max(right_left, mid_right - tag_w // 2)

    draw.text((text_x, block_y),               tagline, font=font_tag, fill=color_tag)
    draw.text((text_x, block_y + tag_h + gap), sub,     font=font_sub, fill=color_sub)


def make_banner(variant: str):
    """variant: 'dark' or 'light'"""
    assert variant in ("dark", "light")

    is_dark = variant == "dark"
    bg_color   = NAVY  if is_dark else CREAM
    text_col   = CREAM if is_dark else NAVY
    sub_col    = (200, 198, 195) if is_dark else (80, 90, 110)
    wm_text    = WHITE if is_dark else DARK

    PAD     = 72
    SPLIT_X = 800

    canvas = Image.new("RGB", (W, H), bg_color)
    draw   = ImageDraw.Draw(canvas)

    # ── Coral left-edge bar ─────────────────────────────────────────────────
    draw.rectangle([0, 0, 5, H], fill=CORAL)

    # ── Wordmark — centred in left panel ───────────────────────────────────
    wm_raw  = remap_wordmark(wm_text)
    max_w   = SPLIT_X - PAD * 2
    max_h   = 140
    ratio   = min(max_w / wm_raw.width, max_h / wm_raw.height)
    wm_w    = int(wm_raw.width  * ratio)
    wm_h    = int(wm_raw.height * ratio)
    wm      = wm_raw.resize((wm_w, wm_h), Image.LANCZOS)

    wm_x = (SPLIT_X - wm_w) // 2
    wm_y = (H - wm_h) // 2
    canvas = composite(canvas, wm, (wm_x, wm_y))

    # ── Divider ─────────────────────────────────────────────────────────────
    canvas = draw_divider(canvas, SPLIT_X, CORAL, alpha=90 if is_dark else 130)
    draw   = ImageDraw.Draw(canvas)

    # ── Tagline + sub ───────────────────────────────────────────────────────
    font_tag = load_font("Outfit-Bold.ttf",    34)
    font_sub = load_font("Outfit-Regular.ttf", 23)
    tagline  = "Your AI partner for growth and capital"
    sub      = "Built for super founders & solo entrepreneurs"

    place_text(draw, tagline, sub, SPLIT_X, PAD, font_tag, font_sub,
               text_col, sub_col)

    # ── Save ────────────────────────────────────────────────────────────────
    out = os.path.join(OUT_DIR, f"dormy-form-banner-{variant}.png")
    canvas.save(out, "PNG", dpi=(144, 144))
    print(f"Saved → {out}")


if __name__ == "__main__":
    make_banner("dark")
    make_banner("light")
    print("Done — 2 banners generated.")
