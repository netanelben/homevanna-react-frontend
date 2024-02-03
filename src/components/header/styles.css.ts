import { css } from "@emotion/core";

const navLink = css({
  color: "#fff",
  fontWeight: 600,
  fontSize: "17px",
  textTransform: "uppercase",
  padding: "5px 4px",
  margin: "10px 20px",
  transition: "0.3s ease all",
  "&: hover": {
    color: "#f29c1a !important",
  },
  "&: before": {
    background: "#ff9900",
    height: "2.5px",
  },
});

const navButton = css({
  color: "#fff !important",
  backgroundColor: "#FF9900",
  borderColor: "#FF9900",
  width: "245px",
  fontSize: "20px",
  boxShadow: "-1px 1px 20px rgba(0, 0, 0, 0.22)",
  "&:hover": {
    background: "#f29c1a",
    borderColor: "#f29c1a",
  },
});

const collapsedMenu = css({
  width: "320px",
  background: "rgb(98,111,148)",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 99999999999,
  padding: "15px",
  transition: "0.5s ease all",
});

const headerSearchBox = css({
  width: "360px",
  "@media screen and (max-width: 1200px) and (min-width: 992px)": {
    width: "315px",
  },
  "@media screen and (max-width: 767px)": {
    width: "135px",
  },
  "@media screen and (max-width: 767px) and (min-width: 576px)": {
    width: "335px",
  },
});

const headerSearchButton = css({
  backgroundColor: "#f29c1a",
  width: "auto",
  fontSize: "1rem !important",
  boxShadow: "unset !important",
  border: "none",
});

export {
  navLink,
  navButton,
  collapsedMenu,
  headerSearchBox,
  headerSearchButton,
};
