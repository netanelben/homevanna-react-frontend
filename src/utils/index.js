import tooltips from "./tooltips.json";
import { PageContext } from "./Context";
import { calcInvestmentPrice } from "./formulas";

export const displayNumber = (number) => number.toLocaleString("en-US");

export const displayTooltip = (context) => tooltips[context] || "n/a";

export const fetchAPIData = () => {
  const URL = "https://api.staging.homevanna.com/listing/OC18244338";

  return fetch(URL).then((data) => data.json());
};

export { PageContext, calcInvestmentPrice };
