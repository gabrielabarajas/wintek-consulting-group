import React, { useState } from 'react';
import Logo from '/public/images/logo.png'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../HeaderTopbar'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = (e) => {
        console.log(e);
        window.scrollTo(200, 0);
    }
    
    const scrollTo = (selector) => {
        const { offsetTop } = document.querySelector(selector);
        window.scrollTo({ top: offsetTop - 115, behavior: 'smooth' });
      }

    return (
        <header id="header" className={props.hclass}>
            <HeaderTopbar/>
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Inicio</Link>
                                        </li>
                                        <li><Nav.Link onClick={() => scrollTo('#adnSec')} >ADN Wintek</Nav.Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Avancemos juntos</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/">Contacto</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/contact">Solicita Información</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header;