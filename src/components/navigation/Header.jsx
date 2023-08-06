import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='App-header'>
            <nav className='navbar bg-body-tertiary'>
                <div className='container-fluid'>
                    <span className='navbar-brand fw-bold'>
                        <Link to='/'>React Concepts</Link>
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
