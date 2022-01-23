import axios from "axios";
import IContactUsData from "../types/IContactUsData";

const API_URL = "https://enociv9ekmecyez.m.pipedream.net";

export const sendMessage = (data: IContactUsData) => {
    return axios.post(API_URL, {'email': data.email, 'subject': 'skills-react Submission', 'body': data.message});
  }

