import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

function Klupielifescore() {
  const [ratings, setRatings] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("https://rp2backend.vercel.app/klulifescore").then((res) =>
        res.ok ? res.json() : Promise.reject("Failed to fetch ratings")
      ),
      fetch("https://rp2backend.vercel.app/review").then((res) =>
        res.ok ? res.json() : Promise.reject("Failed to fetch reviews")
      )
    ])
      .then(([ratingData, reviewData]) => {
        // Aggregate pie chart ratings
        if (ratingData && ratingData.length > 0) {
          const aggregatedRatings = {};
          let totalScore = 0;
          let totalCount = 0;

          for (const doc of ratingData) {
            if (doc.ratings) {
              for (const key in doc.ratings) {
                const value = Number(doc.ratings[key]) || 0;
                aggregatedRatings[key] =
                  (aggregatedRatings[key] || 0) + value;
                totalScore += value;
                totalCount++;
              }
            }
          }

          const pieData = Object.keys(aggregatedRatings).map((key) => ({
            category: key.charAt(0).toUpperCase() + key.slice(1),
            score: aggregatedRatings[key],
          }));

          setRatings(pieData);
        }

        // Set reviews
        if (reviewData && reviewData.length > 0) {
          setReviews(reviewData);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setLoading(false);
      });
  }, []);

  // Compute overall rating & distribution
  const allScores = ratings.map((r) => r.score);
  const maxPossible = allScores.length * 5;
  const totalScore = allScores.reduce((a, b) => a + b, 0);
  const overallRating = (totalScore / maxPossible) * 5 || 0;

  // Star distribution
  const starCounts = { "4-5": 0, "3-4": 0, "2-3": 0, "1-2": 0 };
  reviews.forEach((rev) => {
    let avg = 0;
    let count = 0;
    if (rev.ratings) {
      for (const key in rev.ratings) {
        avg += Number(rev.ratings[key]) || 0;
        count++;
      }
      avg = avg / count;
      if (avg >= 4) starCounts["4-5"]++;
      else if (avg >= 3) starCounts["3-4"]++;
      else if (avg >= 2) starCounts["2-3"]++;
      else starCounts["1-2"]++;
    }
  });

  const totalReviews = reviews.length;
  const percent = (count) =>
    totalReviews ? ((count / totalReviews) * 100).toFixed(0) : 0;

  if (loading) return <p>Loading ratings...</p>;
  if (error) return <p>Error: {error}</p>;

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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Overall Rating Summary */}
      <div
        style={{
          padding: "20px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "250px"
        }}
      >
        <h3>Overall Rating (Out of 5)</h3>
        <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2a4d8f" }}>
          {overallRating.toFixed(1)}
        </p>
        <p style={{ color: "#666" }}>
          Based on {totalReviews} Verified Reviews
        </p>
        <hr />
        <p>4-5 star: {percent(starCounts["4-5"])}%</p>
        <p>3-4 star: {percent(starCounts["3-4"])}%</p>
        <p>2-3 star: {percent(starCounts["2-3"])}%</p>
        <p>1-2 star: {percent(starCounts["1-2"])}%</p>
      </div>
    </div>
  );
}

export default Klupielifescore;
