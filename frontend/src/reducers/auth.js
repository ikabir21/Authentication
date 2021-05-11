/* eslint-disable import/no-anonymous-default-export */

const authReducer = (state={ authData: null }, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
      return { ...state, authData: action.data };
    default:
      return { ...state, authData: action.data };
  }
};


export default authReducer;