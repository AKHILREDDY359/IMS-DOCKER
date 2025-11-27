// import axios from "axios";

// export const addCategory = async (category) => {
//     return await axios.post('http://localhost:8080/api/v1.0/admin/categories', category, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteCategory = async (categoryId) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/admin/categories/${categoryId}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const fetchCategories = async () => {
//     return await axios.get('http://localhost:8080/api/v1.0/categories', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const addCategory = async (category) => {
    return await axios.post(`${BASE_URL}/admin/categories`, category, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`${BASE_URL}/admin/categories/${categoryId}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const fetchCategories = async () => {
    return await axios.get(`${BASE_URL}/categories`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}
