// SPDX-License-Identifier: MIT
// Loading Screen Gold: A Tip in 200 Characters
// Writes one sharp, funny loading-screen tip for stressed developers
// and AI coding agents to /output/entry.txt (148 characters, one line).

import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Tip: your agent just read every file in the repo to change one line. Do not laugh — you would have done the same, only slower and with 47 tabs open.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to /output/entry.txt`);
