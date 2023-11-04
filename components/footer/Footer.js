import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo.png'
import Image from 'next/image'


const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="widget about-widget">
                        <div className="logo widget-title">
                            <Link onClick={ClickHandler} href="/">
                                <Image src={Logo} alt="" />
                            </Link>
                        </div>
                        <p>info@wintek.consulting</p>
                        <ul>
                            <li>
                                <Link onClick={ClickHandler} href="/">
                                    <i className="ti-linkedin"></i>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} href="/">
                                    <i className="ti-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={ClickHandler} href="/">
                                    <i className="ti-facebook"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2023 Wintek Consulting Group. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;