import React, { useContext } from "react";
import { TimeContext } from "../../context/TimeContext";
import alarm from '../../assets/alarm.mp3'
import './Clock.scss';

function Clock() {
  const { currentTime, isBreakTime } = useContext(TimeContext);
  
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;
  
  return (
    <div className="clock-display">
      <div className="timer-label" id="timer-label">
        {isBreakTime ? "Descanso" : "Sesión"}
      </div>
      <div className="timer" id="time-left">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <audio id="beep" preload="auto">
        <source src={alarm} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default Clock;
