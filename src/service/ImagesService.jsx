import axios from "axios";

const BASE_URL = "http://localhost:5007/branding/webapp/";
const myAxios = axios.create({
    baseURL: BASE_URL
})

export const getAllImages = () => {
    return myAxios.get("/images/cloud")
        .then((response) => response.data);
}

export const getAllImagesFromStorage = () => {
    return localStorage.getItem("images");
}

export const deleteImageFromCloud = (publicId) => {
    return myAxios.delete(`/image/cloud/delete/${publicId}`)
        .then((response) => response.data);
}

// const res = await axios.post('/api/upload', formData, {
//     headers: {
//         'Content-Type': 'multipart/form-data'
//     }
// });

export const uploadImage = (formData) => {
    return myAxios.post("/image/cloud/upload", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => response.data);
}
