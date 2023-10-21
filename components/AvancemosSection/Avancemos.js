import React from "react"
import Nav from 'react-bootstrap/Nav';
import VideoModal from '../../components/ModalVideo'
import styles from './Avancemos.module.css'
import hero from '/public/images/slider/right-img2.png'
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
                            <div className="wpo-hero-title-top">
                                <p className={styles.smallText}>En Wintek tenemos los recursos adecuados</p>
                            </div>
                            <div className="wpo-hero-title">
                                <p className={styles.text}>Implementamos, capacitamos, asesoramos y damos seguimiento a cada cliente para que tenga una integración de procesos exitosa en su compañía. </p>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>texto adicional</p>
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
                        <Image src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className="pop-up-video">
                <div className="video-holder">
                    <VideoModal />
                </div>
            </div>
        </section>
    )
}

export default Avancemos;