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
    return (
      Number(purchasePrice) +
      purchasePrice * (closingCosts / 100) +
      estImmediateCosts
    );
  }

  return (
    downPaymentCost +
    purchasePrice * (closingCosts / 100) +
    estImmediateCosts +
    loanFee
  );
};

export const calcLoanPaymentsValue = ({
  purchasePrice,
  downPayment,
  loanInterestRate,
}) => {
  const numOfMonths = 360;
  const downPaymentCost = purchasePrice * (downPayment / 100);
  const principalAmount = purchasePrice - downPaymentCost;
  const i = loanInterestRate / 12;

  return (
    (principalAmount * (i / 12) * Math.pow(1 + i / 12, numOfMonths)) /
    (Math.pow(1 + i / 12, numOfMonths) - 1)
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
