import React, { useContext } from "react";
import { TimeContext } from "../../context/TimeContext";
import {
  AiOutlinePlayCircle,
  AiOutlinePause,
  AiOutlineReload,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

function ClockControls() {
  const {
    isPaused,
    handlePaused,
    time,
    handleBreakChange,
    handleSessionChange,
    handleReset,
  } = useContext(TimeContext);
  
  return (
    <div className="clock-controls">
      <section className="break-controls">
        <h3 id="break-label">Descanso</h3>
        <div className="controls">
          <button id="break-decrement" onClick={() => handleBreakChange("decrement")}>
            <AiOutlineArrowDown />
          </button>
          <span id="break-length">{time.break}</span>
          <button id="break-increment" onClick={() => handleBreakChange("increment")}>
            <AiOutlineArrowUp />
          </button>
        </div>
      </section>
      
      <section className="timer-controls">
        <div className="play-pause-reset">
          <button id="start_stop" onClick={handlePaused}>
            {isPaused ? <AiOutlinePlayCircle /> : <AiOutlinePause />}
          </button>
          <button id="reset" onClick={handleReset}>
            <AiOutlineReload />
          </button>
        </div>
      </section>
      
      <section className="session-controls">
        <h3 id="session-label">Sesión</h3>
        <div className="controls">
          <button id="session-decrement" onClick={() => handleSessionChange("decrement")}>
            <AiOutlineArrowDown />
          </button>
          <span id="session-length">{time.session}</span>
          <button id="session-increment" onClick={() => handleSessionChange("increment")}>
            <AiOutlineArrowUp />
          </button>
        </div>
      </section>
    </div>
  );
}

export default ClockControls;
