import { useNavigate } from "react-router-dom";

const NoMatch = () => {
    const navigate = useNavigate();
    return(
        <div>
        <h2>Can not find your requested page</h2>
        <button onClick={()=> {navigate('/')}}>
            Go Back
        </button>
        </div>
    )
}

export default NoMatch;