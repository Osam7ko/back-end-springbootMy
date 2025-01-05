
// Before any update
/*
import { useState } from 'react'
import {useNavigate} from 'react-router-dom' 
import { useAuth } from '../security/AuthContext'

export default function LoginComponent(){
    // Username && Password Input
    const [username,setUsername] =useState("osama")
    const [password,setPaswword] =useState('password')

    // Username && Password Check
    const [showSuccessMessage,setShowSuccessMessage] =useState(false)
    const [showErrorMessage,setShowErrorMessage] =useState(false)

    const navigate = useNavigate();

    const authContext = useAuth();


    function handelUserNameChange(event){
        setUsername(event.target.value)
    }
    function handlePasswordChange(event){
        setPaswword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            console.log('Success')
            navigate(`/Welcome/${username}`)
        }else{
            console.log('Failed')
        }
    }
    function handleSignIn(){
        navigate('/SignIn')
    }
    // function SuccessMesageComponint(){
    //     if(showSuccessMessage){
    //         return <div className='successMessage'>Authenticated Successfully</div>
    //     }return null
    // }
    // function ErrorMesageComponint(){
    //     if(showErrorMessage){
    //         return <div className='errorMessage'>Authenticated Failed, Please check your credentials</div>
    //     }return null
    // }


    return(
        <div className="Login">
            <h1>Time to Login!</h1>
            {// {showSuccessMessage && <div className='successMessage'>Authenticated Successfully</div>} }
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed, Please check your credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={handelUserNameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                    <button type="button" name="signIn" onClick={handleSignIn}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

*/

// secund changes 


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../security/AuthContext';
// import "../design/LoginComponent.css"

// export default function LoginComponent() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState(null);

//     const navigate = useNavigate();
//     const authContext = useAuth();

//     // Handlers for input fields
//     function handleUsernameChange(event) {
//         setUsername(event.target.value);
//     }

//     function handlePasswordChange(event) {
//         setPassword(event.target.value);
//     }

//     // Handle form submission
//     async function handleSubmit() {
//         try {
//             const isAuthenticated = await authContext.login(username, password);
//             if (isAuthenticated) {
//                 navigate(`/welcome/${username}`);
//             } else {
//                 setErrorMessage('Authentication failed. Please check your credentials.');
//             }
//         } catch (error) {
//             setErrorMessage('An error occurred. Please try again later.');
//         }
//     }

//     // Navigate to the sign-up page
//     function handleSignUp() {
//         navigate('/SignIn');
//     }

//     // UI for the Login form
//     return (
//         <div className="login-container">
//             <div className="login-box">
//                 <div className="logo">Time to Login!</div>
//                 <div className="input-group">
//                     <span className="icon">👤</span>
//                     <input
//                         type="text"
//                         placeholder="Enter username"
//                         value={username}
//                         onChange={handleUsernameChange}
//                     />
//                 </div>
//                 <div className="input-group">
//                     <span className="icon">🔑</span>
//                     <input
//                         type="password"
//                         placeholder="Password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                     />
//                 </div>
//                 {errorMessage && <div className="error-message">{errorMessage}</div>}
//                 <button onClick={handleSubmit}>Login</button>
//                 <p>
//                     Don't have an account?{' '}
//                     <span onClick={handleSignUp} className="signup-link">
//                         Create one here
//                     </span>
//                     .
//                 </p>
//             </div>
//         </div>
//     );
// }




// third 
/*
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        try {
            const isAuthenticated = await authContext.login(username, password);
            if (isAuthenticated) {
                navigate(`/welcome/${username}`);
            } else {
                setErrorMessage('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }
    }

    function handleSignUp() {
        navigate('/SignIn');
    }

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            }}
        >
            <div
                className="card p-4 shadow-lg"
                style={{
                    width: '400px',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff',
                }}
            >
                <h2 className="text-center text-dark mb-4">Time To Login!</h2>
                <div className="mb-3">
                    <label className="form-label ">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label ">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleSubmit}
                    style={{
                        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                        border: 'none',
                    }}
                >
                    Time To Login!
                </button>
                <p className="mt-3 text-center">
                    Don't have an account?{' '}
                    <span
                        className="text-primary "
                        onClick={handleSignUp}
                        style={{ cursor: 'pointer' }}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}
*/


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

export default function LoginComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit() {
        try {
            const isAuthenticated = await authContext.login(username, password);
            if (isAuthenticated) {
                navigate(`/welcome/${username}`);
            } else {
                setErrorMessage('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }
    }

    function handleSignUp() {
        navigate('/SignIn');
    }

    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
            }}
        >
            <div
                className="card p-4 shadow-lg"
                style={{
                    width: '400px',
                    borderRadius: '15px',
                    backgroundColor: '#ffffff',
                }}
            >
                <h2 className="text-center mb-4" style={{ color: '#6a11cb' }}>Time To Login!</h2>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <button
                    className="btn btn-primary w-100 mt-3"
                    onClick={handleSubmit}
                    style={{
                        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                        border: 'none',
                    }}
                >
                    Login
                </button>
                <p className="mt-3 text-center">
                    Don't have an account?{' '}
                    <span
                        className="text-primary fw-bold"
                        onClick={handleSignUp}
                        style={{ cursor: 'pointer' }}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
}
