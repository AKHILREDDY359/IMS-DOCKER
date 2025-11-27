// import axios from "axios";

// export const addUser = async (user) => {
//    return await axios.post('http://localhost:8080/api/v1.0/admin/register', user, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const deleteUser = async (id) => {
//     return await axios.delete(`http://localhost:8080/api/v1.0/admin/users/${id}`, {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

// export const fetchUsers = async () => {
//     return await axios.get('http://localhost:8080/api/v1.0/admin/users', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}});
// }

import axios from "axios";

const BASE_URL = "http://localhost:8082/api/v1.0";

export const addUser = async (user) => {
   return await axios.post(`${BASE_URL}/admin/register`, user, {
       headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
   });
}

export const deleteUser = async (id) => {
    return await axios.delete(`${BASE_URL}/admin/users/${id}`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}

export const fetchUsers = async () => {
    return await axios.get(`${BASE_URL}/admin/users`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
}
