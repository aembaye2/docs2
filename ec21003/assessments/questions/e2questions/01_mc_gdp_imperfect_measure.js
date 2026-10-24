// From mc-question-for-conversion.md (question 1). Answer: B.
export const gdpImperfectMeasure = {
  id: "gdp-imperfect-measure",
  title: "GDP as a measure of well-being",
  generate: () => ({}),
  render: () => "GDP is an imperfect measure of a country’s well-being because it does not capture",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "The amount of government involvement in the economy." },
        { text: "How much leisure time a country enjoys.", correct: true },
        { text: "How much a country spends on goods." },
        { text: "GDP is a perfect measure of well-being." },
      ],
    },
  ],
};
