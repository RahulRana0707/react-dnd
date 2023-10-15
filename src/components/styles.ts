const getMcqOptionCreatorModeStyles = () => {
  return {
    display: "flex",
    width: "15.75rem",
    padding: "0.875rem 1rem",
    alignItems: "center",
    gap: "0.75rem",
    borderRadius: "0.75rem",
    border: "0.75px dashed rgba(0, 0, 0, 0.20)",
    background: "rgba(255, 255, 255, 0.80)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
  };
};

const getIconStyles = () => {
  return {
    display: "flex",
    width: "2rem",
    height: "2rem",
    padding: "0.0625rem 0.3125rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
  };
};

const getHoverIconStyles = () => {
  return {
    borderRadius: "0.375rem",
    border: "0.75px dashed rgba(0, 0, 0, 0.20)",
    background: "#000",
  };
};

const getOptionIconStyles = () => {
  return {
    borderRadius: "0.375rem",
    border: "0.75px dashed rgba(0, 0, 0, 0.20)",
    background: "rgba(255, 255, 255, 0.80)",
    color: "black",
  };
};

const getInputStyles = () => {
  return {
    display: "flex",
    width: "8.75rem",
    gap: "0.75rem",
    border: "none",
    outline: "none",
    padding: "0.425rem 0.3125rem",
    borderRadius: "0.15rem",
    cursor: "pointer",
    background: "transparent",
  };
};
export {
  getMcqOptionCreatorModeStyles,
  getIconStyles,
  getHoverIconStyles,
  getOptionIconStyles,
  getInputStyles,
};
