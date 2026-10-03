/**
 * Option vocabularies shared by the component prop definitions and by the
 * configuration panel schemas, so the two can never drift apart.
 */

export const SIZE_OPTIONS = [
  { value: "xs", label: "XS" },
  { value: "sm", label: "SM" },
  { value: "md", label: "MD" },
  { value: "lg", label: "LG" },
  { value: "xl", label: "XL" },
];

export const TEXT_TRANSFORM_OPTIONS = [
  { value: "none", label: "As typed" },
  { value: "upper", label: "UPPER" },
  { value: "lower", label: "lower" },
];

export const FONT_WEIGHT_OPTIONS = [
  { value: 400, label: "400" },
  { value: 500, label: "500" },
  { value: 600, label: "600" },
  { value: 700, label: "700" },
  { value: 800, label: "800" },
  { value: 900, label: "900" },
];

export const BORDER_STYLE_OPTIONS = [
  { value: "solid", label: "Solid" },
  { value: "dashed", label: "Dashed" },
  { value: "dotted", label: "Dotted" },
  { value: "double", label: "Double" },
  { value: "none", label: "None" },
];

export const ALIGN_OPTIONS = [
  { value: "stretch", label: "Stretch" },
  { value: "flex-start", label: "Start" },
  { value: "center", label: "Center" },
  { value: "flex-end", label: "End" },
  { value: "baseline", label: "Baseline" },
];

export const JUSTIFY_OPTIONS = [
  { value: "flex-start", label: "Start" },
  { value: "center", label: "Center" },
  { value: "flex-end", label: "End" },
  { value: "space-between", label: "Space between" },
  { value: "space-around", label: "Space around" },
  { value: "space-evenly", label: "Space evenly" },
];

export const DIRECTION_OPTIONS = [
  { value: "row", label: "Row" },
  { value: "row-reverse", label: "Row reverse" },
  { value: "column", label: "Column" },
  { value: "column-reverse", label: "Column reverse" },
];

export const WRAP_OPTIONS = [
  { value: "nowrap", label: "No wrap" },
  { value: "wrap", label: "Wrap" },
  { value: "wrap-reverse", label: "Wrap reverse" },
];

export const SELF_ALIGN_OPTIONS = [
  { value: "auto", label: "Auto" },
  { value: "stretch", label: "Stretch" },
  { value: "flex-start", label: "Start" },
  { value: "center", label: "Center" },
  { value: "flex-end", label: "End" },
  { value: "baseline", label: "Baseline" },
];

export function toNumericOptions(values) {
  return values.map((value) => ({ value, label: String(value) }));
}
