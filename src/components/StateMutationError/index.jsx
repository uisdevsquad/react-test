import React, { useState, useEffect } from 'react';

import Debugmate from 'debugmate';
const debugmate = new Debugmate();

const StateMutationError = () => {
    const [state, setState] = useState({ name: 'Initial' });

    useEffect(() => {
        try {
            state.name = 'Mutated';

            throw new Error('State was mutated directly!');
        } catch (error) {
           debugmate.publish(error);
        }
    }, [state]);

    return <div>Check console for state mutation error.</div>;
};

export default StateMutationError;