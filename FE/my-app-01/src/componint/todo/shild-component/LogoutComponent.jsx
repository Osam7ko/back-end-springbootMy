import { Link } from "react-router-dom"

export default function LogoutComponent(){
    return(
        <div className="Logout">
            <h1>You are Logout</h1>
            <div>
                Thank you for using our App
                {/* <div>To Login again <Link to='/Login'>Go Here</Link></div> */}
            </div>
        </div>
    )
}