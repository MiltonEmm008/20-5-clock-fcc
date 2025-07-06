import React from "react";
import ClockControls from "../clock-controls/ClockControls";
import Clock from "../clock/Clock";

function ClockContainer() {
  return (
    <div>
      <header>
        <h1>25 + 5</h1>
        <h3>Reloj Pomodoro</h3>
      </header>
      <main>
        <Clock />
        <ClockControls />
      </main>
      <span>
        <p>
          Por{" "}
          <a
            target="_blank"
            href="https://github.com/MiltonEmm008/20-5-clock-fcc"
          >
            Milton
          </a>
        </p>
      </span>
    </div>
  );
}

export default ClockContainer;
