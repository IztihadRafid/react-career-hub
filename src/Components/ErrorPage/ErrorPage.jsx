import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
           <h2>OOPS!!!</h2>
        <button>   <Link to="/">Go Back To Home</Link>   </button>
        </div>
    );
};

export default ErrorPage;   