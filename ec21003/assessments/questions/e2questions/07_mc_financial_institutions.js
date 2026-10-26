// From mc-question-for-conversion.md (question 7). Answer: B.
export const financialInstitutions = {
  id: "financial-intermediaries-vs-markets",
  title: "Financial intermediaries and financial markets",
  generate: () => ({}),
  render: () => "While an investment bank, hedge fund, and mutual fund are examples of _______, the bond and stock exchange are examples of _______.",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "financial markets; financial intermediaries" },
        { text: "financial intermediaries; financial markets", correct: true },
        { text: "money market; money intermediaries" },
        { text: "money intermediaries; money market" },
      ],
    },
  ],
};
