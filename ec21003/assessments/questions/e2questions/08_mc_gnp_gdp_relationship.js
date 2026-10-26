// From mc-question-for-conversion.md (question 8). Answer: B.
export const gnpGdpRelationship = {
  id: "gnp-gdp-relationship",
  title: "Relationship between GNP and GDP",
  generate: () => ({}),
  render: () => "Which of the following correctly represents the relationship between **GNP** and **GDP**?",
  parts: () => [
    {
      type: "multiple-choice",
      name: "answer",
      options: [
        { text: "GNP = GDP − Citizens’ income earned abroad + Foreigners’ income earned domestically" },
        { text: "GNP = GDP + Citizens’ income earned abroad − Foreigners’ income earned domestically", correct: true },
        { text: "GNP = GDP + Foreigners’ income earned domestically − Citizens’ income earned abroad" },
        { text: "GNP = GDP − Citizens’ income earned abroad − Foreigners’ income earned domestically" },
      ],
    },
  ],
};
