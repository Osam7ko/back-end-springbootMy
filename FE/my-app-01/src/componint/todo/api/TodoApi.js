import { apiClint } from "./ApiClient"

export const retriveTodoService
    = (username) => apiClint.get(`/users/${username}/todos`)

export const retriveOneTodoService
    = (username,id) => apiClint.get(`/users/${username}/todos/${id}`)


export const deleteTodoService
    = (username,id) => apiClint.delete(`/users/${username}/todos/${id}`)


export const retrieveTodoApi
    = (username,id) => apiClint.get(`/users/${username}/todos/${id}`)

export const updateTodoApi
    = (username,id,todo) => apiClint.put(`/users/${username}/todos/${id}`,todo)

export const createTodoApi
    = (username,todo) => apiClint.post(`/users/${username}/todos`,todo)
