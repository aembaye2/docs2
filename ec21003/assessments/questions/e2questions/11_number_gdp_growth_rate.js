// From workoutExam2 Questions.pdf (question 1): GDP growth rate between two years.
export const gdpGrowthRate = {
  id: "gdp-growth-rate",
  title: "GDP growth rate",
  generate: (rng) => {
    const year0 = rng.int(2015, 2023);
    const gdp0 = rng.int(150, 300) / 10; // trillions, one decimal
    const targetGrowth = rng.int(2, 10); // percent
    const gdp1 = Math.round(gdp0 * (1 + targetGrowth / 100) * 10) / 10;
    return { year0, year1: year0 + 1, gdp0, gdp1 };
  },
  render: ({ year0, year1, gdp0, gdp1 }) =>
    `Suppose GDP in ${year0} was **\\$${gdp0} trillion** and GDP in ${year1} was **\\$${gdp1} trillion**. ` +
    `What is the growth rate of the economy from ${year0} to ${year1}?\n\n` +
    `*(Enter your answer as a percent, e.g. 5.2 for 5.2%.)*`,
  parts: ({ gdp0, gdp1 }) => [
    {
      type: "number",
      name: "growth",
      label: "Growth rate $=$",
      correct: ((gdp1 - gdp0) / gdp0) * 100,
      rtol: 0.02,
      suffix: "%",
    },
  ],
};
