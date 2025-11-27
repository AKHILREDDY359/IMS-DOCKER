// import axios from "axios";

// export const addItem = async (item) => {
//     return await axios.post(`http://localhost:8080/api/v1.0/admin/items`, item, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteItem = async (itemId) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/admin/items/${itemId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const fetchItems = async () => {
//     return await axios.get('http://localhost:8080/api/v1.0/items', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const updateItemStock = async (itemId, newStock) => {
//     return await axios.put(
//         `http://localhost:8080/api/v1.0/admin/items/${itemId}/stock`,
//         { stock: newStock },
//         { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
//     );
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const addItem = async (item) => {
    return await axios.post(`${BASE_URL}/admin/items`, item, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const deleteItem = async (itemId) => {
    return await axios.delete(`${BASE_URL}/admin/items/${itemId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const fetchItems = async () => {
    return await axios.get(`${BASE_URL}/items`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const updateItemStock = async (itemId, newStock) => {
    return await axios.put(`${BASE_URL}/admin/items/${itemId}/stock`, 
        { stock: newStock },
        { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } }
    );
}
