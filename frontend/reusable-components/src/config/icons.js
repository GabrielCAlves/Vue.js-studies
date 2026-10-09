/**
 * Icon geometry kept as primitive shape tuples so the renderer stays tiny and
 * every glyph shares one 24x24 grid, one stroke weight and one cap style.
 *
 * Shapes: ['path', d] | ['polyline', points] | ['line', x1, y1, x2, y2]
 *         | ['circle', cx, cy, r] | ['rect', x, y, w, h, rx]
 *         | ['polygon', points]
 */
export const ICONS = {
  "arrow-left": [["line", 19, 12, 5, 12], ["polyline", "12,19 5,12 12,5"]],
  "arrow-right": [["line", 5, 12, 19, 12], ["polyline", "12,5 19,12 12,19"]],
  "arrow-up": [["line", 12, 19, 12, 5], ["polyline", "5,12 12,5 19,12"]],
  "arrow-down": [["line", 12, 5, 12, 19], ["polyline", "19,12 12,19 5,12"]],
  "chevron-left": [["polyline", "15,18 9,12 15,6"]],
  "chevron-right": [["polyline", "9,6 15,12 9,18"]],
  "chevron-down": [["polyline", "6,9 12,15 18,9"]],
  "chevron-up": [["polyline", "6,15 12,9 18,15"]],
  check: [["polyline", "4,13 9,18 20,6"]],
  close: [["line", 6, 6, 18, 18], ["line", 18, 6, 6, 18]],
  plus: [["line", 12, 5, 12, 19], ["line", 5, 12, 19, 12]],
  minus: [["line", 5, 12, 19, 12]],
  search: [["circle", 11, 11, 7], ["line", 16.2, 16.2, 21, 21]],
  eye: [["path", "M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z"], ["circle", 12, 12, 3]],
  "eye-off": [
    ["path", "M4 4 20 20"],
    ["path", "M10 5.2A9.7 9.7 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.7 4.6"],
    ["path", "M6.6 6.9A16.4 16.4 0 0 0 2 12s3.6 7 10 7a10 10 0 0 0 4.2-.9"],
  ],
  star: [["polygon", "12,2.8 15.1,9.1 22,10 17,15 18.2,22 12,18.7 5.8,22 7,15 2,10 8.9,9.1"]],
  heart: [["path", "M12 20.5 4.6 13a4.9 4.9 0 0 1 7-6.8l.4.4.4-.4a4.9 4.9 0 0 1 7 6.8z"]],
  info: [["circle", 12, 12, 9], ["line", 12, 11, 12, 16], ["line", 12, 8, 12.01, 8]],
  alert: [["path", "M12 3 22 20H2z"], ["line", 12, 9.5, 12, 14], ["line", 12, 17, 12.01, 17]],
  warning: [["circle", 12, 12, 9], ["line", 12, 7, 12, 13], ["line", 12, 16, 12.01, 16]],
  bolt: [["polygon", "13,2 4,14 11,14 10,22 20,10 13,10"]],
  loader: [["path", "M12 3a9 9 0 1 0 9 9"]],
  user: [["circle", 12, 8, 4], ["path", "M4 21a8 8 0 0 1 16 0"]],
  users: [
    ["circle", 9, 8, 3.5],
    ["path", "M2.5 20a6.5 6.5 0 0 1 13 0"],
    ["path", "M16 5.2a3.5 3.5 0 0 1 0 6.6"],
    ["path", "M18 14.4a6.5 6.5 0 0 1 3.5 5.6"],
  ],
  mail: [["rect", 2, 5, 20, 14, 0], ["polyline", "2,6 12,13 22,6"]],
  lock: [["rect", 4, 10, 16, 11, 0], ["path", "M8 10V7a4 4 0 0 1 8 0v3"]],
  unlock: [["rect", 4, 10, 16, 11, 0], ["path", "M8 10V7a4 4 0 0 1 7.4-2"]],
  trash: [["line", 4, 7, 20, 7], ["polyline", "6,7 7,21 17,21 18,7"], ["path", "M9 7V4h6v3"]],
  copy: [["rect", 8, 8, 12, 12, 0], ["path", "M16 8V4H4v12h4"]],
  external: [
    ["path", "M14 4h6v6"],
    ["polyline", "20,4 11,13"],
    ["path", "M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"],
  ],
  refresh: [["path", "M20 12a8 8 0 1 1-2.3-5.6"], ["polyline", "20,3 20,8 15,8"]],
  code: [["polyline", "8,6 2,12 8,18"], ["polyline", "16,6 22,12 16,18"], ["line", 14, 4, 10, 20]],
  sliders: [
    ["line", 3, 7, 21, 7],
    ["line", 3, 17, 21, 17],
    ["rect", 7, 4, 3, 6, 0],
    ["rect", 14, 14, 3, 6, 0],
  ],
  palette: [
    ["path", "M12 21a9 9 0 1 1 9-9c0 2.4-1.9 3-3.4 3H16a2 2 0 0 0-1.5 3.3A2 2 0 0 1 12 21z"],
    ["circle", 8, 10, 1.2],
    ["circle", 11, 7, 1.2],
    ["circle", 15.5, 9, 1.2],
  ],
  sparkles: [
    ["path", "M11 3l1.7 4.8L17.5 9.5l-4.8 1.7L11 16l-1.7-4.8L4.5 9.5l4.8-1.7z"],
    ["path", "M18.5 14.5l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9z"],
  ],
  sun: [
    ["circle", 12, 12, 4.2],
    ["line", 12, 2, 12, 4.4],
    ["line", 12, 19.6, 12, 22],
    ["line", 2, 12, 4.4, 12],
    ["line", 19.6, 12, 22, 12],
    ["line", 4.9, 4.9, 6.6, 6.6],
    ["line", 17.4, 17.4, 19.1, 19.1],
    ["line", 19.1, 4.9, 17.4, 6.6],
    ["line", 6.6, 17.4, 4.9, 19.1],
  ],
  moon: [["path", "M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"]],
  grid: [
    ["rect", 3, 3, 7, 7, 0],
    ["rect", 14, 3, 7, 7, 0],
    ["rect", 3, 14, 7, 7, 0],
    ["rect", 14, 14, 7, 7, 0],
  ],
  layers: [["polygon", "12,3 21,8 12,13 3,8"], ["polyline", "3,13 12,18 21,13"]],
  filter: [["path", "M3 5h18l-7 8v6l-4 2v-8z"]],
  image: [
    ["rect", 3, 4, 18, 16, 0],
    ["circle", 8.5, 9.5, 1.8],
    ["polyline", "5,18 10,12 14,16 17,13 21,17"],
  ],
  send: [["path", "M22 3 2 10.5l7 2.5 2.5 7z"], ["line", 22, 3, 9, 13]],
  bookmark: [["path", "M6 3h12v18l-6-4-6 4z"]],
  play: [["polygon", "7,4 20,12 7,20"]],
  clock: [["circle", 12, 12, 9], ["polyline", "12,7 12,12 16,14"]],
  calendar: [
    ["rect", 3, 5, 18, 16, 0],
    ["line", 3, 10, 21, 10],
    ["line", 8, 3, 8, 7],
    ["line", 16, 3, 16, 7],
  ],
  download: [["line", 12, 3, 12, 15], ["polyline", "7,10 12,15 17,10"], ["path", "M4 19h16"]],
  upload: [["line", 12, 20, 12, 8], ["polyline", "7,13 12,8 17,13"], ["path", "M4 4h16"]],
  cart: [
    ["circle", 9, 20, 1.6],
    ["circle", 18, 20, 1.6],
    ["path", "M2 3h3l3 12h11"],
    ["path", "M6 15h13l2-8H7"],
  ],
  tag: [["path", "M3 12V4h8l10 10-8 8z"], ["circle", 7.5, 8, 1.5]],
  home: [["polyline", "3,11 12,3 21,11"], ["path", "M6 10v10h12V10"]],
  settings: [
    ["circle", 12, 12, 3.2],
    ["line", 12, 2, 12, 5],
    ["line", 12, 19, 12, 22],
    ["line", 2, 12, 5, 12],
    ["line", 19, 12, 22, 12],
    ["line", 5.2, 5.2, 7.3, 7.3],
    ["line", 16.7, 16.7, 18.8, 18.8],
    ["line", 18.8, 5.2, 16.7, 7.3],
    ["line", 7.3, 16.7, 5.2, 18.8],
  ],
  drag: [
    ["circle", 9, 6, 1.4],
    ["circle", 15, 6, 1.4],
    ["circle", 9, 12, 1.4],
    ["circle", 15, 12, 1.4],
    ["circle", 9, 18, 1.4],
    ["circle", 15, 18, 1.4],
  ],
  "dots-h": [["circle", 5, 12, 1.8], ["circle", 12, 12, 1.8], ["circle", 19, 12, 1.8]],
  at: [["circle", 12, 12, 4], ["path", "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"]],
  shield: [
    ["path", "M12 3l8 3v6c0 5-3.4 8.4-8 9.5C7.4 20.4 4 17 4 12V6z"],
    ["polyline", "9,12 11.5,14.5 16,10"],
  ],
  type: [["polyline", "5,6 5,4 19,4 19,6"], ["line", 12, 4, 12, 20], ["line", 9, 20, 15, 20]],
  "align-left": [["line", 3, 6, 21, 6], ["line", 3, 12, 14, 12], ["line", 3, 18, 21, 18]],
  "align-center": [["line", 3, 6, 21, 6], ["line", 6, 12, 18, 12], ["line", 3, 18, 21, 18]],
  ruler: [
    ["rect", 2, 7, 20, 10, 0],
    ["line", 7, 7, 7, 11],
    ["line", 12, 7, 12, 11],
    ["line", 17, 7, 17, 11],
  ],
  crosshair: [
    ["circle", 12, 12, 8],
    ["line", 12, 2, 12, 6],
    ["line", 12, 18, 12, 22],
    ["line", 2, 12, 6, 12],
    ["line", 18, 12, 22, 12],
  ],
};

export const ICON_NAMES = Object.keys(ICONS);

export function getIconShapes(name) {
  return ICONS[name] || ICONS.info;
}
