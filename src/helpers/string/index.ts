// dependencies
import * as array from "../array"

/**
    ** Function that check if provided value is a string
    ** example: isValid("test")
    ** returns a boolean value ie: true or false
*/
export const isValid = (value: string): boolean => typeof value === "string"

/**
 ** Function that check if provided string is not empty
 ** example: isNotEmpty("")
 ** returns a boolean value
 */
export const isNotEmpty = (value: string): boolean => isValid(value) ? value.trim() !== "" : false

/**
 ** Function that convert a provided value to a string
 ** Example: convert(2)
 ** returns a value converted to a string
 **/

export const convert = (value: any): string => JSON.stringify(value)

/**
 ** Function that capitalize first letter of a provided string
 ** Example: capitalize("test")
 ** returns a capitalized version of a string value
 */
export const capitalize = (value: string): string => isValid(value) ? value.charAt(0).toUpperCase() + value.slice(1) : value

/**
 ** Function that reverse a provided string
 ** Example: reverse("test")
 ** returns a reversed string on the original value
 **/
export const reverse = (value: string): string => isValid(value) ? array.reverse(value.split("")).join("") : value

/**
 ** Function that remove all special characters in a string
 ** Example: removeSpecialCharacters("Hello, world!")
 ** returns a string without special characters
 **/
export const removeSpecialCharacters = (value: string): string => isValid(value) ? value.replace(/[^A-Za-z0-9\s]/g, "") : value

/**
 ** Function that return provided string length
 ** Example: length("Hello World")
 ** returns a number
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
** returns a string which has no white ie: Hello World!
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
 ** returns a camel case string ie: helloWorld
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
 ** returns hello-world
 ** Function that converts a string to snake_case (i.e., all words are lowercase and separated by underscores)
** Example: changeCase("hello world", "_")
** returns hello_world
 **/
export const changeCase = (value: string, caseTo: "kebab" | "snake"): string => isNotEmpty(value) ? value.toLowerCase().replace(/[^a-z0-9]+/g, caseTo === "kebab" ? '-' : "_") : value