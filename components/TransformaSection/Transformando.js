import React from 'react'
import Link from 'next/link'
import Services from '../../api/service'
import Image from 'next/image'
import styles from './Transformando.module.css'

const Transformando = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="wpo-service-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <p className={styles.title}>TRASNSFORMANDO EMPRESAS</p>
                        </div>
                    </div>
                </div>
                <div className= {`row ${styles.transfContainer}`}>
                    {Services.map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-icon">
                                    <div className="icon">
                                        <Image src={service.sIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-service-text">
                                    <p className={styles.text}>{service.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Transformando;