import { Component } from 'react';
import '../Navbar/NavbarStyles.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return(
            <nav className='NavbarItems'>
                <h1 className='nav-logo'>WingWah</h1>
                <ul className='NavMenu'>
                    <li>
                        <Link to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/MenuRoute">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            Gallery
                        </Link>
                    </li>
                </ul>
                <i class="fa-solid fa-burger"></i>
            </nav>
        )
    }
}

export default Navbar