import { Link } from "react-router-dom";
import logo_mint from "../assets/logo_mint.png";

import './style.css';

function Header({ isPortfolio, isAbout, isContact }) {
    let linkClasses = "nav-item nav-link";
    let portfolioClasses = linkClasses;
    let aboutClasses = linkClasses;
    let contactClasses = linkClasses;
    if (isPortfolio) {
        portfolioClasses = linkClasses.split(' ').concat('font-weight-bold').join(' ');
    }
    if (isAbout) {
        aboutClasses = linkClasses.split(' ').concat('font-weight-bold').join(' ');
    }
    if (isContact) {
        contactClasses = linkClasses.split(' ').concat('font-weight-bold').join(' ');
    }
    return (
        <div>
            <header className='navbar navbar-expand'>

                <Link className="navbar-brand py-lg-2 py-xl-1" to="./index.html">

                    <img src={logo_mint} className="d-inline-block align-middle ml-3" alt=""></img>

                    <h1 className='d-inline-block logo-name mb-0 mr-3 ml-2'>Nicholas Konzen</h1>

                </Link>

                <div className="navbar-nav">

                    <Link className={aboutClasses} to="/about">About</Link>
                    <Link className={portfolioClasses} to='/portfolio'>Portfolio</Link>
                    <Link className={contactClasses} to="/contact">Contact</Link>

                </div>

                <hr className='hr-header'></hr>

            </header>
        </div>
    )
}

export default Header;