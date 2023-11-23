import React, { useState } from 'react';
import Logo from '/public/images/logo.png'
import Link from 'next/link'
import MobileMenu from '../../components/MobileMenu'
import HeaderTopbar from '../HeaderTopbar'
import Image from 'next/image'
import Nav from 'react-bootstrap/Nav';


const Header = (props) => {
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
                                    <Link className="navbar-brand" href="/"><Image src={Logo}
                                        alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link href="/">Inicio</Link>
                                        </li>
                                        <li>
                                            <Link href="/?section=adnSec" >ADN Wintek</Link>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link href="/?section=avancemosSec" >Avancemos Juntos</Link>
                                        </li>
                                        <li><Link href="/?section=contactSec" >Contacto</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link href="/?section=blogSec" >Blog</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link className="btn theme-btn" href="/?section=contactSec" >Solicita Información</Link>
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