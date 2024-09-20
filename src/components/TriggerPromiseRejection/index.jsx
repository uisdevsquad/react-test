import { useEffect } from "react";

const TriggerPromiseRejection = () => {
    useEffect(() => {
        // Isto irá gerar um erro de rejeição de promise não tratada
        new Promise((_, reject) => reject(new Error('Unhandled Promise Rejection')));
    }, []);

    return <div>Trigger Promise Rejection</div>;
};

export default TriggerPromiseRejection;