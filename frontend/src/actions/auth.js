import * as api from '../api/index.js';

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
      dispatch({ type: "AUTH", data });
      history.push("/posts");
  } catch (err) {
    console.log(err)
  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    history.push("/posts");
  } catch (err) {
    console.log(err)
  }
}
