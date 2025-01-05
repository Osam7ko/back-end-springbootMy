import { apiClint } from "./ApiClient"

export function retriveHelloWorldBean(){
    return apiClint.get('/hello-world-bean')
}

export function retriveHelloWorld(){
    return apiClint.get('/hello-world')
}

export const retriveHelloWorldPathVari
    = (username) => apiClint.get(`/hello-world/path-variable/${username}`
    //     ,{
    //     headers: {
    //         Authorization: token
    //     }
    // }
)


