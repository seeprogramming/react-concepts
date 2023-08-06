import React, { useEffect } from 'react';
import Header from '../navigation/Header';

const MainLayout = (props) => {
    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = props.pageTitle;
    }, []);
    return (
        <div className='App'>
            <Header />
            <div className='container-fluid mt-5 mb-5'>{props.children}</div>
        </div>
    );
};

export default MainLayout;
