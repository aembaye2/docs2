// From workoutExam2 Questions.pdf (question 5): CPI and inflation from a fixed basket.
const GOODS_POOL = [
  ["milk", "honey", "quarts", "quarts"],
  ["rice", "beans", "pounds", "pounds"],
  ["bread", "cheese", "loaves", "blocks"],
  ["gasoline", "coffee", "gallons", "pounds"],
];

function basketCost(basket, prices) {
  return basket[0] * prices[0] + basket[1] * prices[1];
}

function table(goods, years, prices) {
  const header = `| Year | Price of ${goods[0]} | Price of ${goods[1]} |`;
  const sep = `|---|---|---|`;
  const rows = years.map((y, yi) => `| ${y} | \\$${prices[yi][0]} | \\$${prices[yi][1]} |`);
  return [header, sep, ...rows].join("\n");
}

export const cpiTable = {
  id: "cpi-inflation-table",
  title: "CPI and inflation from a fixed basket",
  generate: (rng) => {
    const [goodA, goodB, unitA, unitB] = rng.pick(GOODS_POOL);
    const basket = [rng.int(50, 150), rng.int(30, 100)];
    const base = rng.int(2011, 2016);
    const years = [base, base + 1, base + 2];
    const prices = years.map(() => [rng.int(1, 5), rng.int(1, 5)]);
    return { goods: [goodA, goodB], units: [unitA, unitB], basket, years, prices };
  },
  render: ({ goods, units, basket, years, prices }) =>
    `Consider the following table. *Note that a basket consists of **${basket[0]} ${units[0]} of ${goods[0]}** ` +
    `and **${basket[1]} ${units[1]} of ${goods[1]}**.*\n\n` +
    `${table(goods, years, prices)}`,
  parts: ({ basket, prices, years }) => {
    const baseCost = basketCost(basket, prices[0]);
    const cpi1 = (basketCost(basket, prices[1]) / baseCost) * 100;
    const cpi2 = (basketCost(basket, prices[2]) / baseCost) * 100;
    return [
      {
        type: "number",
        name: "cpi1",
        label: `**(a)** Using ${years[0]} as the base year, the CPI in ${years[1]} $=$`,
        correct: cpi1,
        rtol: 0.01,
        atol: 0.01,
      },
      {
        type: "number",
        name: "cpi2",
        label: `**(b)** Using ${years[0]} as the base year, the CPI in ${years[2]} $=$`,
        correct: cpi2,
        rtol: 0.01,
        atol: 0.01,
      },
      {
        type: "number",
        name: "inflation",
        label: `**(c)** The inflation rate from ${years[1]} to ${years[2]} $=$`,
        correct: ((cpi2 - cpi1) / cpi1) * 100,
        rtol: 0.02,
        atol: 0.05,
        suffix: "%",
      },
    ];
  },
};
