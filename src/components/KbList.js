import React from "react";
import BaseCard from "./BaseCard";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";

const KbList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h3> {title} </h3>
          {cards.map((card, index) => (
            <BaseCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          {provided.placeholder}
          <ActionButton listId={listId} />
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#aaa",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};
export default KbList;
