const fs = require("fs");
const path = require("path");

function walk(dir, prefix = "") {
  if (!fs.existsSync(dir)) {
    console.log(`MISSING ${dir}`);
    return;
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = `${prefix}${entry.name}`;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, `${rel}/`);
      continue;
    }
    const size = fs.statSync(full).size;
    const head = fs.readFileSync(full, "utf8").split("\n")[0].slice(0, 46);
    console.log(`${String(size).padStart(7)}  ${rel}  | ${head}`);
  }
}

walk("reusable-components/src");

for (const junk of ["re", "_out", "_probe_out.txt", "_clean_out.txt"]) {
  if (fs.existsSync(junk)) {
    const stat = fs.statSync(junk);
    console.log(`JUNK ${junk} size=${stat.size}`);
  }
}
