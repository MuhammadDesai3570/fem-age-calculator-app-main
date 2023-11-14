"use strict";
const dayTitle = document.getElementById("day-title");
const monthTitle = document.getElementById("month-title");
const yearTitle = document.getElementById("year-title");
const dayCover = document.querySelector(".day-cover");
const monthCover = document.querySelector(".month-cover");
const yearCover = document.querySelector(".year-cover");
var getDay = document.getElementById("get-day");
var getMonth = document.getElementById("get-month");
var getYear = document.getElementById("get-year");
const dayError = document.querySelector(".day-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const yearValue = document.getElementById("year-value");
const monthValue = document.getElementById("month-value");
const dayValue = document.getElementById("day-value");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDay();
const mobileBtn = document.getElementById("mobile-submit");
const desktopBtn = document.getElementById("desktop-submit");
let showDay;
let showMonth;
let showYear;
mobileBtn === null || mobileBtn === void 0 ? void 0 : mobileBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (getDay instanceof HTMLInputElement && getDay.value === "") {
        if (dayError && dayCover) {
            dayError.innerHTML = "This field is required";
            dayCover.classList.add("error-border");
            dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
        }
    }
    else {
        if (dayError) {
            dayError.innerHTML = "";
        }
        dayCover === null || dayCover === void 0 ? void 0 : dayCover.classList.remove("error-border");
        dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.remove("error-title");
        const userDayElement = document.getElementById("get-day");
        if (userDayElement) {
            const userDay = parseInt(userDayElement.value);
            if (!isNaN(userDay) && userDay > 31) {
                if (dayError && dayCover) {
                    dayError.innerHTML = "Enter a valid day";
                    dayCover.classList.add("error-border");
                    dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
                }
            }
            else if (userDay < 1) {
                if (dayError && dayCover) {
                    dayError.innerHTML = "Day cannot be negative";
                    dayCover.classList.add("error-border");
                    dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
                }
            }
            else {
                if (dayError) {
                    dayError.innerHTML = "";
                }
                dayCover === null || dayCover === void 0 ? void 0 : dayCover.classList.remove("error-border");
                dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.remove("error-title");
                let dayValueElement = document.getElementById("day-value");
                if (dayValueElement) {
                    const displayDay = userDay - currentDay;
                    showDay = displayDay;
                }
            }
        }
    }
    if (getMonth instanceof HTMLInputElement && getMonth.value === "") {
        if (monthError && monthCover) {
            monthError.innerHTML = "This field is required";
            monthCover.classList.add("error-border");
            monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
        }
    }
    else {
        if (monthError) {
            monthError.innerHTML = "";
        }
        monthCover === null || monthCover === void 0 ? void 0 : monthCover.classList.remove("error-border");
        monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.remove("error-title");
        const userMonthElement = document.getElementById("get-month");
        if (userMonthElement) {
            const userMonth = parseInt(userMonthElement.value);
            if (!isNaN(userMonth) && userMonth > 12) {
                if (monthError && monthCover) {
                    monthError.innerHTML = "Enter a valid month";
                    monthCover.classList.add("error-border");
                    monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
                }
            }
            else if (userMonth < 1) {
                if (monthError && monthCover) {
                    monthError.innerHTML = "month cannot be negative";
                    monthCover.classList.add("error-border");
                    monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
                }
            }
            else {
                if (monthError) {
                    monthError.innerHTML = "";
                }
                monthCover === null || monthCover === void 0 ? void 0 : monthCover.classList.remove("error-border");
                monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.remove("error-title");
                let monthValueElement = document.getElementById("month-value");
                if (monthValueElement) {
                    const displayMonth = currentMonth - userMonth;
                    showMonth = displayMonth;
                }
            }
        }
    }
    if (getYear instanceof HTMLInputElement && getYear.value === "") {
        if (yearError && yearCover) {
            yearError.innerHTML = "This field is required";
            yearCover.classList.add("error-border");
            yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
        }
    }
    else {
        if (yearError) {
            yearError.innerHTML = "";
        }
        yearCover === null || yearCover === void 0 ? void 0 : yearCover.classList.remove("error-border");
        yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.remove("error-title");
        const userYearElement = document.getElementById("get-year");
        if (userYearElement) {
            const userYear = parseInt(userYearElement.value);
            if (!isNaN(userYear) && userYear > currentYear) {
                if (yearError && yearCover) {
                    yearError.innerHTML = "Year cannot be in the future";
                    yearCover.classList.add("error-border");
                    yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
                }
            }
            else if (userYear < 1880) {
                if (yearError && yearCover) {
                    yearError.innerHTML = "Too old";
                    yearCover.classList.add("error-border");
                    yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
                }
            }
            else {
                if (yearError) {
                    yearError.innerHTML = "";
                }
                yearCover === null || yearCover === void 0 ? void 0 : yearCover.classList.remove("error-border");
                yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.remove("error-title");
                let yearValueElement = document.getElementById("year-value");
                if (yearValueElement) {
                    const displayYear = currentYear - userYear;
                    showYear = displayYear;
                }
            }
        }
    }
    if (showDay !== undefined &&
        showMonth !== undefined &&
        showYear !== undefined) {
        displayDate(showDay, showMonth, showYear);
    }
});
desktopBtn === null || desktopBtn === void 0 ? void 0 : desktopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (getDay instanceof HTMLInputElement && getDay.value === "") {
        if (dayError && dayCover) {
            dayError.innerHTML = "This field is required";
            dayCover.classList.add("error-border");
            dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
        }
    }
    else {
        if (dayError) {
            dayError.innerHTML = "";
        }
        dayCover === null || dayCover === void 0 ? void 0 : dayCover.classList.remove("error-border");
        dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.remove("error-title");
        const userDayElement = document.getElementById("get-day");
        if (userDayElement) {
            const userDay = parseInt(userDayElement.value);
            if (!isNaN(userDay) && userDay > 31) {
                if (dayError && dayCover) {
                    dayError.innerHTML = "Enter a valid day";
                    dayCover.classList.add("error-border");
                    dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
                }
            }
            else if (userDay < 1) {
                if (dayError && dayCover) {
                    dayError.innerHTML = "Day cannot be negative";
                    dayCover.classList.add("error-border");
                    dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.add("error-title");
                }
            }
            else {
                if (dayError) {
                    dayError.innerHTML = "";
                }
                dayCover === null || dayCover === void 0 ? void 0 : dayCover.classList.remove("error-border");
                dayTitle === null || dayTitle === void 0 ? void 0 : dayTitle.classList.remove("error-title");
                let dayValueElement = document.getElementById("day-value");
                if (dayValueElement) {
                    const displayDay = userDay - currentDay;
                    showDay = displayDay;
                }
            }
        }
    }
    if (getMonth instanceof HTMLInputElement && getMonth.value === "") {
        if (monthError && monthCover) {
            monthError.innerHTML = "This field is required";
            monthCover.classList.add("error-border");
            monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
        }
    }
    else {
        if (monthError) {
            monthError.innerHTML = "";
        }
        monthCover === null || monthCover === void 0 ? void 0 : monthCover.classList.remove("error-border");
        monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.remove("error-title");
        const userMonthElement = document.getElementById("get-month");
        if (userMonthElement) {
            const userMonth = parseInt(userMonthElement.value);
            if (!isNaN(userMonth) && userMonth > 12) {
                if (monthError && monthCover) {
                    monthError.innerHTML = "Enter a valid month";
                    monthCover.classList.add("error-border");
                    monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
                }
            }
            else if (userMonth < 1) {
                if (monthError && monthCover) {
                    monthError.innerHTML = "month cannot be negative";
                    monthCover.classList.add("error-border");
                    monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.add("error-title");
                }
            }
            else {
                if (monthError) {
                    monthError.innerHTML = "";
                }
                monthCover === null || monthCover === void 0 ? void 0 : monthCover.classList.remove("error-border");
                monthTitle === null || monthTitle === void 0 ? void 0 : monthTitle.classList.remove("error-title");
                let monthValueElement = document.getElementById("month-value");
                if (monthValueElement) {
                    const displayMonth = currentMonth - userMonth;
                    showMonth = displayMonth;
                }
            }
        }
    }
    if (getYear instanceof HTMLInputElement && getYear.value === "") {
        if (yearError && yearCover) {
            yearError.innerHTML = "This field is required";
            yearCover.classList.add("error-border");
            yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
        }
    }
    else {
        if (yearError) {
            yearError.innerHTML = "";
        }
        yearCover === null || yearCover === void 0 ? void 0 : yearCover.classList.remove("error-border");
        yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.remove("error-title");
        const userYearElement = document.getElementById("get-year");
        if (userYearElement) {
            const userYear = parseInt(userYearElement.value);
            if (!isNaN(userYear) && userYear > currentYear) {
                if (yearError && yearCover) {
                    yearError.innerHTML = "Year cannot be in the future";
                    yearCover.classList.add("error-border");
                    yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
                }
            }
            else if (userYear < 1880) {
                if (yearError && yearCover) {
                    yearError.innerHTML = "Too old";
                    yearCover.classList.add("error-border");
                    yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.add("error-title");
                }
            }
            else {
                if (yearError) {
                    yearError.innerHTML = "";
                }
                yearCover === null || yearCover === void 0 ? void 0 : yearCover.classList.remove("error-border");
                yearTitle === null || yearTitle === void 0 ? void 0 : yearTitle.classList.remove("error-title");
                let yearValueElement = document.getElementById("year-value");
                if (yearValueElement) {
                    const displayYear = currentYear - userYear;
                    showYear = displayYear;
                }
            }
        }
    }
    if (showDay !== undefined &&
        showMonth !== undefined &&
        showYear !== undefined) {
        displayDate(showDay, showMonth, showYear);
    }
});
function displayDate(dayResult, monthResult, yearResult) {
    if (dayValue && monthValue && yearValue) {
        dayValue.innerHTML = dayResult.toString();
        monthValue.innerHTML = monthResult.toString();
        yearValue.innerHTML = yearResult.toString();
    }
}
