import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCat = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [price, setPrice] = useState("");
    const [attitude, setAttitude] = useState("Friendly");

    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

    const createCat = async (e) => {
        e.preventDefault();
        const newCat = {
          name,
          description,
          imgUrl,
          price,
          attitude
        }
    
        axios.post("http://localhost:8000/api/cats/", newCat)
          .then(res => {
            console.log("create console log" + res.data);
            navigate(`/cats/${res.data._id}`)
          }).catch(err => {
            console.log(err.response);
            setErrors(err.response?.data?.errors)
          })
      }

    return (
        <div>
            <h2>New</h2>

            <form onSubmit={e => createCat(e)}>
                <div>
                    <label>Name</label>
                    {
                        errors?.name && (
                        <span style={{ color: 'red' }}>{errors.name?.message}</span>
                        )
                    }
                    <input type="text" onChange={e => setName(e.target.value)}></input>
                </div>
                <div>
                    <label>Description</label>
                    {
                        errors?.description && (
                        <span style={{ color: 'red' }}>{errors.description?.message}</span>
                        )
                    }
                    <input type="text" onChange={e => setDescription(e.target.value)}></input>
                </div>
                <div>
                    <label>ImgUrl</label>
                    <input type="text" onChange={e => setImgUrl(e.target.value)}></input>
                </div>
                <div>
                    <label>Price</label>
                    {
                        errors?.price && (
                        <span style={{ color: 'red' }}>{errors.price?.message}</span>
                        )
                    }
                    <input type="number" onChange={e => setPrice(e.target.value)}></input>
                </div>
                <div>
                    <label>Attitude</label>
                    {
                        errors?.attitude && (
                        <span style={{ color: 'red' }}>{errors.attitude?.message}</span>
                        )
                    }
                    <select onChange={e => setAttitude(e.target.value)}>
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

export default NewCat;