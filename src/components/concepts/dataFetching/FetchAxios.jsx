import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchAxios = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos'

                );
                setData(response.data);
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
            <h1>Data Fetching with Axios</h1>
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

export default FetchAxios;
