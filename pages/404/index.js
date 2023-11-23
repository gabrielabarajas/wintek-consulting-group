import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Error from '../../components/404'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'


const ErrorPage =() => {
    return(
        <Fragment>
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
        </Fragment>
    )
};
export default ErrorPage;

