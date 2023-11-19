import React from "react"
import Nav from 'react-bootstrap/Nav';
import styles from './Avancemos.module.css'
import avancemosImg from '/public/images/gallery/avancemos.jpg'
import Image from "next/image"


const Avancemos = () => {

    const scrollTo = (selector) => {
        const { offsetTop } = document.querySelector(selector);
        window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
    }

    return (
        <section id="avancemosSec" className={`${styles.colorSection} wpo-about-section`}>
            <div className={`${styles.mainContainer} container`}>

            <p className={styles.title}>Avancemos Juntos</p>
            <div className="row">
            <div className={`${styles.textSection} col-lg-6 col-md-12 col-12`}>
            <div className="wpo-about-wrap">
                <div className="wpo-about-text">
                        <p className={styles.text}>Implementamos, capacitamos, asesoramos y damos seguimiento a cada cliente para que tenga una integración de procesos exitosa en su compañía. </p>
                    <div className="btns">
                    <Nav.Link className="btn theme-btn" onClick={() => scrollTo('#contactSec')} >Solicita Información</Nav.Link>
                    </div>
                </div>
                 </div>
            </div>

            <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-wrap">
                    <div className="wpo-about-img">
                        <div className={styles.avancemosImg}>
                            <Image src={avancemosImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

        </section>
    )
}

export default Avancemos;