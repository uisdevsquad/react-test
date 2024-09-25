import React, { createContext, useContext, useEffect, useMemo } from 'react';
import Debugmate from 'debugmate';
import { environment, user } from '../utils/debugmateContext';

// Criando o contexto
const DebugmateContext = createContext(null);

export const useDebugmate = () => {
    return useContext(DebugmateContext);
};

const DebugmateProvider = ({ children }) => {
    const debugmate = useMemo(() => new Debugmate(), []);

    useEffect(() => {
        debugmate.setUser(user);
        debugmate.setEnvironment(environment);
        debugmate.setupGlobalErrorHandling();

        return () => {
            debugmate.cleanupGlobalErrorHandling();
        };
    }, [debugmate]);

    return (
        <DebugmateContext.Provider value={debugmate}>
            {children}
        </DebugmateContext.Provider>
    );
};

export default DebugmateProvider;