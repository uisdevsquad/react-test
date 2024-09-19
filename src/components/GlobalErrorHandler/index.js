import React, { useEffect } from 'react';
import Debugmate from 'debugmate';

const debugmate = new Debugmate();

const GlobalErrorHandler = ({ children }) => {
    useEffect(() => {
        debugmate.setupGlobalErrorHandling();

        return () => {
            debugmate.cleanupGlobalErrorHandling();
        };
    }, []);

    return <>{children}</>;
};

export default GlobalErrorHandler;