import React, { useEffect } from 'react';

const UnhandledRejectionError = () => {
    useEffect(() => {
        // Promessa que será rejeitada sem catch, gerando um unhandled rejection
        Promise.reject('Unhandled Rejection Error!');
    }, []);

    return <div>Check console for unhandled rejection error.</div>;
};

export default UnhandledRejectionError;