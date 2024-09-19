// ErrorBoundary.js
import React from 'react';
import Debugmate from "debugmate"; // Caminho para o arquivo debugmate.js

const debugmate = new Debugmate();// O módulo que você criou para enviar erros

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Atualize o estado para que o próximo render mostre a UI de fallback
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Envie o erro para o servidor
        debugmate.publish(error, errorInfo);
    }

    componentDidMount() {
        window.onerror = function (message, source, lineno, colno, error) {
            console.error('Global error captured:', { message, source, lineno, colno, error });

            // Enviar para a API
        };

        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled Promise Rejection:', event.reason);

            // Enviar para a API
        });
    }

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI de fallback aqui
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;