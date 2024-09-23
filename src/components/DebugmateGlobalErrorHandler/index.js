import React, { useEffect } from 'react';
import Debugmate from 'debugmate';

const debugmate = new Debugmate();

const DebugmateGlobalErrorHandler = ({ children }) => {
    debugmate.setUser({
        id: 1,
        name: 'Jane Doe',
        email: 'janedoe@email.com'
    });
    
    debugmate.setEnvironment({
        environment: 'development',
        debug: true,
        timezone: 'America/New_York'
    });

    useEffect(() => {
        debugmate.setupGlobalErrorHandling();

        return () => {
            debugmate.cleanupGlobalErrorHandling();
        };
    }, []);

    return <>{children}</>;
};

export default DebugmateGlobalErrorHandler;