const fs = require("fs");
const path = require("path");

const payloads = process.argv.slice(2);
let written = 0;

for (const payload of payloads) {
  const mod = require(path.resolve(".", payload));
  const files = mod.files || {};
  for (const [target, content] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content, "utf8");
    written += 1;
    console.log(`${String(content.length).padStart(7)}  ${target}`);
  }
}

console.log(`applied ${written} file(s)`);
