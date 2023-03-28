import axios from "axios";

const BASE_URL = "http://localhost:1212";
const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "get"
})

export const Login = (userDetail) => {
    console.log(userDetail);
    return myAxios
        .get("/admin/login", userDetail)
        .then((response) => response.data);
}