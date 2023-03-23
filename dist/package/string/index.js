"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.removeCase = exports.isValidBase64 = exports.isValidJSON = exports.isValidCreditCard = exports.isValidHexColor = exports.isIPAddress = exports.isUpperCase = exports.isLowerCase = exports.isAlphanumeric = exports.hasNumericCharsOnly = exports.hasAlphabeticCharsOnly = exports.toTitleCase = exports.toSnakeCase = exports.toKebabCase = exports.toCamelCase = exports.split = exports.removeWhitespace = exports.truncate = exports.getLength = exports.removeSpecialCharacters = exports.reverse = exports.capitalize = exports.convert = exports.isNotEmpty = exports.isValid = void 0;
/**
 * Determines whether a given value is a string.
 *
 * @param value - The value to check.
 * @returns Whether the value is a string.
 */
const isValid = (value) => typeof value === 'string';
exports.isValid = isValid;
/**
 * Checks if a provided string is not empty.
 * @param str The string to check.
 */
const isNotEmpty = (str) => (0, exports.isValid)(str) ? str.trim() !== "" : false;
exports.isNotEmpty = isNotEmpty;
/**
 * Converts the provided value to a string.
 *
 * @param value The value to be converted to a string.
 * @returns The string representation of the provided value.
 */
const convert = (value) => String(value);
exports.convert = convert;
/**
 * This function takes a string and capitalizes it.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
const capitalize = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            const firstLetter = str.charAt(0).toUpperCase();
            const restOfString = str.slice(1);
            return `${firstLetter}${restOfString}`;
        }
        return str;
    }
    catch (error) {
        return str; // Return original string if there was an error.
    }
};
exports.capitalize = capitalize;
/**
 * This function takes a string as input and returns the reverse of that string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
const reverse = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            let reversed = '';
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i];
            }
            return reversed;
        }
        return str;
    }
    catch (error) {
        return str;
    }
};
exports.reverse = reverse;
/**
 * This function removes special characters from a string without removing spaces.
 *
 * @param inputString - The input string to remove special characters from.
 * @returns The input string with all special characters removed (excluding spaces).
 */
function removeSpecialCharacters(inputString) {
    try {
        // Validate function parameters
        if ((0, exports.isNotEmpty)(inputString)) {
            // Remove special characters from string
            const regex = /[^A-Za-z0-9\s]/g;
            return inputString.replace(regex, '');
        }
        return inputString;
    }
    catch (error) {
        return inputString;
    }
}
exports.removeSpecialCharacters = removeSpecialCharacters;
/**
 * This function returns the length of a provided string.
 *
 * @param {string} str - The string to get the length of.
 * @returns {number} The length of the provided string.
 */
const getLength = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            return str.length;
        return 0;
    }
    catch (error) {
        return 0;
    }
};
exports.getLength = getLength;
/**
 * Truncates a given string to a provided length.
 * @param str The string to truncate.
 * @param maxLength The maximum length of the truncated string.
 * @returns The truncated string.
 */
const truncate = (str, maxLength) => {
    try {
        if ((0, exports.isNotEmpty)(str) && (typeof maxLength === "number" && maxLength > 0))
            return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
        return str;
    }
    catch (error) {
        return str;
    }
};
exports.truncate = truncate;
/**
 * Removes whitespace from a given string.
 *
 * @param str The string to remove whitespace from.
 * @returns The string with all whitespace removed.
 */
const removeWhitespace = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            // Remove all whitespace characters from the string
            return str.replace(/\s/g, '');
        return "";
    }
    catch (error) {
        return '';
    }
};
exports.removeWhitespace = removeWhitespace;
/**
 * Splits a string into an array of substrs based on a separator string.
 *
 * @param str The string to split.
 * @param separator The separator string to use.
 * @returns An array of substrs.
 */
const split = (str, separator) => {
    try {
        if ((0, exports.isNotEmpty)(str) && (0, exports.isValid)(separator)) {
            const result = str.split(separator);
            return result;
        }
        return [];
    }
    catch (error) {
        return [];
    }
};
exports.split = split;
/**
 * Converts a string to camel case.
 * @param str The string to convert.
 * @returns The camel case version of the string.
 */
const toCamelCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            // Main logic for converting string to camel case goes here
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        return '';
    }
    catch (error) {
        return '';
    }
};
exports.toCamelCase = toCamelCase;
/**
 * Converts a given string to kebab case
 * @param str The input string to convert
 * @returns The kebab case version of the input string
 */
const toKebabCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            const kebabCase = str.replace(/[^\w\s]/g, '').trim().replace(/\s+/g, '-').toLowerCase();
            return kebabCase;
        }
        return '';
    }
    catch (error) {
        return '';
    }
};
exports.toKebabCase = toKebabCase;
/**
 * Converts a given string to snake case.
 * @param str The input string to convert.
 * @returns The converted snake case string.
 */
const toSnakeCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            const snakeCase = str.replace(/[^\w\s]/gi, '')
                .replace(/\s+/g, '_')
                .toLowerCase();
            return snakeCase;
        }
        return '';
    }
    catch (error) {
        return '';
    }
};
exports.toSnakeCase = toSnakeCase;
/**
 * This function takes a string and returns a title case version of it.
 * @param {string} str - The input string to be converted to title case.
 * @returns {string} - The title case version of the input string.
 */
const toTitleCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            const words = str.toLowerCase().split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            return words.join(' ');
        }
        return '';
    }
    catch (error) {
        return '';
    }
};
exports.toTitleCase = toTitleCase;
/**
 * Checks if the given string contains only alphabetic characters.
 * @param str The string to be checked.
 * @returns true if the string contains only alphabetic characters, false otherwise.
 */
const hasAlphabeticCharsOnly = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str)) {
            const regex = /^[a-zA-Z\s]+$/;
            return regex.test(str);
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.hasAlphabeticCharsOnly = hasAlphabeticCharsOnly;
/**
 * Check if the given string contains only numeric characters.
 * Returns true if the string is numeric, false otherwise.
 *
 * @param str - The string to check.
 * @returns Whether the string contains only numeric characters.
 */
const hasNumericCharsOnly = (str) => {
    try {
        // Validate function parameters
        if ((0, exports.isNotEmpty)(str)) {
            // Check if the string contains only numeric characters using a regular expression
            const numericRegex = /^[0-9]+$/;
            return numericRegex.test(str);
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.hasNumericCharsOnly = hasNumericCharsOnly;
/**
 * Checks if the given string contains only alphanumeric characters
 * @param str The string to be checked
 * @returns A boolean indicating whether the string contains only alphanumeric characters or not
 */
const isAlphanumeric = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            return /^[a-zA-Z0-9]+$/.test(str);
        return false;
    }
    catch (err) {
        return false;
    }
};
exports.isAlphanumeric = isAlphanumeric;
/**
 * Checks whether a given string is in all lowercase letters.
 *
 * @param str The string to check.
 * @returns True if the string is all lowercase, false otherwise.
 */
const isLowerCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            return str === str.toLowerCase();
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isLowerCase = isLowerCase;
/**
* Checks whether a given string is in all uppercase letters.
*
* @param str The string to check.
* @returns True if the string is all uppercase, false otherwise.
*/
const isUpperCase = (str) => {
    try {
        if ((0, exports.isNotEmpty)(str))
            return str === str.toUpperCase();
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isUpperCase = isUpperCase;
/**
 * This function validates IP addresses of all types.
 *
 * @param ipAddress - The IP address to be validated.
 * @returns A boolean indicating whether the IP address is valid or not.
 */
const isIPAddress = (ipAddress) => {
    try {
        if ((0, exports.isNotEmpty)(ipAddress)) {
            const ipPattern = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            if (!ipPattern.test(ipAddress)) {
                return false;
            }
            const octets = ipAddress.split('.');
            if (octets.length !== 4) {
                return false;
            }
            for (let i = 0; i < octets.length; i++) {
                const octet = parseInt(octets[i]);
                if (isNaN(octet) || octet < 0 || octet > 255) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isIPAddress = isIPAddress;
/**
* This function takes a string value and checks if it is a valid hexadecimal color.
*
* Returns true if the value is a valid hexadecimal color, otherwise false.
* @param { value}
* @returns { boolean}
*/
const isValidHexColor = (value) => {
    try {
        if ((0, exports.isNotEmpty)(value)) {
            // Remove the '#' character from the start of the string, if present
            const hex = value.startsWith('#') ? value.slice(1) : value;
            // Check if the remaining string has 3 or 6 characters and only contains hexadecimal digits
            const hexRegex = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
            const isValid = hexRegex.test(hex);
            return isValid;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isValidHexColor = isValidHexColor;
/**
 * This function takes a string value and checks if it is a valid credit card number.
 *
 * @param value
 * @returns true if the value is a valid credit card number, otherwise false.
*/
const isValidCreditCard = (value) => {
    try {
        if ((0, exports.isNotEmpty)(value)) {
            // Remove all non-digit characters from the string
            const digits = value.replace(/\D/g, '');
            // Check if the string has a length of 16 and only contains digits
            const creditCardRegex = /^\d{16}$/;
            let isValid = creditCardRegex.test(digits);
            // Luhn algorithm for credit card validation
            let sum = 0;
            for (let i = 0; i < digits.length; i++) {
                let digit = Number(digits[i]);
                if ((i + 1) % 2 === 0) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                sum += digit;
            }
            isValid && (isValid = sum % 10 === 0);
            return isValid;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isValidCreditCard = isValidCreditCard;
/**
 * Validates whether a given string is a valid JSON.
 * @param jsonString The string to be validated as a JSON.
 * @returns A boolean indicating whether the string is a valid JSON or not.
 */
const isValidJSON = (jsonString) => {
    try {
        if ((0, exports.isNotEmpty)(jsonString)) {
            const json = JSON.parse(jsonString);
            if (typeof json !== 'object') {
                return false;
            }
            return true;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isValidJSON = isValidJSON;
/**
 * Validates whether a given string is a valid Base64 string.
 * @param base64String The string to be validated as a Base64.
 * @returns A boolean indicating whether the string is a valid Base64 or not.
 */
const isValidBase64 = (base64String) => {
    try {
        if ((0, exports.isNotEmpty)(base64String)) {
            const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
            if (!(0, exports.isValid)(base64String) || !regex.test(base64String)) {
                return false;
            }
            const decodedString = atob(base64String);
            const encodedString = btoa(decodedString);
            return encodedString === base64String;
        }
        return false;
    }
    catch (error) {
        return false;
    }
};
exports.isValidBase64 = isValidBase64;
/**
 * Convert a specified case to string
 *
 * @param {string} str - The input string to convert
 * @param {string} caseType - The case type to convert to. Possible values: kebab-case, snake_case, camelCase, Title Case
 * @returns {string} The converted string
 */
function removeCase(str, caseType) {
    try {
        let convertedStr = '';
        if ((0, exports.isNotEmpty)(str) && (0, exports.isNotEmpty)(caseType)) {
            // Convert the string based on the case type
            switch (caseType) {
                case 'kebab-case':
                    convertedStr = str.replace(/-/g, ' ').toLowerCase();
                    break;
                case 'snake_case':
                    convertedStr = str.replace(/_/g, ' ').toLowerCase();
                    break;
                default:
                    convertedStr = "";
            }
        }
        return convertedStr;
    }
    catch (error) {
        return "";
    }
}
exports.removeCase = removeCase;
/**
 * This function checks if a provided string is empty.
 * @param str The string to check.
 * @returns True if the string is empty, false otherwise.
 */
function isEmpty(str) {
    try {
        // Validate function parameters
        if (typeof str !== 'string')
            return false;
        // Function logic and other codes inside try block
        return str.trim().length === 0;
    }
    catch (error) {
        return false;
    }
}
exports.isEmpty = isEmpty;
