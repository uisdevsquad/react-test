import React, { useEffect } from 'react';

import Debugmate from "debugmate"; // Caminho para o arquivo debugmate.js

const debugmate = new Debugmate();

const GlobalErrorHandler = ({children }) => {
    useEffect(() => {
        const handleGlobalError = (message, source, lineno, colno, error) => {
            console.error('Global error captured:', { message, source, lineno, colno, error });
            debugmate.publish(error, { message, source, lineno, colno, error });
        };

        const handleUnhandledRejection = (event) => {
            console.error('Unhandled Promise Rejection:', event.reason);
            debugmate.publish(event.reason, { message: event.reason.message });
        };

        window.onerror = handleGlobalError;
        window.addEventListener('unhandledrejection', handleUnhandledRejection);

        return () => {
            window.onerror = null;
            window.removeEventListener('unhandledrejection', handleUnhandledRejection);
        };
    }, []);

    return <>{children}</>;
};

export default GlobalErrorHandler;