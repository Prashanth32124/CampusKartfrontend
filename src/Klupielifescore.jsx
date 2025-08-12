import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28BFE"];

function Klupielifescore() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    fetch("https://rp2backend.vercel.app/klulifescore")
      .then(function (res) {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(function (data) {
        if (data && data.length > 0) {
          var aggregatedRatings = {};

          for (var i = 0; i < data.length; i++) {
            var doc = data[i];
            if (doc.ratings) {
              // For each key in ratings object
              for (var key in doc.ratings) {
                if (doc.ratings.hasOwnProperty(key)) {
                  if (aggregatedRatings[key]) {
                    aggregatedRatings[key] += doc.ratings[key];
                  } else {
                    aggregatedRatings[key] = doc.ratings[key];
                  }
                }
              }
            }
          }

          var pieData = [];
          for (var key in aggregatedRatings) {
            if (aggregatedRatings.hasOwnProperty(key)) {
              pieData.push({
                category: key.charAt(0).toUpperCase() + key.slice(1),
                score: aggregatedRatings[key],
              });
            }
          }

          setRatings(pieData);
        } else {
          setRatings([]);
        }
        setLoading(false);
      })
      .catch(function (err) {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ratings...</p>;
  } else if (error) {
    return <p>Error: {error}</p>;
  } else if (ratings.length === 0) {
    return <p>No ratings found</p>;
  } else {
    // We will build Cell components in a simple loop without map
    var cells = [];
    for (var i = 0; i < ratings.length; i++) {
      var colorIndex = i % COLORS.length;
      cells.push(
        <Cell key={"cell" + i} fill={COLORS[colorIndex]} />
      );
    }

    return (
      <div>
        <h2>KL U Life Score Ratings</h2>
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
            {cells}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  }
}

export default Klupielifescore;
