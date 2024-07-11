import React, { useState, useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize/useWindowSize';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { width, height } = useWindowSize();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Reloj</h1>
      <p>{formatTime(time)}</p>
      <h2>Dimensiones de la ventana</h2>
      <p>Ancho: {width}px</p>
      <p>Alto: {height}px</p>
    </div>
  );
};

export default Clock;
