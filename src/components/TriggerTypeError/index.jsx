import { useEffect } from "react";

const TriggerTypeError = () => {
    useEffect(() => {
        // Isto irá gerar um TypeError
        const obj = null;
        obj.someMethod();
    }, []);

    return <div>Trigger Type Error</div>;
};

export default TriggerTypeError;