import React from 'react'

import img1 from '/public/images/icon/img1.gif'
import img2 from '/public/images/icon/img2.gif'
import img3 from '/public/images/icon/img3.gif'
import img4 from '/public/images/icon/img4.gif'
import Image from 'next/image'


const Features = (props) => {

     const featres = [
         {
            fIcon:img1,
            title:'Gestión de Proyectos SAP',
            des:'',
         },
         {
            fIcon:img2,
            title:'Implementación y Mentoring de Módulos Financieros en Rol Outs Internacionales',
            des:'',
         },
         {
            fIcon:img3,
            title:'Mentoring en Módulos Fiancieros en S/4 HANA',
            des:'',
         },
         {
            fIcon:img4,
            title:'Formación Personalizada en Módulos Financieros para Equipos Internos y Usuarios Finales',
            des:'',
         }
         
     ]


    return(
        <section className={`wpo-features-section section-padding  ${props.featuresClass}`}>
            <div className="container">
                <div className="row">
                    {featres.map((featres, fitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={fitem}>
                            <div className="wpo-features-item">
                                <div className="wpo-features-icon">
                                    <div className="icon">
                                        <Image src={featres.fIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="wpo-features-text">
                                    <h2>{featres.title}</h2>
                                    <p>{featres.des}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;