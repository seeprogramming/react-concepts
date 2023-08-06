import React from 'react';
import CONCEPTS from '../data/concepts.json';
import ArrowRight from '../images/arrow-right.svg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home - React Concepts</title>
            </Helmet>
            <div className='row'>
                {CONCEPTS &&
                    CONCEPTS.map((concept, i) => {
                        return (
                            <div className='col-md-3' key={i}>
                                <div className='card'>
                                    <div className='card-body custom-card'>
                                        <div className='card-title'>
                                            {concept?.name}
                                        </div>
                                        <Link
                                            to={`/concepts/${concept?.path}`}
                                            className='custom-link'
                                        >
                                            <img
                                                src={ArrowRight}
                                                alt='Right Icon'
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </React.Fragment>
    );
};

export default Home;
