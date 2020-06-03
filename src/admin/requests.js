import axios from 'axios'; 

const token = localStorage.getItem('token');
// const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMzOCwiaXNzIjoiaHR0cDovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vbG9naW4iLCJpYXQiOjE1OTA2MTI0MDksImV4cCI6MTU5MDYzMDQwOSwibmJmIjoxNTkwNjEyNDA5LCJqdGkiOiJraU8zS0dzdHFuRENxTXExIn0.ywP_TFEXC65FPWTNLGixb772whD_98AMv2wUppRWM-E";

if (!token) console.warn("Токен отсутствует");

const $axios = axios.create({
    baseURL: 'https://webdev-api.loftschool.com/',
    headers:{
        'Authorization' : `Bearer ${token}`
    }
});

export default $axios;