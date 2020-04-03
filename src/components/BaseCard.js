import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const CardContainer = styled.div`
  margin-bottom: 9px;
`;

const BaseCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography gutterBottom> {text} </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

// const styles = {
//   cardContainer: {
//     marginBottom: 8
//   }
// };
export default BaseCard;
