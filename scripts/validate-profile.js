import { readFile, access } from "node:fs/promises";

const requiredFiles = ["README.md", "LEADERSHIP.md", "PORTFOLIO.md", "STACK.md"];
const requiredRepos = ["PharmWeb3", "Ai-ebooks", "Pharma-Simulation", "Kid-Simulation", "Simulation-Games"];
const failures = [];

for (const path of requiredFiles) {
  try { await access(new URL(`../${path}`, import.meta.url)); }
  catch { failures.push(`Missing ${path}`); }
}

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
for (const repo of requiredRepos) {
  if (!readme.includes(`github.com/Profkingkeys/${repo}`)) failures.push(`README does not surface ${repo}.`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`PASS: profile surfaces ${requiredRepos.length} flagship repositories and all leadership documents.`);
