import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCat = () => {
    const { id } = useParams();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [attitude, setAttitude] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cats/${id}`)
            .then(res => {
                const {
                    name,
                    description,
                    imgUrl,
                    price,
                    attitude
                } = res.data

                setName(name)
                setDescription(description)
                setImgUrl(imgUrl)
                setPrice(price)
                setAttitude(attitude)
            }).catch(err => {
                console.log(err);
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();

        const editedCat = {
            name,
            description,
            imgUrl,
            price,
            attitude
        }

        axios.put(`http://localhost:8000/api/cats/${id}`, editedCat)
            .then(res => {
                console.log(res);
                navigate(`/cats/${id}`);
            }).catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h2>Edit</h2>

            <form onSubmit={e => handleUpdate(e)}>
                <div>
                    <label>Name</label>
                    <input type="text" onChange={e => setName(e.target.value)} value={name}></input>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" onChange={e => setDescription(e.target.value)} value={description}></input>
                </div>
                <div>
                    <label>ImgUrl</label>
                    <input type="text" onChange={e => setImgUrl(e.target.value)} value={imgUrl}></input>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" onChange={e => setPrice(e.target.value)} value={price}></input>
                </div>
                <div>
                    <label>Attitude</label>
                    <select onChange={e => setAttitude(e.target.value)} value={attitude}>
                        <option value="Friendly">Friendly</option>
                        <option value="Hesitant">Hesitant</option>
                        <option value="Grumpy Cat">Grumpy Cat</option>
                    </select>
                </div>
                <input type="submit" value="Add Cat to Rent" />
            </form>
        </div>
    )
}

export default EditCat;