import {
  DEFAULT_DOWNPAYMENT_VALUE,
  DEFAULT_LOAN_INTEREST_RATE,
  DEFAULT_CLOSING_COST_RATE,
  DEFAULT_EST_IMMEDIATE_COSTS_RATE,
} from "../config";
import { getYearlyNetCashFlow } from "../../utils/formulas";

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "HYDRATE_LISTINGS_DATA":
      return {
        ...state,
        ...payload,
      };

    case "HYDRATE_TRANSACTIONS_DATA":
      return {
        ...state,
        ...payload,
      };

    case "PURCHASE_PRICE_CHANGE":
      const propertyTaxes = payload * 0.012;

      return {
        ...state,
        purchasePrice: payload,
        propertyTaxes,
      };

    case "IMMEDIATE_COST_CHANGE":
      return {
        ...state,
        estImmediateCosts: payload,
      };

    case "DOWNPAYMENT_CHANGE":
      return {
        ...state,
        downPayment: payload,
      };

    case "LOAN_INTEREST_RATE_CHANGE":
      return {
        ...state,
        loanInterestRate: payload,
      };

    case "CLOSING_COST_RATE_CHANGE":
      return {
        ...state,
        closingCosts: payload,
      };

    case "APPRECIATION_RATE_CHANGE":
      return {
        ...state,
        appreciation: payload,
      };

    case "EXPECTED_RENT_CHANGE":
      return {
        ...state,
        expectedRent: payload,
      };

    case "EXPENSES_CHANGE":
      return {
        ...state,
        expenses: payload,
      };

    case "SET_NET_CASH_FLOW": {
      const {
        purchasePrice,
        downPayment,
        loanInterestRate,
        propertyTaxes,
        expectedRent,
        expenses,
      } = state;

      const { yearOne, yearThree, yearFive } = getYearlyNetCashFlow({
        purchasePrice,
        downPayment,
        loanInterestRate,
        propertyTaxes,
        expectedRent,
        expenses,
      });

      return {
        ...state,
        netCashFlow: {
          yearOne,
          yearThree,
          yearFive,
        },
      };
    }

    case "RESTORE_DEFAULT":
      const { price } = state;

      return {
        ...state,
        purchasePrice: price,
        downPayment: DEFAULT_DOWNPAYMENT_VALUE,
        loanInterestRate: DEFAULT_LOAN_INTEREST_RATE,
        closingCosts: DEFAULT_CLOSING_COST_RATE,
        estImmediateCosts: DEFAULT_EST_IMMEDIATE_COSTS_RATE,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
