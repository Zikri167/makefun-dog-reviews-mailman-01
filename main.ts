import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "Five stars. He knocks, I bark, he drops the goods and flees — ten years undefeated, and he still hasn't learned the yard is mine. Would chase again.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, REVIEW, "utf8");
