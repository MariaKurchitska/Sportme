import NavLinks from './NavLinks';
import './navbar.scss'
import { Link } from "react-router-dom"

function Navbar () {

    return (   
        <div className='nav'>
                    <ul>
                        <li className='nav__list'>
                            <Link to='/' className='nav__links'>
                            <NavLinks/>
                            </Link>
                        </li>
                    </ul>
        </div>          
    )
}

export default Navbar;