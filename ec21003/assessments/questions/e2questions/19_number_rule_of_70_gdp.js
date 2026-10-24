// From workoutExam2 Questions.pdf (question 9): doubling time from a constant GDP growth rate (Rule of 70).
export const ruleOf70Gdp = {
  id: "rule-of-70-gdp",
  title: "Doubling time for GDP",
  generate: (rng) => ({ growthRate: rng.int(2, 8) }),
  render: ({ growthRate }) =>
    `Suppose an economy's GDP has a constant growth rate of **${growthRate}%**. ` +
    `How long will it take for the economy's GDP to double?`,
  parts: ({ growthRate }) => [
    {
      type: "number",
      name: "years",
      label: "Years to double $=$",
      correct: 70 / growthRate,
      rtol: 0.02,
      suffix: "years",
    },
  ],
};
