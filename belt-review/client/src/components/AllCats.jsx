import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllCats = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/cats')
            .then(res => {
                console.log(res.data);
                setCats(res.data);
            }).catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div>
            <h2>All Cats</h2>
            {
                cats.map(cat => {
                    return (
                        <div key={cat._id}>
                            <Link to={`/cats/${cat._id}`}><h3>{cat.name}</h3></Link>
                            <p>{cat.description}</p>
                            <p>{cat.imgUrl}</p>
                            <p>{cat.price}</p>
                            <p>{cat.attitude}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllCats;