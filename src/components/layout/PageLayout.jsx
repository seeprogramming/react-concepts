import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PageLayout = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{props.pageTitle} - React Concepts</title>
            </Helmet>
            <div className='custom-page'>
                <div className='page-title'>
                    <h4 className='fw-bold'>{props.pageTitle}</h4>
                    <div className='custom-page__content'>{props.children}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PageLayout;
