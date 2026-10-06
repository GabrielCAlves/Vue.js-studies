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

fs.writeFileSync("_render_out.js", compiled.code, "utf8");
console.log("written", compiled.code.length, "chars");
