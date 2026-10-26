// Consumed by exercise-system.js. Exam 2 multiple-choice questions, converted
// from questions/e2questions/mc-question-for-conversion.md.
import { gdpImperfectMeasure } from "./questions/e2questions/01_mc_gdp_imperfect_measure.js";
import { inflationDefinition } from "./questions/e2questions/02_mc_inflation_definition.js";
import { potentialGdp } from "./questions/e2questions/03_mc_potential_gdp.js";
import { dealerCommission } from "./questions/e2questions/04_tf_dealer_commission.js";
import { notInGdp2026 } from "./questions/e2questions/05_mc_not_in_gdp_2026.js";
import { frictionalUnemployment } from "./questions/e2questions/06_mc_frictional_unemployment.js";
import { financialInstitutions } from "./questions/e2questions/07_mc_financial_institutions.js";
import { gnpGdpRelationship } from "./questions/e2questions/08_mc_gnp_gdp_relationship.js";
import { budgetDeficitLoanableFunds } from "./questions/e2questions/09_mc_budget_deficit_loanable_funds.js";
import { investmentMacro } from "./questions/e2questions/10_mc_investment_macro.js";

export const questions = [
  gdpImperfectMeasure,
  inflationDefinition,
  potentialGdp,
  dealerCommission,
  notInGdp2026,
  frictionalUnemployment,
  financialInstitutions,
  gnpGdpRelationship,
  budgetDeficitLoanableFunds,
  investmentMacro,
];

export const assessment = {
  id: "econ-exam-2-mc",
  title: "Exam 2: Sample multiple choice",
  description: "Ten multiple-choice questions from Exam 2 topics. Unlimited attempts; your best score on each counts.",
  mode: "exercise",
  questions: questions.map((q) => ({ questionId: q.id, points: 10 })),
};
