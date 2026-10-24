// From mc-question-for-conversion.md (question 5). Answer: C.
export const notInGdp2026 = {
  id: "not-in-gdp-2026",
  title: "What is NOT included in 2026 GDP",
  generate: () => ({}),
  render: () => "Which of the following would **NOT** be included in the calculation of GDP for 2026?",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "The value of a newly built apartment complex completed in 2026." },
        { text: "The wages paid to a chef working at a restaurant during 2026." },
        { text: "The purchase of a secondhand painting that was originally created in 2015.", correct: true },
        { text: "The revenue earned by a software company from a new app released in 2026." },
      ],
    },
  ],
};
