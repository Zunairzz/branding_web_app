import axios from "axios";

const BASE_URL = "localhost:5007/branding/webapp/";
const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getAllImages = () => {
    return myAxios.get("/images/cloud")
        .then((response) => response.data);
}
