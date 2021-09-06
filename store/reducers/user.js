const initialState = {
  likeUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_LIKE':
      return {
        ...state,
        likeUsers: [...state.likeUsers, action.likeUser],
      };
    default:
      return state;
  }
};

export default reducer;
