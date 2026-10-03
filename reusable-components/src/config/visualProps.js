import { ANIMATIONS, BLEND_MODES, HOVER_EFFECTS, SHADOW_STYLES } from "@/utils/effects";
import {
  BORDER_STYLE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  SIZE_OPTIONS,
  TEXT_TRANSFORM_OPTIONS,
} from "./options";
import { PALETTE_OPTIONS } from "./palettes";

export { BORDER_STYLE_OPTIONS, FONT_WEIGHT_OPTIONS, PALETTE_OPTIONS, SIZE_OPTIONS, TEXT_TRANSFORM_OPTIONS };
export { ANIMATIONS, BLEND_MODES, HOVER_EFFECTS, SHADOW_STYLES };

const SIZE_VALUES = SIZE_OPTIONS.map((option) => option.value);

/**
 * The single visual contract shared by every NX component. Components spread
 * this into their own `defineProps` and feed it to `useVisuals`, so size,
 * colour, filter, hover and layout knobs behave identically everywhere.
 */
export const visualProps = {
  /* --- size & geometry ------------------------------------------------ */
  size: {
    type: String,
    default: "md",
    validator: (value) => SIZE_VALUES.includes(value),
  },
  width: { type: [String, Number], default: "" },
  height: { type: [String, Number], default: "" },
  minWidth: { type: [String, Number], default: "" },
  maxWidth: { type: [String, Number], default: "" },
  borderWidth: { type: Number, default: null },
  borderStyle: { type: String, default: "solid" },
  radius: { type: Number, default: null },
  padX: { type: Number, default: null },
  padY: { type: Number, default: null },
  fullWidth: { type: Boolean, default: false },

  /* --- colour --------------------------------------------------------- */
  palette: { type: String, default: "auto" },
  bg: { type: String, default: "" },
  fg: { type: String, default: "" },
  accent: { type: String, default: "" },
  borderColor: { type: String, default: "" },
  autoContrast: { type: Boolean, default: false },
  opacity: { type: Number, default: 1 },
  blend: { type: String, default: "normal" },

  /* --- typography ----------------------------------------------------- */
  fontSize: { type: Number, default: null },
  fontWeight: { type: Number, default: null },
  tracking: { type: Number, default: null },
  lineHeight: { type: Number, default: null },
  textTransform: { type: String, default: "none" },
  align: { type: String, default: "left" },

  /* --- transform ------------------------------------------------------ */
  translateX: { type: Number, default: 0 },
  translateY: { type: Number, default: 0 },
  rotate: { type: Number, default: 0 },
  skewX: { type: Number, default: 0 },
  skewY: { type: Number, default: 0 },
  scaleX: { type: Number, default: 1 },
  scaleY: { type: Number, default: 1 },

  /* --- shadow --------------------------------------------------------- */
  shadowStyle: { type: String, default: "none" },
  shadowX: { type: Number, default: 4 },
  shadowY: { type: Number, default: 4 },
  shadowBlur: { type: Number, default: 16 },
  shadowSpread: { type: Number, default: 0 },
  shadowColor: { type: String, default: "" },

  /* --- filter effects ------------------------------------------------- */
  filters: { type: Array, default: () => [] },
  filterStrength: { type: Number, default: 100 },
  blurPx: { type: Number, default: 6 },
  hueDeg: { type: Number, default: 0 },
  backdropBlur: { type: Number, default: 0 },

  /* --- hover ---------------------------------------------------------- */
  hover: { type: String, default: "none" },
  hoverBg: { type: String, default: "" },
  hoverFg: { type: String, default: "" },
  hoverBorder: { type: String, default: "" },
  hoverGlow: { type: String, default: "" },

  /* --- motion --------------------------------------------------------- */
  transitionMs: { type: Number, default: 160 },
  easing: { type: String, default: "ease" },
  anim: { type: String, default: "none" },
  animDurationMs: { type: Number, default: 1400 },
};

/**
 * Explicit override channels. `useVisuals` only emits a CSS variable when the
 * matching prop is present, which lets each component fall back to its own
 * size-scale default instead of forcing "md" everywhere.
 */
export const VISUAL_PROP_KEYS = Object.keys(visualProps);
