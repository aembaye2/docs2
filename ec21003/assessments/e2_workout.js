// Consumed by exercise-system.js. Interactive version of the Exam 2 "Workout" problems
// in questions/e2questions/workoutExam2 Questions.pdf, converted to randomized exercises
// (numbers/tables randomize on each load; see questions/e2questions/11_* through 22_*).
// Note: 20_jsxgraph_loanable_funds_crowding_out.js and 21_jsxgraph_loanable_funds_401k_mandate.js
// are kept in the repo but intentionally not used here; 22 (a single randomized-variant
// dropdown fill-in-the-blank question covering both scenarios, plus a combined-shift/
// ambiguous-outcome variant) is used instead.
import { gdpGrowthRate } from "./questions/e2questions/11_number_gdp_growth_rate.js";
import { gdpImports } from "./questions/e2questions/12_number_gdp_imports.js";
import { gdpDeflatorTable } from "./questions/e2questions/13_number_gdp_deflator_table.js";
import { unemploymentLaborForce } from "./questions/e2questions/14_number_unemployment_laborforce.js";
import { cpiTable } from "./questions/e2questions/15_number_cpi_table.js";
import { cpiRealValue } from "./questions/e2questions/16_number_cpi_real_value.js";
import { inflationFromGdpGrowth } from "./questions/e2questions/17_number_inflation_nominal_real_gdp.js";
import { savingIdentities } from "./questions/e2questions/18_number_saving_identities.js";
import { ruleOf70Gdp } from "./questions/e2questions/19_number_rule_of_70_gdp.js";
import { loanableFundsShiftsDropdown } from "./questions/e2questions/22_mc_loanable_funds_shifts_dropdown.js";

export const questions = [
  gdpGrowthRate,
  gdpImports,
  gdpDeflatorTable,
  unemploymentLaborForce,
  cpiTable,
  cpiRealValue,
  inflationFromGdpGrowth,
  savingIdentities,
  ruleOf70Gdp,
  loanableFundsShiftsDropdown,
];

export const assessment = {
  id: "econ-exam-2-workout",
  title: "Exam 2: Workout practice (interactive)",
  description:
    "Ten workout-style problems from Exam 2 topics, with randomized numbers and tables each time you try. Unlimited attempts; your best score on each counts.",
  mode: "exercise",
  questions: questions.map((q) => ({ questionId: q.id, points: 10 })),
};
