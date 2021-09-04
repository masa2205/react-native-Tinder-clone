const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MATCH':
      return {
        ...state,
        users: [...state.users, action.users],
      };
    default:
      return state;
  }
};

export default reducer;
