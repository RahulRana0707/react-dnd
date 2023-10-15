const getMcqOptionCreatorGroupContainerStyle = () => {
  return {
    display: "flex",
    justifyContent: "flex-start",
    gap: "20px",
  };
};
const getMcqOptionCreatorGroupStyle = () => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "10px",
    flexWrap: "wrap",
  };
};

const getButtonTextStyles = () => {
  return {
    color: "#263238",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "150%" /* 1.875rem */,
  };
};

export {
  getMcqOptionCreatorGroupContainerStyle,
  getMcqOptionCreatorGroupStyle,
  getButtonTextStyles
};
