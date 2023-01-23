import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const NewDestination = (props) => {
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [src, setSrc] = useState("");

    // checkboxes
    const [summer, setSummer] = useState(false);
    const [spring, setSpring] = useState(false);
    const [winter, setWinter] = useState(false);
    const [fall, setFall] = useState(false);

    const navigate = useNavigate();

    const createDestination = async (e) => {
        e.preventDefault();
        const newDestination = {
            location,
            description,
            src,
            summer,
            spring,
            winter,
            fall
        }

        // console.log(newDestination);
        // swapping this out to use async/await syntax
        axios.post("http://localhost:8000/api/destinations/", newDestination)
            .then(res => {
                console.log("create console log" + res.data);
                navigate(`/destinations/${res.data._id}`)
            }).catch(err => {
                console.log(err);
            })
        
        // try {
        //     const dbDestination = await axios.post("http://127.0.0.1:8000/api/destinations/", newDestination);
        //     console.log("create console log" + dbDestination);
        //     // navigate(`/destinations/${dbDestination._id}`)
        // } catch (err) {
        //     console.log(err)
        // }
    }
    
    return (
        <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">New Destination</h3>

      <form
      onSubmit={e => {createDestination(e)}}
      >
        <div className="form-group">
          <label className="h6">Location</label>
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text" className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="h6">Description</label>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            className="form-control"
          ></textarea>
        </div>

        <div className="form-group">
          <label className="h6">Media URL</label>
          <input
            onChange={(event) => {
              setSrc(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <hr />
        <h5>Travel Seasons</h5>
        <div className="form-check">
          <input
            onChange={(event) => {
              setSummer(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Summer</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setWinter(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Winter</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setSpring(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Spring</label>
        </div>

        <div className="form-check">
          <input
            onChange={(event) => {
              setFall(event.target.checked);
            }}
            type="checkbox"
            className="form-check-input"
          />
          <label className="h6 form-check-label">Fall</label>
        </div>
        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
    )
};

export default NewDestination;