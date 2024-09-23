import React, { useEffect } from 'react';

const AsyncError = () => {
    useEffect(() => {
        const fetchData = async () => {
            throw new Error('Async Error occurred!');
        };

        fetchData();
    }, []);

    return <div>Check console for async error.</div>;
};

export default AsyncError;