// From workoutExam2 Questions.pdf (question 10b): draw the shifted supply curve in the
// market for loanable funds caused by a government-mandated 401(k) plan.
// Quantity of loanable funds is on the x-axis; the real interest rate is on the y-axis.
// Supply and demand are drawn as straight segments r = slope * Q + intercept; the student
// draws the new (shifted) supply segment and only its slope/y-intercept are graded.
const BOUNDING_BOX = [-1, 9, -1, 9];
const X_MAX = 8;

// Label positions are solved from each line's own equation at a fixed, safely-in-bounds
// y-value, rather than a fixed x, so the label can't land outside the plotted box.
function referenceObjects(dSlope, dIntercept, sSlope, sIntercept) {
  const dLabelX = (5 - dIntercept) / dSlope;
  const sLabelX = (3 - sIntercept) / sSlope;
  return [
    {
      type: "segment",
      points: [
        [0, dIntercept],
        [X_MAX, dIntercept + dSlope * X_MAX],
      ],
      color: "#2563eb",
    },
    {
      type: "text",
      points: [[dLabelX, 5.4]],
      text: "D",
      color: "#2563eb",
    },
    {
      type: "segment",
      points: [
        [0, sIntercept],
        [X_MAX, sIntercept + sSlope * X_MAX],
      ],
      color: "#dc2626",
    },
    {
      type: "text",
      points: [[sLabelX, 3.4]],
      text: "S₀",
      color: "#dc2626",
    },
  ];
}

export const loanableFundsMandate401k = {
  id: "loanable-funds-401k-mandate",
  title: "Market for loanable funds: 401(k) mandate",
  generate: (rng) => {
    const dSlope = -rng.float(0.8, 1.2, 1);
    const dIntercept = rng.float(6, 7, 1);
    const sSlope = rng.float(0.5, 0.9, 1);
    const sIntercept = rng.float(1, 2, 1);
    const shiftDown = rng.float(0.5, 1.5, 1);
    return { dSlope, dIntercept, sSlope, sIntercept, shiftDown };
  },
  render: () =>
    `The graph below shows the market for loanable funds: the demand curve **D** (investment demand) and the ` +
    `initial supply curve **S₀** (national saving). The real interest rate is on the vertical axis and the ` +
    `quantity of loanable funds is on the horizontal axis.\n\n` +
    `The government mandates that all firms offer a 401(k) retirement plan, which raises private saving.\n\n` +
    `Use the segment tool to draw the **new supply curve** (a parallel shift of **S₀**), then press **Submit**.`,
  parts: ({ dSlope, dIntercept, sSlope, sIntercept, shiftDown }) => [
    {
      type: "jsxgraph",
      name: "mandate401k",
      label: "Draw the new supply curve.",
      props: {
        boundingBox: BOUNDING_BOX,
        xLabel: "Quantity of loanable funds",
        yLabel: "Real interest rate",
        width: 800,
        height: 600,
        showColorPicker: false,
        showDownloadButton: false,
        showOutputButton: false,
        enabledTools: ["select", "segment", "eraser"],
        enabledActions: ["undo", "redo", "clear"],
        initialObjects: referenceObjects(dSlope, dIntercept, sSlope, sIntercept),
        expectedDrawing: [
          { type: "segment", slope: sSlope, yIntercept: sIntercept - shiftDown, tolerance: 0.15 },
        ],
      },
    },
  ],
};
