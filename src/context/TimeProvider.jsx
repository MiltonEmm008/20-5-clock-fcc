import React, { useState, useRef, useEffect } from "react";
import { TimeContext } from "./TimeContext";

function TimeProvider({ children }) {
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState({
    session: 25,
    break: 5,
  });
  const [currentTime, setCurrentTime] = useState(25 * 60);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const intervalRef = useRef(null);

  const playAlarm = () => {
    const audio = document.querySelector("#beep");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  const stopAlarm = () => {
    const audio = document.querySelector("#beep");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prevCurrentTime) => {
          if (prevCurrentTime <= 0) {
            playAlarm();
            if (isBreakTime) {
              setIsBreakTime(false);
              return time.session * 60;
            } else {
              setIsBreakTime(true);
              return time.break * 60;
            }
          }
          return prevCurrentTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPaused, isBreakTime, time.session, time.break]);

  useEffect(() => {
    if (isPaused) {
      setCurrentTime(isBreakTime ? time.break * 60 : time.session * 60);
    }
  }, [time.session, time.break, isBreakTime]);

  const handlePaused = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    stopAlarm();
    setTime({
      break: 5,
      session: 25,
    });
    setCurrentTime(25 * 60);
    setIsBreakTime(false);
    setIsPaused(true);
  };

  const handleTimeChange = (type, option) => {
    if (!isPaused) return;
    
    setTime((prevTime) => {
      const currentValue = prevTime[type];

      if (currentValue === 1 && option === "decrement") {
        return prevTime;
      }
      if (currentValue === 60 && option === "increment") {
        return prevTime;
      }

      const newValue =
        option === "increment" ? currentValue + 1 : currentValue - 1;

      return {
        ...prevTime,
        [type]: newValue,
      };
    });
  };

  const handleBreakChange = (option) => {
    handleTimeChange("break", option);
  };

  const handleSessionChange = (option) => {
    handleTimeChange("session", option);
  };

  return (
    <TimeContext.Provider
      value={{
        time,
        currentTime,
        handleBreakChange,
        handleSessionChange,
        handlePaused,
        isPaused,
        handleReset,
        isBreakTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
}

export default TimeProvider;
