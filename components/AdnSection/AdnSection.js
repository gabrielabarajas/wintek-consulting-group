import React from 'react'
import adnImage from '/public/images/gallery/adnImage.jpg'
import Image from 'next/image'
import styles from './adnSection.module.css'
import adn1 from '/public/images/icon/adn1.png'
import adn2 from '/public/images/icon/adn2.png'
import adn3 from '/public/images/icon/adn3.png'
import adn4 from '/public/images/icon/adn4.png'
import adn5 from '/public/images/icon/adn5.png'


const Adn = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <section id="adnSec" className={`wpo-about-section ${props.abClass}`}>
            <div className="container">
                <p className={styles.title}>ADN Wintek</p>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                        <div className="wpo-about-img" >
                            <Image src={adnImage} alt=""/>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">

                        <div className="wpo-about-icon-content">
                            <div className={styles.adnImgTxt}>
                                <Image className={styles.adnImage} src={adn1} alt=""/>
                                <p className={styles.text}>Garantizamos la cercanía y seguimiento con nuestros clientes.</p>
                            </div>

                            <div className={styles.adnImgTxt}>
                                <Image className={styles.adnImage} src={adn2} alt=""/>
                                <p className={styles.text}>Fusionamos la mejor gestión técnica y del equipo.</p>
                            </div>

                            <div className={styles.adnImgTxt}>
                                <Image className={styles.adnImage} src={adn3} alt=""/>
                                <p className={styles.text}>Escuchamos activamente a cada uno de nuestros clientes.</p>
                            </div>

                            <div className={styles.adnImgTxt}>
                                <Image className={styles.adnImage} src={adn4} alt=""/>
                                <p className={styles.text}>Compartimos nuestra experiencia en diferentes industrias y paises.</p>
                            </div>

                            <div className={styles.adnImgTxt}>
                                <Image className={styles.adnImage} src={adn5} alt=""/>
                                <p className={styles.text}>Evolucionamos y crecemos de la mano de las empresas que asesoramos, para mantenernos a la vanguardia.</p>
                            </div>
                            
                        </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Adn;