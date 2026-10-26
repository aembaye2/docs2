// From workoutExam2 Questions.pdf (question 6): convert a nominal salary to today's dollars using the CPI.
const RELATIVE_POOL = ["mother", "father", "grandmother", "grandfather", "uncle", "aunt"];

export const cpiRealValue = {
  id: "cpi-real-salary-value",
  title: "Converting a salary to today's dollars using the CPI",
  generate: (rng) => {
    const relative = rng.pick(RELATIVE_POOL);
    const oldYear = rng.int(1985, 2000);
    const newYear = rng.int(2015, 2024);
    const salary = rng.int(20, 70) * 1000;
    const cpiOld = rng.int(100, 160);
    const cpiNew = rng.int(200, 280);
    return { relative, oldYear, newYear, salary, cpiOld, cpiNew };
  },
  render: ({ relative, oldYear, newYear, salary, cpiOld, cpiNew }) =>
    `Suppose your ${relative} received a salary of **\\$${salary.toLocaleString()}** in ${oldYear}. ` +
    `What is the value of that salary in ${newYear} dollars if the CPI in ${oldYear} was **${cpiOld}** and the CPI in ${newYear} was **${cpiNew}**?`,
  parts: ({ salary, cpiOld, cpiNew }) => [
    {
      type: "number",
      name: "realValue",
      label: "Value in today's dollars $=$",
      correct: salary * (cpiNew / cpiOld),
      rtol: 0.01,
      suffix: "dollars",
    },
  ],
};
