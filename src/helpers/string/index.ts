// dependencies
import * as array from "../array"

/**
    ** Function that check if provided value is a string
    ** example: isValid("test")
    ** Returns a boolean value ie: true or false
*/
export const isValid = (value: string): boolean => typeof value === "string"

/**
 ** Function that check if provided string is not empty
 ** example: isNotEmpty("")
 ** Returns a boolean value
 */
export const isNotEmpty = (value: string): boolean => isValid(value) ? value.trim() !== "" : false

/**
 ** Function that convert a provided value to a string
 ** Example: convert(2)
 ** Returns a value converted to a string
 **/

export const convert = (value: any): string => JSON.stringify(value)

/**
 ** Function that capitalize first letter of a provided string
 ** Example: capitalize("test")
 ** Returns a capitalized version of a string value
 */
export const capitalize = (value: string): string => isValid(value) ? value.charAt(0).toUpperCase() + value.slice(1) : value

/**
 ** Function that reverse a provided string
 ** Example: reverse("test")
 ** Returns a reversed string on the original value
 **/
export const reverse = (value: string): string => isValid(value) ? array.reverse(value.split("")).join("") : value

/**
 ** Function that remove all special characters in a string
 ** Example: removeSpecialCharacters("Hello, world!")
 ** Returns a string without special characters
 **/
export const removeSpecialCharacters = (value: string): string => isValid(value) ? value.replace(/[^A-Za-z0-9\s]/g, "") : value

/**
 ** Function that return provided string length
 ** Example: length("Hello World")
 ** Returns a number
 **/
export const length = (value: string): number => isNotEmpty(value) ? value.length : 0

/**
 ** Function that truncates a string
 ** Example: truncate("The quick brown fox jumps over the lazy dog.", 20)
 ** return a short string according to the length provided
 **/
export const truncate = (value: string, maxLength: number): string => {
    try {

        // checking if provided string is not empty
        if (isNotEmpty(value) && maxLength) {
            if (length(value) > maxLength)
                return value.slice(0, maxLength) + "..."
        }

        return value

    } catch (error) {
        return value
    }
}

/**
** Function that remove whitespace from the beginning and ending of a provided string
** Example: removeWhitespace(" Hello World!   ")
** Returns a string which has no white ie: Hello World!
**/
export const removeWhitespace = (value: string): string => isNotEmpty(value) ? value.trim() : value

/**
 ** Function that split a string into an array of substrings based on a specified separator
 ** Example: split("Hello_World", "_")
 ** return an array of string [ "Hello", "World" ]
**/
export const split = (value: string, separator: string): string[] => isNotEmpty(value) ? value.split(separator) : []

/**
 ** Function that converts a provided string to camelCase
 ** Example: camelCase("hello world")
 ** Returns a camel case string ie: helloWorld
 **/
export const camelCase = (value: string): string => {
    try {

        // checking if provided string is not empty
        if (isNotEmpty(value)) {
            return value.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
                return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '')
        }

        return value

    } catch (error) {
        return value
    }
}

/**
 ** Function that converts a string to kebab-case (i.e., all words are lowercase and separated by hyphens)
 ** Example: changeCase("hello world", "kebab")
 ** Returns hello-world
 ** Function that converts a string to snake_case (i.e., all words are lowercase and separated by underscores)
** Example: changeCase("hello world", "snake")
** Returns hello_world
 **/
export const changeCase = (value: string, caseTo: "kebab" | "snake"): string => isNotEmpty(value) ? value.toLowerCase().replace(/[^a-z0-9]+/g, caseTo === "kebab" ? '-' : "_") : value

/**
 ** Function that converts a provided string to Title Case format
 ** Example: titleCase(hello world)
 ** Returns Hello World
 **/
export const titleCase = (value: string): string => isNotEmpty(value) ? value.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
}) : value

/**
 ** Function that can be used to validate if a given string is a valid email address.
 ** Returns true if the string is a valid email address, and false otherwise.
 ** Here is an example implementation
 ** isEmail("test@mail.com")
*/
export const isEmail = (email: string): boolean => isNotEmpty(email) ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) : false

/**
 ** Function used to validate whether a given string is a valid URL or not.
 ** It checks if the string starts with http://, https://, ftp://, or ftps://, and if it contains a valid domain name, as well as any query parameters or fragment identifiers.
** Returns true if the string is a valid URL, and false otherwise.
** isURL("https://npmjs.org/package/fast-kit")
*/
export const isURL = (URL: string): boolean => isNotEmpty(URL) ? /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/.test(URL) : false

/**
** Function that check if a given string contains only alphabetic characters
** Returns true if string contains only alphabetic characters and false otherwise.
** hasAlphabeticCharactersOnly("fast kit")
*/
export const hasAlphabeticCharactersOnly = (alphabeticString: string): boolean => isNotEmpty(alphabeticString) ? /^[A-Za-z\s]+$/.test(alphabeticString) : false

/**
 ** Function that check if a given string contains only numeric characters (0-9)
 ** Return true if string contains numeric character and false othewise.
 ** hasNumericCharactersOnly("12324123")
 */
export const hasNumericCharactersOnly = (numericString: string): boolean => isNotEmpty(numericString) ? /^[0-9\s]+$/.test(numericString) : false

/**
 * * Function that check if a given string contains only alphanumeric characters
 * * Returns true if a given string contains only alphanumeric character and false if otherwise.
 * * hasAlphaNumericCharactersOnly("fastkit12345")
 */
export const hasAlphaNumericCharactersOnly = (alphaNumericString: string): boolean => isNotEmpty(alphaNumericString) ? /^[a-zA-Z0-9\s]+$/.test(alphaNumericString) : false

/**
 * * Function that check if a given string contains only lowercase alphabetic characters (a-z)
 * * Return true if a string contains only lowercase alphabetic characters and false if otherwise
 * * isLowerCase("fastkit")
 */
export const isLowerCase = (lowerAlphabeticString: string): boolean => hasAlphabeticCharactersOnly(lowerAlphabeticString) ? /^[a-z\s]+$/.test(lowerAlphabeticString) : false

/**
 * * Function that check if a given string contains only uppsercase alphabetic characters (a-z)
 * * Return true if a string contains only uppsercase alphabetic characters and false if otherwise
 * * isUpperCase("fastkit")
 */
export const isUpperCase = (upperCaseAlphabeticString: string): boolean => hasAlphabeticCharactersOnly(upperCaseAlphabeticString) ? /^[A-Z\s]+$/.test(upperCaseAlphabeticString) : false

/**
 * * Function that check if a given string is an IP address
 * * Returns true if a given string is an IP address and false if otherwise
 * * isIPAddress("127.0.0.1")
 */
export const isIPAddress = (IPAddress: string): boolean => isNotEmpty(IPAddress) ? /^(\d{1,3}\.){3}\d{1,3}$/.test(IPAddress) || /^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/.test(IPAddress) : false

/**
 * Check if a given string is a valid hexadecimal color code
 * @param color
 */
export const isHexColor = (color: string): boolean => {
    try {

        // Check if provided color is not empty
        if (isNotEmpty(color)) {

            // Check if the string starts with a hash symbol (#)
            if (color[0] !== '#') {
                return false;
            }

            // Check if the string has exactly 7 characters (including the hash symbol)
            if (color.length !== 7) {
                return false;
            }

            // Check if all the characters after the hash symbol are valid hexadecimal digits
            for (let i = 1; i < color.length; i++) {
                if (!/[0-9A-Fa-f]/.test(color[i])) {
                    return false;
                }
            }

            // If all the checks pass, the string is a valid hexadecimal color code
            return true;
        }

        return false

    } catch (error) {
        return false
    }
}

/**
 *  Check wether a given string is a valid credit number by Luhn algorithm
 *  @param cardNumber
 */
export const isCreditCard = (cardNumber: string): boolean => {
    try {

        // Check if value if not empty
        if (isNotEmpty(cardNumber)) {

            // Check if value is a string of digits with length between 13 and 19
            if (!/^\d{13,19}$/.test(cardNumber))
                return false;

            // Apply Luhn algorithm
            let sum = 0;
            let shouldDouble = false;
            for (let i = cardNumber.length - 1; i >= 0; i--) {
                let digit = parseInt(cardNumber.charAt(i), 10);
                if (shouldDouble) {
                    digit *= 2;
                    if (digit > 9) {
                        digit -= 9;
                    }
                }
                sum += digit;
                shouldDouble = !shouldDouble;
            }
            return (sum % 10) === 0;
        }

        return false

    } catch (error) {
        return false
    }
}

/**
 * Check if a given string is a valid JSON
 * @param JSONString
 */
export const isJSON = (JSONString: string): boolean => {
    try {

        if (isNotEmpty(JSONString)) {
            JSON.parse(JSONString)
            return true
        }
        return false

    } catch (error) {
        return false
    }
}

/**
 * Check if a given string is a valid base64 encoded string
 * @param base64
 */
export const isBase64 = (base64: string): boolean => {
    try {
        return btoa(atob(base64)) === base64
    } catch (error) {
        return false
    }
}

export * as string from "."