import { computed } from "vue";
import { resolvePalette } from "@/config/palettes";
import { readableOn } from "@/utils/color";
import {
  buildFilterString,
  buildShadowString,
  buildTransitionValue,
  buildTransformString,
} from "@/utils/effects";

const HEX_COLOR = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const TRANSPARENT = "transparent";

function toCssLength(value) {
  if (value === "" || value === null || value === undefined) return "";
  return typeof value === "number" ? `${value}px` : value;
}

function isUsable(value) {
  return value !== "" && value !== null && value !== undefined && value !== false;
}

/**
 * Explicit prop wins over the selected palette, which wins over the
 * component's own base look.
 */
function pickThemeValue(propValue, paletteValue, baseValue) {
  if (isUsable(propValue)) return propValue;
  if (isUsable(paletteValue)) return paletteValue;
  return baseValue;
}

export function useVisuals(props, options = {}) {
  /** `base` may be a plain object or a getter when the look depends on a prop. */
  const readBase = () => {
    const source = options.base;
    if (typeof source === "function") return source() || {};
    return source || {};
  };

  const theme = computed(() => {
    const base = readBase();
    const preset = resolvePalette(props.palette);
    const bg = pickThemeValue(props.bg, preset && preset.bg, base.bg || TRANSPARENT);
    const explicitFg = pickThemeValue(props.fg, preset && preset.fg, base.fg || "#14100e");
    const contrastSource = HEX_COLOR.test(bg) ? bg : "#fffdf6";

    return {
      bg,
      fg: props.autoContrast ? readableOn(contrastSource) : explicitFg,
      accent: pickThemeValue(props.accent, preset && preset.accent, base.accent || "#ff4d2e"),
      border: pickThemeValue(props.borderColor, preset && preset.border, base.border || "#14100e"),
      muted: (preset && preset.muted) || base.muted || "var(--nx-muted)",
    };
  });

  const vars = computed(() => {
    const resolved = theme.value;
    const style = {
      "--c-bg": resolved.bg,
      "--c-fg": resolved.fg,
      "--c-accent": resolved.accent,
      "--c-bd": resolved.border,
      "--c-muted": resolved.muted,
      "--c-bd-style": props.borderStyle,
      "--c-opacity": String(props.opacity),
      "--c-blend": props.blend,
      "--c-filter": buildFilterString({
        filters: props.filters,
        filterStrength: props.filterStrength,
        blurPx: props.blurPx,
        hueDeg: props.hueDeg,
        shadowColor: props.shadowColor || resolved.border,
      }),
      "--c-transform": buildTransformString(props),
      "--c-shadow": buildShadowString({
        shadowStyle: props.shadowStyle,
        shadowX: props.shadowX,
        shadowY: props.shadowY,
        shadowBlur: props.shadowBlur,
        shadowSpread: props.shadowSpread,
        shadowColor: props.shadowColor || resolved.border,
        accentColor: resolved.accent,
      }),
      "--c-transition": buildTransitionValue(props.transitionMs, props.easing),
      "--c-anim-dur": `${props.animDurationMs}ms`,
    };

    if (props.borderWidth !== null) style["--c-bd-w"] = `${props.borderWidth}px`;
    if (props.radius !== null) style["--c-radius"] = `${props.radius}px`;
    if (props.padX !== null) style["--c-px"] = `${props.padX}px`;
    if (props.padY !== null) style["--c-py"] = `${props.padY}px`;
    if (props.fontSize !== null) style["--c-font-size"] = `${props.fontSize}px`;
    if (props.fontWeight !== null) style["--c-weight"] = String(props.fontWeight);
    if (props.tracking !== null) style["--c-track"] = `${props.tracking}em`;
    if (props.lineHeight !== null) style["--c-lh"] = String(props.lineHeight);
    if (props.backdropBlur > 0) style["--c-backdrop"] = `blur(${props.backdropBlur}px)`;

    /* hover channels ------------------------------------------------ */
    if (isUsable(props.hoverBg)) style["--c-hover-bg"] = props.hoverBg;
    if (isUsable(props.hoverFg)) style["--c-hover-fg"] = props.hoverFg;
    if (isUsable(props.hoverBorder)) style["--c-hover-border"] = props.hoverBorder;
    if (isUsable(props.hoverGlow)) style["--c-hover-glow"] = props.hoverGlow;

    if (props.hover === "glow" && !isUsable(props.hoverGlow)) {
      style["--c-hover-glow"] = resolved.accent;
    }
    if (
      (props.hover === "border-flash" || props.hover === "shadow-swap") &&
      !isUsable(props.hoverBorder)
    ) {
      style["--c-hover-border"] = resolved.accent;
    }
    if (
      (props.hover === "sweep" || props.hover === "invert") &&
      !isUsable(props.hoverBg)
    ) {
      style["--c-hover-bg"] = props.hover === "invert" ? resolved.border : resolved.accent;
      if (props.hover === "sweep" && !isUsable(props.hoverFg)) {
        style["--c-hover-fg"] = resolved.bg;
      }
    }

    if (options.extraVars) {
      const extra = typeof options.extraVars === "function" ? options.extraVars(resolved) : options.extraVars;
      Object.assign(style, extra);
    }

    return style;
  });

  const classes = computed(() => {
    const list = ["nx-fx", `nx-size--${props.size}`, "nx-anim", `nx-anim--${props.anim}`];

    if (props.textTransform === "upper") list.push("nx-tt-upper");
    if (props.textTransform === "lower") list.push("nx-tt-lower");
    if (props.hover !== "none") list.push("nx-fx--hoverable", `nx-hover--${props.hover}`);
    if (props.fullWidth) list.push("nx-full-width");

    return list;
  });

  /** A copy-pasteable CSS variable block, used by the gallery's CSS peek. */
  const cssText = computed(() =>
    Object.entries(vars.value)
      .filter(([, value]) => isUsable(value))
      .map(([name, value]) => `  ${name}: ${value};`)
      .join("\n")
  );

  return { theme, vars, classes, cssText };
}

/** Width / height helpers kept separate from the effect variables. */
export function useBox(props) {
  return computed(() => {
    const style = {};
    const width = toCssLength(props.fullWidth ? "100%" : props.width);
    if (width) style.width = width;
    if (props.height) style.height = toCssLength(props.height);
    if (props.minWidth) style.minWidth = toCssLength(props.minWidth);
    if (props.maxWidth) style.maxWidth = toCssLength(props.maxWidth);
    return style;
  });
}

export function toPx(value) {
  return toCssLength(value);
}
