import { useEffect } from "react";

function ErrorDisplay({ formErrors }) {
    useEffect(() => {
        console.log(formErrors)
    }, [formErrors]);

    return (
        <div>

        </div>
    )
}

export default ErrorDisplay;