import React from "react";
import BaseCard from "./BaseCard";

const KbList = ({ title, cards }) => {
  return (
    <div style={styles.container}>
      <h3>{title}</h3>
      {cards.map(card => (
        <BaseCard text={card.text} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#aaa",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8
  }
};
export default KbList;
