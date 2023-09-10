document.addEventListener("DOMContentLoaded", () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentdate = new Date();

  const currentDayOfWeek = currentdate.getDay();

  const currentDayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );

  currentDayElement.textContent = daysOfTheWeek[currentDayOfWeek];

  const currentUTCTimeMilliseconds = Date.now();

  const currentTimeElement = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );

  currentTimeElement.textContent = currentUTCTimeMilliseconds;
});
