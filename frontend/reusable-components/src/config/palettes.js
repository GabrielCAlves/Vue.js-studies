/**
 * Named colour presets. Selecting a palette on any component overrides that
 * component's built-in look, while an explicitly set colour prop still wins.
 */
export const PALETTES = {
  paper: {
    bg: "#fffdf6",
    fg: "#14100e",
    accent: "#ff4d2e",
    border: "#14100e",
    muted: "#8b8279",
  },
  ink: {
    bg: "#14100e",
    fg: "#f6f1e5",
    accent: "#ffc93c",
    border: "#f6f1e5",
    muted: "#a99e91",
  },
  coral: {
    bg: "#ff4d2e",
    fg: "#14100e",
    accent: "#14100e",
    border: "#14100e",
    muted: "#7d1f10",
  },
  amber: {
    bg: "#ffc93c",
    fg: "#14100e",
    accent: "#ff4d2e",
    border: "#14100e",
    muted: "#8a6a12",
  },
  lime: {
    bg: "#b7e13f",
    fg: "#14100e",
    accent: "#22c7a9",
    border: "#14100e",
    muted: "#5c7315",
  },
  teal: {
    bg: "#22c7a9",
    fg: "#14100e",
    accent: "#ff7bac",
    border: "#14100e",
    muted: "#106253",
  },
  pink: {
    bg: "#ff7bac",
    fg: "#14100e",
    accent: "#14100e",
    border: "#14100e",
    muted: "#8d3459",
  },
  clay: {
    bg: "#e7d3bf",
    fg: "#2c1a10",
    accent: "#c2532a",
    border: "#2c1a10",
    muted: "#7d6455",
  },
  ghost: {
    bg: "transparent",
    fg: "#14100e",
    accent: "#ff4d2e",
    border: "#14100e",
    muted: "#8b8279",
  },
  night: {
    bg: "#201a17",
    fg: "#f6f1e5",
    accent: "#b7e13f",
    border: "#b7e13f",
    muted: "#a29a8d",
  },
};

export const PALETTE_NAMES = Object.keys(PALETTES);

export const PALETTE_OPTIONS = [
  { value: "auto", label: "Component default" },
  ...PALETTE_NAMES.map((name) => ({ value: name, label: name })),
];

export function resolvePalette(name) {
  if (!name || name === "auto") return null;
  return PALETTES[name] || null;
}
