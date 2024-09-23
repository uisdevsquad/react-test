import Debugmate from 'debugmate';

const debugmate = new Debugmate();

function GenerateDivisionByZeroError() {
    try {
        // Divisão por zero
        const result = 1 / 0;
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
    } catch (error) {
       debugmate.publish(error);
    }
}

export default GenerateDivisionByZeroError