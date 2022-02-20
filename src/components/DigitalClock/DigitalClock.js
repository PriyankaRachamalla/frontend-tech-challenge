import * as React from "react";
import { getCurrentTime } from "../../lib/currentTime";

import "./DigitalClock.scss";

const DigitalClock = () => {
  const [time, setTime] = React.useState(getCurrentTime());

  const dateRefresh = () => {
    setTime(getCurrentTime());
  };

  React.useEffect(() => {
    const timeInterval = setInterval(() => {
      dateRefresh();
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className={"digitalClock"}>
      <div>
        <span>{time.hours}:</span>
        <span>{time.minutes}:</span>
        <span>{time.seconds}</span>
      </div>
    </div>
  );
};

export default DigitalClock;
