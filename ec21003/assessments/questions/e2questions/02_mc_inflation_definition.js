// From mc-question-for-conversion.md (question 2). Answer: D.
export const inflationDefinition = {
  id: "inflation-definition",
  title: "Definition of inflation",
  generate: () => ({}),
  render: () => "Which of the following best describes **inflation**?",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "Severe, negative decline in the level of prices in an entire economy." },
        { text: "An outburst of high changes in the level of prices in an entire economy." },
        { text: "A unit-free number derived from the price level over a number of years." },
        { text: "A general and ongoing rise in the level of prices in an entire economy.", correct: true },
      ],
    },
  ],
};
