export const LAST_UPDATED =
  process.env.REACT_APP_LAST_UPDATED ||
  new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });