import { useHistory, useLocation, useParams, useRouteMatch } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const location = useLocation();
    const parameter = useParams();
    const rMatch = useRouteMatch();
    
    console.log("useHistory : ", history);
    console.log("useLocation : ", location);
    console.log("useParams : ", parameter);
    console.log("useRouteMatch : ", rMatch);

    return (
        <div>
            <h1>This is the home page</h1>
        </div>
    );
}