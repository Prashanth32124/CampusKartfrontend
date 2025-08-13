import React, { useState } from "react";
import axios from "axios";
import "./CSS/Klulifescore.css";

export default function Klulifescore() {
  const [ratings, setRatings] = useState({
    food: "",
    hostels: "",
    clubs: "",
    placements: "",
    faculty: "",
    sports: "",
    projects: "",
    trips: ""
  });
  
  const [experience, setExperience] = useState("");
  const [name, setName] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    const num = Number(value);
    if (value === "" || (num >= 0 && num <= 5)) {
      setRatings(prev => ({
        ...prev,
        [name]: value === "" ? "" : num
      }));
    }
  }

  async function handleSubmit() {
    try {
      const res = await axios.post("https://rp2backend.vercel.app/klulifescore", { ratings });
      alert("Ratings submitted successfully!");
      console.log(res.data);
    } catch (error) {
      alert("Failed to submit ratings");
      console.error(error);
    }

    try {
      const res1 = await axios.post("https://rp2backend.vercel.app/review", { name, experience });
      alert("Name & Experience submitted successfully!");
      console.log(res1.data);
    } catch (error) {
      alert("Failed to submit name & experience");
      console.error(error);
    }
  }

  return (
    <div className="klulifescore-container">
      <h2>KLU Life Score Ratings</h2>

      <label>
        Name:
        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <br /><br />

      <label>
        Experience:
        <textarea
          placeholder="Give some experience or info about this college"
          value={experience}
          onChange={e => setExperience(e.target.value)}
        />
      </label>
      <br /><br />

      {Object.keys(ratings).map(key => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase() + key.slice(1)} Rating (0 to 5):
            <input
              type="number"
              name={key}
              value={ratings[key]}
              onChange={handleChange}
              min={0}
              max={5}
            />
          </label>
          <br /><br />
        </div>
      ))}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
