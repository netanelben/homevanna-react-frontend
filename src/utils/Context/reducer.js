const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "HYDRATE_DATA":
      return {
        ...state,
        ...payload,
      };

    case "PURCHASE_PRICE_CHANGE":
      return {
        ...state,
        purchasePrice: payload,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
