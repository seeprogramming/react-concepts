import React, { useState } from 'react';
import Button from '../../common/Button';

const itemsPerPage = 5;

const SimplePagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    return (
        <div>
            <ol className='list-group list-group-numbered'>
                {currentPageData.map((item) => (
                    <li className='list-group-item' key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ol>
            <div className='mt-3 mb-3'>
                <Button
                    disabled={currentPage === 1}
                    btnAction={handlePrevPage}
                    title='Previous'
                />
                <Button
                    disabled={endIndex >= data.length}
                    btnAction={handleNextPage}
                    title='Next'
                />
            </div>
        </div>
    );
};

export default SimplePagination;
