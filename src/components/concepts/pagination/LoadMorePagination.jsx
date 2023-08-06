import React, { useState } from 'react';
import Button from '../../common/Button';

const itemsPerPage = 5;

const LoadMorePagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(0, endIndex);

    return (
        <div>
            <div
                style={{
                    overflowY: 'scroll',
                    height: '500px',
                }}
            >
                <ol className='list-group list-group-numbered'>
                    {currentPageData.map((item, i) => (
                        <li className='list-group-item' key={i}>
                            {item.title}
                        </li>
                    ))}
                </ol>
            </div>
            <Button
                disabled={endIndex >= data.length}
                btnAction={handleLoadMore}
                title='Load More'
            />
        </div>
    );
};

export default LoadMorePagination;
