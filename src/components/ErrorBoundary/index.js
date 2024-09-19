import React from 'react';
import Debugmate from "debugmate";

const debugmate = new Debugmate();

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

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI de fallback aqui
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;