export const getMinPurchasePrice = (price) => price * 0.5;
export const getMaxPurchasePrice = (price) => price * 1.5;

export const calcInvestmentPrice = ({
  purchasePrice,
  downPayment,
  closingCosts,
  estImmediateCosts,
}) => {
  const downPaymentCost = purchasePrice * (downPayment / 100);
  const borrowedAmount = purchasePrice - downPaymentCost;
  const loanFee = borrowedAmount * 0.01;

  if (downPayment === 100) {
    return purchasePrice + purchasePrice * closingCosts + estImmediateCosts;
  }

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
  const downPaymentCost = purchasePrice * (downPayment / 100);
  const principalAmount = purchasePrice - downPaymentCost;
  const monthlyInterestRate = loanInterestRate / 12;

  return (
    (principalAmount *
      Math.pow(monthlyInterestRate * (1 + monthlyInterestRate), n)) /
    (Math.pow(1 + monthlyInterestRate, n) - 1)
  );
};

export const calcNetCashFlow = ({
  expectedRent = 0,
  expenses = 0,
  propertyTaxes,
  loanPayments,
}) => {
  return expectedRent - expenses - propertyTaxes - loanPayments;
};

export const calcNetOperatingIncome = ({
  expectedRent = 0,
  expenses = 0,
  propertyTaxes,
}) => {
  return expectedRent - expenses - propertyTaxes;
};

export const calcGrossYield = ({ expectedRent = 0, purchasePrice }) =>
  expectedRent * purchasePrice;
