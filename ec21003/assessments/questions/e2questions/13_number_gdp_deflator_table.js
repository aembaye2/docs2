// From workoutExam2 Questions.pdf (question 3): nominal GDP, real GDP, the GDP deflator,
// and inflation rates computed from a two-good table.
const GOODS_POOL = [
  ["milk", "honey"],
  ["coffee", "bagels"],
  ["bicycles", "backpacks"],
  ["notebooks", "pencils"],
  ["oranges", "almonds"],
];

function nominalGDP(prices, quantities, year) {
  return prices[year].reduce((sum, p, g) => sum + p * quantities[year][g], 0);
}

function realGDP(prices, quantities, year, baseYear) {
  return prices[baseYear].reduce((sum, p, g) => sum + p * quantities[year][g], 0);
}

function table(goods, years, prices, quantities) {
  const header = `| Year | Price of ${goods[0]} | Quantity of ${goods[0]} | Price of ${goods[1]} | Quantity of ${goods[1]} |`;
  const sep = `|---|---|---|---|---|`;
  const rows = years.map(
    (y, yi) =>
      `| ${y} | \\$${prices[yi][0]} | ${quantities[yi][0]} | \\$${prices[yi][1]} | ${quantities[yi][1]} |`,
  );
  return [header, sep, ...rows].join("\n");
}

export const gdpDeflatorTable = {
  id: "gdp-deflator-inflation-table",
  title: "Nominal GDP, real GDP, the GDP deflator, and inflation",
  generate: (rng) => {
    const goods = rng.pick(GOODS_POOL);
    const base = rng.int(2011, 2016);
    const years = [base, base + 1, base + 2];
    const prices = years.map(() => [rng.int(2, 10), rng.int(2, 10)]);
    const quantities = years.map(() => [rng.int(50, 250), rng.int(50, 250)]);
    return { goods, years, prices, quantities };
  },
  render: ({ goods, years, prices, quantities }) =>
    `Consider the following table. ${years[0]} is the **base year**.\n\n` +
    `${table(goods, years, prices, quantities)}\n\n`,
  parts: ({ years, prices, quantities }) => {
    const nominal2 = nominalGDP(prices, quantities, 2);
    const real2 = realGDP(prices, quantities, 2, 0);
    const deflator2 = (nominal2 / real2) * 100;
    const nominal1 = nominalGDP(prices, quantities, 1);
    const real1 = realGDP(prices, quantities, 1, 0);
    const deflator1 = (nominal1 / real1) * 100; // base-year deflator is always 100
    const inflation01 = ((deflator1 - 100) / 100) * 100;
    const inflation12 = ((deflator2 - deflator1) / deflator1) * 100;
    return [
      {
        type: "number",
        name: "nominal",
        label: `**(a)** Nominal GDP for ${years[2]} $=$`,
        correct: nominal2,
        rtol: 0.01,
        suffix: "dollars",
      },
      {
        type: "number",
        name: "real",
        label: `**(b)** Real GDP for ${years[2]} $=$`,
        correct: real2,
        rtol: 0.01,
        suffix: "dollars",
      },
      {
        type: "number",
        name: "deflator",
        label: `**(c)** GDP deflator for ${years[2]} $=$`,
        correct: deflator2,
        rtol: 0.01,
        atol: 0.01,
      },
      {
        type: "number",
        name: "inflation01",
        label: `**(d)** Inflation rate from ${years[0]} to ${years[1]} $=$`,
        correct: inflation01,
        rtol: 0.02,
        atol: 0.05,
        suffix: "%",
      },
      {
        type: "number",
        name: "inflation12",
        label: `**(e)** Inflation rate from ${years[1]} to ${years[2]} $=$`,
        correct: inflation12,
        rtol: 0.02,
        atol: 0.05,
        suffix: "%",
      },
    ];
  },
};
