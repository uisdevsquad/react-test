import React, { useState, useEffect } from 'react';

const StateMutationError = () => {
    const [state, setState] = useState({ name: 'Initial' });

    useEffect(() => {
        // Mutando diretamente o estado, o que é uma prática incorreta.
        state.name = 'Mutated'; 
        console.log('State:', state); // Isso causará comportamento inesperado
    }, []);

    return <div>Check console for state mutation error.</div>;
};

export default StateMutationError;