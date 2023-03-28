/**
 * Determines whether a given value is a string.
 *
 * @param value - The value to check.
 * @returns Whether the value is a string.
 */
export const isValid = (value: string): boolean => (typeof value === 'string')

/**
 * Checks if a provided string is not empty.
 * @param str The string to check.
 */
export const isNotEmpty = (str: string): boolean => isValid(str) ? (str.trim() !== "") : false

/**
 * Converts the provided value to a string.
 *
 * @param value The value to be converted to a string.
 * @returns The string representation of the provided value.
 */
export const convert = (value: any): string => String(value)

/**
 * This function takes a string and capitalizes it.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
    try {
        if (isNotEmpty(str)) {
            const firstLetter = str.charAt(0).toUpperCase()
            const restOfString = str.slice(1)
            return `${firstLetter}${restOfString}`
        }
        return str
    } catch (error) {
        return str // Return original string if there was an error.
    }
}

/**
 * This function takes a string as input and returns the reverse of that string.
 *
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export const reverse = (str: string): string => {
    try {
        if (isNotEmpty(str)) {
            let reversed = ''
            for (let i = str.length - 1; i >= 0; i--) {
                reversed += str[i]
            }
            return reversed
        }
        return str
    } catch (error) {
        return str
    }
}

/**
 * This function removes special characters from a string without removing spaces.
 *
 * @param inputString - The input string to remove special characters from.
 * @returns The input string with all special characters removed (excluding spaces).
 */
export function removeSpecialCharacters(inputString: string): string {
    try {
        // Validate function parameters
        if (isNotEmpty(inputString)) {
            // Remove special characters from string
            const regex = /[^A-Za-z0-9\s]/g
            return inputString.replace(regex, '')
        }
        return inputString
    } catch (error) {
        return inputString
    }
}

/**
 * This function returns the length of a provided string.
 *
 * @param {string} str - The string to get the length of.
 * @returns {number} The length of the provided string.
 */
export const getLength = (str: string): number => {
    try {

        if (isNotEmpty(str))
            return str.length;
        return 0
    } catch (error) {
        return 0;
    }
};

/**
 * Truncates a given string to a provided length.
 * @param str The string to truncate.
 * @param maxLength The maximum length of the truncated string.
 * @returns The truncated string.
 */
export const truncate = (str: string, maxLength: number): string => {
    try {
        if (isNotEmpty(str) && (typeof maxLength === "number" && maxLength > 0))
            return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
        return str
    } catch (error) {
        return str;
    }
}

/**
 * Removes whitespace from a given string.
 *
 * @param str The string to remove whitespace from.
 * @returns The string with all whitespace removed.
 */
export const removeWhitespace = (str: string): string => {
    try {
        if (isNotEmpty(str))
            // Remove all whitespace characters from the string
            return str.replace(/\s/g, '')
        return ""
    } catch (error) {
        return '';
    }
};

/**
 * Splits a string into an array of substrs based on a separator string.
 *
 * @param str The string to split.
 * @param separator The separator string to use.
 * @returns An array of substrs.
 */
export const split = (str: string, separator: string): string[] => {
    try {
        if (isNotEmpty(str) && isValid(separator)) {
            const result = str.split(separator);
            return result;
        }
        return []
    } catch (error) {
        return [];
    }
}

/**
 * Converts a string to camel case.
 * @param str The string to convert.
 * @returns The camel case version of the string.
 */
export const toCamelCase = (str: string): string => {
    try {
        if (isNotEmpty(str))
            // Main logic for converting string to camel case goes here
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        return ''
    } catch (error) {
        return '';
    }
}

/**
 * Converts a given string to kebab case
 * @param str The input string to convert
 * @returns The kebab case version of the input string
 */
export const toKebabCase = (str: string): string => {
    try {
        if (isNotEmpty(str)) {
            const kebabCase = str.trim().replace(/\s+/g, '-').toLowerCase();
            return kebabCase;
        }
        return ''
    } catch (error) {
        return '';
    }
}

/**
 * Converts a given string to snake case.
 * @param str The input string to convert.
 * @returns The converted snake case string.
 */
export const toSnakeCase = (str: string): string => {
    try {
        if (isNotEmpty(str)) {
            const snakeCase = str.replace(/\s+/g, '_').toLowerCase()
            return snakeCase;
        }
        return ''
    } catch (error) {
        return '';
    }
}

/**
 * This function takes a string and returns a title case version of it.
 * @param {string} str - The input string to be converted to title case.
 * @returns {string} - The title case version of the input string.
 */
export const toTitleCase = (str: string): string => {
    try {
        if (isNotEmpty(str)) {
            const words = str.toLowerCase().split(' ');
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
            return words.join(' ')
        }
        return ''
    } catch (error) {
        return '';
    }
};

/**
 * Checks if the given string contains only alphabetic characters.
 * @param str The string to be checked.
 * @returns true if the string contains only alphabetic characters, false otherwise.
 */
export const hasAlphabeticCharsOnly = (str: string): boolean => {
    try {
        if (isNotEmpty(str)) {
            const regex = /^[a-zA-Z\s]+$/;
            return regex.test(str);
        }
        return false
    } catch (error) {
        return false;
    }
}

/**
 * Check if the given string contains only numeric characters.
 * Returns true if the string is numeric, false otherwise.
 *
 * @param str - The string to check.
 * @returns Whether the string contains only numeric characters.
 */
export const hasNumericCharsOnly = (str: string): boolean => {
    try {
        // Validate function parameters
        if (isNotEmpty(str)) {
            // Check if the string contains only numeric characters using a regular expression
            const numericRegex = /^[0-9]+$/;
            return numericRegex.test(str);
        }
        return false
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the given string contains only alphanumeric characters
 * @param str The string to be checked
 * @returns A boolean indicating whether the string contains only alphanumeric characters or not
 */
export const isAlphanumeric = (str: string): boolean => {
    try {
        if (isNotEmpty(str))
            return /^[a-zA-Z0-9]+$/.test(str)
        return false
    } catch (err) {
        return false;
    }
}

/**
 * Checks whether a given string is in all lowercase letters.
 *
 * @param str The string to check.
 * @returns True if the string is all lowercase, false otherwise.
 */
export const isLowerCase = (str: string): boolean => {
    try {
        if (isNotEmpty(str))
            return str === str.toLowerCase()
        return false
    } catch (error) {
        return false;
    }
};

/**
* Checks whether a given string is in all uppercase letters.
*
* @param str The string to check.
* @returns True if the string is all uppercase, false otherwise.
*/
export const isUpperCase = (str: string): boolean => {
    try {
        if (isNotEmpty(str))
            return str === str.toUpperCase()
        return false
    } catch (error) {
        return false;
    }
};

/**
 * This function validates IP addresses of all types.
 *
 * @param ipAddress - The IP address to be validated.
 * @returns A boolean indicating whether the IP address is valid or not.
 */
export const isIPAddress = (ipAddress: string): boolean => {
    try {

        if (isNotEmpty(ipAddress)) {
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
        return false
    } catch (error) {
        return false;
    }
};

/**
* This function takes a string value and checks if it is a valid hexadecimal color.
*
* Returns true if the value is a valid hexadecimal color, otherwise false.
* @param { value}
* @returns { boolean}
*/
export const isValidHexColor = (value: string): boolean => {
    try {
        if (isNotEmpty(value)) {
            // Remove the '#' character from the start of the string, if present
            const hex = value.startsWith('#') ? value.slice(1) : value;

            // Check if the remaining string has 3 or 6 characters and only contains hexadecimal digits
            const hexRegex = /^[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
            const isValid = hexRegex.test(hex);
            return isValid;
        }
        return false
    } catch (error) {
        return false;
    }
};


/**
 * This function takes a string value and checks if it is a valid credit card number.
 *
 * @param value
 * @returns true if the value is a valid credit card number, otherwise false.
*/
export const isValidCreditCard = (value: string): boolean => {
    try {

        if (isNotEmpty(value)) {
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
            isValid &&= sum % 10 === 0;

            return isValid;
        }
        return false
    } catch (error) {
        return false;
    }
};

/**
 * Validates whether a given string is a valid JSON.
 * @param jsonString The string to be validated as a JSON.
 * @returns A boolean indicating whether the string is a valid JSON or not.
 */
export const isValidJSON = (jsonString: string): boolean => {
    try {
        if (isNotEmpty(jsonString)) {
            const json = JSON.parse(jsonString);
            if (typeof json !== 'object') {
                return false;
            }
            return true;
        }
        return false
    } catch (error) {
        return false;
    }
}

/**
 * Validates whether a given string is a valid Base64 string.
 * @param base64String The string to be validated as a Base64.
 * @returns A boolean indicating whether the string is a valid Base64 or not.
 */
export const isValidBase64 = (base64String: string): boolean => {
    try {
        if (isNotEmpty(base64String)) {
            const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
            if (!isValid(base64String) || !regex.test(base64String)) {
                return false;
            }
            const decodedString = atob(base64String);
            const encodedString = btoa(decodedString);
            return encodedString === base64String;
        }
        return false
    } catch (error) {
        return false;
    }
};

/**
 * Convert a specified case to string
 *
 * @param {string} str - The input string to convert
 * @param {string} caseType - The case type to convert to. Possible values: kebab-case, snake_case, camelCase, Title Case
 * @returns {string} The converted string
 */
export function removeCase(str: string, caseType: 'kebab-case' | 'snake_case'): string {

    try {
        let convertedStr: string = '';

        if (isNotEmpty(str) && isNotEmpty(caseType)) {
            // Convert the string based on the case type
            switch (caseType) {
                case 'kebab-case':
                    convertedStr = str.replace(/-/g, ' ').toLowerCase();
                    break;
                case 'snake_case':
                    convertedStr = str.replace(/_/g, ' ').toLowerCase();
                    break;
                default:
                    convertedStr = ""
            }
        }
        return convertedStr
    } catch (error) {
        return "";
    }
}

/**
 * This function checks if a provided string is empty.
 * @param str The string to check.
 * @returns True if the string is empty, false otherwise.
 */
export function isEmpty(str: string): boolean {
    try {
        // Validate function parameters
        if (typeof str !== 'string')
            return true

        // Function logic and other codes inside try block
        return str.trim().length === 0;
    } catch (error) {
        return true;
    }
}
