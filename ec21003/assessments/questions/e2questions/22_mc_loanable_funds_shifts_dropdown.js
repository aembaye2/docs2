// Fill-in-the-blank (dropdown) question covering shifts in the market for loanable funds.
// Combines the old separate crowding-out and 401(k)-mandate questions into one richer item
// with three random variants:
//   - "deficit": only the budget deficit changes (supply shifter only)
//   - "itc": only the investment tax credit changes (demand shifter only)
//   - "both": the deficit and the investment tax credit change at the same time, so both
//     curves shift — depending on the combination, either the interest rate or the quantity
//     of investment becomes impossible to sign without more information.
// 20_jsxgraph_loanable_funds_crowding_out.js and 21_jsxgraph_loanable_funds_401k_mandate.js
// are kept in the repo but not imported by e2_workout.js. The graph itself is not graded
// here — students are told to sketch it on their own (paper/scratch work) before answering
// the dropdowns. Wording is kept neutral: nothing here states which curve moves, which way,
// or what happens to the interest rate or investment — the student has to work that out.
const VARIANTS = ["deficit", "itc", "both"];

const DEFICIT_CLAUSE = {
  increase: "an increase in government spending (or a reduction in taxes) increases the government's budget deficit",
  decrease: "a decrease in government spending (or an increase in taxes) decreases the government's budget deficit",
};
const ITC_CLAUSE = {
  increase: "Congress increases the investment tax credit",
  decrease: "Congress reduces (or eliminates) the investment tax credit",
};

// Supply of loanable funds = national saving. A larger deficit lowers public saving, so the
// supply curve shifts left; a smaller deficit shifts it right. A change to neither leaves it put.
function supplyDirection(deficitDir) {
  if (deficitDir === "increase") return "left";
  if (deficitDir === "decrease") return "right";
  return "none";
}

// Demand for loanable funds = desired investment. A bigger investment tax credit raises desired
// investment at every interest rate, so the demand curve shifts right; a smaller credit shifts
// it left. A change to neither leaves it put.
function demandDirection(itcDir) {
  if (itcDir === "increase") return "right";
  if (itcDir === "decrease") return "left";
  return "none";
}

// Standard comparative-statics rules for a single shift (one curve fixed) and for simultaneous
// shifts of both curves (same direction pins down quantity but not price; opposite directions
// pin down price but not quantity).
function outcomes(sDir, dDir) {
  if (sDir === "none") return { rate: dDir === "right" ? "increase" : "decrease", quantity: dDir === "right" ? "increase" : "decrease" };
  if (dDir === "none") return { rate: sDir === "right" ? "decrease" : "increase", quantity: sDir === "right" ? "increase" : "decrease" };
  if (sDir === dDir) return { rate: "ambiguous", quantity: sDir === "right" ? "increase" : "decrease" };
  return { rate: sDir === "left" ? "increase" : "decrease", quantity: "ambiguous" };
}

function directionOptions(dir) {
  return [
    { text: "shifts left", correct: dir === "left" },
    { text: "shifts right", correct: dir === "right" },
    { text: "does not shift", correct: dir === "none" },
  ];
}

function outcomeOptions(outcome) {
  return [
    { text: "increase", correct: outcome === "increase" },
    { text: "decrease", correct: outcome === "decrease" },
    { text: "remain the same", correct: false },
    { text: "cannot be determined without more information", correct: outcome === "ambiguous" },
  ];
}

export const loanableFundsShiftsDropdown = {
  id: "loanable-funds-shifts-blanks",
  title: "Loanable funds market: shifting supply and demand (fill in the blanks)",
  generate: (rng) => {
    const variant = rng.pick(VARIANTS);
    const deficitDir = variant === "deficit" || variant === "both" ? rng.pick(["increase", "decrease"]) : null;
    const itcDir = variant === "itc" || variant === "both" ? rng.pick(["increase", "decrease"]) : null;
    return { variant, deficitDir, itcDir };
  },
  render: ({ variant, deficitDir, itcDir }) => {
    const clauses = [];
    if (deficitDir) clauses.push(DEFICIT_CLAUSE[deficitDir]);
    if (itcDir) clauses.push(ITC_CLAUSE[itcDir]);
    const scenario =
      variant === "both"
        ? `Suppose ${clauses[0]}, and at the same time ${clauses[1]}.`
        : `Suppose ${clauses[0]}.`;
    return (
      `${scenario}\n\n` +
      `Draw the market for loanable funds with the initial supply and demand curves and the ` +
      `initial equilibrium labeled **e₁**. Then draw any curve shift(s) this scenario causes, and label the new ` +
      `equilibrium **e₂** (if the graph pins one down).\n\n` +
      `Using your graph, fill in each blank below.`
    );
  },
  parts: ({ deficitDir, itcDir }) => {
    const sDir = supplyDirection(deficitDir);
    const dDir = demandDirection(itcDir);
    const { rate, quantity } = outcomes(sDir, dDir);
    return [
      {
        type: "multiple-choice",
        name: "supplyDirection",
        display: "dropdown",
        label: "The supply curve",
        suffix: ".",
        options: directionOptions(sDir),
      },
      {
        type: "multiple-choice",
        name: "demandDirection",
        display: "dropdown",
        label: "The demand curve",
        suffix: ".",
        options: directionOptions(dDir),
      },
      {
        type: "multiple-choice",
        name: "interestRate",
        display: "dropdown",
        label: "The real interest rate will",
        suffix: ".",
        options: outcomeOptions(rate),
      },
      {
        type: "multiple-choice",
        name: "investment",
        display: "dropdown",
        label: "and the equilibrium quantity of investment will",
        suffix: ".",
        options: outcomeOptions(quantity),
      },
    ];
  },
};
