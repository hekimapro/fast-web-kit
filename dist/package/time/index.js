"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relativeTime = exports.convertToDate = exports.isBusinessHours = exports.isWeekend = exports.getAge = exports.parseDate = exports.toISOStringFormat = exports.formatDate = exports.getWeekNumber = exports.addTimeToDate = exports.currentTimeInMilliseconds = exports.currentTime = exports.currentMonth = exports.currentFullDate = exports.currentSecond = exports.currentDate = exports.currentDay = exports.currentYear = exports.currentMinute = exports.currentHour = exports.currentMonthName = exports.daysInMonth = exports.isLeapYear = exports.isToday = exports.isValid = void 0;
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
/**
 * Checks whether a given value is a valid date object.
 * @param value The value to check
 * @returns True if the value is a valid date object, false otherwise
 */
function isValid(value) {
    try {
        return value instanceof Date && !isNaN(value.getTime());
    }
    catch (error) {
        return false;
    }
}
exports.isValid = isValid;
/**
 * Checks if the given date is today.
 * @param date - The date to check.
 * @returns Returns `true` if the given date is today, else `false`.
 */
function isToday(date) {
    try {
        const today = new Date();
        return date.getDate() === today.getDate()
            && date.getMonth() === today.getMonth()
            && date.getFullYear() === today.getFullYear();
    }
    catch (_a) {
        return false;
    }
}
exports.isToday = isToday;
/**
* Checks if the given year is a leap year.
* @param year - The year to check.
* @returns Returns `true` if the given year is a leap year, else `false`.
*/
function isLeapYear(year) {
    try {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    catch (_a) {
        return false;
    }
}
exports.isLeapYear = isLeapYear;
/**
 * Returns the number of days in the given month and year.
 * @param month - The month number (0-11) or name ("January", "February", etc.).
 * @param year - The year in the Gregorian calendar.
 * @returns The number of days in the given month and year.
 */
function daysInMonth(month, year) {
    try {
        let date = new Date();
        if (month && year)
            date = new Date(year, typeof month === 'string' ? months.indexOf(month) : month, 1);
        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() - 1);
        return date.getDate();
    }
    catch (_a) {
        return -1;
    }
}
exports.daysInMonth = daysInMonth;
/**
 * Returns the name of the current month.
 * @returns {string} The name of the current month.
 */
function currentMonthName() {
    try {
        const currentDate = new Date();
        const currentMonth = months[currentDate.getMonth()];
        return currentMonth;
    }
    catch (error) {
        return "";
    }
}
exports.currentMonthName = currentMonthName;
/**
 * Returns the current hour as a number (0-23)
 * @returns {number} The current hour as a number
 */
function currentHour(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getHours();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentHour = currentHour;
/**
 * Returns the current minute as a number (0-59)
 * @returns {number} The current minute as a number
 */
function currentMinute(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getMinutes();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentMinute = currentMinute;
/**
 * Returns the current year as a number
 * @returns {number} The current minute as a number
 */
function currentYear(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getFullYear();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentYear = currentYear;
/**
 * Returns the current day as a number
 * @returns {number} The current minute as a number
 */
function currentDay(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getDay();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentDay = currentDay;
/**
 * Returns the current date as a number (1-31)
 * @returns {number} The current minute as a number
 */
function currentDate(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getDate();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentDate = currentDate;
/**
 * Returns the current second as a number (0-59)
 * @returns {number} The current second as a number
 */
function currentSecond(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getSeconds();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentSecond = currentSecond;
/**
 * Returns the current date in "YYYY-MM-DD" format.
 * @returns {string} The current date in "YYYY-MM-DD" format.
 */
function currentFullDate(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const paddedMonth = month < 10 ? `0${month}` : `${month}`;
        const paddedDay = day < 10 ? `0${day}` : `${day}`;
        return `${year}-${paddedMonth}-${paddedDay}`;
    }
    catch (error) {
        return "";
    }
}
exports.currentFullDate = currentFullDate;
/**
 * Returns the current month as a number (1-12).
 *
 */
function currentMonth(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getMonth() + 1;
    }
    catch (error) {
        return NaN;
    }
}
exports.currentMonth = currentMonth;
/**
 * Returns the current time in the format `HH:MM:SS`.
 *
 */
function currentTime(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }
    catch (error) {
        return "";
    }
}
exports.currentTime = currentTime;
/**
 * Returns the current time in milliseconds.
 */
function currentTimeInMilliseconds(date) {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getTime();
    }
    catch (error) {
        return NaN;
    }
}
exports.currentTimeInMilliseconds = currentTimeInMilliseconds;
/**
 * Adds a specified amount of time to a given date object
 * based on a specified time unit.
 * @param date The date object to add time to
 * @param time The amount of time to add
 * @param unit The unit of time (seconds, minutes, hours, or days)
 * @returns The updated date object
 */
function addTimeToDate(date, time, unit) {
    try {
        date = convertToDate(date);
        switch (unit) {
            case 'seconds':
                date.setSeconds(date.getSeconds() + time);
                break;
            case 'minutes':
                date.setMinutes(date.getMinutes() + time);
                break;
            case 'hours':
                date.setHours(date.getHours() + time);
                break;
            case 'days':
                date.setDate(date.getDate() + time);
                break;
            case 'years':
                date.setUTCFullYear(date.getFullYear() + time);
                break;
            case 'months':
                date.setMonth(date.getMonth() + time);
                break;
            default:
        }
        return date;
    }
    catch (error) {
        return date;
    }
}
exports.addTimeToDate = addTimeToDate;
/**
 * Returns the week number of a given date.
 * @param date The date
 * @returns The week number
 */
function getWeekNumber(date) {
    try {
        date = convertToDate(date);
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const daysSinceFirstDayOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000; // Number of milliseconds in a day
        return Math.ceil((daysSinceFirstDayOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
    catch (error) {
        return -1;
    }
}
exports.getWeekNumber = getWeekNumber;
/**
 * Formats a given date object into a string representation, using a specified format string.
 * @param date The date object
 * @param format The format string (default is 'YYYY-MM-DD')
 * @returns The formatted date string
 */
function formatDate(date, format = 'YYYY-MM-DD') {
    try {
        date = convertToDate(date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();
        return format
            .replace('YYYY', year.toString())
            .replace('MM', month.toString().padStart(2, '0'))
            .replace('DD', day.toString().padStart(2, '0'))
            .replace('hh', hours.toString().padStart(2, '0'))
            .replace('mm', minutes.toString().padStart(2, '0'))
            .replace('ss', seconds.toString().padStart(2, '0'))
            .replace('SSS', milliseconds.toString().padStart(3, '0'));
    }
    catch (error) {
        return '';
    }
}
exports.formatDate = formatDate;
/**
 * Returns the datetime in ISO string format localized with some options.
 * @param option Object that specifies the date and timezoneOffset if provided
 * @param option.date The date to be converted by default uses the current date
 * @param option.timezoneOffset Can be true for timezone offset by default it is false
 * @param option.exactTimezoneOffset Can be true if timezone offset is true and by default it is false. It returns exactly the timezone offset value
 * @returns ISo format date with based on the local timezone
 */
function toISOStringFormat(options = { date: new Date(), timezoneOffset: false, exactTimezoneOffset: false }) {
    try {
        var tzo = options.date.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };
        const dateTimeWithOffset = (options === null || options === void 0 ? void 0 : options.date.getFullYear()) +
            '-' + pad((options === null || options === void 0 ? void 0 : options.date.getMonth()) + 1) +
            '-' + pad(options === null || options === void 0 ? void 0 : options.date.getDate()) +
            'T' + pad(options === null || options === void 0 ? void 0 : options.date.getHours()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getMinutes()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getSeconds()) +
            dif + pad(Math.floor(Math.abs(tzo) / 60)) +
            ':' + pad(Math.abs(tzo) % 60);
        const dateTimeWithExactly = (options === null || options === void 0 ? void 0 : options.date.getFullYear()) +
            '-' + pad((options === null || options === void 0 ? void 0 : options.date.getMonth()) + 1) +
            '-' + pad(options === null || options === void 0 ? void 0 : options.date.getDate()) +
            'T' + pad(options === null || options === void 0 ? void 0 : options.date.getHours()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getMinutes()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getSeconds()) +
            tzo;
        const dateTimeByDefault = (options === null || options === void 0 ? void 0 : options.date.getFullYear()) +
            '-' + pad((options === null || options === void 0 ? void 0 : options.date.getMonth()) + 1) +
            '-' + pad(options === null || options === void 0 ? void 0 : options.date.getDate()) +
            'T' + pad(options === null || options === void 0 ? void 0 : options.date.getHours()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getMinutes()) +
            ':' + pad(options === null || options === void 0 ? void 0 : options.date.getSeconds()) +
            '.000Z';
        return (options === null || options === void 0 ? void 0 : options.timezoneOffset) && !options.exactTimezoneOffset ? dateTimeWithOffset :
            (options === null || options === void 0 ? void 0 : options.timezoneOffset) && options.exactTimezoneOffset ? dateTimeWithExactly : dateTimeByDefault;
    }
    catch (_a) {
        throw new Error("Inputs options must be an object with date of type date, timezoneoffset boolean value and exact timezoneOffset boolean value");
    }
}
exports.toISOStringFormat = toISOStringFormat;
/**
 * Parses a string representation of a date into a date object, using a specified format string.
 * @param dateString The string representation of the date to parse
 * @param format The format string to use for parsing the date
 * @returns A date object representing the parsed date, or null if the parsing fails
 */
function parseDate(dateString, format) {
    try {
        const parts = dateString.match(/(\d+)/g);
        if (!parts || parts.length < 3) {
            return null;
        }
        const formatParts = format.match(/([Ymd]+)/g);
        if (!formatParts || formatParts.length < 3) {
            return null;
        }
        const year = parseInt(parts[formatParts.indexOf('Y')]);
        const month = parseInt(parts[formatParts.indexOf('m')]) - 1;
        const day = parseInt(parts[formatParts.indexOf('d')]);
        return new Date(year, month, day);
    }
    catch (error) {
        return null;
    }
}
exports.parseDate = parseDate;
/**
 * Calculates the age of a person based on their birthdate and a reference date.
 * @param birthdate The birthdate of the person
 * @param referenceDate The reference date to calculate the age from (defaults to the current date)
 * @returns The age of the person in years, or -1 if the calculation fails
 */
function getAge(birthdate, referenceDate = new Date()) {
    try {
        birthdate = convertToDate(birthdate);
        referenceDate = convertToDate(referenceDate);
        const ageInMillis = referenceDate.getTime() - birthdate.getTime();
        const ageInYears = ageInMillis / 31536000000; // 365 days + leap years
        return Math.floor(ageInYears);
    }
    catch (error) {
        return -1;
    }
}
exports.getAge = getAge;
/**
 * Checks whether a given date falls on a weekend (i.e. a Saturday or Sunday).
 * @param date The date to check
 * @returns True if the date falls on a weekend, false otherwise
 */
function isWeekend(date) {
    try {
        date = convertToDate(date);
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    }
    catch (error) {
        return false;
    }
}
exports.isWeekend = isWeekend;
/**
* Checks whether a given time falls within business hours (9am-5pm, Monday-Friday).
* @param date The date and time to check
* @returns True if the time falls within business hours, false otherwise
*/
function isBusinessHours(date) {
    try {
        date = convertToDate(date);
        const dayOfWeek = date.getDay();
        const hours = date.getHours();
        return dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours <= 17;
    }
    catch (error) {
        return false;
    }
}
exports.isBusinessHours = isBusinessHours;
/**
 * Converts a string representation of a date and time into a Date object.
 * @param dateString The string representation of the date and time to convert
 * @param format The format string to use for parsing the date (defaults to 'YYYY-MM-DDTHH:mm:ssZ')
 * @returns A Date object representing the parsed date and time, or null if the parsing fails
 */
function convertToDate(dateString) {
    try {
        return new Date(dateString);
    }
    catch (error) {
        return new Date(dateString);
        ;
    }
}
exports.convertToDate = convertToDate;
/**
 * Returns a relative time according to a provided date
 *
 * @param {Date} date - The date to calculate the relative time from
 *
 * @returns {string} A string representing the relative time
 */
const relativeTime = (date) => {
    try {
        date = convertToDate(date);
        const currentDate = new Date();
        const differenceInSeconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
        if (differenceInSeconds < 60) {
            return "just now";
        }
        else if (differenceInSeconds < 120) {
            return "1 minute ago";
        }
        else if (differenceInSeconds < 3600) {
            const minutes = Math.floor(differenceInSeconds / 60);
            return `${minutes} minutes ago`;
        }
        else if (differenceInSeconds < 7200) {
            return "1 hour ago";
        }
        else if (differenceInSeconds < 86400) {
            const hours = Math.floor(differenceInSeconds / 3600);
            return `${hours} hours ago`;
        }
        else if (differenceInSeconds < 172800) {
            return "1 day ago";
        }
        else {
            const days = Math.floor(differenceInSeconds / 86400);
            return `${days} days ago`;
        }
    }
    catch (error) {
        return "";
    }
};
exports.relativeTime = relativeTime;
//# sourceMappingURL=index.js.map