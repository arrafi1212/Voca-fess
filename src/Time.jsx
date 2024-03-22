import React, { useState, useEffect } from "react";
import "./styles/App.css";

const CountdownTimer = ({ endDate }) => {
  const timeNow = new Date();

  // Menghitung selisih waktu antara endDate dan timeNow
  const timeDiff = endDate.getTime() - timeNow.getTime();
  console.log(timeDiff);
  const secondsLeft = Math.max(Math.floor((timeDiff / 1000) % 60), 0);
  const minutesLeft = Math.max(Math.floor((timeDiff / (1000 * 60)) % 60), 0);
  const hoursLeft = Math.max(Math.floor((timeDiff / (1000 * 60 * 60)) % 24), 0);
  const daysLeft = Math.max(Math.floor(timeDiff / (1000 * 60 * 60 * 24)), 0);

  // State untuk menyimpan waktu yang tersisa
  const [timeInDays, setTimeInDays] = useState(daysLeft);
  const [timeInHours, setTimeInHours] = useState(hoursLeft);
  const [timeInMinutes, setTimeInMinutes] = useState(minutesLeft);
  const [timeInSeconds, setTimeInSeconds] = useState(secondsLeft);

  // Update waktu setiap detik
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDiff = endDate.getTime() - currentTime.getTime();

      // Menghitung waktu yang tersisa dalam hari, jam, menit, detik
      const secondsLeft = Math.max(Math.floor((timeDiff / 1000) % 60), 0);
      const minutesLeft = Math.max(
        Math.floor((timeDiff / (1000 * 60)) % 60),
        0
      );
      const hoursLeft = Math.max(
        Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        0
      );
      const daysLeft = Math.max(
        Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        0
      );

      // Update state dengan waktu yang tersisa
      setTimeInDays(daysLeft);
      setTimeInHours(hoursLeft);
      setTimeInMinutes(minutesLeft);
      setTimeInSeconds(secondsLeft);
    }, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(intervalId);
  }, [endDate]);

  // const CountdownTimer = ({ endDate }) => {
  //   const timeNow = new Date();
  //   console.log(endDate.getDate() - timeNow.getDate());
  //   const [timeInHours, setTimeInHours] = useState(
  //     23 +
  //       endDate.getHours() -
  //       timeNow.getHours() +
  //       -24 * (endDate.getDate() - timeNow.getDate())
  //   );
  //   const [timeInMinutes, setTimeInMinutes] = useState(
  //     59 + endDate.getMinutes() - timeNow.getMinutes()
  //   );
  //   const [timeInSeconds, setTimeInSeconds] = useState(
  //     60 + endDate.getSeconds() - timeNow.getSeconds()
  //   );

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       console.log(-24 * (endDate.getDate() - new Date().getDate()));
  //       setTimeInHours(
  //         23 +
  //           Math.floor(endDate.getHours() - new Date().getHours()) +
  //           -24 * (endDate.getDate() - new Date().getDate())
  //       );
  //       setTimeInMinutes(
  //         59 + Math.floor(endDate.getMinutes() - new Date().getMinutes())
  //       );
  //       setTimeInSeconds(
  //         60 + Math.floor(endDate.getSeconds() - new Date().getSeconds())
  //       );
  //     }, 1000);

  //     // Clear the interval when the component is unmounted
  //     return () => clearInterval(intervalId);
  //   }, [endDate]);

  return (
    <div className="countdownTime">
      <h1>COUNTDOWN TIMER</h1>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "48px" }}>
          {timeInDays}:{timeInHours}:{timeInMinutes}:{timeInSeconds}
        </span>
      </p>
    </div>
  );
};

export default CountdownTimer;
