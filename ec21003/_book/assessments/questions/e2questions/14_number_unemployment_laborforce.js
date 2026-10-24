// From workoutExam2 Questions.pdf (question 4): unemployment rate and labor-force
// participation rate from BLS-style survey counts.
const TOWN_POOL = ["Letterkenny", "Millwood", "Pawnee", "Sweetwater", "Dillon", "Ashford"];
const MONTH_POOL = ["January", "April", "July", "October"];

export const unemploymentLaborForce = {
  id: "unemployment-labor-force",
  title: "Unemployment rate and labor-force participation rate",
  generate: (rng) => ({
    town: rng.pick(TOWN_POOL),
    month: rng.pick(MONTH_POOL),
    year: rng.int(2016, 2024),
    employed: rng.int(20, 60) * 100,
    unemployed: rng.int(2, 10) * 100,
    notInLaborForce: rng.int(5, 20) * 100,
  }),
  render: ({ town, month, year, employed, unemployed, notInLaborForce }) =>
    `The Bureau of Labor Statistics announced in ${month} ${year}, of all adult residents of ${town}, ` +
    `**${employed.toLocaleString()}** were employed, **${unemployed.toLocaleString()}** were unemployed, and ` +
    `**${notInLaborForce.toLocaleString()}** were not in the labor force. ` ,
  parts: ({ employed, unemployed, notInLaborForce }) => {
    const laborForce = employed + unemployed;
    const adultPopulation = laborForce + notInLaborForce;
    return [
      {
        type: "number",
        name: "unemploymentRate",
        label: "**(a)** Unemployment rate $=$",
        correct: (unemployed / laborForce) * 100,
        rtol: 0.01,
        suffix: "%",
      },
      {
        type: "number",
        name: "lfpr",
        label: "**(b)** Labor-force participation rate $=$",
        correct: (laborForce / adultPopulation) * 100,
        rtol: 0.01,
        suffix: "%",
      },
    ];
  },
};
