import axios from "axios";

export const api = axios.create({
  baseURL: "https://opodatkowani-production.up.railway.app/",
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});
