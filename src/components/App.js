import React from "react";
import KbList from "./KbList";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import "../App.css";
import { AppBar, Typography, Toolbar } from "@material-ui/core/";
import styled from "styled-components";
import { sort } from "../actions";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  padding-left: 16px;
  font-family: helvetica;
`;

class App extends React.Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;

    return (
      <div>
        <AppBar
          position="static"
          style={{ background: "#2779BF", opacity: 0.9 }}
        >
          <Toolbar>
            <Typography variant="h6">Kanban Board</Typography>
          </Toolbar>
        </AppBar>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="App">
            <ListContainer>
              {lists.map(list => (
                <KbList
                  listId={list.id}
                  key={list.id}
                  title={list.title}
                  cards={list.cards}
                />
              ))}
              <ActionButton list />
            </ListContainer>
          </div>
        </DragDropContext>
      </div>
    );
  }
}

// const styles = {
//   listsContainer: {
//     display: "flex",
//     flexDirection: "row",
//     marginRight: 10
//   }
// };
const mapStateToProps = state => ({
  lists: state.lists
});
export default connect(mapStateToProps)(App);
