/**
 * Determines whether a given value is a string.
 *
 * @param value - The value to check.
 * @returns Whether the value is a string.
 */
export declare const isValid: (value: unknown) => boolean;
/**
 * Checks if a provided string is not empty.
 * @param str The string to check.
 */
export declare const isNotEmpty: (str: string) => boolean;
/**
 * Converts the provided value to a string.
 *
 * @param value The value to be converted to a string.
 * @returns The string representation of the provided value.
 */
export declare const convert: (value: any) => string;
/**
 * This function takes a string and capitalizes it.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export declare const capitalize: (str: string) => string;
/**
 * This function takes a string as input and returns the reverse of that string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export declare const reverse: (str: string) => string;
/**
 * This function removes special characters from a string without removing spaces.
 *
 * @param inputString - The input string to remove special characters from.
 * @returns The input string with all special characters removed (excluding spaces).
 */
export declare function removeSpecialCharacters(inputString: string): string;
/**
 * This function returns the length of a provided string.
 *
 * @param {string} str - The string to get the length of.
 * @returns {number} The length of the provided string.
 */
export declare const getLength: (str: string) => number;
/**
 * Truncates a given string to a provided length.
 * @param str The string to truncate.
 * @param maxLength The maximum length of the truncated string.
 * @returns The truncated string.
 */
export declare const truncate: (str: string, maxLength: number) => string;
/**
 * Removes whitespace from a given string.
 *
 * @param str The string to remove whitespace from.
 * @returns The string with all whitespace removed.
 */
export declare const removeWhitespace: (str: string) => string;
/**
 * Splits a string into an array of substrs based on a separator string.
 *
 * @param str The string to split.
 * @param separator The separator string to use.
 * @returns An array of substrs.
 */
export declare const split: (str: string, separator: string) => string[];
/**
 * Converts a string to camel case.
 * @param str The string to convert.
 * @returns The camel case version of the string.
 */
export declare const toCamelCase: (str: string) => string;
/**
 * Converts a given string to kebab case
 * @param str The input string to convert
 * @returns The kebab case version of the input string
 */
export declare const toKebabCase: (str: string) => string;
/**
 * Converts a given string to snake case.
 * @param str The input string to convert.
 * @returns The converted snake case string.
 */
export declare const toSnakeCase: (str: string) => string;
/**
 * This function takes a string and returns a title case version of it.
 * @param {string} str - The input string to be converted to title case.
 * @returns {string} - The title case version of the input string.
 */
export declare const toTitleCase: (str: string) => string;
/**
 * Checks if the given string contains only alphabetic characters.
 * @param str The string to be checked.
 * @returns true if the string contains only alphabetic characters, false otherwise.
 */
export declare const hasAlphabeticCharsOnly: (str: string) => boolean;
/**
 * Check if the given string contains only numeric characters.
 * Returns true if the string is numeric, false otherwise.
 *
 * @param str - The string to check.
 * @returns Whether the string contains only numeric characters.
 */
export declare const hasNumericCharsOnly: (str: string) => boolean;
/**
 * Checks if the given string contains only alphanumeric characters
 * @param str The string to be checked
 * @returns A boolean indicating whether the string contains only alphanumeric characters or not
 */
export declare const isAlphanumeric: (str: string) => boolean;
/**
 * Checks whether a given string is in all lowercase letters.
 *
 * @param str The string to check.
 * @returns True if the string is all lowercase, false otherwise.
 */
export declare const isLowerCase: (str: string) => boolean;
/**
* Checks whether a given string is in all uppercase letters.
*
* @param str The string to check.
* @returns True if the string is all uppercase, false otherwise.
*/
export declare const isUpperCase: (str: string) => boolean;
/**
 * This function validates IP addresses of all types.
 *
 * @param ipAddress - The IP address to be validated.
 * @returns A boolean indicating whether the IP address is valid or not.
 */
export declare const isIPAddress: (ipAddress: string) => boolean;
/**
* This function takes a string value and checks if it is a valid hexadecimal color.
*
* Returns true if the value is a valid hexadecimal color, otherwise false.
* @param { value}
* @returns { boolean}
*/
export declare const isValidHexColor: (value: string) => boolean;
/**
 * This function takes a string value and checks if it is a valid credit card number.
 *
 * @param value
 * @returns true if the value is a valid credit card number, otherwise false.
*/
export declare const isValidCreditCard: (value: string) => boolean;
/**
 * Validates whether a given string is a valid JSON.
 * @param jsonString The string to be validated as a JSON.
 * @returns A boolean indicating whether the string is a valid JSON or not.
 */
export declare const isValidJSON: (jsonString: string) => boolean;
/**
 * Validates whether a given string is a valid Base64 string.
 * @param base64String The string to be validated as a Base64.
 * @returns A boolean indicating whether the string is a valid Base64 or not.
 */
export declare const isValidBase64: (base64String: string) => boolean;
/**
 * Convert a specified case to string
 *
 * @param {string} str - The input string to convert
 * @param {string} caseType - The case type to convert to. Possible values: kebab-case, snake_case, camelCase, Title Case
 * @returns {string} The converted string
 */
export declare function removeCase(str: string, caseType: 'kebab-case' | 'snake_case'): string;
/**
 * This function checks if a provided string is empty.
 * @param str The string to check.
 * @returns True if the string is empty, false otherwise.
 */
export declare function isEmpty(str: string): boolean;
