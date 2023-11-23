import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Avancemos from '../components/AvancemosSection/Avancemos';
import Transformando from '../components/TransformaSection/Transformando';
import Adn from '../components/AdnSection/AdnSection'
import Solicita from '../components/SolicitaSection/Solicita';
import { getArticles } from '../utils/services';
import BlogSection from '../components/BlogSection'

const HomePage = ({articles}) => {
    const router = useRouter();
    const { section } = router.query;

    useEffect(() => {
        if (section) {
            console.log(section)
            const { offsetTop } = document.querySelector('#' + section);
            window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
        }
    }, [section])

    return (
        <Fragment>
            <Transformando/>
            <Adn/>
            <Avancemos/>
            <Solicita/>
            <BlogSection articles={articles}/>
        </Fragment>
    )
};

export default HomePage;

export async function getStaticProps() {
    const articles = await getArticles(2);
    return {
      props: { articles },
      revalidate: 10
    };
}