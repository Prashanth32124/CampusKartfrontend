import React from "react";
import "./CSS/Newhomepage.css";
import { useNavigate } from "react-router-dom";

import klImage from "./images/kl.jpg";
import vitimage from "./images/vit.png";
import srmimg from "./images/srm.png";
import gitamimg from "./images/gitam.png";
import gayatrividyaimg from "./images/gayatrividya.png";
import rvrimg from "./images/rvr.png";

function Newhomepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    alert("👤❌ You successfully logged out");
  };

  const handleSearch = () => {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const cards = document.querySelectorAll(".clgcard");
    cards.forEach((card) => {
      const clgname = card.getAttribute("clgname").toLowerCase();
      if (clgname.includes(searchValue)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  };

  const handleImageClick = (collegeSlug) => {
    navigate(`/upload`);
  };

  const handleFeedback = () => {
    navigate("/Feedback");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-buttons">
          <input
            id="search"
            type="text"
            placeholder="Search"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button id="search_button" onClick={handleSearch}>
            Search
          </button>
          <button onClick={handleFeedback}>Feedback</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div id="Lcontainer">
        <h3 id="h3">VERIFY THE COLLEGES AND FIND THE BEST BY YOUR INTEREST</h3>

        <div className="clgcard" clgname="kl university guntur">
          <div id="subcontainer">
            <img
              id="img"
              src={klImage}
              alt="KL University"
              onClick={() => handleImageClick("kl-university-guntur")}
            />
            <p><strong>KL University, Guntur</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              KL University offers BTech, BCA, BSc, MTech, MCA, and many other courses.
              Known for top placements and diverse engineering specializations.
            </p>
          </div>
        </div>

        <div className="clgcard" clgname="vit-ap university">
          <div id="subcontainer">
            <img
              id="img"
              src={vitimage}
              alt="VIT-AP University"
              onClick={() => handleImageClick("vit-ap")}
            />
            <p><strong>VIT-AP University</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              VIT Andhra Pradesh offers UG, PG, and PhD courses in multiple streams.
              Known for FFCS system, hackathons, and global university tie-ups.
            </p>
          </div>
        </div>

        <div className="clgcard" clgname="srm university ap">
          <div id="subcontainer">
            <img
              id="img"
              src={srmimg}
              alt="SRM University AP"
              onClick={() => handleImageClick("srm-ap")}
            />
            <p><strong>SRM University, AP</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              Located in Mangalagiri, Guntur district, SRM AP collaborates with global
              institutions like UC Berkeley and MIT.
            </p>
          </div>
        </div>

        <div className="clgcard" clgname="gitam university vizag">
          <div id="subcontainer">
            <img
              id="img"
              src={gitamimg}
              alt="GITAM University Vizag"
              onClick={() => handleImageClick("gitam-vizag")}
            />
            <p><strong>GITAM University, Vizag</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              GITAM Vizag is ranked among top universities, offering BTech, MBA, and research
              programs with strong industry placements.
            </p>
          </div>
        </div>

        <div className="clgcard" clgname="gayatri vidya parishad college of engineering">
          <div id="subcontainer">
            <img
              id="img"
              src={gayatrividyaimg}
              alt="Gayatri Vidya Parishad"
              onClick={() => handleImageClick("gayatri-vidya-parishad")}
            />
            <p><strong>Gayatri Vidya Parishad College of Engineering, Vizag</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              Established in 1996, this autonomous institution offers engineering, science,
              IT, and management programs.
            </p>
          </div>
        </div>

        <div className="clgcard" clgname="rvr & jc college of engineering guntur">
          <div id="subcontainer">
            <img
              id="img"
              src={rvrimg}
              alt="RVR & JC College of Engineering"
              onClick={() => handleImageClick("rvr-jc-guntur")}
            />
            <p><strong>RVR & JC College of Engineering, Guntur</strong></p>
          </div>
          <div id="asubcontainer">
            <p>
              Founded in 1985, RVR & JC offers 25 courses across engineering, IT,
              and management with excellent academic infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newhomepage;
