import axios from "axios";
import { Todo } from "../types/todo";
import { act } from "react";

const BASE_URL = "http://localhost:8080";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Queries to fetch data

// Fetch Functions for Todos
export const getTodosIds = async () => {
  return (await axiosInstance.get<Todo[]>("/todos")).data.map(
    (todo) => todo.id
  );
};

export const getTodo = async (id: number) => {
  return (await axiosInstance.get<Todo>(`/todos/${id}`)).data;
};

// Mutations to update data

// Create Todo
export const createTodo = async (data: Todo) => {
  await axiosInstance.post("todos", data);
};

// Update Todo
export const updateTodo = async (data: Todo) => {
  await axiosInstance.put(`todos/${data.id}`, data);
};

// Delete Todo
export const deleteTodo = async (id: number) => {
  await axiosInstance.delete(`todos/${id}`);
};
