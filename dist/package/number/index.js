"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMilliseconds = exports.toWord = exports.toShortForm = exports.generateRandomNumber = exports.leastCommonMultiple = exports.greatestCommonDivisor = exports.isPerfectSquare = exports.isPowerOfTwo = exports.factorial = exports.isPrime = exports.standardDeviation = exports.average = exports.sum = exports.max = exports.min = exports.random = exports.floor = exports.ceil = exports.round = exports.power = exports.divide = exports.multiply = exports.subtract = exports.add = exports.isDivisibleBy = exports.isMultipleOf = exports.isOdd = exports.isEven = exports.randomInteger = exports.clamp = exports.degreeToRadian = exports.radianToDegree = exports.randomFloat = exports.fibonacci = exports.toOrdinal = exports.percent = exports.formatNumber = exports.isNegativeInteger = exports.isPositiveInteger = exports.isZero = exports.isNegative = exports.isPositive = exports.isInteger = exports.isValid = void 0;
/**
 * Checks if a given value is a valid number
 * @param number
 */
const isValid = (number) => typeof number === "number" && !isNaN(number);
exports.isValid = isValid;
/**
 * Checks if a given value is a valid integer
 * @param integer
 */
const isInteger = (integer) => (0, exports.isValid)(integer) ? Number.isInteger(integer) : false;
exports.isInteger = isInteger;
/**
 * Checks if a given number is positive
 * @param number
 */
const isPositive = (number) => (0, exports.isValid)(number) ? number > 0 : false;
exports.isPositive = isPositive;
/**
 * Checks if a given number is negative
 * @param number
 */
const isNegative = (number) => (0, exports.isValid)(number) ? number < 0 : false;
exports.isNegative = isNegative;
/**
 * Check if a given number is zero
 * @param number
 */
const isZero = (number) => (0, exports.isValid)(number) ? number === 0 : false;
exports.isZero = isZero;
/**
 * Checks if a given  value is a positive integer
 * @param number
 */
const isPositiveInteger = (number) => (0, exports.isInteger)(number) ? number > 0 : false;
exports.isPositiveInteger = isPositiveInteger;
/**
 * Checks if a given value is a negative integer
 * @param number
 */
const isNegativeInteger = (number) => (0, exports.isInteger)(number) ? number < 0 : false;
exports.isNegativeInteger = isNegativeInteger;
/**
 * Formats a number with specified decimal points and separator.
 * @param num The number to format.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @param separator The separator to use between thousands. Defaults to ",".
 * @returns The formatted number as a string.
 */
function formatNumber(num, decimalPoints = 2, separator = ',') {
    try {
        return num.toFixed(decimalPoints).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    }
    catch (error) {
        console.error(error);
        return num.toString();
    }
}
exports.formatNumber = formatNumber;
/**
 * Converts a decimal number to a percentage value with specified decimal points.
 * @param num The number to convert to percentage.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @returns The percentage value as a string with percent sign.
 */
function percent(num, decimalPoints = 2) {
    try {
        return (num * 100).toFixed(decimalPoints) + '%';
    }
    catch (error) {
        console.error(error);
        return num.toString();
    }
}
exports.percent = percent;
/**
 * Converts a number to its ordinal representation.
 * @param num The number to convert to ordinal representation.
 * @returns The ordinal representation of the number.
 */
function toOrdinal(num) {
    try {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const suffix = num % 100 > 10 && num % 100 < 14 ? suffixes[0] : suffixes[num % 10] || suffixes[0];
        return num + suffix;
    }
    catch (error) {
        console.error(error);
        return num.toString();
    }
}
exports.toOrdinal = toOrdinal;
/**
 * Generates the nth number in the Fibonacci sequence.
 * @param n - The index of the number to generate (starting from 0).
 * @returns The nth number in the Fibonacci sequence.
 */
function fibonacci(n) {
    try {
        if (n < 0) {
            return NaN;
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
    }
    catch (err) {
        console.error(err);
        return NaN;
    }
}
exports.fibonacci = fibonacci;
/**
 * Generates a random float number between the given minimum and maximum values (inclusive of both).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random float number between the given minimum and maximum values.
 */
const randomFloat = (min, max) => {
    try {
        return Math.random() * (max - min) + min;
    }
    catch (error) {
        return NaN;
    }
};
exports.randomFloat = randomFloat;
/**
 * Converts the given angle in radians to degrees.
 * @param radians The angle in radians.
 * @returns The angle in degrees.
 */
const radianToDegree = (radians) => {
    try {
        return radians * (180 / Math.PI);
    }
    catch (error) {
        return NaN;
    }
};
exports.radianToDegree = radianToDegree;
/**
 * Converts the given angle in degrees to radians.
 * @param degrees The angle in degrees.
 * @returns The angle in radians.
 */
const degreeToRadian = (degrees) => {
    try {
        return degrees * (Math.PI / 180);
    }
    catch (error) {
        return NaN;
    }
};
exports.degreeToRadian = degreeToRadian;
/**
 * Clamps a number within the given range.
 *
 * @param num - The number to clamp.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 *
 * @returns The clamped number.
 */
const clamp = (num, min, max) => {
    try {
        return Math.min(Math.max(num, min), max);
    }
    catch (error) {
        console.error(error);
        return num;
    }
};
exports.clamp = clamp;
/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 *
 * @param min - The minimum value for the random integer.
 * @param max - The maximum value for the random integer.
 *
 * @returns The randomly generated integer.
 */
const randomInteger = (min, max) => {
    try {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.randomInteger = randomInteger;
/**
 * Checks if a number is even.
 * @param n - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
function isEven(n) {
    try {
        return n % 2 === 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isEven = isEven;
/**
* Checks if a number is odd.
* @param n - The number to check.
* @returns `true` if the number is odd, `false` otherwise.
*/
function isOdd(n) {
    try {
        return n % 2 !== 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isOdd = isOdd;
/**
* Checks if a number is a multiple of another number.
* @param n - The number to check.
* @param multiple - The number to check if `n` is a multiple of.
* @returns `true` if `n` is a multiple of `multiple`, `false` otherwise.
*/
function isMultipleOf(n, multiple) {
    try {
        return n % multiple === 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isMultipleOf = isMultipleOf;
/**
* Checks if a number is divisible by another number.
* @param n - The number to check.
* @param divisor - The number to check if `n` is divisible by.
* @returns `true` if `n` is divisible by `divisor`, `false` otherwise.
*/
function isDivisibleBy(n, divisor) {
    try {
        return divisor % n === 0;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isDivisibleBy = isDivisibleBy;
/**
 * Adds two or more numbers together.
 * @param numbers The numbers to be added.
 * @returns The sum of the numbers.
 */
const add = (...numbers) => {
    try {
        return numbers.reduce((acc, val) => acc + val);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.add = add;
/**
 * Subtracts one number from another.
 * @param a The number to subtract from.
 * @param b The number to subtract.
 * @returns The difference between the two numbers.
 */
const subtract = (a, b) => {
    try {
        return a - b;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.subtract = subtract;
/**
 * Multiplies two or more numbers together.
 * @param numbers The numbers to be multiplied.
 * @returns The product of the numbers.
 */
const multiply = (...numbers) => {
    try {
        return numbers.reduce((acc, val) => acc * val);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.multiply = multiply;
/**
 * Divides one number by another.
 * @param a The number to divide.
 * @param b The number to divide by.
 * @returns The quotient of the two numbers.
 */
const divide = (a, b) => {
    try {
        return a / b;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.divide = divide;
/**
 * Raises a number to the power of another.
 * @param base The base number.
 * @param exponent The exponent.
 * @returns The base number raised to the power of the exponent.
 */
const power = (base, exponent) => {
    try {
        return Math.pow(base, exponent);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.power = power;
/**
 * Rounds a number to the nearest integer.
 * @param number The number to round.
 * @returns The nearest integer to the input number.
 */
const round = (number) => {
    try {
        return Math.round(number);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.round = round;
/**
 * Returns the smallest integer greater than or equal to a number.
 * @param number The number to round up.
 * @returns The smallest integer greater than or equal to the input number.
 */
const ceil = (number) => {
    try {
        return Math.ceil(number);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.ceil = ceil;
/**
 * Returns the largest integer less than or equal to a number.
 * @param number The number to round down.
 * @returns The largest integer less than or equal to the input number.
 */
const floor = (number) => {
    try {
        return Math.floor(number);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.floor = floor;
/**
 * Generates a random number between 0 and 1.
 * @returns A random number between 0 and 1.
 */
const random = () => {
    try {
        return Math.random();
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.random = random;
/**
 * Returns the smallest number in an array of numbers
 *
 * @param arr An array of numbers
 * @returns The smallest number in the array
 */
function min(arr) {
    try {
        if (!Array.isArray(arr)) {
            return 0;
        }
        if (arr.length === 0) {
            return 0;
        }
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0;
            }
        }
        return Math.min(...arr);
    }
    catch (err) {
        console.error(err);
        return 0;
    }
}
exports.min = min;
/**
* Returns the largest number in an array of numbers
*
* @param arr An array of numbers
* @returns The largest number in the array
*/
function max(arr) {
    try {
        if (!Array.isArray(arr)) {
            return 0;
        }
        if (arr.length === 0) {
            return 0;
        }
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0;
            }
        }
        return Math.max(...arr);
    }
    catch (err) {
        console.error(err);
        return 0;
    }
}
exports.max = max;
/**
* Returns the sum of an array of numbers
*
* @param arr An array of numbers
* @returns The sum of the numbers in the array
*/
function sum(arr) {
    try {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return total;
            }
            total += arr[i];
        }
        return total;
    }
    catch (err) {
        console.error(err);
        return 0;
    }
}
exports.sum = sum;
/**
* Returns the average of an array of numbers
*
* @param arr An array of numbers
* @returns The average of the numbers in the array
*/
function average(arr) {
    try {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                return 0;
            }
            total += arr[i];
        }
        return total / arr.length;
    }
    catch (err) {
        console.error(err);
        return 0;
    }
}
exports.average = average;
/**
 * Returns the standard deviation of an array of numbers.
 * @param arr Array of numbers
 * @returns The standard deviation of the array
 */
const standardDeviation = (arr) => {
    try {
        const mean = average(arr);
        const variance = arr.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / arr.length;
        return Math.sqrt(variance);
    }
    catch (error) {
        return 0;
    }
};
exports.standardDeviation = standardDeviation;
/**
 * Checks if a given number is prime or not.
 * @param n The number to be checked.
 * @returns True if the number is prime, false otherwise.
 */
function isPrime(n) {
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
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isPrime = isPrime;
/**
* Returns the factorial of a given number.
* @param n The number to find the factorial of.
* @returns The factorial of the given number.
*/
function factorial(n) {
    try {
        let result = 1;
        // Multiply all numbers from 1 to n.
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    catch (error) {
        console.error(error);
        return NaN;
    }
}
exports.factorial = factorial;
/**
* Checks if a given number is a power of two or not.
* @param n The number to be checked.
* @returns True if the number is a power of two, false otherwise.
*/
function isPowerOfTwo(n) {
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
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isPowerOfTwo = isPowerOfTwo;
/**
* Checks if a given number is a perfect square or not.
* @param n The number to be checked.
* @returns True if the number is a perfect square, false otherwise.
*/
function isPerfectSquare(n) {
    try {
        if (n < 0) {
            return false;
        }
        // Check if the square root is an integer.
        const root = Math.sqrt(n);
        return Number.isInteger(root);
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
exports.isPerfectSquare = isPerfectSquare;
/**
* Returns the greatest common divisor of two given numbers.
* @param a The first number.
* @param b The second number.
* @returns The greatest common divisor of the two numbers.
*/
function greatestCommonDivisor(a, b) {
    try {
        // Use Euclid's algorithm to find the GCD.
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    catch (error) {
        console.error(error);
        return NaN;
    }
}
exports.greatestCommonDivisor = greatestCommonDivisor;
/**
* Returns the least common multiple (LCM) of two numbers.
*
* @param num1 The first number.
* @param num2 The second number.
* @returns The LCM of num1 and num2.
*/
function leastCommonMultiple(num1, num2) {
    try {
        // Find the greater and lesser numbers
        let greaterNum = Math.max(num1, num2);
        let lesserNum = Math.min(num1, num2);
        // Find the LCM using the formula: LCM(a,b) = a * b / GCD(a,b)
        let gcd = greatestCommonDivisor(greaterNum, lesserNum);
        return (greaterNum * lesserNum) / gcd;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
exports.leastCommonMultiple = leastCommonMultiple;
/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between min and max.
 */
function generateRandomNumber(min, max) {
    try {
        // Generate a random number between min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    catch (error) {
        console.error(error);
        return 0;
    }
}
exports.generateRandomNumber = generateRandomNumber;
/**
 * Returns a number in short form with a suffix (k, m, b, t)
 *
 * @param {number} number - The number to convert to short form
 *
 * @returns {string} A string representing the number in short form with suffix
 */
const toShortForm = (number, upperCaseLetter) => {
    try {
        let abbrevValue = number;
        let suffix = "";
        if (number >= 1e12) {
            abbrevValue = number / 1e12;
            suffix = upperCaseLetter ? "T" : "t";
        }
        else if (number >= 1e9) {
            abbrevValue = number / 1e9;
            suffix = upperCaseLetter ? "B" : "b";
        }
        else if (number >= 1e6) {
            abbrevValue = number / 1e6;
            suffix = upperCaseLetter ? "M" : "m";
        }
        else if (number >= 1e3) {
            abbrevValue = number / 1e3;
            suffix = upperCaseLetter ? "K" : "k";
        }
        if (abbrevValue % 1 !== 0) {
            abbrevValue = abbrevValue.toFixed(1);
        }
        return `${abbrevValue}${suffix}`;
    }
    catch (error) {
        console.error(`Error converting to short form: ${error.message}`);
        return "";
    }
};
exports.toShortForm = toShortForm;
/**
 * Converts a number to its equivalent word representation.
 *
 * @param currency - The number to be converted to word representation. Must be a finite number within the range of (-10^33 to 10^33).
 * @returns The word representation of the input number.
 */
const toWord = (currency) => {
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
                }
                else if (threeDigits < 20) {
                    str = teens[threeDigits - 10];
                }
                else if (threeDigits < 100) {
                    str = tens[Math.floor(threeDigits / 10)];
                    if (threeDigits % 10 !== 0) {
                        str += " " + ones[threeDigits % 10];
                    }
                }
                else {
                    str = ones[Math.floor(threeDigits / 100)] + " hundred";
                    if (threeDigits % 100 !== 0) {
                        str += " and ";
                        if (threeDigits % 100 < 10) {
                            str += ones[threeDigits % 100];
                        }
                        else if (threeDigits % 100 < 20) {
                            str += teens[threeDigits % 100 - 10];
                        }
                        else {
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
        return words.trim();
    }
    catch (error) {
        console.error("Error converting number to word:", error.message);
        return "";
    }
};
exports.toWord = toWord;
/**
 * Converts a number and time unit to milliseconds
 * @param value The numerical value to convert
 * @param unit The time unit to convert, one of: seconds, minutes, hours, days, weeks, months, years
 * @returns The value converted to milliseconds
 */
const toMilliseconds = (value, unit) => {
    try {
        // Perform conversion
        let milliseconds = 0;
        // Validate parameters
        const validUnits = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];
        if (!validUnits.includes(unit))
            return milliseconds;
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
        return milliseconds;
    }
    catch (error) {
        console.error(`Error converting ${value} ${unit} to milliseconds: ${error}`);
        return 0;
    }
};
exports.toMilliseconds = toMilliseconds;
//# sourceMappingURL=index.js.map