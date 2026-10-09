import { withAlpha } from "./color";

/**
 * Every visual effect the kit exposes is described here so the configuration
 * panels and the components themselves stay in sync from a single source.
 */

export const SHADOW_STYLES = [
  { value: "none", label: "None" },
  { value: "hard", label: "Hard offset" },
  { value: "hard-accent", label: "Hard accent" },
  { value: "soft", label: "Soft drop" },
  { value: "glow", label: "Glow" },
  { value: "inset", label: "Inset" },
  { value: "outline", label: "Outline" },
  { value: "double", label: "Double stack" },
];

export const HOVER_EFFECTS = [
  { value: "none", label: "None" },
  { value: "lift", label: "Lift" },
  { value: "press", label: "Press in" },
  { value: "pop", label: "Pop" },
  { value: "grow", label: "Grow" },
  { value: "shrink", label: "Shrink" },
  { value: "rise", label: "Rise" },
  { value: "slide", label: "Slide" },
  { value: "tilt", label: "Tilt" },
  { value: "lean", label: "Lean" },
  { value: "glow", label: "Glow" },
  { value: "invert", label: "Invert" },
  { value: "border-flash", label: "Border flash" },
  { value: "shadow-swap", label: "Shadow swap" },
  { value: "sweep", label: "Sweep fill" },
  { value: "underline", label: "Underline" },
  { value: "blur-out", label: "Blur out" },
  { value: "sharpen", label: "Sharpen" },
  { value: "jiggle", label: "Jiggle" },
];

export const ANIMATIONS = [
  { value: "none", label: "None" },
  { value: "pulse", label: "Pulse" },
  { value: "float", label: "Float" },
  { value: "bob", label: "Bob" },
  { value: "wiggle", label: "Wiggle" },
  { value: "breathe", label: "Breathe" },
  { value: "shine", label: "Shine" },
  { value: "nudge", label: "Nudge" },
];

export const BLEND_MODES = [
  { value: "normal", label: "Normal" },
  { value: "multiply", label: "Multiply" },
  { value: "screen", label: "Screen" },
  { value: "overlay", label: "Overlay" },
  { value: "difference", label: "Difference" },
  { value: "exclusion", label: "Exclusion" },
  { value: "hard-light", label: "Hard light" },
  { value: "luminosity", label: "Luminosity" },
];

export const TRANSITIONS = [
  { value: "ease", label: "Ease" },
  { value: "ease-out", label: "Ease out" },
  { value: "ease-in-out", label: "Ease in-out" },
  { value: "linear", label: "Linear" },
  { value: "bounce", label: "Bounce" },
  { value: "steps", label: "Steps (5)" },
];

/** id -> css filter producer. `s` is the 0..1 strength ratio. */
export const FILTER_DEFS = [
  { id: "grayscale", label: "Grayscale", build: (s) => `grayscale(${round(s)})` },
  { id: "sepia", label: "Sepia", build: (s) => `sepia(${round(s)})` },
  { id: "saturate", label: "Saturate", build: (s) => `saturate(${round(1 + s * 1.6, 2)})` },
  { id: "desaturate", label: "Desaturate", build: (s) => `saturate(${round(1 - s * 0.85, 2)})` },
  { id: "contrast", label: "Contrast", build: (s) => `contrast(${round(1 + s * 0.9, 2)})` },
  { id: "brightness", label: "Brightness", build: (s) => `brightness(${round(1 + s * 0.8, 2)})` },
  { id: "darken", label: "Darken", build: (s) => `brightness(${round(1 - s * 0.55, 2)})` },
  { id: "invert", label: "Invert", build: (s) => `invert(${round(s)})` },
  { id: "hue-rotate", label: "Hue rotate", build: (s, ctx) => `hue-rotate(${Math.round(ctx.hueDeg)}deg)` },
  { id: "blur", label: "Blur", build: (s, ctx) => `blur(${round(ctx.blurPx * s, 2)}px)` },
  {
    id: "drop-shadow",
    label: "Drop shadow",
    build: (s, ctx) =>
      `drop-shadow(${Math.round(ctx.shadowX)}px ${Math.round(ctx.shadowY)}px 0 ${withAlpha(
        ctx.shadowColor,
        Math.max(0.25, s)
      )})`,
  },
  { id: "sharpen", label: "Sharpen", build: () => "contrast(1.14) saturate(1.1)" },
];

const FILTER_LOOKUP = FILTER_DEFS.reduce((map, def) => {
  map[def.id] = def;
  return map;
}, {});

function round(value, digits = 3) {
  const factor = Math.pow(10, digits);
  return Math.round(value * factor) / factor;
}

export function describeFilter(id) {
  return FILTER_LOOKUP[id] ? FILTER_LOOKUP[id].label : id;
}

/**
 * @param {object}   config
 * @param {string[]} config.filters          enabled filter ids
 * @param {number}   config.filterStrength   0..100
 * @param {number}   config.blurPx
 * @param {number}   config.hueDeg
 */
export function buildFilterString(config) {
  const ids = Array.isArray(config.filters) ? config.filters : [];
  if (!ids.length) return "none";

  const ctx = {
    blurPx: Number(config.blurPx) || 0,
    hueDeg: Number(config.hueDeg) || 0,
    shadowX: Number(config.shadowX) || 0,
    shadowY: Number(config.shadowY) || 0,
    shadowColor: config.shadowColor || "#14100e",
  };
  const strength = Math.min(Math.max(Number(config.filterStrength ?? 100) / 100, 0), 1);

  return ids
    .map((id) => (FILTER_LOOKUP[id] ? FILTER_LOOKUP[id].build(strength, ctx) : ""))
    .filter(Boolean)
    .join(" ");
}

/** @param {object} config @param {string} config.shadowStyle */
export function buildShadowString(config) {
  const style = config.shadowStyle || "none";
  if (style === "none") return "none";

  const x = Number(config.shadowX ?? 4);
  const y = Number(config.shadowY ?? 4);
  const blur = Number(config.shadowBlur ?? 16);
  const spread = Number(config.shadowSpread ?? 0);
  const color = config.shadowColor || "#14100e";
  const accent = config.accentColor || "#ff4d2e";

  switch (style) {
    case "hard":
      return `${round(x)}px ${round(y)}px 0 ${round(spread)}px ${color}`;
    case "hard-accent":
      return `${round(x)}px ${round(y)}px 0 ${round(spread)}px ${accent}`;
    case "soft":
      return `0 ${round(blur)}px ${round(blur * 1.8)}px -${round(blur / 2)}px ${withAlpha(color, 0.42)}`;
    case "glow":
      return `0 0 ${round(blur)}px ${round(spread || 2)}px ${withAlpha(accent, 0.9)}`;
    case "inset":
      return `inset ${round(x)}px ${round(y)}px ${round(blur)}px 0 ${withAlpha(color, 0.55)}`;
    case "outline":
      return `0 0 0 ${round(spread || 3)}px ${color}`;
    case "double":
      return `${round(x)}px ${round(y)}px 0 ${round(spread)}px ${color}, ${round(x * 2)}px ${round(
        y * 2
      )}px 0 ${round(spread)}px ${accent}`;
    default:
      return "none";
  }
}

export function buildTransformString(config) {
  const parts = [];
  const tx = Number(config.translateX ?? 0);
  const ty = Number(config.translateY ?? 0);
  const rotate = Number(config.rotate ?? 0);
  const skewX = Number(config.skewX ?? 0);
  const skewY = Number(config.skewY ?? 0);
  const scaleX = Number(config.scaleX ?? 1);
  const scaleY = Number(config.scaleY ?? 1);

  if (tx || ty) parts.push(`translate(${round(tx)}px, ${round(ty)}px)`);
  if (rotate) parts.push(`rotate(${round(rotate)}deg)`);
  if (skewX || skewY) parts.push(`skew(${round(skewX)}deg, ${round(skewY)}deg)`);
  if (scaleX !== 1 || scaleY !== 1) parts.push(`scale(${round(scaleX, 3)}, ${round(scaleY, 3)})`);

  return parts.length ? parts.join(" ") : "none";
}

export function buildTransitionValue(durationMs, easing) {
  const duration = `${Math.max(0, Number(durationMs) || 0)}ms`;
  if (easing === "bounce") return `${duration} cubic-bezier(0.34, 1.56, 0.64, 1)`;
  if (easing === "steps") return `${duration} steps(5, end)`;
  return `${duration} ${easing || "ease"}`;
}
