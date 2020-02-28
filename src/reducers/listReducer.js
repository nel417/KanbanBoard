import {
  CONSTANTS
} from '../actions'

let listId = 2
let cardId = 5
const initialState = [{
    title: "Last Episode",
    id: `list-${0}`,
    cards: [{
        id: `card-${0}`,
        text: "we created a list"
      },
      {
        id: `card-${1}`,
        text: "we created another"
      }
    ]
  },
  {
    title: "Next Episode",
    id: `list-${1}`,
    cards: [{
        id: `card-${2}`,
        text: "a;sdjf;oadjsf"
      },
      {
        id: `card-${3}`,
        text: "we created another haha poppashdf;l;ldsf"
      },
      {
        id: `card-${4}`,
        text: "butt hahahag"
      }
    ]
  }
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

    case CONSTANTS.ADD_CARD:
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
    default:
      return state;
  }
};

export default listReducer;