const fs = require("fs");
const path = require("path");

const junk = ["re"];
for (const target of junk) {
  try {
    fs.unlinkSync(target);
    console.log(`deleted ${target}`);
  } catch (error) {
    console.log(`skip ${target}: ${error.code}`);
  }
}

function walk(dir, prefix = "") {
  if (!fs.existsSync(dir)) {
    console.log(`MISSING ${dir}`);
    return;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = `${prefix}${entry.name}`;
    if (entry.isDirectory()) {
      walk(path.join(dir, entry.name), `${rel}/`);
    } else {
      console.log(`${fs.statSync(path.join(dir, entry.name)).size}\t${rel}`);
    }
  }
}

console.log("--- src tree ---");
walk("reusable-components/src");
