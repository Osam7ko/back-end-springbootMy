import { useEffect, useState } from "react";
import {retriveTodoService,deleteTodoService} from '../api/TodoApi'
import {useAuth} from '../security/AuthContext'
import { useNavigate } from "react-router-dom";

export default function ListTodosComponent(){

    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const [todos,setTodos] = useState([])

    const [message,setMessage] = useState(null)

    // const todos = [
    //     // {id:1, description: 'Learn AWS',done:false,targetDate: targetDate},
    //     // {id:2, description: 'Learn JAVA',done:false,targetDate: targetDate},
    //     // {id:3, description: 'Learn Docker',done:false,targetDate: targetDate},
    //     // {id:4, description: 'Learn DevOps',done:false,targetDate: targetDate},
    // ]

    useEffect(
        () => refreshTodos(),[]
    )

    function refreshTodos(){
        retriveTodoService(username)
            .then(response => {
                setTodos(response.data)
            }
        )
            .catch(error => console.log(error))
    }
    function deletTodo(id) {
        deleteTodoService(username,id)
        .then(
            () => {
                setMessage(`delete of todo with id:${id} successful`)
                refreshTodos()
            }
        )
    }
    function updateTodo(id) {
        navigate(`/todo/${id}`)
    }
    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return(
        <div className="container">
            <h1>Things you want todo!</h1>
            {message && <div className=" alert alert-warning">{message}</div>}
            <div>
                Todo Details
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" 
                                                onClick={() => deletTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" 
                                                onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add new todo</div>
        </div>
    )
}