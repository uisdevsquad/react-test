import { useEffect } from "react";

const TriggerSyntaxError = () => {
    useEffect(() => {
        // Isto irá gerar um SyntaxError
        eval('foo bar');
    }, []);

    return <div>Trigger Syntax Error</div>;
};

export default TriggerSyntaxError;