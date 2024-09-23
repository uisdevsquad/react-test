import Debugmate from 'debugmate';

const debugmate = new Debugmate();

function GenerateUriError() {
    try {
        decodeURIComponent('%');
    } catch (error) {
       debugmate.publish(error);
    }
}

export default GenerateUriError