import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link exact to="/">Home</Link>
                </li>

                <li>
                    <Link exact to="/about">About</Link>
                </li>

                <li>
                    <Link exact to="/services">Services</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
