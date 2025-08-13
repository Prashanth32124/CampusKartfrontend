import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

function Klupielifescore() {
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState(null);

  // Fetch ratings
  useEffect(() => {
    fetch("https://rp2backend.vercel.app/klulifescore")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch ratings");
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          const aggregatedRatings = {};
          let starDist = { "4-5": 0, "3-4": 0, "2-3": 0, "1-2": 0 };

          for (const doc of data) {
            if (doc.ratings) {
              let total = 0;
              let count = 0;
              for (const key in doc.ratings) {
                if (Object.hasOwnProperty.call(doc.ratings, key)) {
                  const value = Number(doc.ratings[key]) || 0;
                  aggregatedRatings[key] =
                    (aggregatedRatings[key] || 0) + value;
                  total += value;
                  count++;
                }
              }
              const avgDoc = total / count;
              if (avgDoc >= 4) starDist["4-5"]++;
              else if (avgDoc >= 3) starDist["3-4"]++;
              else if (avgDoc >= 2) starDist["2-3"]++;
              else starDist["1-2"]++;
            }
          }

          const pieData = Object.keys(aggregatedRatings).map((key) => ({
            category: key.charAt(0).toUpperCase() + key.slice(1),
            score: aggregatedRatings[key],
          }));

          const overall =
            Object.values(aggregatedRatings).reduce((a, b) => a + b, 0) /
            (data.length * Object.keys(aggregatedRatings).length);

          setRatings(pieData);
          setSummary({
            overall: overall.toFixed(1),
            totalReviews: data.length,
            starDist: Object.fromEntries(
              Object.entries(starDist).map(([range, val]) => [
                range,
                ((val / data.length) * 100).toFixed(0),
              ])
            ),
          });
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

  // Fetch reviews
  useEffect(() => {
    fetch("https://rp2backend.vercel.app/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  if (loading) return <p>Loading ratings...</p>;
  if (error) return <p>Error: {error}</p>;
  if (ratings.length === 0) return <p>No ratings found</p>;

  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "flex-start" }}>
      {/* Pie Chart */}
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

        {/* Overall Rating Summary */}
        {summary && (
          <div style={{ marginTop: "20px" }}>
            <h3>Overall Rating (Out of 5)</h3>
            <p style={{ fontSize: "28px", fontWeight: "bold" }}>
              {summary.overall}
            </p>
            <p>Based on {summary.totalReviews} Verified Reviews</p>

            {Object.entries(summary.starDist).map(([range, percent]) => (
              <div key={range} style={{ margin: "5px 0" }}>
                <span style={{ width: "60px", display: "inline-block" }}>
                  {range} star
                </span>
                <div
                  style={{
                    display: "inline-block",
                    width: "150px",
                    background: "#eee",
                    height: "8px",
                    margin: "0 10px",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${percent}%`,
                      background: "#ff9900",
                      height: "100%",
                    }}
                  ></div>
                </div>
                <span>{percent}%</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <div style={{ flex: 1 }}>
        <h2>Student Reviews</h2>
        {reviews.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {reviews.map((rev, idx) => (
              <li
                key={idx}
                style={{
                  background: "#f9f9f9",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <strong>{rev.name}</strong>
                <p style={{ margin: "5px 0" }}>{rev.experience}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available</p>
        )}
      </div>
    </div>
  );
}

export default Klupielifescore;
