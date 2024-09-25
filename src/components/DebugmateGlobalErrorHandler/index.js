import React, { useEffect } from 'react';
import Debugmate from 'debugmate';
import {  environment, user } from '../../utils/debugmateContext';

const debugmate = new Debugmate();

const DebugmateGlobalErrorHandler = ({ children }) => {
    useEffect(() => {
        debugmate.setUser(user);
        debugmate.setEnvironment(environment)
        debugmate.setupGlobalErrorHandling();

        return () => {
            debugmate.cleanupGlobalErrorHandling();
        };
    }, []);

    return <>{children}</>;
};

export default DebugmateGlobalErrorHandler;