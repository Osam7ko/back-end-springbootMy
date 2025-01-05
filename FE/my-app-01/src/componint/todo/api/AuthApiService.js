// import { apiClint } from "./ApiClient";

// export const executeBasicAuth = (token) =>
//     apiClint.get('/basicauth', {
//         headers: {
//             Authorization: token, // Include the Authorization header
//         },
//     });
// Function to send login request to Spring Boot

import axios from "axios";

export function executeBasicAuth(username, password) {
    return axios.post(
        "http://localhost:8080/signin",
        {
            username: username,
            password: password,
        },
        {
            withCredentials: true, // Ensure cookies/sessions are sent correctly
        }
    );
}
