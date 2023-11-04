import React from "react"
import Nav from 'react-bootstrap/Nav';
import styles from './Avancemos.module.css'
import avancemosImg from '/public/images/avancemos.jpg'
import Image from "next/image"


const Avancemos = () => {

    const scrollTo = (selector) => {
        const { offsetTop } = document.querySelector(selector);
        window.scrollTo({ top: offsetTop - 110, behavior: 'smooth' });
      }

    return (
        <section id="avancemosSec" className="wpo-hero-section-1 wpo-hero-section-2">
            <div className="container">
            <p className={styles.title}>Avancemos Juntos</p>
                <div className="row">
                    <div className="col col-xs-6 col-lg-6">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <p className={styles.text}>Implementamos, capacitamos, asesoramos y damos seguimiento a cada cliente para que tenga una integración de procesos exitosa en su compañía. </p>
                            </div>
                            <div className="btns">
                            <Nav.Link className="btn theme-btn" onClick={() => scrollTo('#contactSec')} >Solicita Información</Nav.Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <div className="r-img">
                        <Image src={avancemosImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Avancemos;