import React, {Fragment} from 'react';
import PageTitle from '../../components/page-title/PageTitle'
import Error from '../../components/404'


const ErrorPage =() => {
    return(
        <Fragment>
            <PageTitle pageTitle={'404'} pagesub={'404'}/>
            <Error/>
        </Fragment>
    )
};
export default ErrorPage;

