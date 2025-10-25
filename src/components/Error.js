import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    
    const errorObj = useRouteError();
    console.log('errorObj: ', errorObj);
    
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>Something Went Wrong</h2>
            <h3>{errorObj?.data}</h3>
            {/* <h3>{errorObj?.error?.message}</h3> */}
        </div>
    )
}

export default ErrorPage;