import React, { useState, useEffect } from 'react';

const InfiniteScrollPagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPageData, setCurrentPageData] = useState([]);

    const divRef = React.useRef(null);
    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = divRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        if (divRef.current) {
            // Add the scroll event listener to the target div
            divRef.current.addEventListener('scroll', handleScroll);
        }

        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
            if (divRef.current) {
                divRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        // Load more data when the currentPage changes
        const itemsPerPage = 5;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentPageData((prevData) => [
            ...prevData,
            ...data.slice(startIndex, endIndex),
        ]);
    }, [currentPage, data]);

    return (
        <div
            ref={divRef}
            style={{
                overflowY: 'scroll',
                height: '400px',
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
    );
};

export default InfiniteScrollPagination;
