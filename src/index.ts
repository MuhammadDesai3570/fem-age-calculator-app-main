// Initialize Title Variables
const dayTitle = document.getElementById("day-title");
const monthTitle = document.getElementById("month-title");
const yearTitle = document.getElementById("year-title");

// Variable for cover
const dayCover = document.querySelector(".day-cover");
const monthCover = document.querySelector(".month-cover");
const yearCover = document.querySelector(".year-cover");

// Initialize Variables to get numbers
var getDay = document.getElementById("get-day");
var getMonth = document.getElementById("get-month");
var getYear = document.getElementById("get-year");

// Initialize variables to display the error tags
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");

// Variables to display the results
const yearValue = document.getElementById("year-value");
const monthValue = document.getElementById("month-value");
const dayValue = document.getElementById("day-value");

// Get the current date and store into three variables
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// Variable for the button
const mobileBtn = document.getElementById("mobile-submit");
const desktopBtn = document.getElementById("desktop-submit");

let showDay: number;
let showMonth: number;
let showYear: number;

mobileBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (getDay instanceof HTMLInputElement && getDay.value === "") {
    if (dayError && dayCover) {
      dayError.innerHTML = "This field is required";
      dayCover.classList.add("error-border");
      dayTitle?.classList.add("error-title");
    }
  } else {
    if (dayError) {
      dayError.innerHTML = "";
    }
    dayCover?.classList.remove("error-border");
    dayTitle?.classList.remove("error-title");

    const userDayElement = document.getElementById(
      "get-day"
    ) as HTMLInputElement;
    if (userDayElement) {
      const userDay = parseInt(userDayElement.value);
      if (!isNaN(userDay) && userDay > 31) {
        if (dayError && dayCover) {
          dayError.innerHTML = "Enter a valid day";
          dayCover.classList.add("error-border");
          dayTitle?.classList.add("error-title");
        }
      } else if (userDay < 1) {
        if (dayError && dayCover) {
          dayError.innerHTML = "Day cannot be negative";
          dayCover.classList.add("error-border");
          dayTitle?.classList.add("error-title");
        }
      } else {
        if (dayError) {
          dayError.innerHTML = "";
        }
        dayCover?.classList.remove("error-border");
        dayTitle?.classList.remove("error-title");
        let dayValueElement = document.getElementById("day-value");
        if (dayValueElement) {
          const displayDay = 31 - userDay;
          showDay = displayDay;
        }
      }
    }
  }

  if (getMonth instanceof HTMLInputElement && getMonth.value === "") {
    if (monthError && monthCover) {
      monthError.innerHTML = "This field is required";
      monthCover.classList.add("error-border");
      monthTitle?.classList.add("error-title");
    }
  } else {
    if (monthError) {
      monthError.innerHTML = "";
    }
    monthCover?.classList.remove("error-border");
    monthTitle?.classList.remove("error-title");

    const userMonthElement = document.getElementById(
      "get-month"
    ) as HTMLInputElement;
    if (userMonthElement) {
      const userMonth = parseInt(userMonthElement.value);
      if (!isNaN(userMonth) && userMonth > 12) {
        if (monthError && monthCover) {
          monthError.innerHTML = "Enter a valid month";
          monthCover.classList.add("error-border");
          monthTitle?.classList.add("error-title");
        }
      } else if (userMonth < 1) {
        if (monthError && monthCover) {
          monthError.innerHTML = "month cannot be negative";
          monthCover.classList.add("error-border");
          monthTitle?.classList.add("error-title");
        }
      } else {
        if (monthError) {
          monthError.innerHTML = "";
        }
        monthCover?.classList.remove("error-border");
        monthTitle?.classList.remove("error-title");
        let monthValueElement = document.getElementById("month-value");
        if (monthValueElement) {
          const displayMonth = 12 - userMonth;
          showMonth = displayMonth;
        }
      }
    }
  }

  if (getYear instanceof HTMLInputElement && getYear.value === "") {
    if (yearError && yearCover) {
      yearError.innerHTML = "This field is required";
      yearCover.classList.add("error-border");
      yearTitle?.classList.add("error-title");
    }
  } else {
    if (yearError) {
      yearError.innerHTML = "";
    }
    yearCover?.classList.remove("error-border");
    yearTitle?.classList.remove("error-title");

    const userYearElement = document.getElementById(
      "get-year"
    ) as HTMLInputElement;
    if (userYearElement) {
      const userYear = parseInt(userYearElement.value);
      if (!isNaN(userYear) && userYear > currentYear) {
        if (yearError && yearCover) {
          yearError.innerHTML = "Year cannot be in the future";
          yearCover.classList.add("error-border");
          yearTitle?.classList.add("error-title");
        }
      } else if (userYear < 1880) {
        if (yearError && yearCover) {
          yearError.innerHTML = "Too old";
          yearCover.classList.add("error-border");
          yearTitle?.classList.add("error-title");
        }
      } else {
        if (yearError) {
          yearError.innerHTML = "";
        }
        yearCover?.classList.remove("error-border");
        yearTitle?.classList.remove("error-title");

        let yearValueElement = document.getElementById("year-value");
        if (yearValueElement) {
          const displayYear = currentYear - userYear;
          showYear = displayYear;
        }
      }
    }
  }
  if (
    showDay !== undefined &&
    showMonth !== undefined &&
    showYear !== undefined
  ) {
    displayDate(showDay, showMonth, showYear);
  }
});

desktopBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  if (getDay instanceof HTMLInputElement && getDay.value === "") {
    if (dayError && dayCover) {
      dayError.innerHTML = "This field is required";
      dayCover.classList.add("error-border");
      dayTitle?.classList.add("error-title");
    }
  } else {
    if (dayError) {
      dayError.innerHTML = "";
    }
    dayCover?.classList.remove("error-border");
    dayTitle?.classList.remove("error-title");

    const userDayElement = document.getElementById(
      "get-day"
    ) as HTMLInputElement;
    if (userDayElement) {
      const userDay = parseInt(userDayElement.value);
      if (!isNaN(userDay) && userDay > 31) {
        if (dayError && dayCover) {
          dayError.innerHTML = "Enter a valid day";
          dayCover.classList.add("error-border");
          dayTitle?.classList.add("error-title");
        }
      } else if (userDay < 1) {
        if (dayError && dayCover) {
          dayError.innerHTML = "Day cannot be negative";
          dayCover.classList.add("error-border");
          dayTitle?.classList.add("error-title");
        }
      } else {
        if (dayError) {
          dayError.innerHTML = "";
        }
        dayCover?.classList.remove("error-border");
        dayTitle?.classList.remove("error-title");
        let dayValueElement = document.getElementById("day-value");
        if (dayValueElement) {
          const displayDay = 31 - userDay;
          showDay = displayDay;
        }
      }
    }
  }

  if (getMonth instanceof HTMLInputElement && getMonth.value === "") {
    if (monthError && monthCover) {
      monthError.innerHTML = "This field is required";
      monthCover.classList.add("error-border");
      monthTitle?.classList.add("error-title");
    }
  } else {
    if (monthError) {
      monthError.innerHTML = "";
    }
    monthCover?.classList.remove("error-border");
    monthTitle?.classList.remove("error-title");

    const userMonthElement = document.getElementById(
      "get-month"
    ) as HTMLInputElement;
    if (userMonthElement) {
      const userMonth = parseInt(userMonthElement.value);
      if (!isNaN(userMonth) && userMonth > 12) {
        if (monthError && monthCover) {
          monthError.innerHTML = "Enter a valid month";
          monthCover.classList.add("error-border");
          monthTitle?.classList.add("error-title");
        }
      } else if (userMonth < 1) {
        if (monthError && monthCover) {
          monthError.innerHTML = "month cannot be negative";
          monthCover.classList.add("error-border");
          monthTitle?.classList.add("error-title");
        }
      } else {
        if (monthError) {
          monthError.innerHTML = "";
        }
        monthCover?.classList.remove("error-border");
        monthTitle?.classList.remove("error-title");
        let monthValueElement = document.getElementById("month-value");
        if (monthValueElement) {
          const displayMonth = 12 - userMonth;
          showMonth = displayMonth;
        }
      }
    }
  }

  if (getYear instanceof HTMLInputElement && getYear.value === "") {
    if (yearError && yearCover) {
      yearError.innerHTML = "This field is required";
      yearCover.classList.add("error-border");
      yearTitle?.classList.add("error-title");
    }
  } else {
    if (yearError) {
      yearError.innerHTML = "";
    }
    yearCover?.classList.remove("error-border");
    yearTitle?.classList.remove("error-title");

    const userYearElement = document.getElementById(
      "get-year"
    ) as HTMLInputElement;
    if (userYearElement) {
      const userYear = parseInt(userYearElement.value);
      if (!isNaN(userYear) && userYear > currentYear) {
        if (yearError && yearCover) {
          yearError.innerHTML = "Year cannot be in the future";
          yearCover.classList.add("error-border");
          yearTitle?.classList.add("error-title");
        }
      } else if (userYear < 1880) {
        if (yearError && yearCover) {
          yearError.innerHTML = "Too old";
          yearCover.classList.add("error-border");
          yearTitle?.classList.add("error-title");
        }
      } else {
        if (yearError) {
          yearError.innerHTML = "";
        }
        yearCover?.classList.remove("error-border");
        yearTitle?.classList.remove("error-title");

        let yearValueElement = document.getElementById("year-value");
        if (yearValueElement) {
          const displayYear = currentYear - userYear;
          showYear = displayYear;
        }
      }
    }
  }
  if (
    showDay !== undefined &&
    showMonth !== undefined &&
    showYear !== undefined
  ) {
    displayDate(showDay, showMonth, showYear);
  }
});

function displayDate(
  dayResult: number,
  monthResult: number,
  yearResult: number
) {
  if (dayValue && monthValue && yearValue) {
    dayValue.innerHTML = dayResult.toString();
    monthValue.innerHTML = monthResult.toString();
    yearValue.innerHTML = yearResult.toString();
  }
}
