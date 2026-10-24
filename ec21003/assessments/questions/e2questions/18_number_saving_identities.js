// From workoutExam2 Questions.pdf (question 8): public, private, and national saving
// in a closed economy (GDP = C + I + G).
const COUNTRY_POOL = ["Asgard", "Wakanda", "Narnia", "Arendelle", "Genovia", "Zamunda"];

export const savingIdentities = {
  id: "public-private-national-saving",
  title: "Public, private, and national saving",
  generate: (rng) => {
    const country = rng.pick(COUNTRY_POOL);
    const consumption = rng.int(200, 400);
    const investment = rng.int(50, 150);
    const government = rng.int(30, 100);
    const gdp = consumption + investment + government;
    const taxes = rng.int(40, 120);
    const transfers = rng.int(10, 50);
    return { country, gdp, consumption, investment, government, taxes, transfers };
  },
  render: ({ country, gdp, consumption, investment, government, taxes, transfers }) =>
    `Consider the following economic information for the economy of ${country} (a closed economy with no exports or imports):\n\n` +
    `+ GDP = \\$ ${gdp} million\n` +
    `+ Consumption = \\$ ${consumption} million\n` +
    `+ Investment = \\$ ${investment} million\n` +
    `+ Government Purchases = \\$ ${government} million\n` +
    `+ Taxes  = \\$ ${taxes} million\n` +
    `+ Transfer Payments  = \\$ ${transfers} million\n\n` +
    `Calculate public saving, private saving, and national (aggregate) saving.`,
  parts: ({ gdp, consumption, government, taxes, transfers }) => {
    const publicSaving = taxes - transfers - government;
    const privateSaving = gdp - taxes + transfers - consumption;
    const nationalSaving = publicSaving + privateSaving;
    return [
      {
        type: "number",
        name: "privateSaving",
        label: "Private saving $=$",
        correct: privateSaving,
        rtol: 0.01,
        suffix: "million",
      },
      {
        type: "number",
        name: "publicSaving",
        label: "Public saving $=$",
        correct: publicSaving,
        rtol: 0.01,
        suffix: "million",
      },
      {
        type: "number",
        name: "nationalSaving",
        label: "National (aggregate) saving $=$",
        correct: nationalSaving,
        rtol: 0.01,
        suffix: "million",
      },
    ];
  },
};
