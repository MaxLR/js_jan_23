import { useParams, Link } from "react-router-dom";

const OneLaunch = props => {
    const { id } = useParams();
    return (
        <div>
            <h2>OneLaunch - id: {id}</h2>
            <Link to="/launches">All Launches</Link>
        </div>
    )
}

export default OneLaunch;