import './header.scss'
import { LiaSearchSolid } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";

function Header () {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header__top'>
                <div className='left'>
                    <select className='left__lang' name="" id="">
                        <option value="ua">ua</option>
                        <option value="en">en</option>
                    </select>
                    <div className='left__search'>
                    <LiaSearchSolid className='left__icon' />
                    <input className='left__text' placeholder="Пошук" type='search'></input>
                    </div>
                </div>
                <div className="logo">
                <a href="#/">SportMe</a>
                </div>
                <div className='right'>
                    <div className="right__tel">
                    <a href="tel:38 095 454 55 45">+380954545545</a>
                    </div>
                    <div className='account'>
                    <a href="#/">
                    <HiOutlineUser className='account__user'/>
                    </a>
                    <a href="#/">
                    <GoHeart className='account__heart'/>
                    </a>
                    <a href="#/">
                    <HiOutlineShoppingBag className='account__bag'/>
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </header>

    )

}

export default Header;