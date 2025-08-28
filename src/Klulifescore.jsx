import React, { useState } from "react";
import axios from "axios";
import styles from "./CSS/Klulifescore.module.css";
import { useRef } from "react";
export default function Klulifescore() {
  const refbutton=useRef(null);
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
    refbutton.current.disabled = true;
    refbutton.current.innerText = "Submitting...";
    try {
      await axios.post("https://rp2backend.vercel.app/klulifescore", { ratings });
      alert("Ratings submitted successfully!");
    } catch {
      alert("Failed to submit ratings");
    }

    try {
      await axios.post("https://rp2backend.vercel.app/review", { name, experience });
      alert("Name & Experience submitted successfully!");
    } catch {
      alert("Failed to submit name & experience");
    }
     await new Promise((resolve) => setTimeout(resolve, 2000));

    refbutton.current.disabled = false;
    refbutton.current.innerText = "Submit";

    setRatings({
      food: "",
      hostels: "",
      clubs: "",
      placements: "",
      faculty: "",
      sports: "",
      projects: "",
      trips: ""
    });
    setExperience("");
    setName("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>KLU Life Score Ratings</h2>

        <label className={styles.label}>Name:</label>
        <input
          type="text"
          placeholder="Please enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={styles.input}
        />

        <label className={styles.label}>Experience:</label>
        <textarea
          placeholder="Give some experience or info about this college"
          value={experience}
          onChange={e => setExperience(e.target.value)}
          className={styles.textarea}
        />

        {Object.keys(ratings).map(key => (
          <div key={key} className={styles.ratingField}>
            <label className={styles.label}>
              {key.charAt(0).toUpperCase() + key.slice(1)} Rating (0 to 5):
            </label>
            <input
              type="number"
              name={key}
              value={ratings[key]}
              onChange={handleChange}
              min={0}
              max={5}
              className={styles.input}
            />
          </div>
        ))}

        <button ref={refbutton} onClick={handleSubmit} className={styles.button}>
          Submit
        </button>
      </div>
    </div>
  );
}
