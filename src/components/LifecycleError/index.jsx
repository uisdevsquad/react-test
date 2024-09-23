import React, { useEffect } from 'react';

const LifecycleError = () => {
    useEffect(() => {
        throw new Error('Lifecycle Error occurred in useEffect!');
    }, []);

    return <div>Check console for lifecycle error.</div>;
};

export default LifecycleError;