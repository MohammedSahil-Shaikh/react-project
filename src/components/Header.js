import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {

    const [loginBtn, setLoginBtn] = useState('Login');

    const handleLoginClick = () => {
        loginBtn === 'Login' ? setLoginBtn('Logout') : setLoginBtn('Login');
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="app-logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-logout-btn" onClick={handleLoginClick}>{loginBtn}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;