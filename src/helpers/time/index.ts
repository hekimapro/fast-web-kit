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
export function isValidDate(value: any): boolean {
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
export function getDaysInMonth(month: number | month, year: number): number {
    try {
        const date = new Date(year, typeof month === 'string' ? months.indexOf(month) : month, 1);
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
export function getCurrentMonthName(): month {
    try {

        const currentDate: Date = new Date();
        const currentMonth: month = months[currentDate.getMonth()];

        return currentMonth;
    } catch (error) {
        console.error(error);
        throw new Error("An error occurred while getting the current month name.");
    }
}

/**
 * Returns the current date as a string in the format "YYYY-MM-DD"
 * @returns {string} The current date in "YYYY-MM-DD" format
 */
export function currentDate(): number {
    try {
        const now = new Date();
        return now.getDate();
    } catch (error) {
        console.error(error);
        throw new Error("Unable to get the current date.");
    }
}

/**
 * Returns the current hour as a number (0-23)
 * @returns {number} The current hour as a number
 */
export function currentHour(): number {
    try {
        const now = new Date();
        return now.getHours();
    } catch (error) {
        console.error(error);
        throw new Error("Unable to get the current hour.");
    }
}

/**
 * Returns the current minute as a number (0-59)
 * @returns {number} The current minute as a number
 */
export function currentMinute(): number {
    try {
        const now = new Date();
        return now.getMinutes();
    } catch (error) {
        console.error(error);
        throw new Error("Unable to get the current minute.");
    }
}

/**
 * Returns the current second as a number (0-59)
 * @returns {number} The current second as a number
 */
export function currentSecond(): number {
    try {
        const now = new Date();
        return now.getSeconds();
    } catch (error) {
        console.error(error);
        throw new Error("Unable to get the current second.");
    }
}

/**
 * Returns the current date in "YYYY-MM-DD" format.
 * @returns {string} The current date in "YYYY-MM-DD" format.
 */
export function currentFullDate(): string {
    try {
        const now: Date = new Date();
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
 * @throws {Error} If unable to get the current month.
 */
export function currentMonth(): number {
    try {
        return new Date().getMonth() + 1;
    } catch (error) {
        throw new Error(`Unable to get the current month: ${error}`);
    }
}

/**
 * Returns the current time in the format `HH:MM:SS`.
 *
 * @throws {Error} If unable to get the current time.
 */
export function currentTime(): string {
    try {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    } catch (error) {
        throw new Error(`Unable to get the current time: ${error}`);
    }
}

/**
 * Returns the current time in milliseconds.
 * @returns {number} The current time in milliseconds.
 */
export function currentTimeInMilliseconds(): number {
    try {
        return new Date().getTime();
    } catch (error) {
        console.error(error);
        return -1;
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
            default:
                throw new Error(`Invalid time unit: ${unit}`);
        }
    } catch (error) {
        console.error(error);
    }
    return date;
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
export function convertToDate(dateString: string, format: string = 'YYYY-MM-DDTHH:mm:ssZ'): Date | null {
    try {
        const year = parseInt(dateString.substring(format.indexOf('Y'), format.indexOf('Y') + 4));
        const month = parseInt(dateString.substring(format.indexOf('M'), format.indexOf('M') + 2)) - 1;
        const day = parseInt(dateString.substring(format.indexOf('D'), format.indexOf('D') + 2));
        return new Date(Date.UTC(year, month, day));
    } catch (error) {
        console.error(error);
        return null;
    }
}