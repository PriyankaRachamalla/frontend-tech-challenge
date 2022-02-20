export const getCurrentTime = () => {
  let currentDate = new Date();
  let date = {};
  date.hours = appendingZerosBefore(currentDate.getHours());
  date.minutes = appendingZerosBefore(currentDate.getMinutes());
  date.seconds = appendingZerosBefore(currentDate.getSeconds());
  return date;
};

const appendingZerosBefore = value => {
  if (value > 9) {
    return value;
  } else {
    return `0${value}`;
  }
};
