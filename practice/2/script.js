const dateFns = window.dateFns;
const birthDateForm = document.getElementById("birth-date-form");
birthDateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const birthDateInput = document.getElementById("birth-date-input");
  let startDate = birthDateInput.value;
  const deltaYears = dateFns.differenceInYears(new Date(), startDate);
  const deltaMonths = dateFns.differenceInMonths(
    new Date(),
    (startDate = dateFns.addYears(startDate, deltaYears))
  );
  const deltaDays = dateFns.differenceInDays(
    new Date(),
    (startDate = dateFns.addMonths(startDate, deltaMonths))
  );
  const deltaHours = dateFns.differenceInHours(
    new Date(),
    (startDate = dateFns.addDays(startDate, deltaDays))
  );
  const deltaMinutes = dateFns.differenceInMinutes(
    new Date(),
    (startDate = dateFns.addHours(startDate, deltaHours))
  );
  alert(
    `User Age is ${deltaYears} years, ${deltaMonths} months, ${deltaDays} days, ${deltaHours} hours, ${deltaMinutes} minute(s).`
  );
});
