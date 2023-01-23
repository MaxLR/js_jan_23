import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const OneDestination = (props) => {
    const { id } = useParams();
    const [destination, setDestination] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/destinations/${id}`)
            .then(res => {
                console.log(res.data);
                setDestination(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/destinations/${id}`)
            .then(res => {
                navigate('/destinations');
            }).catch(err => {
                console.log(err);
            })
    }

    if (destination === null) {
        return null;
    }

    // We can only safely use the data to render and destructure now since
    // we checked it's not null.
    const { location, description, summer, winter, spring, fall, src } = destination;

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{location}</h4>
            <p>{description}</p>
            <h5>Travel Seasons:</h5>
            <ul className="list-group mb-4">
                {/* display only the `true` seasons. */}
                {summer && <li className="list-group-item">Summer</li>}
                {winter && <li className="list-group-item">Winter</li>}
                {spring && <li className="list-group-item">Spring</li>}
                {fall && <li className="list-group-item">Fall</li>}
            </ul>
            <p>{src}</p>
            <button
                onClick={handleDelete}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Delete
            </button>
        </div>
    );
};

export default OneDestination;