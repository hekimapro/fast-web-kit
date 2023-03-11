import { month, timeUnit } from "../../types";

const months: month[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

/**
 * Checks whether a given value is a valid date object.
 * @param value The value to check
 * @returns True if the value is a valid date object, false otherwise
 */
export function isValid(value: any): boolean {
    try {
        return value instanceof Date && !isNaN(value.getTime());
    } catch (error) {
        console.error(error);
        return false;
    }
}


/**
 * Checks if the given date is today.
 * @param date - The date to check.
 * @returns Returns `true` if the given date is today, else `false`.
 */
export function isToday(date: Date): boolean {
    try {
        const today = new Date();
        return date.getDate() === today.getDate()
            && date.getMonth() === today.getMonth()
            && date.getFullYear() === today.getFullYear();
    } catch {
        return false;
    }
}

/**
* Checks if the given year is a leap year.
* @param year - The year to check.
* @returns Returns `true` if the given year is a leap year, else `false`.
*/
export function isLeapYear(year: number): boolean {
    try {
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    } catch {
        return false;
    }
}

/**
 * Returns the number of days in the given month and year.
 * @param month - The month number (0-11) or name ("January", "February", etc.).
 * @param year - The year in the Gregorian calendar.
 * @returns The number of days in the given month and year.
 */
export function daysInMonth(month?: number | month, year?: number): number {
    try {

        let date = new Date()

        if (month && year)
            date = new Date(year, typeof month === 'string' ? months.indexOf(month) : month, 1);

        date.setMonth(date.getMonth() + 1);
        date.setDate(date.getDate() - 1);
        return date.getDate();
    } catch {
        return -1;
    }
}

/**
 * Returns the name of the current month.
 * @returns {string} The name of the current month.
 */
export function currentMonthName(): month | string {
    try {

        const currentDate: Date = new Date();
        const currentMonth: month = months[currentDate.getMonth()];

        return currentMonth;
    } catch (error) {
        console.error(error);
        return ""
    }
}

/**
 * Returns the current hour as a number (0-23)
 * @returns {number} The current hour as a number
 */
export function currentHour(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getHours();
    } catch (error) {
        console.error(error);
        return NaN
    }
}

/**
 * Returns the current minute as a number (0-59)
 * @returns {number} The current minute as a number
 */
export function currentMinute(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getMinutes();
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Returns the current year as a number
 * @returns {number} The current minute as a number
 */
export function currentYear(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getFullYear();
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Returns the current day as a number
 * @returns {number} The current minute as a number
 */
export function currentDay(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getDay();
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Returns the current date as a number (1-31)
 * @returns {number} The current minute as a number
 */
export function currentDate(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getDate();
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Returns the current second as a number (0-59)
 * @returns {number} The current second as a number
 */
export function currentSecond(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getSeconds();
    } catch (error) {
        console.error(error);
        return NaN
    }
}

/**
 * Returns the current date in "YYYY-MM-DD" format.
 * @returns {string} The current date in "YYYY-MM-DD" format.
 */
export function currentFullDate(date?: any): string {
    try {
        const now = date ? convertToDate(date) : new Date();
        const year: number = now.getFullYear();
        const month: number = now.getMonth() + 1;
        const day: number = now.getDate();
        const paddedMonth: string = month < 10 ? `0${month}` : `${month}`;
        const paddedDay: string = day < 10 ? `0${day}` : `${day}`;
        return `${year}-${paddedMonth}-${paddedDay}`;
    } catch (error) {
        console.error(error);
        return "";
    }
}

/**
 * Returns the current month as a number (1-12).
 *
 */
export function currentMonth(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getMonth() + 1;
    } catch (error) {
        return NaN
    }
}

/**
 * Returns the current time in the format `HH:MM:SS`.
 *
 */
export function currentTime(date?: any): string {
    try {
        const now = date ? convertToDate(date) : new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    } catch (error) {
        return ""
    }
}

/**
 * Returns the current time in milliseconds.
 */
export function currentTimeInMilliseconds(date?: any): number {
    try {
        const now = date ? convertToDate(date) : new Date();
        return now.getTime();
    } catch (error) {
        console.error(error);
        return NaN
    }
}


/**
 * Adds a specified amount of time to a given date object
 * based on a specified time unit.
 * @param date The date object to add time to
 * @param time The amount of time to add
 * @param unit The unit of time (seconds, minutes, hours, or days)
 * @returns The updated date object
 */
export function addTimeToDate(date: any, time: number, unit: timeUnit): Date {
    try {
        date = convertToDate(date)
        console.log(new Date().setUTCFullYear)
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
                console.log("invalid unit")
        }
        return date;

    } catch (error) {
        console.error(error);
        return date;
    }
}

/**
 * Returns the week number of a given date.
 * @param date The date
 * @returns The week number
 */
export function getWeekNumber(date: any): number {
    try {
        date = convertToDate(date)
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const daysSinceFirstDayOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000; // Number of milliseconds in a day
        return Math.ceil((daysSinceFirstDayOfYear + firstDayOfYear.getDay() + 1) / 7);
    } catch (error) {
        console.error(error);
        return -1;
    }
}

/**
 * Formats a given date object into a string representation, using a specified format string.
 * @param date The date object
 * @param format The format string (default is 'YYYY-MM-DD')
 * @returns The formatted date string
 */
export function formatDate(date: any, format: string = 'YYYY-MM-DD'): string {
    try {
        date = convertToDate(date)
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
    } catch (error) {
        console.error(error);
        return '';
    }
}

/**
 * Parses a string representation of a date into a date object, using a specified format string.
 * @param dateString The string representation of the date to parse
 * @param format The format string to use for parsing the date
 * @returns A date object representing the parsed date, or null if the parsing fails
 */
export function parseDate(dateString: string, format: string): Date | null {
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
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Calculates the age of a person based on their birthdate and a reference date.
 * @param birthdate The birthdate of the person
 * @param referenceDate The reference date to calculate the age from (defaults to the current date)
 * @returns The age of the person in years, or -1 if the calculation fails
 */
export function getAge(birthdate: any, referenceDate: any = new Date()): number {
    try {
        birthdate = convertToDate(birthdate)
        referenceDate = convertToDate(referenceDate)
        const ageInMillis = referenceDate.getTime() - birthdate.getTime();
        const ageInYears = ageInMillis / 31536000000; // 365 days + leap years
        return Math.floor(ageInYears);
    } catch (error) {
        console.error(error);
        return -1;
    }
}

/**
 * Checks whether a given date falls on a weekend (i.e. a Saturday or Sunday).
 * @param date The date to check
 * @returns True if the date falls on a weekend, false otherwise
 */
export function isWeekend(date: any): boolean {
    try {
        date = convertToDate(date)
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
* Checks whether a given time falls within business hours (9am-5pm, Monday-Friday).
* @param date The date and time to check
* @returns True if the time falls within business hours, false otherwise
*/
export function isBusinessHours(date: any): boolean {
    try {
        date = convertToDate(date)
        const dayOfWeek = date.getDay();
        const hours = date.getHours();
        return dayOfWeek >= 1 && dayOfWeek <= 5 && hours >= 9 && hours <= 17;
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Converts a string representation of a date and time into a Date object.
 * @param dateString The string representation of the date and time to convert
 * @param format The format string to use for parsing the date (defaults to 'YYYY-MM-DDTHH:mm:ssZ')
 * @returns A Date object representing the parsed date and time, or null if the parsing fails
 */
export function convertToDate(dateString: any): Date | null {
    try {
        return new Date(dateString);
    } catch (error) {
        console.error(error);
        return null;
    }
}

/**
 * Returns a relative time according to a provided date
 *
 * @param {Date} date - The date to calculate the relative time from
 *
 * @returns {string} A string representing the relative time
 */
export const relativeTime = (date: any): string => {
    try {
        date = convertToDate(date)
        const currentDate = new Date();
        const differenceInSeconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);

        if (differenceInSeconds < 60) {
            return "just now";
        } else if (differenceInSeconds < 120) {
            return "1 minute ago";
        } else if (differenceInSeconds < 3600) {
            const minutes = Math.floor(differenceInSeconds / 60);
            return `${minutes} minutes ago`;
        } else if (differenceInSeconds < 7200) {
            return "1 hour ago";
        } else if (differenceInSeconds < 86400) {
            const hours = Math.floor(differenceInSeconds / 3600);
            return `${hours} hours ago`;
        } else if (differenceInSeconds < 172800) {
            return "1 day ago";
        } else {
            const days = Math.floor(differenceInSeconds / 86400);
            return `${days} days ago`;
        }
    } catch (error) {
        console.error(`Error calculating relative time: ${error.message}`);
        return "";
    }
};
