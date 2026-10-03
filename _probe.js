const fs = require("fs");
const path = require("path");

const root = path.join("reusable-components", "src");

function walk(dir, prefix = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const rel = `${prefix}${entry.name}`;
    if (entry.isDirectory()) {
      console.log(`[dir]  ${rel}`);
      walk(path.join(dir, entry.name), `${rel}/`);
    } else {
      const stat = fs.statSync(path.join(dir, entry.name));
      console.log(`[file] ${rel} (${stat.size} bytes)`);
    }
  }
}

walk(root);
console.log("--- root of project ---");
for (const entry of fs.readdirSync(".")) {
  console.log(fs.statSync(entry).isDirectory() ? `[dir]  ${entry}` : `[file] ${entry}`);
}
