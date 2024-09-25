import { useEffect } from "react";
import { useDebugmate } from "../../providers/DebugmateProvider";
import { environment, user } from "../../utils/debugmateContext";

function RangeError() {
    const debugmate = useDebugmate();

    useEffect(() => {
        try {
            const arr = new Array(-1);
        } catch (e) {
            debugmate.publish(e, user, environment)
        }
    }, []);

    return <div>Check console for RangeError.</div>;
}

export default RangeError;