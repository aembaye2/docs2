// From mc-question-for-conversion.md (question 4). Answer: A (True).
export const dealerCommission = {
  id: "dealer-commission-gdp",
  title: "Dealer commission and GDP",
  generate: () => ({}),
  render: () => "While the sale price of an old car by a dealer is not part of GDP, the dealer’s commission is:",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "True", correct: true },
        { text: "False" },
        { text: "Uncertain" },
      ],
    },
  ],
};
