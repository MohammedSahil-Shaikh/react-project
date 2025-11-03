import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState('Login');
    const onlineStatus = useOnlineStatus();

    const handleLoginClick = () => {
        loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login');
    }

    return (
        <div className="header flex justify-between bg-amber-400">
            <div className="logo-container bg-amber-400">
                <img className="logo max-w-28 bg-amber-400" alt="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex h-28 items-center">
                    <li className="mx-4">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className="mx-4 hover:text-orange-500 text-xl"><Link to={'/'}>Home</Link></li>
                    <li className="mx-4 hover:text-orange-500 text-xl"><Link to={'/about'}>About Us</Link></li>
                    <li className="mx-4 hover:text-orange-500 text-xl"><Link to={'/contact'}>Contact</Link></li>
                    <li className="mx-4 hover:text-orange-500 text-xl"><Link to={'/grocery'}>Grocery</Link></li>
                    <li className="mx-4 hover:text-orange-500 text-xl">Cart</li>
                    <button className="login-logout-btn mx-4 hover:text-orange-500 cursor-pointer text-xl" onClick={handleLoginClick}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;