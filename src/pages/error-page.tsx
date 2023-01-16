import React from "react";
import { useRouteError } from 'react-router-dom';

interface Props {}

const ErrorPage: React.FC<Props> = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>oops!</h1>
            <p>an unexpecter error has occurred...</p>
            <p>
                {ErrorEvent.name}
            </p>
        </div>
    );
}

export default ErrorPage;