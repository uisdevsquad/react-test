import React from 'react';

const ClickEventError = () => {
    const handleClick = () => {
        throw new Error('Click Event Error!');
    };

    return <button onClick={handleClick}>Click me to generate an error</button>;
};

export default ClickEventError;