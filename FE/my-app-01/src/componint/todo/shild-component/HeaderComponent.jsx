import {Link} from 'react-router-dom'
import { useAuth } from '../security/AuthContext'

export default function HeaderComponent(){

    // const authContext = useContext(AuthContext)

    const authContext = useAuth()
    const isAuth = authContext.isAuth

    function logout(){
        authContext.logout()
    }

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://lgc.com.sa/">LGC Company</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5">
                                    {isAuth && <Link className="nav-link" to="/welcome/osama">Home</Link>}
                                </li>
                                <li className="nav-item fs-5">
                                    {isAuth && <Link className="nav-link" to="/Todos">Todos</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {!isAuth && <Link className="nav-link" to="/Login">Login</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isAuth &&<Link className="nav-link" to="/Logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}