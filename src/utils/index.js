import tooltips from "./tooltips.json";
import { PageContext } from "./Context";

const API_URL = "https://api.staging.homevanna.com";

export const displayNumber = (number) =>
  Number(number).toLocaleString("en-US") || 0;

export const displayTooltip = (context) => tooltips[context] || "n/a";

export const fetchListingsData = (listingID) => {
  const URL = `${API_URL}/listing/${listingID}`;

  return fetch(URL).then((data) => data.json());
};

export const fetchPropTransactionsData = (parcelId) => {
  const URL = `${API_URL}/propertyTransactions/${parcelId}`;

  return fetch(URL).then((data) => data.json());
};

export { PageContext };
