export const tableReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const key = state.users.length;
      const newUser = { ...action.userData, key };
      return { ...state, users: [...state.users, newUser] };
    default:
      return state;
  }
};
