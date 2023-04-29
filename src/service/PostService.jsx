import axios from "axios";

const BASE_URL = "http://localhost:5007";
const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const addPost = (postData) => {
    console.log(postData);
    return myAxios.post('/add/post', postData)
        .then((response) => response.data);
}