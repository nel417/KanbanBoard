const initialState = [{
    title: "Last Episode",
    id: 0,
    cards: [{
        id: 0,
        text: "we created a list"
      },
      {
        id: 1,
        text: "we created another"
      }
    ]
  },
  {
    title: "Next Episode",
    id: 0,
    cards: [{
        id: 0,
        text: "a;sdjf;oadjsf"
      },
      {
        id: 1,
        text: "we created another haha poppashdf;l;ldsf"
      },
      {
        id: 2,
        text: "hong"
      },
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listReducer;