/**
 * Checks if a given value is a valid number
 * @param number
 */
export declare const isValid: (number: number) => boolean;
/**
 * Checks if a given value is a valid integer
 * @param integer
 */
export declare const isInteger: (integer: number) => boolean;
/**
 * Checks if a given number is positive
 * @param number
 */
export declare const isPositive: (number: number) => boolean;
/**
 * Checks if a given number is negative
 * @param number
 */
export declare const isNegative: (number: number) => boolean;
/**
 * Check if a given number is zero
 * @param number
 */
export declare const isZero: (number: number) => boolean;
/**
 * Checks if a given  value is a positive integer
 * @param number
 */
export declare const isPositiveInteger: (number: number) => boolean;
/**
 * Checks if a given value is a negative integer
 * @param number
 */
export declare const isNegativeInteger: (number: number) => boolean;
/**
 * Formats a number with specified decimal points and separator.
 * @param num The number to format.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @param separator The separator to use between thousands. Defaults to ",".
 * @returns The formatted number as a string.
 */
export declare function formatNumber(num: number, decimalPoints?: number, separator?: string): string;
/**
 * Converts a decimal number to a percentage value with specified decimal points.
 * @param num The number to convert to percentage.
 * @param decimalPoints The number of decimal points to include. Defaults to 2.
 * @returns The percentage value as a string with percent sign.
 */
export declare function percent(num: number, decimalPoints?: number): string;
/**
 * Converts a number to its ordinal representation.
 * @param num The number to convert to ordinal representation.
 * @returns The ordinal representation of the number.
 */
export declare function toOrdinal(num: number): string;
/**
 * Generates the nth number in the Fibonacci sequence.
 * @param n - The index of the number to generate (starting from 0).
 * @returns The nth number in the Fibonacci sequence.
 */
export declare function fibonacci(n: number): number;
/**
 * Generates a random float number between the given minimum and maximum values (inclusive of both).
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A random float number between the given minimum and maximum values.
 */
export declare const randomFloat: (min: number, max: number) => number;
/**
 * Converts the given angle in radians to degrees.
 * @param radians The angle in radians.
 * @returns The angle in degrees.
 */
export declare const radianToDegree: (radians: number) => number;
/**
 * Converts the given angle in degrees to radians.
 * @param degrees The angle in degrees.
 * @returns The angle in radians.
 */
export declare const degreeToRadian: (degrees: number) => number;
/**
 * Clamps a number within the given range.
 *
 * @param num - The number to clamp.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 *
 * @returns The clamped number.
 */
export declare const clamp: (num: number, min: number, max: number) => number;
/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 *
 * @param min - The minimum value for the random integer.
 * @param max - The maximum value for the random integer.
 *
 * @returns The randomly generated integer.
 */
export declare const randomInteger: (min: number, max: number) => number;
/**
 * Checks if a number is even.
 * @param n - The number to check.
 * @returns `true` if the number is even, `false` otherwise.
 */
export declare function isEven(n: number): boolean;
/**
* Checks if a number is odd.
* @param n - The number to check.
* @returns `true` if the number is odd, `false` otherwise.
*/
export declare function isOdd(n: number): boolean;
/**
* Checks if a number is a multiple of another number.
* @param n - The number to check.
* @param multiple - The number to check if `n` is a multiple of.
* @returns `true` if `n` is a multiple of `multiple`, `false` otherwise.
*/
export declare function isMultipleOf(n: number, multiple: number): boolean;
/**
* Checks if a number is divisible by another number.
* @param n - The number to check.
* @param divisor - The number to check if `n` is divisible by.
* @returns `true` if `n` is divisible by `divisor`, `false` otherwise.
*/
export declare function isDivisibleBy(n: number, divisor: number): boolean;
/**
 * Adds two or more numbers together.
 * @param numbers The numbers to be added.
 * @returns The sum of the numbers.
 */
export declare const add: (...numbers: number[]) => number;
/**
 * Subtracts one number from another.
 * @param a The number to subtract from.
 * @param b The number to subtract.
 * @returns The difference between the two numbers.
 */
export declare const subtract: (a: number, b: number) => number;
/**
 * Multiplies two or more numbers together.
 * @param numbers The numbers to be multiplied.
 * @returns The product of the numbers.
 */
export declare const multiply: (...numbers: number[]) => number;
/**
 * Divides one number by another.
 * @param a The number to divide.
 * @param b The number to divide by.
 * @returns The quotient of the two numbers.
 */
export declare const divide: (a: number, b: number) => number;
/**
 * Raises a number to the power of another.
 * @param base The base number.
 * @param exponent The exponent.
 * @returns The base number raised to the power of the exponent.
 */
export declare const power: (base: number, exponent: number) => number;
/**
 * Rounds a number to the nearest integer.
 * @param number The number to round.
 * @returns The nearest integer to the input number.
 */
export declare const round: (number: number) => number;
/**
 * Returns the smallest integer greater than or equal to a number.
 * @param number The number to round up.
 * @returns The smallest integer greater than or equal to the input number.
 */
export declare const ceil: (number: number) => number;
/**
 * Returns the largest integer less than or equal to a number.
 * @param number The number to round down.
 * @returns The largest integer less than or equal to the input number.
 */
export declare const floor: (number: number) => number;
/**
 * Generates a random number between 0 and 1.
 * @returns A random number between 0 and 1.
 */
export declare const random: () => number;
/**
 * Returns the smallest number in an array of numbers
 *
 * @param arr An array of numbers
 * @returns The smallest number in the array
 */
export declare function min(arr: number[]): number;
/**
* Returns the largest number in an array of numbers
*
* @param arr An array of numbers
* @returns The largest number in the array
*/
export declare function max(arr: number[]): number;
/**
* Returns the sum of an array of numbers
*
* @param arr An array of numbers
* @returns The sum of the numbers in the array
*/
export declare function sum(arr: number[]): number;
/**
* Returns the average of an array of numbers
*
* @param arr An array of numbers
* @returns The average of the numbers in the array
*/
export declare function average(arr: number[]): number;
/**
 * Returns the standard deviation of an array of numbers.
 * @param arr Array of numbers
 * @returns The standard deviation of the array
 */
export declare const standardDeviation: (arr: number[]) => number;
/**
 * Checks if a given number is prime or not.
 * @param n The number to be checked.
 * @returns True if the number is prime, false otherwise.
 */
export declare function isPrime(n: number): boolean;
/**
* Returns the factorial of a given number.
* @param n The number to find the factorial of.
* @returns The factorial of the given number.
*/
export declare function factorial(n: number): number;
/**
* Checks if a given number is a power of two or not.
* @param n The number to be checked.
* @returns True if the number is a power of two, false otherwise.
*/
export declare function isPowerOfTwo(n: number): boolean;
/**
* Checks if a given number is a perfect square or not.
* @param n The number to be checked.
* @returns True if the number is a perfect square, false otherwise.
*/
export declare function isPerfectSquare(n: number): boolean;
/**
* Returns the greatest common divisor of two given numbers.
* @param a The first number.
* @param b The second number.
* @returns The greatest common divisor of the two numbers.
*/
export declare function greatestCommonDivisor(a: number, b: number): number;
/**
* Returns the least common multiple (LCM) of two numbers.
*
* @param num1 The first number.
* @param num2 The second number.
* @returns The LCM of num1 and num2.
*/
export declare function leastCommonMultiple(num1: number, num2: number): number;
/**
 * Generates a random number between the specified minimum and maximum values (inclusive).
 *
 * @param min The minimum value for the random number.
 * @param max The maximum value for the random number.
 * @returns A random number between min and max.
 */
export declare function generateRandomNumber(min: number, max: number): number;
/**
 * Returns a number in short form with a suffix (k, m, b, t)
 *
 * @param {number} number - The number to convert to short form
 *
 * @returns {string} A string representing the number in short form with suffix
 */
export declare const toShortForm: (number: number, upperCaseLetter?: boolean) => string;
/**
 * Converts a number to its equivalent word representation.
 *
 * @param currency - The number to be converted to word representation. Must be a finite number within the range of (-10^33 to 10^33).
 * @returns The word representation of the input number.
 */
export declare const toWord: (currency: number) => string;
