const eventStartDate = () => {
  let current = new Date();

  const year = current.getFullYear();
  const month = current.getMonth();
  const day = current.getDate();

  const hours = current.getHours();
  const minutes =
    current.getMinutes() >= 10
      ? current.getMinutes()
      : "0" + current.getMinutes();

  const currentDay = [year, month, day].join("-");
  const currentHour = [hours, minutes].join(":");
  return [currentDay, currentHour];
};

// TODO: ver el caso del cambio de dia (?)
const eventEnd = () => {
  const startTime = eventStartDate();
  let hour = parseInt(startTime[1].split(":")[0]);
  let minutes = startTime[1].split(":")[1];
  hour = (hour + 3) % 24;
  const currentTime = hour + ":" + minutes;

  return [startTime[0], currentTime];
};

const setHours = () => {
  const startTime = document.getElementsByName("dia-hora-inicio")[0];
  const endTime = document.getElementsByName("dia-hora-termino")[0];

  startTime.value = eventStartDate().join(" ");
  endTime.value = eventEnd().join(" ");
};

window.onload = setHours;
