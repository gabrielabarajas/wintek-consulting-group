import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/Pagetitle/PageTitle'
import Footer from '../../components/Footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PrivatePolicy from '../../components/PrivatePolicy/PrivatePolicy';



const PolicyPage =() => {
    return(
        <Fragment>
            <PageTitle pageTitle="Política de Privacidad"/>
            <PrivatePolicy/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PolicyPage;
