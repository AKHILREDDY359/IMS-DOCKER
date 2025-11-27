// import axios from "axios";

// export const fetchDashboardData = async () => {
//     return await axios.get(" http://localhost:8080/api/v1.0/dashboard", {headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}});
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const fetchDashboardData = async () => {
    return await axios.get(`${BASE_URL}/dashboard`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
    });
}
