/**
 * Checks if a password is strong, meaning it meets the following criteria:
 *  - At least 8 characters long
 *  - Contains at least one lowercase letter
 *  - Contains at least one uppercase letter
 *  - Contains at least one digit
 *  - Contains at least one symbol (e.g. !@#$%^&*)
 *
 * @param password The password to check.
 * @returns True if the password is strong, false otherwise.
 */
export declare function isStrongPassword(password: string): boolean;
/**
 * Checks if a password is less than a maximum length.
 *
 * @param password The password to check.
 * @param maxLength The maximum allowed length.
 * @returns True if the password is less than the maximum length, false otherwise.
 */
export declare function isPasswordLessThanMax(password: string, maxLength: number): boolean;
/**
 * Checks if a password contains at least one lowercase letter.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one lowercase letter, false otherwise.
 */
export declare function hasLowercase(password: string): boolean;
/**
 * Checks if a password contains at least one uppercase letter.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one uppercase letter, false otherwise.
 */
export declare function hasUppercase(password: string): boolean;
/**
 * Checks if a password contains at least one digit.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one digit, false otherwise.
 */
export declare function hasDigit(password: string): boolean;
/**
 * Checks if a password contains at least one symbol.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one symbol, false otherwise.
 */
export declare function hasSymbol(password: string): boolean;
/**
* Checks if the password contains no whitespace characters.
* @param password The password string to check.
* @returns Returns `true` if the password contains no whitespace, else `false`.
*/
export declare function hasNoWhitespace(password: string): boolean;
/**
 * Checks if the password contains only alphanumeric characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only alphanumeric characters, else `false`.
 */
export declare function isAlphanumeric(password: string): boolean;
/**
 * Checks if the password contains only alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only alphabetic characters, else `false`.
 */
export declare function isAlphabeticOnly(password: string): boolean;
/**
 * Checks if the password contains only lowercase alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only lowercase alphabetic characters, else `false`.
 */
export declare function isLowercaseOnly(password: string): boolean;
/**
 * Checks if the password contains only uppercase alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only uppercase alphabetic characters, else `false`.
 */
export declare function isUppercaseOnly(password: string): boolean;
/**
 * Checks if the provided password has repeated characters.
 *
 * @param password - The password to be validated.
 * @returns True if password has repeated characters, false otherwise.
 */
export declare function isRepeatedChar(password: string): boolean;
/**
* Checks if the provided password has sequential characters.
*
* @param password - The password to be validated.
* @returns True if password has sequential characters, false otherwise.
*/
export declare function isSequencedChar(password: string): boolean;
/**
* Checks if the provided password has leet speak characters.
*
* @param password - The password to be validated.
* @returns True if password has leet speak characters, false otherwise.
*/
export declare function isLeetSpeak(password: string): boolean;
/**
 * Check if a given string has similar characters, like 1 and i, 0 and O, etc.
 * @param password - The password to be checked
 * @returns true if password has similar characters, false otherwise
 */
export declare function hasSimilarCharacter(password: string): boolean;
/**
 * Check if a given string has sequential characters, like abc, 123, etc.
 * @param password - The password to be checked
 * @param sequenceLength - The minimum length of the sequence to be considered
 * @returns true if password has sequential characters, false otherwise
 */
export declare function hasSequentialCharacters(password: string, sequenceLength: number): boolean;
/**
 * Check if a given string is a complex password, which has a combination of lowercase letters, uppercase letters, numbers and special characters
 * @param password - The password to be checked
 * @param minLength - The minimum length of the password to be considered as complex
 * @returns true if password is complex, false otherwise
 */
export declare function isComplexPassword(password: string, minLength?: number): boolean;
