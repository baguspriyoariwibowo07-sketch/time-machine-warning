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

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
