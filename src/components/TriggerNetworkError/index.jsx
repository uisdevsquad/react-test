import { useEffect } from "react";

const TriggerNetworkError = () => {
    useEffect(() => {
        // Isto irá gerar um erro de rede ao tentar buscar um URL inválido
        fetch('https://invalid-url')
            .then(response => response.json())
            .catch(error => {
                console.error('Network Error:', error);
                throw error; // Garantindo que o erro será lançado para o handler global
            });
    }, []);

    return <div>Trigger Network Error</div>;
};

export default TriggerNetworkError;