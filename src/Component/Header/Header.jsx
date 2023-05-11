import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleSignout = () =>{
        logOut()
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to= '/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? 
                    <>
                    <span>{user.email}</span> 
                    <button onClick={handleSignout} className="btn btn-xs">Sign out</button>
                    </>:
                    <Link to="/login">Log in</Link>
                    
                }
            </div>
        </div>
    );
};

export default Header;