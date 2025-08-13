import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

function Klupielifescore() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://rp2backend.vercel.app/klulifescore")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const aggregatedRatings = {};

          for (const doc of data) {
            if (doc.ratings) {
              for (const key in doc.ratings) {
                if (Object.hasOwnProperty.call(doc.ratings, key)) {
                  // Ensure value is a number
                  const value = Number(doc.ratings[key]) || 0;
                  aggregatedRatings[key] =
                    (aggregatedRatings[key] || 0) + value;
                }
              }
            }
          }

          const pieData = Object.keys(aggregatedRatings).map((key) => ({
            category: key.charAt(0).toUpperCase() + key.slice(1),
            score: aggregatedRatings[key],
          }));

          console.log("Pie Data:", pieData); // Debug check
          setRatings(pieData);
        } else {
          setRatings([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading ratings...</p>;
  if (error) return <p>Error: {error}</p>;
  if (ratings.length === 0) return <p>No ratings found</p>;

  return (
    <div>
      <h2>KLU Life Score Ratings</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={ratings}
          dataKey="score"
          nameKey="category"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {ratings.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Klupielifescore;
