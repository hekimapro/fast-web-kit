
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
 * Adds two or more numbers together.
 * @param numbers The numbers to be added.
 * @returns The sum of the numbers.
 */
export const add = (...numbers: number[]): number => {
    try {
        return numbers.reduce((acc, val) => acc + val);
    } catch (error) {
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
        return 0;
    }
};

/**
 * Returns the smallest number in an array of numbers
 *
 * @param arr An array of numbers
 * @throws {TypeError} Thrown if the argument is not an array or contains non-number elements
 * @throws {Error} Thrown if the array is empty
 * @returns The smallest number in the array
 */
export function min(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError('The argument must be an array');
        }

        if (arr.length === 0) {
            throw new Error('The array cannot be empty');
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                throw new TypeError('The array can only contain numbers');
            }
        }

        return Math.min(...arr);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
* Returns the largest number in an array of numbers
*
* @param arr An array of numbers
* @throws {TypeError} Thrown if the argument is not an array or contains non-number elements
* @throws {Error} Thrown if the array is empty
* @returns The largest number in the array
*/
export function max(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError('The argument must be an array');
        }

        if (arr.length === 0) {
            throw new Error('The array cannot be empty');
        }

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                throw new TypeError('The array can only contain numbers');
            }
        }

        return Math.max(...arr);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
* Returns the sum of an array of numbers
*
* @param arr An array of numbers
* @throws {TypeError} Thrown if the argument is not an array or contains non-number elements
* @returns The sum of the numbers in the array
*/
export function sum(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError('The argument must be an array');
        }

        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                throw new TypeError('The array can only contain numbers');
            }

            total += arr[i];
        }

        return total;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
* Returns the average of an array of numbers
*
* @param arr An array of numbers
* @throws {TypeError} Thrown if the argument is not an array or contains non-number elements
* @returns The average of the numbers in the array
*/
export function average(arr: number[]): number {
    try {
        if (!Array.isArray(arr)) {
            throw new TypeError('The argument must be an array');
        }

        if (arr.length === 0) {
            throw new Error('The array cannot be empty');
        }

        let total = 0;

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                throw new TypeError('The array can only contain numbers');
            }

            total += arr[i];
        }

        return total / arr.length;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

/**
 * Returns the standard deviation of an array of numbers.
 * @param arr Array of numbers
 * @returns The standard deviation of the array
 */
export const standardDeviation = (arr: number[]): number => {
    if (!Array.isArray(arr)) {
        throw new Error("Argument must be an array.");
    }

    if (arr.length === 0) {
        throw new Error("Array must not be empty.");
    }

    const mean = average(arr);

    try {
        const variance = arr.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / arr.length;
        return Math.sqrt(variance);
    } catch (error) {
        throw new Error("Error occurred while finding standard deviation.");
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        console.error(error);
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
        // Check if both inputs are integers
        if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
            throw new Error("Inputs must be integers");
        }

        // Find the greater and lesser numbers
        let greaterNum = Math.max(num1, num2);
        let lesserNum = Math.min(num1, num2);

        // Find the LCM using the formula: LCM(a,b) = a * b / GCD(a,b)
        let gcd = greatestCommonDivisor(greaterNum, lesserNum);
        return (greaterNum * lesserNum) / gcd;
    } catch (error) {
        console.error(error);
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
        // Check if both inputs are numbers
        if (typeof min !== "number" || typeof max !== "number") {
            throw new Error("Inputs must be numbers");
        }

        // Check if min is less than or equal to max
        if (min > max) {
            throw new Error("Minimum value must be less than or equal to maximum value");
        }

        // Generate a random number between min and max
        return Math.floor(Math.random() * (max - min + 1) + min);
    } catch (error) {
        console.error(error);
        return 0
    }
}
