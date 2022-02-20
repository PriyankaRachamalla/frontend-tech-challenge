import * as React from "react";
import { getCurrentTime } from "../../lib/currentTime";

import "./AnalogClock.scss";

const AnalogClock = () => {
  const [time, setTime] = React.useState(getCurrentTime());

  const dateRefresh = () => {
    setTime(getCurrentTime());
  };

  const clockAngleUpdate = () => {
    const secondsAngle = time.seconds * 6;
    const minutesAngle = time.minutes * 6;
    const hoursAngle = time.hours * 30;

    const secondHand = document.getElementById("secondHand");
    const minuteHand = document.getElementById("minuteHand");
    const hourHand = document.getElementById("hourHand");

    secondHand.style.transform = `rotate(${secondsAngle + 90}deg)`;
    minuteHand.style.transform = `rotate(${minutesAngle + 90}deg)`;
    hourHand.style.transform = `rotate(${hoursAngle + 90}deg)`;
  };

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      dateRefresh();
      clockAngleUpdate();
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [time]);

  return (
    <div className={"analogClock"}>
      <div id="hourHand" className={["hand", "hourHand"].join(" ")}></div>
      <div id="minuteHand" className={["hand", "minuteHand"].join(" ")}></div>
      <div id="secondHand" className={["hand", "secondHand"].join(" ")}></div>
    </div>
  );
};

export default AnalogClock;
