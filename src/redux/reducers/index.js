export const tableReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TABLE':
      const users = action.payload;
      return { ...state, users };
    default:
      return state;
  }
};
