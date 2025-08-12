import React, { useState } from "react";
import axios from "axios";
export default function Klulifescore() {
  const [ratings, setRatings] = useState({
    food: "",
    hostels: "",
    clubs: "",
    placements: "",
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    // Convert value to number
    const num = Number(value);

    // Allow empty string to clear input
    if (value === "") {
      setRatings(prev => ({ ...prev, [name]: "" }));
      return;
    }

    // Only update if number is between 1 and 5
    if (num >= 1 && num <= 5) {
      setRatings(prev => ({ ...prev, [name]: num }));
    }
  }

        const handlesubmit=()=>{
        try{
        const res=axios.post("https://rp2backend.vercel.app/klulifescore",{
        ratings
        });
        alert("Ratings submitted successfully!");
        console.log(res.data);
        }
        catch (error) {
        alert("Failed to submit ratings");
        console.error(error);
        }
        }

  return (
    <div>
      <h2>KLU Life Score Ratings</h2>

      <input
        type="number"
        name="food"
        placeholder="Food Rating 1 to 5"
        value={ratings.food}
        onChange={handleChange}
        min={1}
        max={5}
      />
      <br /><br />

      <input
        type="number"
        name="hostels"
        placeholder="Hostels Rating 1 to 5"
        value={ratings.hostels}
        onChange={handleChange}
        min={1}
        max={5}
      />
      <br /><br />

      <input
        type="number"
        name="clubs"
        placeholder="Clubs Rating 1 to 5"
        value={ratings.clubs}
        onChange={handleChange}
        min={1}
        max={5}
      />
      <br /><br />

      <input
        type="number"
        name="placements"
        placeholder="Placements Rating 1 to 5"
        value={ratings.placements}
        onChange={handleChange}
        min={1}
        max={5}
      />
      <br /><br />

      <div>
        <strong>Current Ratings:</strong>
        <pre>{JSON.stringify(ratings, null, 2)}</pre>
      </div>
      <button onClick={handlesubmit}>Submit</button>
    </div>
  );
}
