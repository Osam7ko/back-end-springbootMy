
// Before any update 
/*
export default function SignIn(){
    return(
        <div className='SignInPage'>
            <p>Welcome to the website</p>
            <p>Please Sign In</p>
            <div className='SignInForm'>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <label>Password again:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <button type="button" name="signIn">Sign In</button>
                </div>
            </div>
        </div>
    )
}
    */


// secund change 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../design/SignUpComponent.css'; // Import the CSS file for styling

export default function SignInComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    // Handlers for input fields
    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // Handle form submission
    async function handleSubmit() {
        if (!username || !password) {
            setErrorMessage('All fields are required!');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                navigate(data.redirectUrl);
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.errorMessage);
            }
        } catch (error) {
            setErrorMessage('An error occurred! Please try again later.');
        }
    }

    // UI for the Sign-In form
    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="logo">Sign In</div>
                <div className="input-group">
                    <span className="icon">👤</span>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="input-group">
                    <span className="icon">🔑</span>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button onClick={handleSubmit}>Sign In</button>
            </div>
        </div>
    );
}