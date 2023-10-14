import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Avancemos from '../components/AvancemosSection/Avancemos';
import Transformando from '../components/TransformaSection/Transformando';
import Adn from '../components/AdnSection/AdnSection'
import Solicita from '../components/SolicitaSection/Solicita';
import { getArticles } from '../utils/services';
import BlogSection from '../components/BlogSection'
import Footer from '../components/footer/Footer'
import Scrollbar from '../components/scrollbar/scrollbar'



const HomePage = ({articles}) => {
    console.log(articles);
    return (
        <Fragment>
            <Navbar hclass={'topbar-none'} />
            <Transformando/>
            <Adn/>
            <Avancemos/>
            <Solicita/>
            <BlogSection articles={articles}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;

export async function getStaticProps() {
    const articles = await getArticles(2);
    return {
      props: { articles },
    };
}