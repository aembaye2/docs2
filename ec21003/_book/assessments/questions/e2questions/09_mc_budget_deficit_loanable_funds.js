// From mc-question-for-conversion.md (question 9). Answer: B.
// A budget deficit lowers national saving, which shifts the supply of
// loanable funds to the left, raising interest rates and reducing investment.
export const budgetDeficitLoanableFunds = {
  id: "budget-deficit-loanable-funds",
  title: "Budget deficit and the loanable funds market",
  generate: () => ({}),
  render: () => "An increase in budget deficit shifts __________.",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "the supply of loanable funds to the right, decreasing interest rates and increasing investment." },
        { text: "the supply of loanable funds to the left, increasing interest rates and decreasing investment.", correct: true },
        { text: "the demand for loanable funds to the right, decreasing interest rates and increasing investment." },
        { text: "the demand for loanable funds to the left, increasing interest rates and decreasing investment." },
      ],
    },
  ],
};
