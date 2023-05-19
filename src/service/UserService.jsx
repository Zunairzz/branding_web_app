import axios from "axios";
import {useNavigate} from "react-router-dom";

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
    // const data = {email: 'amir@gmail.com', password: 'amir123'}
    return myAxios.post('/branding/webapp/admin/login', userDetail)
        .then(response => {
            localStorage.setItem("user", response.data);
            return response.data;
        })
        .catch(error => error);
}

export const isLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (user != null) {
        return true;
    } else {
        return false;
    }
}
export const LogOut = () => {
    const navigate = useNavigate();
    localStorage.removeItem("user");
    localStorage.removeItem("images");
    navigate("/");
}