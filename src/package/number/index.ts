/**
 * Checks if a given value is a valid number
 * @param number
 */
export const isValid = (number: number): boolean => typeof number === "number" && !isNaN(number)

/**
 * Checks if a given value is a valid integer
 * @param integer
 */
export const isInteger = (integer: number): boolean => isValid(integer) ? Number.isInteger(integer) : false

/**
 * Checks if a given number is positive
 * @param number
 */
export const isPositive = (number: number): boolean => isValid(number) ? number > 0 : false

/**
 * Checks if a given number is negative
 * @param number
 */
export const isNegative = (number: number): boolean => isValid(number) ? number < 0 : false

/**
 * Check if a given number is zero
 * @param number
 */
export const isZero = (number: number): boolean => isValid(number) ? number === 0 : false

/**
 * Checks if a given  value is a positive integer
 * @param number
 */
export const isPositiveInteger = (number: number): boolean => isInteger(number) ? number > 0 : false

/**
 * Checks if a given value is a negative integer
 * @param number
 */
export const isNegativeInteger = (number: number): boolean => isInteger(number) ? number < 0 : false

/**
 * Formats a number with specified decimal points and separator.
 * @param num The number to format.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @param separator The separator to use between thousands. Defaults to ",".
 * @returns The formatted number as a string.
 */
export function formatNumber(num: number, decimalPoints = 2, separator = ','): string {
    try {
        return num.toFixed(decimalPoints).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    } catch (error) {
        return num.toString();
    }
}

/**
 * Converts a decimal number to a percentage value with specified decimal points.
 * @param num The number to convert to percentage.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @returns The percentage value as a string with percent sign.
 */
export function percent(num: number, decimalPoints = 2): string {
    try {
        return (num * 100).toFixed(decimalPoints) + '%';
    } catch (error) {
        return num.toString();
    }
}

/**
 * Converts a number to its ordinal representation.
 * @param num The number to convert to ordinal representation.
 * @returns The ordinal representation of the number.
 */
export function toOrdinal(num: number): string {
    try {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const suffix = num % 100 > 10 && num % 100 < 14 ? suffixes[0] : suffixes[num % 10] || suffixes[0];
        return num + suffix;
    } catch (error) {
        return num.toString();
    }
}

/**
 * Generates the nth number in the Fibonacci sequence.
 * @param n - The index of the number to generate (starting from 0).
 * @returns The nth number in the Fibonacci sequence.
 */
export function fibonacci(n: number): number {
    try {
        if (n < 0) {
            return NaN
        }
        if (n === 0) {
            return 0;
        }
        let prev = 0;
        let current = 1;
        for (let i = 1; i < n; i++) {
            let next = prev + current;
            prev = current;
            current = next;
        }
        return current;
    } catch (err) {
        return NaN;
    }
}

/**
 * Generates a random float number between the given minimum and maximum values (inclusive of both).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random float number between the given minimum and maximum values.
 */
export const randomFloat = (min: number, max: number): number => {
    try {
        return Math.random() * (max - min) + min;
    } catch (error) {
        return NaN
    }
};

/**
 * Converts the given angle in radians to degrees.
 * @param radians The angle in radians.
 * @returns The angle in degrees.
 */
export const radianToDegree = (radians: number): number => {
    try {
        return radians * (180 / Math.PI);
    } catch (error) {
        return NaN
    }
};

/**
 * Converts the given angle in degrees to radians.
 * @param degrees The angle in degrees.
 * @returns The angle in radians.
 */
export const degreeToRadian = (degrees: number): number => {
    try {
        return degrees * (Math.PI / 180);
    } catch (error) {
        return NaN
    }
};

/**
 * Clamps a number within the given range.
 *
 * @param num - The number to clamp.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 *
 * @returns The clamped number.
 */
export const clamp = (num: number, min: number, max: number): number => {
    try {
        return Math.min(Math.max(num, min), max);
    } catch (error) {
        return num;
    }
};

/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 *
 * @param min - The minimum value for the random integer.
 * @param max - The maximum value for the random integer.
 *
 * @returns The randomly generated integer.
 */
export const randomInteger = (min: number, max: number): number => {
    try {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } catch (error) {
        return 0;
    }
};

/**
 * Checks if a number is even.
 * @param n - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
export function isEven(n: number): boolean {
    try {
        return n % 2 === 0;
    } catch (error) {
        return false;
    }
}


/**
* Checks if a number is odd.
* @param n - The number to check.
* @returns `true` if the number is odd, `false` otherwise.
*/
export function isOdd(n: number): boolean {
    try {
        return n % 2 !== 0;
    } catch (error) {
        return false;
    }
}

/**
* Checks if a number is a multiple of another number.
* @param n - The number to check.
* @param multiple - The number to check if `n` is a multiple of.
* @returns `true` if `n` is a multiple of `multiple`, `false` otherwise.
*/
export function isMultipleOf(n: number, multiple: number): boolean {
    try {
        return n % multiple === 0;
    } catch (error) {
        return false;
    }
}

/**
* Checks if a number is divisible by another number.
* @param n - The number to check.
* @param divisor - The number to check if `n` is divisible by.
* @returns `true` if `n` is divisible by `divisor`, `false` otherwise.
*/
export function isDivisibleBy(n: number, divisor: number): boolean {
    try {
        return divisor % n === 0;
    } catch (error) {
        return false;
    }
}

/**
 * Adds two or more numbers together.
 * @param numbers The numbers to be added.
 * @returns The sum of the numbers.
 */
export const add = (...numbers: number[]): number => {
    try {
        return numbers.reduce((acc, val) => acc + val);
    } catch (error) {
        return 0;
    }
};

/**
 * Subtracts one number from another.
 * @param a The number to subtract from.
 * @param b The number to subtract.
 * @returns The difference between the two numbers.
 */
export const subtract = (a: number, b: number): number => {
    try {
        return a - b;
    } catch (error) {
        return 0;
    }
};

/**
 * Multiplies two or more numbers together.
 * @param numbers The numbers to be multiplied.
 * @returns The product of the numbers.
 */
export const multiply = (...numbers: number[]): number => {
    try {
        return numbers.reduce((acc, val) => acc * val);
    } catch (error) {
        return 0;
    }
};

/**
 * Divides one number by another.
 * @param a The number to divide.
 * @param b The number to divide by.
 * @returns The quotient of the two numbers.
 */
export const divide = (a: number, b: number): number => {
    try {
        return a / b;
    } catch (error) {
        return 0;
    }
};

/**
 * Raises a number to the power of another.
 * @param base The base number.
 * @param exponent The exponent.
 * @returns The base number raised to the power of the exponent.
 */
export const power = (base: number, exponent: number): number => {
    try {
        return Math.pow(base, exponent);
    } catch (error) {
        return 0;
    }
};

/**
 * Rounds a number to the nearest integer.
 * @param number The number to round.
 * @returns The nearest integer to the input number.
 */
export const round = (number: number): number => {
    try {
        return Math.round(number);
    } catch (error) {
        return 0;
    }
};

/**
 * Returns the smallest integer greater than or equal to a number.
 * @param number The number to round up.
 * @returns The smallest integer greater than or equal to the input number.
 */
export const ceil = (number: number): number => {
    try {
        return Math.ceil(number);
    } catch (error) {
        return 0;
    }
};

/**
 * Returns the largest integer less than or equal to a number.
 * @param number The number to round down.
 * @returns The largest integer less than or equal to the input number.
 */
export const floor = (number: number): number => {
    try {
        return Math.floor(number);
    } catch (error) {
        return 0;
    }
};

/**
 * Generates a random number between 0 and 1.
 * @returns A random number between 0 and 1.
 */
export const random = (): number => {
    try {
        return Math.random();
    } catch (error) {
        return 0;
    }
};

/**
 * Returns the smallest number in an array of numbers
 *
 * @param arr An array of numbers
 * @returns The smallest number in the array
 */
export function min(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            return 0
        }

        if (arr.length === 0) {
            return 0
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0
            }
        }

        return Math.min(...arr);
    } catch (err) {
        return 0
    }
}

/**
* Returns the largest number in an array of numbers
*
* @param arr An array of numbers
* @returns The largest number in the array
*/
export function max(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            return 0
        }

        if (arr.length === 0) {
            return 0
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0
            }
        }

        return Math.max(...arr);
    } catch (err) {
        return 0
    }
}

/**
* Returns the sum of an array of numbers
*
* @param arr An array of numbers
* @returns The sum of the numbers in the array
*/
export function sum(arr: number[]): number {
    try {

        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return total
            }

            total += arr[i];
        }

        return total;
    } catch (err) {
        return 0
    }
}

/**
* Returns the average of an array of numbers
*
* @param arr An array of numbers
* @returns The average of the numbers in the array
*/
export function average(arr: number[]): number {
    try {

        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0
            }

            total += arr[i];
        }

        return total / arr.length;
    } catch (err) {
        return 0
    }
}

/**
 * Returns the standard deviation of an array of numbers.
 * @param arr Array of numbers
 * @returns The standard deviation of the array
 */
export const standardDeviation = (arr: number[]): number => {
    try {
        const mean = average(arr);
        const variance = arr.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / arr.length;
        return Math.sqrt(variance);
    } catch (error) {
        return 0
    }
};


/**
 * Checks if a given number is prime or not.
 * @param n The number to be checked.
 * @returns True if the number is prime, false otherwise.
 */
export function isPrime(n: number): boolean {
    try {
        if (n <= 1) {
            return false;
        }

        // Check for divisibility by numbers up to the square root of n.
        const limit = Math.sqrt(n);
        for (let i = 2; i <= limit; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    } catch (error) {
        return false;
    }
}


/**
* Returns the factorial of a given number.
* @param n The number to find the factorial of.
* @returns The factorial of the given number.
*/
export function factorial(n: number): number {
    try {
        let result = 1;

        // Multiply all numbers from 1 to n.
        for (let i = 2; i <= n; i++) {
            result *= i;
        }

        return result;
    } catch (error) {
        return NaN;
    }
}


/**
* Checks if a given number is a power of two or not.
* @param n The number to be checked.
* @returns True if the number is a power of two, false otherwise.
*/
export function isPowerOfTwo(n: number): boolean {
    try {
        if (n <= 0) {
            return false;
        }

        // Check if n is divisible by two until it is no longer even.
        while (n % 2 === 0) {
            n /= 2;
        }

        // If n is now 1, it was a power of two.
        return n === 1;
    } catch (error) {
        return false;
    }
}

/**
* Checks if a given number is a perfect square or not.
* @param n The number to be checked.
* @returns True if the number is a perfect square, false otherwise.
*/
export function isPerfectSquare(n: number): boolean {
    try {
        if (n < 0) {
            return false;
        }

        // Check if the square root is an integer.
        const root = Math.sqrt(n);
        return Number.isInteger(root);
    } catch (error) {
        return false;
    }
}


/**
* Returns the greatest common divisor of two given numbers.
* @param a The first number.
* @param b The second number.
* @returns The greatest common divisor of the two numbers.
*/
export function greatestCommonDivisor(a: number, b: number): number {
    try {
        // Use Euclid's algorithm to find the GCD.
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    } catch (error) {
        return NaN;
    }
}

/**
* Returns the least common multiple (LCM) of two numbers.
*
* @param num1 The first number.
* @param num2 The second number.
* @returns The LCM of num1 and num2.
*/
export function leastCommonMultiple(num1: number, num2: number): number {
    try {

        // Find the greater and lesser numbers
        let greaterNum = Math.max(num1, num2);
        let lesserNum = Math.min(num1, num2);

        // Find the LCM using the formula: LCM(a,b) = a * b / GCD(a,b)
        let gcd = greatestCommonDivisor(greaterNum, lesserNum);
        return (greaterNum * lesserNum) / gcd;
    } catch (error) {
        return 0
    }
}

/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between min and max.
 */
export function generateRandomNumber(min: number, max: number): number {
    try {
        // Generate a random number between min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    } catch (error) {
        return 0
    }
}

/**
 * Returns a number in short form with a suffix (k, m, b, t)
 *
 * @param {number} number - The number to convert to short form
 *
 * @returns {string} A string representing the number in short form with suffix
 */
export const toShortForm = (number: number, upperCaseLetter?: boolean): string => {
    try {

        let abbrevValue: any = number;
        let suffix = "";

        if (number >= 1e12) {
            abbrevValue = number / 1e12;
            suffix = upperCaseLetter ? "T" : "t";
        } else if (number >= 1e9) {
            abbrevValue = number / 1e9;
            suffix = upperCaseLetter ? "B" : "b";
        } else if (number >= 1e6) {
            abbrevValue = number / 1e6;
            suffix = upperCaseLetter ? "M" : "m";
        } else if (number >= 1e3) {
            abbrevValue = number / 1e3;
            suffix = upperCaseLetter ? "K" : "k";
        }

        if (abbrevValue % 1 !== 0) {
            abbrevValue = abbrevValue.toFixed(1);
        }

        return `${abbrevValue}${suffix}`;

    } catch (error) {
        return "";
    }
};

/**
 * Converts a number to its equivalent word representation.
 *
 * @param currency - The number to be converted to word representation. Must be a finite number within the range of (-10^33 to 10^33).
 * @returns The word representation of the input number.
 */
export const toWord = (currency: number): string => {
    try {

        let words = "";
        const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
        const thousands = ["", "thousand", "million", "billion", "trillion"];

        // if (currency === 0) {
        //     return "zero dollars";
        // }

        if (currency < 0) {
            words += "negative ";
            currency = Math.abs(currency);
        }

        let i = 0;
        while (currency > 0) {
            const threeDigits = currency % 1000;
            if (threeDigits !== 0) {
                let str = "";
                if (threeDigits < 10) {
                    str = ones[threeDigits];
                } else if (threeDigits < 20) {
                    str = teens[threeDigits - 10];
                } else if (threeDigits < 100) {
                    str = tens[Math.floor(threeDigits / 10)];
                    if (threeDigits % 10 !== 0) {
                        str += " " + ones[threeDigits % 10];
                    }
                } else {
                    str = ones[Math.floor(threeDigits / 100)] + " hundred";
                    if (threeDigits % 100 !== 0) {
                        str += " and ";
                        if (threeDigits % 100 < 10) {
                            str += ones[threeDigits % 100];
                        } else if (threeDigits % 100 < 20) {
                            str += teens[threeDigits % 100 - 10];
                        } else {
                            str += tens[Math.floor((threeDigits % 100) / 10)];
                            if (threeDigits % 10 !== 0) {
                                str += " " + ones[threeDigits % 10];
                            }
                        }
                    }
                }
                words = str + " " + thousands[i] + " " + words;
            }
            i++;
            currency = Math.floor(currency / 1000);
        }

        return words.trim()

    } catch (error) {
        return ""
    }
}

/**
 * Converts a number and time unit to milliseconds
 * @param value The numerical value to convert
 * @param unit The time unit to convert, one of: seconds, minutes, hours, days, weeks, months, years
 * @returns The value converted to milliseconds
 */
export const toMilliseconds = (value: number, unit: 'seconds'| 'minutes'| 'hours'| 'days'| 'weeks'| 'months'| 'years'): number => {
    try {

        // Perform conversion
        let milliseconds = 0;

        // Validate parameters
        const validUnits = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];
        if (!validUnits.includes(unit))
            return milliseconds
        switch (unit) {
            case 'seconds':
                milliseconds = value * 1000;
                break;
            case 'minutes':
                milliseconds = value * 60 * 1000;
                break;
            case 'hours':
                milliseconds = value * 60 * 60 * 1000;
                break;
            case 'days':
                milliseconds = value * 24 * 60 * 60 * 1000;
                break;
            case 'weeks':
                milliseconds = value * 7 * 24 * 60 * 60 * 1000;
                break;
            case 'months':
                milliseconds = value * 30 * 24 * 60 * 60 * 1000;
                break;
            case 'years':
                milliseconds = value * 365 * 24 * 60 * 60 * 1000;
                break;
        }
        return milliseconds
    } catch (error) {
        return 0;
    }
};

