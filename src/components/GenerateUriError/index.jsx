import { useDebugmate } from '../../providers/DebugmateProvider';
import { environment, user } from '../../utils/debugmateContext';


function GenerateUriError() {
    const debugmate = useDebugmate();

    try {
        decodeURIComponent('%');
    } catch (error) {
       debugmate.publish(error, user, environment);
    }
}

export default GenerateUriError