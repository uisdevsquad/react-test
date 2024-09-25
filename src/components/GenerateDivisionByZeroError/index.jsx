import { useDebugmate } from '../../providers/DebugmateProvider';
import { environment, user } from '../../utils/debugmateContext';


function GenerateDivisionByZeroError() {
    const debugmate = useDebugmate();

    try {
        const result = 1 / 0;
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
    } catch (error) {
       debugmate.publish(error, user, environment);
    }
}

export default GenerateDivisionByZeroError