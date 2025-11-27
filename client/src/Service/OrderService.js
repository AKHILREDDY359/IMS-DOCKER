// import axios from "axios";

// export const latestOrders = async () => {
//     return await axios.get("http://localhost:8080/api/v1.0/orders/latest", {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const createOrder = async (order) => {
//     return await axios.post("http://localhost:8080/api/v1.0/orders", order, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteOrder = async (id) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/orders/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const latestOrders = async () => {
    return await axios.get(`${BASE_URL}/orders/latest`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const createOrder = async (order) => {
    return await axios.post(`${BASE_URL}/orders`, order, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const deleteOrder = async (id) => {
    return await axios.delete(`${BASE_URL}/orders/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}
