export const getMinPurchasePrice = (price) => price * 0.5;
export const getMaxPurchasePrice = (price) => price * 1.5;

export const calcInvestmentPrice = ({
  purchasePrice,
  downPayment,
  closingCosts,
  estImmediateCosts,
}) => {
  const downPaymentCost = purchasePrice * downPayment;
  const borrowedAmount = purchasePrice - downPaymentCost;
  const loanFee = borrowedAmount * 0.01;

  return (
    downPaymentCost + purchasePrice * closingCosts + estImmediateCosts + loanFee
  );
};

export const calcLoanPaymentsValue = ({
  purchasePrice,
  downPayment,
  loanInterestRate,
}) => {
  const n = 360;
  const downPaymentCost = purchasePrice * downPayment;
  const principalAmount = purchasePrice - downPaymentCost;
  const monthlyInterestRate = loanInterestRate / 12;

  return (
    (principalAmount *
      Math.pow(monthlyInterestRate * (1 + monthlyInterestRate), n)) /
    (Math.pow(1 + monthlyInterestRate, n) - 1)
  );
};
