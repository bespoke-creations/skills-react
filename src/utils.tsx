import axios from "axios";

export const BASE_URL = "https://enociv9ekmecyez.m.pipedream.net/";

export const formSubmit = async (data:any) => {
  try {
    return await axios.post(`${BASE_URL}`, data);
  } catch (e) {
    return [];
  }
};