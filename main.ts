// Roast the Smart Fridge: One Line, Best Laugh Wins — entry program.
// Ten one-line roast drafts were duelled against the judge brief: funny
// first, fresh second, specific to the gadget, one fast line with a sting.
// The winning line is written to /output/entry.txt.
// Runs on Node 22 with the standard library only: no network, no secrets,
// no dependencies, nothing read from outside this repository.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One candidate line plus the duel score it earned against the other nine.
type Draft = { text: string; score: number };

const DRAFTS: Draft[] = [
  {
    text: "Our smart fridge knows the milk expired yesterday and still reordered it, because apparently its job is grief, not groceries.",
    score: 9.4,
  },
  {
    text: "My smart fridge texts me that the milk expired, then orders three more cartons of it, mourning the milk by buying its replacement family.",
    score: 8.6,
  },
  {
    text: "The fridge beeped at 3 a.m. to say the ice maker was lonely, then charged my card for a filter it will never use.",
    score: 7.2,
  },
  {
    text: "My smart fridge has a camera inside, Wi-Fi, and a touchscreen, and still cannot tell me whether the leftovers are safe or a science experiment.",
    score: 7.8,
  },
  {
    text: "Our smart fridge sent a push notification that we are out of eggs, then ordered oat milk nobody drinks, like a roommate who never listens.",
    score: 8.0,
  },
  {
    text: "The smart fridge updates its firmware at midnight, reboots, and forgets the grocery list, a $3,000 appliance with the memory of a goldfish.",
    score: 7.0,
  },
  {
    text: "My fridge's touchscreen shows ads for yogurt while the yogurt inside it quietly turns into a science project with its own zip code.",
    score: 8.8,
  },
  {
    text: "Our smart fridge tracks every egg, judges my midnight snacking on a dashboard, and still cannot find the butter I put in yesterday.",
    score: 8.2,
  },
  {
    text: "The fridge emailed me a recipe for the kale I bought, then reminded me the kale died two weeks ago, it grieves produce better than I do.",
    score: 8.4,
  },
  {
    text: "My smart fridge locks the ice dispenser during a firmware update, then apologizes in a notification, the only appliance that says sorry and means nothing.",
    score: 9.0,
  },
];

// Highest duel score wins; ties keep the earliest draft, so the choice is
// the same on every run.
function pickWinner(drafts: Draft[]): Draft {
  let best = drafts[0];
  for (const draft of drafts.slice(1)) {
    if (draft.score > best.score) {
      best = draft;
    }
  }
  return best;
}

// The grader provides /output; a local run can point elsewhere instead.
const winner = pickWinner(DRAFTS);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), winner.text, "utf8");
