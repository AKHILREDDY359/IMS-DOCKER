// import axios from "axios";

// export const login = async (data) => {
//     return await axios.post("http://localhost:8080/api/v1.0/login", data);
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const login = async (data) => {
    return await axios.post(`${BASE_URL}/login`, data);
}