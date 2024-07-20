import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(false);

  let timeContainerStyles = {
    transform: `translateY(${status ? "-20px" : "0px"})`,
  };

  return (
    <div className="App">
      <div className="sideMenu">
        <h2>WORKS /</h2>
        <h2>ADVENTURE /</h2>
        <h2>LOCATION /</h2>
      </div>
      <div className="background">
        <svg
          viewBox="0 0 4592 2726"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="4592"
            height="2354"
            rx="200"
            fill="url(#paint0_linear_464_4)"
          />
          <circle
            cx="2296"
            cy="2354"
            r="372"
            fill="url(#paint1_linear_464_4)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_464_4"
              x1="2296"
              y1="0"
              x2="2296"
              y2="2354"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFABDD" />
              <stop offset="1" stop-color="#2360D8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_464_4"
              x1="2296"
              y1="1982"
              x2="2296"
              y2="2726"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.405" stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#1CE69D" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <footer>
        <div className="logo">
          <div className="circle"></div>
          <h1>focus</h1>
        </div>

        <div className="time" onClick={() => setStatus(!status)}>
          <div className="timeContainer" style={timeContainerStyles}>
            <h3>DAY</h3>
            <h3>NIGHT</h3>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
