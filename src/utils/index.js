import tooltips from "./tooltips.json";
import { PageContext } from "./Context";

export const displayNumber = (number) => number.toLocaleString("en-US") || 0;

export const displayTooltip = (context) => tooltips[context] || "n/a";

export const fetchAPIData = () => {
  const URL = "https://api.staging.homevanna.com/listing/OC18244338";

  return fetch(URL).then((data) => data.json());
};

export { PageContext };
