import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/trades",
});

// Create trade
export  const createTrade = (tradeData) => API.post("/", tradeData);
export  const getTrade = () => API.get("/",);