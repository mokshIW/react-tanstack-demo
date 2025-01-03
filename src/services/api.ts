import axios from "axios";
import { Todo } from "../types/todo";
import { Projects } from "../types/projects";
import { Product } from "../types/product";

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

// Projects

// Fetch Projects
export const getProjects = async (page = 1) => {
  return (
    await axiosInstance.get<Projects[]>(`projects?_page=${page}&_limit=3`)
  ).data;
};

// Products for Infinite Scroll

// Fetch Products
export const getProducts = async ({ pageParam }: { pageParam: number }) => {
  return (
    await axiosInstance.get<Product[]>(
      `products?_page=${pageParam + 1}&_limit=3`
    )
  ).data;
};

// Fetch Product
export const getProduct = async (id: number) => {
  return (await axiosInstance.get<Product>(`products/${id}`)).data;
};
