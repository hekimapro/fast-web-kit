
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
        console.error(error);
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
        console.error(error);
        return num.toString();
    }
}

/**
 * Calculates the sum of an array of numbers.
 * @param nums The array of numbers to sum.
 * @returns The sum of the array of numbers.
 */
export function sum(nums: number[]): number {
    try {
        return nums.reduce((acc, num) => acc + num, 0);
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Calculates the average of an array of numbers.
 * @param nums The array of numbers to average.
 * @returns The average of the array of numbers.
 */
export function average(nums: number[]): number {
    try {
        return nums.length ? sum(nums) / nums.length : NaN;
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Calculates the maximum value of an array of numbers.
 * @param nums The array of numbers to find the maximum value.
 * @returns The maximum value of the array of numbers.
 */
export function max(nums: number[]): number {
    try {
        return nums.length ? Math.max(...nums) : NaN;
    } catch (error) {
        console.error(error);
        return NaN;
    }
}

/**
 * Calculates the minimum value of an array of numbers.
 * @param nums The array of numbers to find the minimum value.
 * @returns The minimum value of the array of numbers.
 */
export function min(nums: number[]): number {
    try {
        return nums.length ? Math.min(...nums) : NaN;
    } catch (error) {
        console.error(error);
        return NaN;
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
        console.error(error);
        return num.toString();
    }
}

/**
 * Calculates the factorial of a given integer n.
 * @param n - The integer to calculate the factorial of.
 * @returns The factorial of n.
 * @throws An error if n is negative.
 */
export function factorial(n: number): number {
    try {
        if (n < 0) {
            throw new Error("Cannot calculate factorial of a negative number.");
        }
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    } catch (err) {
        console.error(err);
        return NaN;
    }
}

/**
 * Generates the nth number in the Fibonacci sequence.
 * @param n - The index of the number to generate (starting from 0).
 * @returns The nth number in the Fibonacci sequence.
 * @throws An error if n is negative.
 */
export function fibonacci(n: number): number {
    try {
        if (n < 0) {
            throw new Error("Cannot generate Fibonacci number for a negative index.");
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
        console.error(err);
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
        throw new Error(`An error occurred while generating random float: ${error.message}`);
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
        throw new Error(`An error occurred while converting radians to degree: ${error.message}`);
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
        throw new Error(`An error occurred while converting degree to radians: ${error.message}`);
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
        console.error(error);
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
        console.error(error);
        return min;
    }
};

/**
 * Rounds a number up to the nearest integer.
 *
 * @param num - The number to round.
 *
 * @returns The rounded number.
 */
export const ceil = (num: number): number => {
    try {
        return Math.ceil(num);
    } catch (error) {
        console.error(error);
        return num;
    }
};

/**
 * Rounds a number down to the nearest integer.
 *
 * @param num - The number to round.
 *
 * @returns The rounded number.
 */
export const floor = (num: number): number => {
    try {
        return Math.floor(num);
    } catch (error) {
        console.error(error);
        return num;
    }
};

/**
 * Rounds a number to the nearest integer.
 *
 * @param num - The number to round.
 *
 * @returns The rounded number.
 */
export const round = (num: number): number => {
    try {
        return Math.round(num);
    } catch (error) {
        console.error(error);
        return num;
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
        console.error(error);
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
        console.error(error);
        return false;
    }
}

/**
* Checks if a number is a prime number.
* @param n - The number to check.
* @returns `true` if the number is a prime number, `false` otherwise.
*/
export function isPrime(n: number): boolean {
    try {
        if (n <= 1) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}


/**
* Checks if a number is a power of two.
* @param n - The number to check.
* @returns `true` if the number is a power of two, `false` otherwise.
*/
export function isPowerOfTwo(n: number): boolean {
    try {
        return (n !== 0) && ((n & (n - 1)) === 0);
    } catch (error) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
        return false;
    }
}

/**
* Determines whether a number is a perfect square.
* @param n The number to check.
* @returns True if the number is a perfect square, false otherwise.
*/
export function isPerfectSquare(n: number): boolean {
    try {
        // Check if the square root of the number is an integer
        const sqrt = Math.sqrt(n);
        return Number.isInteger(sqrt);
    } catch (err) {
        console.error(`Error in isPerfectSquare: ${err.message}`);
        return false;
    }
}

export * as number from "."