import {Link,useParams} from 'react-router-dom'
import { useState } from 'react'
import Clock from './clockPage/Clock';
import { retriveHelloWorldBean,retriveHelloWorld,retriveHelloWorldPathVari } from '../api/HelloWorldApiService';
import { useAuth } from '../security/AuthContext'




export default function WelcomeComponent(){

    const currDate = new Date();
    const {username} = useParams()
    
    const [message,setMessage]= useState(null)

    const authContext = useAuth()
    
    function callHelloWorldApi(){
        retriveHelloWorld()
            .then(
                (response) => successfulRespons(response)
            ).catch(
                (error) => failfulRespons(error)
            )
    }
    function callHelloWorldBeanApi(){
        retriveHelloWorldBean('osama',authContext.token)
            .then(
                (response) => successfulRespons2(response)
            ).catch(
                (error) => failfulRespons(error)
            )
    }
    function callHelloWorldPathVari(){
        retriveHelloWorldPathVari('osama')
            .then(
                (response) => successfulRespons2(response)
            ).catch(
                (error) => failfulRespons(error)
            )
    }
    

    function successfulRespons(response){
        console.log(response)
        setMessage(response.data)
    }
    function successfulRespons2(response){
        console.log(response)
        setMessage(response.data.message)
    }
    function failfulRespons(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Welcome Component
                <div>
                    <h2 className='time'>The time now is {currDate.toLocaleTimeString()}.</h2>
                    <Clock/>
                </div>
                <div>Your Todos <Link to='/Todos'>Go Here</Link></div>
                <div>Your Product <Link to='/Product'>Go Here</Link></div>
                <button className='btn btn-success m-5' onClick={callHelloWorldApi}>
                    Cell Hello World Rest Api
                </button>
                <button className='btn btn-success m-5' onClick={callHelloWorldBeanApi}>
                    Cell Hello World Bean Rest Api
                </button>
                <button className='btn btn-success m-5' onClick={callHelloWorldPathVari}>
                    Cell Hello World Path Var Rest Api
                </button>
                <div className='text-info'>
                    {message}
                </div>
            </div>
        </div>
    )
}