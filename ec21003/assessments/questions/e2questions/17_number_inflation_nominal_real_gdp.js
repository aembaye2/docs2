// Replaces the old question 7 (which duplicated question 9's rule-of-70 doubling-time idea).
// Uses the approximation inflation ≈ growth in nominal GDP − growth in real GDP, and
// randomly asks for whichever one of the three quantities is missing.
const UNKNOWNS = ["inflation", "realGrowth", "nominalGrowth"];

export const inflationFromGdpGrowth = {
  id: "inflation-nominal-real-gdp-growth",
  title: "Inflation from nominal and real GDP growth",
  generate: (rng) => {
    const unknown = rng.pick(UNKNOWNS);
    const realGrowth = rng.float(-1, 4, 1);
    const inflation = rng.float(0.5, 6, 1);
    const nominalGrowth = Number((realGrowth + inflation).toFixed(1));
    return { unknown, realGrowth, inflation, nominalGrowth };
  },
  render: ({ unknown, realGrowth, inflation, nominalGrowth }) => {
    if (unknown === "inflation")
      return (
        `If nominal GDP changes by **${nominalGrowth}%** and real GDP changes by **${realGrowth}%**, ` +
        `inflation must have been equal to ______.`
      );
    if (unknown === "realGrowth")
      return (
        `If nominal GDP changes by **${nominalGrowth}%** and inflation is **${inflation}%**, ` +
        `real GDP must have changed by ______.`
      );
    return (
      `If real GDP changes by **${realGrowth}%** and inflation is **${inflation}%**, ` +
      `nominal GDP must have changed by ______.`
    );
  },
  parts: ({ unknown, realGrowth, inflation, nominalGrowth }) => {
    const byUnknown = {
      inflation: { label: "Inflation $=$", correct: nominalGrowth - realGrowth },
      realGrowth: { label: "Percentage change in real GDP $=$", correct: nominalGrowth - inflation },
      nominalGrowth: { label: "Percentage change in nominal GDP $=$", correct: realGrowth + inflation },
    };
    const { label, correct } = byUnknown[unknown];
    return [
      {
        type: "number",
        name: "answer",
        label,
        correct,
        rtol: 0.01,
        atol: 0.05,
        suffix: "%",
      },
    ];
  },
};
