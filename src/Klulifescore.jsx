import React, { useState } from "react";
import axios from "axios";

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

  function handleChange(e) {
    const { name, value } = e.target;
    const num = Number(value);

    if (value === "") {
      setRatings(prev => ({ ...prev, [name]: "" }));
      return;
    }

    if (num >= 1 && num <= 5) {
      setRatings(prev => ({ ...prev, [name]: num }));
    }
  }

  async function handlesubmit() {
    try {
      const res = await axios.post("https://rp2backend.vercel.app/klulifescore", {
        ratings,
      });
      alert("Ratings submitted successfully!");
      console.log(res.data);
    } catch (error) {
      alert("Failed to submit ratings");
      console.error(error);
    }
  }

  return (
    <div>
      <h2>KLU Life Score Ratings</h2>

      {Object.keys(ratings).map((key) => (
        <div key={key}>
          <input
            type="number"
            name={key}
            placeholder={`${key.charAt(0).toUpperCase() + key.slice(1)} Rating 1 to 5`}
            value={ratings[key]}
            onChange={handleChange}
            min={1}
            max={5}
          />
          <br /><br />
        </div>
      ))}

      <div>
        <strong>Current Ratings:</strong>
        <pre>{JSON.stringify(ratings, null, 2)}</pre>
      </div>

      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}
