const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "HYDRATE_DATA":
      return {
        ...state,
        ...payload,
      };

    case "IMMEDIATE_COST_CHANGE":
      return {
        ...state,
        estImmediateCosts: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
