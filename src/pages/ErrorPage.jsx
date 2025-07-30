import {NavLink ,useRouteError} from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <div>

            <h1> Error</h1>
            {error.data} && <p>{error.status}</p>
            <NavLink to='/'><button>Go Home </button></NavLink>
        </div>
    );
    

};