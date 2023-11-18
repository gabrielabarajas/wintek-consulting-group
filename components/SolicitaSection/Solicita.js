import React from 'react';
import styles from './Solicita.module.css'
import ContactForm from '../ContactFrom/ContactForm'



const Solicita = () => {
    return(
        <section id="contactSec" className="wpo-contact-pg-section">
            <div className={`${styles.mainContainer} container`}>
            <p className={styles.title}>Inicia tu Camino al Éxito</p>
            <p className={styles.text}>Comencemos a trabajar en tu proyecto</p>
            <p className={styles.smallText}>Ingresa tus datos y te contactaremos a la brevedad</p>
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35364.541765872!2d2.1690977288276865!3d41.389523212957464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1697905390495!5m2!1sen!2ses"></iframe>
                </div>
            </section>
        </section>
     )
}

export default Solicita;