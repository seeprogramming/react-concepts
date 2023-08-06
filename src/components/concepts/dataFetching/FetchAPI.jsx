import React, { useState, useEffect } from 'react';

const FetchAPI = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/todos'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Data Fetching with Fetch API</h1>
            <ol className='list-group list-group-numbered'>
                {data.slice(0, 15).map((item) => (
                    <li className='list-group-item' key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default FetchAPI;
