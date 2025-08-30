import axios from "axios";
const BASE_URL = 'http://localhost:8080/todo'; // Replace with your backend URL


export const getAllTodos = () => axios.get(BASE_URL);

export const getTodoById = (id) => axios.get(`${BASE_URL}/${id}`);

export const createTodo = (todo) => axios.post(BASE_URL, todo);

export const updateTodo = (id, updatedTodo) => axios.put(`${BASE_URL}/${id}`, updatedTodo);

export const deleteTodo = (id) => axios.delete(`${BASE_URL}/${id}`);