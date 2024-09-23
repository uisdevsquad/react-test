import { useEffect } from "react";

function TriggerEventError(){

    console.log(process.env.REACT_APP_DEBUGMATE_CONTEXT);

    useEffect(() => {
        document.getElementById('nonexistent').addEventListener('click', () => {
            throw new Error('Event Error');
        });
    }, []);

    return <div id="nonexistent">Trigger Event Error</div>;
};

export default TriggerEventError;