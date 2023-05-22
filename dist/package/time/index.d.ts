type month = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
/**
 * Checks whether a given value is a valid date object.
 * @param value The value to check
 * @returns True if the value is a valid date object, false otherwise
 */
export declare function isValid(value: any): boolean;
/**
 * Checks if the given date is today.
 * @param date - The date to check.
 * @returns Returns `true` if the given date is today, else `false`.
 */
export declare function isToday(date: Date): boolean;
/**
* Checks if the given year is a leap year.
* @param year - The year to check.
* @returns Returns `true` if the given year is a leap year, else `false`.
*/
export declare function isLeapYear(year: number): boolean;
/**
 * Returns the number of days in the given month and year.
 * @param month - The month number (0-11) or name ("January", "February", etc.).
 * @param year - The year in the Gregorian calendar.
 * @returns The number of days in the given month and year.
 */
export declare function daysInMonth(month?: number | month, year?: number): number;
/**
 * Returns the name of the current month.
 * @returns {string} The name of the current month.
 */
export declare function currentMonthName(): month | string;
/**
 * Returns the current hour as a number (0-23)
 * @returns {number} The current hour as a number
 */
export declare function currentHour(date?: any): number;
/**
 * Returns the current minute as a number (0-59)
 * @returns {number} The current minute as a number
 */
export declare function currentMinute(date?: any): number;
/**
 * Returns the current year as a number
 * @returns {number} The current minute as a number
 */
export declare function currentYear(date?: any): number;
/**
 * Returns the current day as a number
 * @returns {number} The current minute as a number
 */
export declare function currentDay(date?: any): number;
/**
 * Returns the current date as a number (1-31)
 * @returns {number} The current minute as a number
 */
export declare function currentDate(date?: any): number;
/**
 * Returns the current second as a number (0-59)
 * @returns {number} The current second as a number
 */
export declare function currentSecond(date?: any): number;
/**
 * Returns the current date in "YYYY-MM-DD" format.
 * @returns {string} The current date in "YYYY-MM-DD" format.
 */
export declare function currentFullDate(date?: any): string;
/**
 * Returns the current month as a number (1-12).
 *
 */
export declare function currentMonth(date?: any): number;
/**
 * Returns the current time in the format `HH:MM:SS`.
 *
 */
export declare function currentTime(date?: any): string;
/**
 * Returns the current time in milliseconds.
 */
export declare function currentTimeInMilliseconds(date?: any): number;
/**
 * Adds a specified amount of time to a given date object
 * based on a specified time unit.
 * @param date The date object to add time to
 * @param time The amount of time to add
 * @param unit The unit of time (seconds, minutes, hours, or days)
 * @returns The updated date object
 */
export declare function addTimeToDate(date: any, time: number, unit: 'seconds' | 'minutes' | 'hours' | 'days' | 'weeks' | 'months' | 'years'): Date;
/**
 * Returns the week number of a given date.
 * @param date The date
 * @returns The week number
 */
export declare function getWeekNumber(date: any): number;
/**
 * Formats a given date object into a string representation, using a specified format string.
 * @param date The date object
 * @param format The format string (default is 'YYYY-MM-DD')
 * @returns The formatted date string
 */
export declare function formatDate(date: any, format?: string): string;
/**
 * Returns the datetime in ISO string format localized with some options.
 * @param option Object that specifies the date and timezoneOffset if provided
 * @param option.date The date to be converted by default uses the current date
 * @param option.timezoneOffset Can be true for timezone offset by default it is false
 * @param option.exactTimezoneOffset Can be true if timezone offset is true and by default it is false. It returns exactly the timezone offset value
 * @returns ISo format date with based on the local timezone
 */
export declare function toISOStringFormat(options?: {
    date: Date;
    timezoneOffset: boolean;
    exactTimezoneOffset: boolean;
}): string | null;
/**
 * Parses a string representation of a date into a date object, using a specified format string.
 * @param dateString The string representation of the date to parse
 * @param format The format string to use for parsing the date
 * @returns A date object representing the parsed date, or null if the parsing fails
 */
export declare function parseDate(dateString: string, format: string): Date | null;
/**
 * Calculates the age of a person based on their birthdate and a reference date.
 * @param birthdate The birthdate of the person
 * @param referenceDate The reference date to calculate the age from (defaults to the current date)
 * @returns The age of the person in years, or -1 if the calculation fails
 */
export declare function getAge(birthdate: any, referenceDate?: any): number;
/**
 * Checks whether a given date falls on a weekend (i.e. a Saturday or Sunday).
 * @param date The date to check
 * @returns True if the date falls on a weekend, false otherwise
 */
export declare function isWeekend(date: any): boolean;
/**
* Checks whether a given time falls within business hours (9am-5pm, Monday-Friday).
* @param date The date and time to check
* @returns True if the time falls within business hours, false otherwise
*/
export declare function isBusinessHours(date: any): boolean;
/**
 * Converts a string representation of a date and time into a Date object.
 * @param dateString The string representation of the date and time to convert
 * @param format The format string to use for parsing the date (defaults to 'YYYY-MM-DDTHH:mm:ssZ')
 * @returns A Date object representing the parsed date and time, or null if the parsing fails
 */
export declare function convertToDate(dateString: any): Date;
/**
 * Returns a relative time according to a provided date
 *
 * @param {Date} date - The date to calculate the relative time from
 *
 * @returns {string} A string representing the relative time
 */
export declare const relativeTime: (date: any) => string;
export {};
