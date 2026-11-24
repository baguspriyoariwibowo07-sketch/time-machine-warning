// Funniest Time Machine Warning Label
// Writes a single warning label to /output/entry.txt.
//
// The label was authored in-session for this entry: it keeps a
// straight safety-notice face — WARNING, in regulation capitals —
// and turns a real hazard of time travel into the joke without
// naming a paradox flatly: the reader has already ignored the label,
// and that is exactly how they got here. The surprise is saved for
// the last words. It avoids the field's saturated angles: no
// do-not-meet-yourself, no stepping on grandfathers or butterflies,
// no lending money to a past self, no paradox-refund jokes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "WARNING: You have already ignored this label. " +
  "That is how you got here.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 120 characters, a single line, not only white
// space. An entry outside those limits is never judged and takes no
// prize, so validate the line against the same limits before writing
// it out — fail fast if the line ever drifts outside the gate.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 120) {
    throw new Error(`line must be 1-120 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateEntry(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
