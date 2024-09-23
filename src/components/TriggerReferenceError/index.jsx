import { useEffect } from "react";

const TriggerReferenceError = () => {
    useEffect(() => {
        // Isto irá gerar um ReferenceError
        // notExistsFunction();
    }, []);

    return <div>Trigger Reference Error</div>;
};

export default TriggerReferenceError;