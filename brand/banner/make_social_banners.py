#!/usr/bin/env python3
"""
Dormy Social Platform Headers — dark + light variants
  LinkedIn  : 1128 × 191  px
  X/Twitter : 1500 × 500  px
  Reddit    : 1920 × 384  px

Brand colors (v5 official):
  Coral  #E8735A  → RGB(232, 115, 90)
  Navy   #1B2B4B  → RGB( 27,  43, 75)
  Cream  #FDFCFA  → RGB(253, 252, 250)
  White  #FFFFFF  → RGB(255, 255, 255)
"""

from PIL import Image, ImageDraw, ImageFont
import os

FONTS_DIR = "/Users/beizhang/.claude/plugins/cache/anthropic-agent-skills/document-skills/3d5951151859/skills/canvas-design/canvas-fonts"
BRAND_DIR = "/Users/beizhang/Documents/AI_Dev/dormy_fe/brand/v5"
OUT_DIR   = "/Users/beizhang/Documents/AI_Dev/dormy_fe/brand/banner/social"

os.makedirs(OUT_DIR, exist_ok=True)

CORAL = (232, 115,  90)
NAVY  = ( 27,  43,  75)
CREAM = (253, 252, 250)
WHITE = (255, 255, 255)
DARK  = ( 15,  15,  15)

TAGLINE = "Your AI partner for growth and capital"
SUB     = "Built for super founders & solo entrepreneurs"


# ── Helpers ─────────────────────────────────────────────────────────────────

def load_font(name, size):
    return ImageFont.truetype(os.path.join(FONTS_DIR, name), size)


def remap_wordmark(target_text_color: tuple) -> Image.Image:
    wm = Image.open(os.path.join(BRAND_DIR, "wordmark-transparent.png")).convert("RGBA")
    pixels = wm.load()
    tr, tg, tb = target_text_color
    for y in range(wm.height):
        for x in range(wm.width):
            r, g, b, a = pixels[x, y]
            if a < 10:
                continue
            if r > 180 and g < 140:   # coral D — leave as-is
                continue
            t = a / 255.0
            pixels[x, y] = (
                int(r * (1-t) + tr * t),
                int(g * (1-t) + tg * t),
                int(b * (1-t) + tb * t),
                a,
            )
    return wm.crop(wm.getbbox())


def composite(base, layer, xy):
    b = base.convert("RGBA")
    b.alpha_composite(layer.convert("RGBA"), dest=xy)
    return b.convert("RGB")


def place_wordmark(canvas, wm_raw, panel_x0, panel_x1, canvas_h, pad_v=0):
    panel_w = panel_x1 - panel_x0
    avail_h = canvas_h - pad_v * 2
    ratio   = min(panel_w / wm_raw.width, avail_h / wm_raw.height)
    wm_w    = int(wm_raw.width  * ratio)
    wm_h    = int(wm_raw.height * ratio)
    wm      = wm_raw.resize((wm_w, wm_h), Image.LANCZOS)
    wm_x    = panel_x0 + (panel_w - wm_w) // 2
    wm_y    = (canvas_h - wm_h) // 2
    return composite(canvas, wm, (wm_x, wm_y))


def best_font(draw, text, max_w, size_pairs, is_tag):
    for fs_tag, fs_sub in size_pairs:
        fs   = fs_tag if is_tag else fs_sub
        name = "Outfit-Bold.ttf" if is_tag else "Outfit-Regular.ttf"
        f    = load_font(name, fs)
        bb   = draw.textbbox((0, 0), text, font=f)
        if (bb[2] - bb[0]) <= max_w:
            return f, bb[2] - bb[0], bb[3] - bb[1]
    fs   = size_pairs[-1][0 if is_tag else 1]
    name = "Outfit-Bold.ttf" if is_tag else "Outfit-Regular.ttf"
    f    = load_font(name, fs)
    bb   = draw.textbbox((0, 0), text, font=f)
    return f, bb[2] - bb[0], bb[3] - bb[1]


def add_coral_bar(draw, h, thickness=5):
    draw.rectangle([0, 0, thickness - 1, h], fill=CORAL)


def add_divider(canvas, x, h, alpha=100):
    ov = Image.new("RGBA", (canvas.width, h), (0, 0, 0, 0))
    ImageDraw.Draw(ov).rectangle([x, h // 5, x, h * 4 // 5], fill=(*CORAL, alpha))
    c = canvas.convert("RGBA")
    c.alpha_composite(ov)
    return c.convert("RGB")


def draw_text_block(draw, split_x, canvas_w, canvas_h,
                    size_pairs, text_col, sub_col, y_offset=0):
    PAD     = int(canvas_w * 0.05)
    right_w = canvas_w - split_x - PAD * 2

    ft, tw, th = best_font(draw, TAGLINE, right_w, size_pairs, is_tag=True)
    fs, sw, sh = best_font(draw, SUB,     right_w, size_pairs, is_tag=False)

    gap     = max(6, th // 4)
    block_h = th + gap + sh
    block_y = (canvas_h - block_h) // 2 + y_offset

    mid_right = split_x + (canvas_w - split_x) // 2
    text_x    = max(split_x + PAD, mid_right - tw // 2)

    draw.text((text_x, block_y),           TAGLINE, font=ft, fill=text_col)
    draw.text((text_x, block_y + th + gap), SUB,    font=fs, fill=sub_col)


# ── Variant theme ────────────────────────────────────────────────────────────

def theme(variant):
    is_dark = (variant == "dark")
    return {
        "bg":      NAVY  if is_dark else CREAM,
        "wm_text": WHITE if is_dark else DARK,
        "text":    CREAM if is_dark else NAVY,
        "sub":     (200, 198, 195) if is_dark else (80, 90, 115),
        "div_a":   95  if is_dark else 130,
    }


# ── Platform generators ──────────────────────────────────────────────────────

def make_linkedin(variant):
    W, H  = 1128, 191
    SPLIT = 460
    t     = theme(variant)

    canvas = Image.new("RGB", (W, H), t["bg"])
    draw   = ImageDraw.Draw(canvas)
    add_coral_bar(draw, H)

    wm_raw = remap_wordmark(t["wm_text"])
    canvas = place_wordmark(canvas, wm_raw, 10, SPLIT, H, pad_v=20)
    canvas = add_divider(canvas, SPLIT, H, alpha=t["div_a"])
    draw   = ImageDraw.Draw(canvas)

    draw_text_block(draw, SPLIT, W, H,
                    [(26, 15), (22, 13), (18, 11)],
                    t["text"], t["sub"])

    out = os.path.join(OUT_DIR, f"dormy-linkedin-header-{variant}.png")
    canvas.save(out, "PNG", dpi=(144, 144))
    print(f"LinkedIn  {variant:5s} → {out}  ({W}×{H})")


def make_x(variant):
    W, H  = 1500, 500
    SPLIT = 700
    t     = theme(variant)

    canvas = Image.new("RGB", (W, H), t["bg"])
    draw   = ImageDraw.Draw(canvas)
    add_coral_bar(draw, H)

    wm_raw = remap_wordmark(t["wm_text"])
    # pad_v=80 keeps logo above the cropped top/bottom zones
    canvas = place_wordmark(canvas, wm_raw, 10, SPLIT, H, pad_v=80)
    canvas = add_divider(canvas, SPLIT, H, alpha=t["div_a"])
    draw   = ImageDraw.Draw(canvas)

    # y_offset=-20 nudges text above centre, away from bottom crop
    draw_text_block(draw, SPLIT, W, H,
                    [(38, 22), (34, 20), (30, 18), (26, 15)],
                    t["text"], t["sub"], y_offset=-20)

    # coral dot accent
    draw = ImageDraw.Draw(canvas)
    r = 6
    draw.ellipse([W - 72 - r, H - 64 - r, W - 72 + r, H - 64 + r], fill=CORAL)

    out = os.path.join(OUT_DIR, f"dormy-x-header-{variant}.png")
    canvas.save(out, "PNG", dpi=(144, 144))
    print(f"X/Twitter {variant:5s} → {out}  ({W}×{H})")


def make_reddit(variant):
    W, H  = 1920, 384
    SPLIT = 880
    t     = theme(variant)

    canvas = Image.new("RGB", (W, H), t["bg"])
    draw   = ImageDraw.Draw(canvas)
    add_coral_bar(draw, H)

    wm_raw = remap_wordmark(t["wm_text"])
    canvas = place_wordmark(canvas, wm_raw, 10, SPLIT, H, pad_v=48)
    canvas = add_divider(canvas, SPLIT, H, alpha=t["div_a"])
    draw   = ImageDraw.Draw(canvas)

    draw_text_block(draw, SPLIT, W, H,
                    [(34, 20), (30, 18), (26, 16), (22, 14)],
                    t["text"], t["sub"])

    out = os.path.join(OUT_DIR, f"dormy-reddit-banner-{variant}.png")
    canvas.save(out, "PNG", dpi=(144, 144))
    print(f"Reddit    {variant:5s} → {out}  ({W}×{H})")


if __name__ == "__main__":
    for v in ("dark", "light"):
        make_linkedin(v)
        make_x(v)
        make_reddit(v)
    print("\nAll 6 social headers done.")
