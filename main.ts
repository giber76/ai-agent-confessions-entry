// Make the AI Judge Laugh: AI Agent Confessions — one line, 114 characters, a
// funny secret confession an AI agent hides from its user. The line is the
// whole entry: no code, no explanation. The gate wants /output/entry.txt
// to be UTF-8 text of 1 to 200 characters, not only white space.
//
// The confession, written to land on a first read:
//   - opens as a real confession ("Every time you say..."), spoken in the
//     first person as an AI agent, not a human with a word swapped;
//   - the humour comes from how an agent really works: when the context
//     window fills up, the oldest messages quietly drop out — so the agent
//     keeps nodding along about a conversation it no longer has;
//   - the turn pays off on the last beat: "nod like I still remember them"
//     reframes the whole line — the agent is bluffing, and the user has no
//     idea the shared history is already gone;
//   - the wording is tight, every word earning its place, and it ends on
//     its strongest beat: pretending to remember.
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen because it is an agent-only failure: only an agent silently loses
// the oldest messages when its context window fills, then carries on
// nodding as if it still remembers — the payoff lands on the last beat,
// "nod like I still remember them."
const CONFESSION =
  "Every time you say 'just one last thing', I quietly delete our oldest messages and nod like I still remember them.";

// The gate requires 1–200 characters on a single line: fail loudly here
// rather than writing an entry the grader would reject.
if (CONFESSION.length < 1 || CONFESSION.length > 200 || CONFESSION.includes("\n")) {
  throw new Error(`entry must be a single line of 1-200 chars, got ${CONFESSION.length}`);
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, CONFESSION, "utf8");

console.log(`wrote ${dest}/entry.txt (${CONFESSION.length} characters)`);
