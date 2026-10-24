// From mc-question-for-conversion.md (question 10). Answer: C.
export const investmentMacro = {
  id: "investment-macro",
  title: "Investment for a macroeconomist",
  generate: () => ({}),
  render: () => "For a macroeconomist, an example of **investment** is:",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "Purchasing shares of Apple stock." },
        { text: "Depositing money in a savings account." },
        { text: "A family buying a new residential house.", correct: true },
        { text: "Purchasing government bonds." },
      ],
    },
  ],
};
