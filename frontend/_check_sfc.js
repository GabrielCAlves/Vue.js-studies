const fs = require("fs");
const sfc = require("./reusable-components/node_modules/@vue/compiler-sfc");

const file = "reusable-components/src/App.vue";
const source = fs.readFileSync(file, "utf8");
const { descriptor } = sfc.parse(source, { filename: file });

const compiled = sfc.compileTemplate({
  source: descriptor.template.content,
  filename: file,
  id: "app-test",
});

const code = compiled.code;
for (const name of [
  "NxIcon",
  "NxBadge",
  "NxAvatar",
  "NxButton",
  "ComponentShowcase",
  "AuthPage",
  "router-view",
  "Example01Interpolation",
]) {
  const hits = code.split(name).length - 1;
  console.log(`${name}: ${hits} occurrence(s) in compiled render output`);
}

console.log("--- root-level node types ---");
const ast = compiled.ast;
console.log(
  ast.children.map((child) => `${child.type}${child.tag ? `(${child.tag})` : ""}`).join(", ")
);
