// From mc-question-for-conversion.md (question 6). Answer: C.
export const frictionalUnemployment = {
  id: "frictional-unemployment",
  title: "Frictional unemployment",
  generate: () => ({}),
  render: () => "_______ unemployment is the temporary unemployment that occurs when people are between jobs or entering the workforce and experience a period of “waiting time” while searching for and finding a suitable job.",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "Cyclical" },
        { text: "Structural" },
        { text: "Frictional", correct: true },
        { text: "Demand deficient" },
      ],
    },
  ],
};
