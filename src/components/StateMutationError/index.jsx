import React, { useState, useEffect } from 'react';

import { useDebugmate } from '../../providers/DebugmateProvider';
import { environment, user } from '../../utils/debugmateContext';

const StateMutationError = () => {
    const [state, setState] = useState({ name: 'Initial' });
    const debugmate = useDebugmate();

    useEffect(() => {
        try {
            state.name = 'Mutated';

            throw new Error('State was mutated directly!');
        } catch (error) {
           debugmate.publish(error, user, environment);
        }
    }, [state]);

    return <div>Check console for state mutation error.</div>;
};

export default StateMutationError;