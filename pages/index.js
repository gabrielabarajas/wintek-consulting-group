import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Avancemos from '../components/AvancemosSection/Avancemos';
import Transformando from '../components/TransformaSection/Transformando';
import Adn from '../components/AdnSection/AdnSection'
import Solicita from '../components/SolicitaSection/Solicita';

import BlogSection from '../components/BlogSection'
import Footer from '../components/footer/Footer'
import Scrollbar from '../components/scrollbar/scrollbar'



const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'topbar-none'} />
            <Transformando/>
            <Adn/>
            <Avancemos/>
            <Solicita/>
            <BlogSection/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;