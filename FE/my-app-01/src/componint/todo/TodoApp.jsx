import { BrowserRouter , Routes ,Route, Navigate } from 'react-router-dom'
import './TodoApp.css'
import LogoutComponent from './shild-component/LogoutComponent'
import FooterComponent from './shild-component/FooterComponent'
import HeaderComponent from './shild-component/HeaderComponent'
import ListTodosComponent from './shild-component/ListTodosComponent'
import ErrorComponent from './shild-component/ErrorComponent'
import SignIn from './shild-component/SignIn'
import WelcomeComponent from './shild-component/WelcomeComponent'
import AuthProvider,{useAuth} from './security/AuthContext'
import LoginComponent from './shild-component/LoginComponent'
import TodoCompo from './shild-component/TodoCompo'


function AuthenticatedRoute({children}){
    const authContext = useAuth()

    if(authContext.isAuth)
        return children

    return <Navigate to="/"/>
}


export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/> }/>
                        <Route path='/login' element={<LoginComponent/> }/>
                        <Route path='/SignIn' element={<SignIn/>}/>
                        
                        <Route path='/Welcome/:username' element={
                            <AuthenticatedRoute>
                            <WelcomeComponent/>
                            </AuthenticatedRoute>
                        }/>
                        <Route path='/Todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoCompo/>
                            </AuthenticatedRoute>
                            }/>
                        <Route path='/Logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                            }/>
                        
                        <Route path='*' element={<ErrorComponent/>}/>
                    </Routes>
                    
                </BrowserRouter>
            </AuthProvider>
        </div>
    )
}


