import {
  DEFAULT_DOWNPAYMENT_VALUE,
  DEFAULT_EST_IMMEDIATE_COSTS_RATE,
  DEFAULT_LOAN_INTEREST_RATE,
  DEFAULT_CLOSING_COST_RATE,
} from "../config";

export const defaultContext = {
  images: [],
  address: "",
  price: 0,
  purchasePrice: 0,
  closingCosts: DEFAULT_CLOSING_COST_RATE,
  loanInterestRate: DEFAULT_LOAN_INTEREST_RATE,
  downPayment: DEFAULT_DOWNPAYMENT_VALUE,
  estImmediateCosts: DEFAULT_EST_IMMEDIATE_COSTS_RATE,
};
