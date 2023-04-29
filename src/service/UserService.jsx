import axios from "axios";

const BASE_URL = "http://localhost:5007";
const myAxios = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const Login = (userDetail) => {
    console.log("service");
    console.log(userDetail);
    // {email: 'amir@gmail.com', password: 'amir123'}
    const data = {email: 'amir@gmail.com', password: 'amir123'}
    return myAxios.post('/branding/webapp/admin/login', userDetail)
        .then(response => response.data)
        .catch(error => error);
}