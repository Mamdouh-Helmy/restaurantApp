import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo.png';

export default function Header() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleClass = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='togeal' onClick={toggleClass}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`link ${isToggled ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/">Venue</Link></li>
                        <li><Link to="/">Events</Link></li>
                    </ul>
                </div>
                <div className={`btn ${isToggled ? 'active' : ''}`}>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
}
