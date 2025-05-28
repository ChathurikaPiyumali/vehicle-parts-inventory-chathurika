import axios from 'axios';

const BASE = 'http://localhost:5000/parts';

export const fetchParts = (q) => axios.get(BASE, { params: q });
export const fetchPart = (id) => axios.get(`${BASE}/${id}`);
export const createPart = (data) => axios.post(BASE, data);
export const updatePart = (id, data) => axios.put(`${BASE}/${id}`, data);
export const deletePart = (id) => axios.delete(`${BASE}/${id}`);

