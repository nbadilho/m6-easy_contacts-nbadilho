import axios from "axios"

export const api = axios.create({
  baseURL: "https://eazy-contacts.onrender.com/",
  timeout: 5000,
})