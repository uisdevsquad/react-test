import { useEffect } from "react";

function TriggerEventError(){
    useEffect(() => {
        document.getElementById('nonexistent').addEventListener('click', () => {
            // Isto irá gerar um erro ao tentar adicionar um listener a um elemento inexistente
            throw new Error('Event Error');
        });
    }, []);

    return <div id="nonexistent">Trigger Event Error</div>;
};

export default TriggerEventError;