import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://bit-cup.bsuir.by/',
})


export const RegistrationAPI = {
    SendRegistrationData(data) {
        return instance.post('', data)
    }
}
