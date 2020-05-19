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
  const numOfMonths = 30;
  const downPaymentCost = purchasePrice * (downPayment / 100);
  const principalAmount = purchasePrice - downPaymentCost;

  const p = principalAmount; //principle / initial amount borrowed
  const i = loanInterestRate / 100 / 12; //monthly interest rate
  const n = numOfMonths * 12; //number of payments months

  return (p * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
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
