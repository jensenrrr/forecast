import React from "react";

const styles = {
  header: {
    width: "100%",
    background: "#cae9f6",
    textAlign: "center",
    fontSize: 34,
    padding: "1%",
    height: "20%",
  },
};
const LoadedHeader = ({ location, forecast }) => {
  return (
    <div style={styles.header}>Five Days of Weather at {location.name}!</div>
  );
};
const LoadingHeader = () => {
  return <div style={styles.header}>Loading your location!</div>;
};

const Header = ({ location, forecast }) => {
  if (location && location.name) {
    return <LoadedHeader location={location} forecast={forecast} />;
  } else {
    return <LoadingHeader />;
  }
};

export default Header;
