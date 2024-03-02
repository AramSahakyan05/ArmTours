import React, { useEffect, useState } from 'react';
import './Timer.scss';

export const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-04-01') - +new Date();
    if (difference < 0) {
      return { days: 0, hours: 0, mins: 0, secs: 0 };
    }
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      mins: Math.floor((difference / 1000 / 60) % 60),
      secs: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="hurry-up-countdown">
      <div className="hurry-up-countdown-inner">
        <h2>It's limited seating! Hurry up</h2>
        {/* Time */}
        <div className="time">
          {/* Days */}
          <div className="days">
            <h1>{formatTime(timeLeft.days)}</h1>
            <span>DAYS</span>
          </div>
          {/* Hours */}
          <div className="hours">
            <h1>{formatTime(timeLeft.hours)}</h1>
            <span>HOURS</span>
          </div>
          {/* Minutes */}
          <div className="minutes">
            <h1>{formatTime(timeLeft.mins)}</h1>
            <span>MINS</span>
          </div>
          {/* Seconds */}
          <div className="secs">
            <h1>{formatTime(timeLeft.secs)}</h1>
            <span>SECS</span>
          </div>
        </div>
        <div className="hurry-up-countdown-inner-bottom"></div>
      </div>
    </div>
  );
};
