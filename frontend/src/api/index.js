import axios from "axios";

const API = axios.create({ baseURL: 'https://auth-ikabir.herokuapp.com/' })

export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);