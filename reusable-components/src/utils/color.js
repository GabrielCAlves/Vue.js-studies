/**
 * Colour helpers used by every NX component and by the configuration panels.
 * Everything is plain hex in / hex out so values can be round-tripped through
 * the UI without surprises.
 */

const HEX_SHORT = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i;
const HEX_LONG = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;

export function clamp(value, min, max) {
  const numeric = Number(value);
  if (Number.isNaN(numeric)) return min;
  return Math.min(Math.max(numeric, min), max);
}

export function isHexColor(value) {
  if (typeof value !== "string") return false;
  return HEX_SHORT.test(value.trim()) || HEX_LONG.test(value.trim());
}

export function normalizeHex(value) {
  const input = String(value || "").trim();
  const short = input.match(HEX_SHORT);
  if (short) {
    return `#${short[1]}${short[1]}${short[2]}${short[2]}${short[3]}${short[3]}`.toLowerCase();
  }
  const long = input.match(HEX_LONG);
  if (long) return input.toLowerCase();
  return "#000000";
}

export function hexToRgb(value) {
  const hex = normalizeHex(value).slice(1);
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const toHex = (channel) => clamp(Math.round(channel), 0, 255).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function withAlpha(value, alpha) {
  const { r, g, b } = hexToRgb(value);
  return `rgba(${r}, ${g}, ${b}, ${clamp(alpha, 0, 1)})`;
}

export function mixColors(from, to, amount) {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const ratio = clamp(amount, 0, 1);
  return rgbToHex({
    r: a.r + (b.r - a.r) * ratio,
    g: a.g + (b.g - a.g) * ratio,
    b: a.b + (b.b - a.b) * ratio,
  });
}

export function tint(value, amount) {
  return mixColors(value, "#ffffff", amount);
}

export function shade(value, amount) {
  return mixColors(value, "#000000", amount);
}

/**
 * Relative luminance (0 = black, 1 = white). Used to decide whether a
 * surface needs dark or light text on top of it.
 */
export function luminance(value) {
  const { r, g, b } = hexToRgb(value);
  const channel = (raw) => {
    const scaled = raw / 255;
    return scaled <= 0.03928 ? scaled / 12.92 : Math.pow((scaled + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function readableOn(background, dark = "#14100e", light = "#fffdf6") {
  return luminance(background) > 0.52 ? dark : light;
}

/** Always-legible foreground/accent pair for an arbitrary surface colour. */
export function contrastPair(background) {
  const ink = readableOn(background);
  const isDarkSurface = ink !== "#14100e";
  return {
    fg: ink,
    accent: isDarkSurface ? "#ffc93c" : "#ff4d2e",
  };
}
