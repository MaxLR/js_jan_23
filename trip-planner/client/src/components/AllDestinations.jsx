import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

// Named export: import { AllDestinations, Name2 } from './components/AllDestinations';
export const AllDestinations = (props) => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/destinations')
            .then(res => {
                console.log(res.data);
                setDestinations(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h2>Travel Destinations</h2>


            {destinations.map((destination) => {
                const { _id, location, description, summer, winter, spring, fall } = destination;
                return (
                    <div key={_id} className="shadow mb-4 rounded border p-4">
                        <h4>{location}</h4>
                        <p>{description}</p>
                        <h5>Travel Seasons:</h5>
                        <ul className="list-group">
                            {/* display only the `true` seasons. */}
                            {summer && <li className="list-group-item">Summer</li>}
                            {winter ? <li className="list-group-item">Winter</li> : ""}
                            {spring && <li className="list-group-item">Spring</li>}
                            {fall && <li className="list-group-item">Fall</li>}
                        </ul>
                        <Link to={`/destinations/${_id}`}>View Details about: {location}</Link>
                    </div> 
                );
            })}
        </div>
    )
};

// Only 1 default per file: import AllDestinations from './components/AllDestinations';
// When importing default, you can choose any name.
export default AllDestinations;