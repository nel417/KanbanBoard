import React from "react";
import BaseCard from "./BaseCard";
import ActionButton from "./ActionButton";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const ListContainer = styled.div`
  background-color: #e5eff5;
  border-radius: 5px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 16px;
  padding-top: 15px;
  font-family: helvetica;
`;

const KbList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
          <h3 style={{ paddingBottom: 16 }}> {title} </h3>
          {cards.map((card, index) => (
            <BaseCard
              key={card.id}
              index={index}
              text={card.text}
              id={card.id}
            />
          ))}
          {provided.placeholder} <ActionButton listId={listId} />
        </ListContainer>
      )}
    </Droppable>
  );
};

// const styles = {
//   container: {
//     backgroundColor: "#aaa",
//     borderRadius: 3,
//     width: 300,
//     padding: 8,
//     height: "100%",
//     marginRight: 8
//   }
// };
export default KbList;
