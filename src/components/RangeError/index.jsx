import Debugmate from "debugmate";
import { useEffect } from "react";

const debugmate = new Debugmate();

function RangeError() {
    useEffect(() => {
        try {
            // Exemplo de RangeError: Criação de um array com tamanho negativo
            const arr = new Array(-1);
        } catch (e) {
            console.error('RangeError capturado:', e);
            debugmate.publish(e)
        }
    }, []);

    return <div>Check console for RangeError.</div>;
}

export default RangeError;