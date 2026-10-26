// From mc-question-for-conversion.md (question 3). Answer: C.
export const potentialGdp = {
  id: "potential-gdp",
  title: "Potential GDP",
  generate: () => ({}),
  render: () => "Which of the following best describes **Potential GDP**?",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "Positive short run relationship between the price level for output and real GDP, holding the prices of inputs fixed." },
        { text: "The amount of total spending on domestic goods and services in an economy." },
        { text: "The maximum quantity that an economy can produce given full employment of its existing levels of labor, physical capital, technology, and institutions.", correct: true },
        { text: "The total quantity of output firms will produce and sell." },
      ],
    },
  ],
};
