import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OneCat = () => {
    const { id } = useParams();
    const [cat, setCat] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cats/${id}`)
            .then(res => {
                console.log(res.data);
                setCat(res.data);
            }).catch(err => {
                console.log(err)
            })
    }, [id])

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/cats/${id}`)
            .then(res => {
                navigate('/cats');
            }).catch(err => {
                console.log(err);
            })
    }

    if (cat === null) {
        return null
    }

    return (
        
        <div>
            <h2>View One</h2>

            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
            <p>{cat.imgUrl}</p>
            <p>{cat.price}</p>
            <p>{cat.attitude}</p>
            <Link to={`/cats/${id}/edit`}>Edit this cat</Link>
            <button onClick={handleDelete}>Un-list this Cat for Rental</button>
        </div>
    )
}

export default OneCat;