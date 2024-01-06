import React, {Fragment} from 'react';
import PageTitle from './page-title/PageTitle'
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