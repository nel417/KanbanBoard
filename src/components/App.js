import React from "react";
import KbList from "./KbList";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
        <h1>hey</h1>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <KbList title={list.title} cards={list.cards} />
          ))}
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 10
  }
};
const mapStateToProps = state => ({
  lists: state.lists
});
export default connect(mapStateToProps)(App);
