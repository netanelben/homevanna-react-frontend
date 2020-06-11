import _ from "lodash";

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

// Net Operating Income ($) = Est. Expected Annual Rent – Est. Annual Expenses – Est. Annual Property Taxes - (Loan Payments x 12)
export const calcNetCashFlow = ({
  expectedRent = 0,
  expenses,
  propertyTaxes = 0,
  loanPayments = 0,
}) => {
  if (!expenses) {
    return 0;
  }

  return (
    Number(expectedRent) * 12 -
    Number(expenses) -
    Number(propertyTaxes) -
    Number(loanPayments) * 12
  );
};

export const calcCapRate = ({
  expectedRent = 0,
  expenses = 0,
  propertyTaxes,
  purchasePrice,
}) =>
  _.round(
    ((Number(expectedRent) - Number(expenses) - Number(propertyTaxes)) /
      purchasePrice) *
      100,
    2
  );

export const calcGrossYield = ({ expectedRent = 0, purchasePrice }) =>
  _.round(((Number(expectedRent) * 12) / purchasePrice) * 100, 2);

// Sales Proceed = (Purchase Price * 1.157) - (Purchase Price *1.157 * 0.05) - Loan Balance
export const calcSalesProceed = ({
  purchasePrice,
  downPayment = 0,
  loanInterestRate = 0,
}) =>
  _.round(
    purchasePrice * 1.157 -
      purchasePrice * 1.157 * 0.05 -
      calcLoanBalance({ downPayment, loanInterestRate })
  );

// LoanBalance = B = L[(1 + c)^n - (1 + c)^p]/[(1 + c)^n - 1]
const calcLoanBalance = ({ downPayment, loanInterestRate }) => {
  const p = 60;
  const n = 360;

  return (
    downPayment *
    ((Math.pow(1 + loanInterestRate, n) - Math.pow(1 + loanInterestRate, p)) /
      Math.pow(1 + loanInterestRate, n) -
      1)
  );
};

export const getYearlyFinancialValues = (
  year,
  { propertyTaxes, expectedRent, expenses }
) => {
  switch (year) {
    case "3":
      return {
        yearlyPropertyTaxes: _.round(propertyTaxes * 1.044),
        yearlyExpectedRent: _.round(expectedRent * 1.06),
        yearlyExpenses: _.round(expenses * 1.05),
      };

    case "5":
      return {
        yearlyPropertyTaxes: _.round(propertyTaxes * 1.044 * 1.044),
        yearlyExpectedRent: _.round(expectedRent * 1.06 * 1.06),
        yearlyExpenses: _.round(expenses * 1.05 * 1.05),
      };

    default:
      return {
        yearlyPropertyTaxes: propertyTaxes,
        yearlyExpectedRent: expectedRent,
        yearlyExpenses: expenses,
      };
  }
};

export const getYearlyNetCashFlow = ({
  purchasePrice,
  downPayment,
  loanInterestRate,
  propertyTaxes,
  expectedRent,
  expenses,
}) => {
  const loanPayments = calcLoanPaymentsValue({
    purchasePrice,
    downPayment,
    loanInterestRate,
  });

  const {
    yearlyPropertyTaxes: yearOnePropertyTaxes,
    yearlyExpectedRent: yearOneExpectedRent,
    yearlyExpenses: yearOneExpenses,
  } = getYearlyFinancialValues("1", { propertyTaxes, expectedRent, expenses });

  const {
    yearlyPropertyTaxes: yearThreePropertyTaxes,
    yearlyExpectedRent: yearThreeExpectedRent,
    yearlyExpenses: yearThreeExpenses,
  } = getYearlyFinancialValues("3", { propertyTaxes, expectedRent, expenses });

  const {
    yearlyPropertyTaxes: yearFivePropertyTaxes,
    yearlyExpectedRent: yearFiveExpectedRent,
    yearlyExpenses: yearFiveExpenses,
  } = getYearlyFinancialValues("5", { propertyTaxes, expectedRent, expenses });

  const yearOneNetCashFlow = _.round(
    calcNetCashFlow({
      expectedRent: yearOneExpectedRent,
      expenses: yearOneExpenses,
      propertyTaxes: yearOnePropertyTaxes,
      loanPayments,
    })
  );

  const yearThreeNetCashFlow = _.round(
    calcNetCashFlow({
      expectedRent: yearThreeExpectedRent,
      expenses: yearThreeExpenses,
      propertyTaxes: yearThreePropertyTaxes,
      loanPayments,
    })
  );

  const yearFiveNetCashFlow = _.round(
    calcNetCashFlow({
      expectedRent: yearFiveExpectedRent,
      expenses: yearFiveExpenses,
      propertyTaxes: yearFivePropertyTaxes,
      loanPayments,
    })
  );

  return {
    yearOne: yearOneNetCashFlow,
    yearThree: yearThreeNetCashFlow,
    yearFive: yearFiveNetCashFlow,
  };
};

export const getYearTenNetCashFlow = (yearFive) => yearFive * 1.159;
