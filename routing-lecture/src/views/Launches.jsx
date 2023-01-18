import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

const Launches = (props) => {
    const [launches, setLaunches] = useState([])
    
    useEffect(() => {
        axios.get('https://api.spacexdata.com/v4/launches')
            .then(res => {
                console.log(res);
                setLaunches(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    
    return (
        <div>
            <h2>Launches</h2>
            {
                launches.map((launch, i) => {
                    return (
                        <div>
                            <Link to={`/launches/${launch.id}`} key={i}>{launch.name}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Launches;