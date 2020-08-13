const initialState = {
  players: {
        1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }
      },

  monster: {
            pv: 900, pvMax: 900
  }
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
    case "HIT_MONSTER":
    return { ...state,
       monster:{ ...state.monster,
       pv: state.monster.pv-70},
     }
     case "HIT_BACK":
     const id = action.payload
     return { ...state,
        players:{ ...state.players,
        [id]: { ...state.players[id],
        pv: state.players[id].pv-15 },
      }}
    default:
    return state;
    }
}


export default rootReducer;
