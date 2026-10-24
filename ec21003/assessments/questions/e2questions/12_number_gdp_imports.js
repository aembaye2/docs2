// From workoutExam2 Questions.pdf (question 2): solve for imports from the GDP identity
// GDP = C + I + G + (X - M).
export const gdpImports = {
  id: "gdp-imports-identity",
  title: "Imports from the GDP identity",
  generate: (rng) => {
    const consumption = rng.int(30, 80);
    const investment = rng.int(10, 40);
    const government = rng.int(10, 40);
    const exports = rng.int(5, 20);
    const imports = rng.int(2, 15);
    const gdp = consumption + investment + government + exports - imports;
    return { gdp, consumption, investment, government, exports, imports };
  },
  render: ({ gdp, consumption, investment, government, exports }) =>
    `If GDP is **${gdp} million**, Consumption is **${consumption} million**, Investment is **${investment} million**, ` +
    `Government purchases are **${government} million**, and Exports are **${exports} million**, what is the value of imports?`,
  parts: ({ imports }) => [
    {
      type: "number",
      name: "imports",
      label: "Imports $=$",
      correct: imports,
      rtol: 0.01,
      suffix: "million",
    },
  ],
};
