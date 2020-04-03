import {
  CONSTANTS
} from '../actions'

let listId = 2
let cardId = 5
const initialState = [
  // title: "Todo",
  // id: `list-${0}`,
  // cards: [{
  //     id: `card-${0}`,
  //     text: "Welcome. Click add a new list to the right to make a new list. oh you can drag and d "
  //   },

  // ]
];


const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`
      }
      listId += 1
      return [...state, newList]

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardId}`
      }
      cardId += 1

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      })
      return newState
    }
    case CONSTANTS.DRAG_HAPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;

      const newState = [...state]
      //same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }


      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id)
        const card = listStart.cards.splice(droppableIndexStart, 1)
        const listEnd = state.find(list => droppableIdEnd === list.id)
        listEnd.cards.splice(droppableIndexEnd, 0, ...card)

      }



      return newState
    default:
      return state;
  }
};

export default listReducer;