import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const EditDestination = (props) => {
  // url route param matching `:id`.
  const { id } = useParams();

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [src, setSrc] = useState("");

  // checkboxes
  const [summer, setSummer] = useState(false);
  const [spring, setSpring] = useState(false);
  const [winter, setWinter] = useState(false);
  const [fall, setFall] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/destinations/${id}`)
      .then(res => {
        const {
          location,
          description,
          src,
          summer,
          spring,
          winter,
          fall
        } = res.data

        setLocation(location);
        setDescription(description);
        setSrc(src);
        setSummer(summer);
        setWinter(winter);
        setSpring(spring);
        setFall(fall);
      }).catch(err => {
        console.log(err);
      })
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault();

    const editedDestination = {
      // long-form syntax - key:value
      location: location,
      // short-form syntax (only works if key matches what you want to send in)
      description,
      src,
      summer,
      winter,
      fall,
      spring
    }

    axios.put(`http://localhost:8000/api/destinations/${id}`, editedDestination)
      .then(res => {
        console.log(res);
        navigate(`/destinations/${id}`);
      }).catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="w-50 p-4 rounded mx-auto shadow">
      <h3 className="text-center">Edit Destination</h3>

      <form
        onSubmit={e => { handleUpdate(e) }}
      >
        <div className="form-group">
          <label className="h6">Location</label>
          <input
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            type="text" className="form-control"
            value={location}
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
            value={description}
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
            value={src}
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
            checked={summer}
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
            checked={winter}
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
            checked={spring}
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
            checked={fall}
          />
          <label className="h6 form-check-label">Fall</label>
        </div>
        <button className="btn btn-sm btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default EditDestination;