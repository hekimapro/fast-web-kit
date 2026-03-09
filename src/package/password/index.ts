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
export function isStrongPassword(password: string): boolean {
    try {
        const hasLength = password.length >= 8;
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSymbol = /[!@#$%^&*]/.test(password);
        return hasLength && hasLower && hasUpper && hasDigit && hasSymbol;
    } catch (error) {
        return false;
    }
}

/**
 * Checks if a password is less than a maximum length.
 *
 * @param password The password to check.
 * @param maxLength The maximum allowed length.
 * @returns True if the password is less than the maximum length, false otherwise.
 */
export function isPasswordLessThanMax(password: string, maxLength: number): boolean {
    try {
        return password.length <= maxLength;
    } catch (error) {
        return false;
    }
}

/**
 * Checks if a password contains at least one lowercase letter.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one lowercase letter, false otherwise.
 */
export function hasLowercase(password: string): boolean {
    try {
        return /[a-z]/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if a password contains at least one uppercase letter.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one uppercase letter, false otherwise.
 */
export function hasUppercase(password: string): boolean {
    try {
        return /[A-Z]/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if a password contains at least one digit.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one digit, false otherwise.
 */
export function hasDigit(password: string): boolean {
    try {
        return /\d/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if a password contains at least one symbol.
 *
 * @param password The password to check.
 * @returns True if the password contains at least one symbol, false otherwise.
 */
export function hasSymbol(password: string): boolean {
    try {
        return /[!@#$%^&*]/.test(password);
    } catch (error) {
        return false;
    }
}

/**
* Checks if the password contains no whitespace characters.
* @param password The password string to check.
* @returns Returns `true` if the password contains no whitespace, else `false`.
*/
export function hasNoWhitespace(password: string): boolean {
    try {
        return !/\s/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the password contains only alphanumeric characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only alphanumeric characters, else `false`.
 */
export function isAlphanumeric(password: string): boolean {
    try {
        return /^[0-9a-zA-Z]+$/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the password contains only alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only alphabetic characters, else `false`.
 */
export function isAlphabeticOnly(password: string): boolean {
    try {
        return /^[a-zA-Z]+$/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the password contains only lowercase alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only lowercase alphabetic characters, else `false`.
 */
export function isLowercaseOnly(password: string): boolean {
    try {
        return /^[a-z]+$/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the password contains only uppercase alphabetic characters.
 * @param password The password string to check.
 * @returns Returns `true` if the password contains only uppercase alphabetic characters, else `false`.
 */
export function isUppercaseOnly(password: string): boolean {
    try {
        return /^[A-Z]+$/.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Checks if the provided password has repeated characters.
 *
 * @param password - The password to be validated.
 * @returns True if password has repeated characters, false otherwise.
 */
export function isRepeatedChar(password: string): boolean {
    try {
        return /(.).*\1/.test(password);
    } catch (error) {
        return false;
    }
}

/**
* Checks if the provided password has sequential characters.
*
* @param password - The password to be validated.
* @returns True if password has sequential characters, false otherwise.
*/
export function isSequencedChar(password: string): boolean {
    try {

        const sequenceRegex = /^(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)$/;

        return sequenceRegex.test(password.toLowerCase());
    } catch (error) {
        return false;
    }
}

/**
* Checks if the provided password has leet speak characters.
*
* @param password - The password to be validated.
* @returns True if password has leet speak characters, false otherwise.
*/
export function isLeetSpeak(password: string): boolean {
    try {

        const leetMap: { [key: string]: string } = {
            "a": "@",
            "b": "8",
            "e": "3",
            "g": "6",
            "l": "1",
            "o": "0",
            "s": "$",
            "t": "7",
            "z": "2"
        };

        const leetRegex = new RegExp(Object.keys(leetMap).map(k => leetMap[k]).join("|"), "gi");

        return leetRegex.test(password);
    } catch (error) {
        return false;
    }
}

/**
 * Check if a given string has similar characters, like 1 and i, 0 and O, etc.
 * @param password - The password to be checked
 * @returns true if password has similar characters, false otherwise
 */
export function hasSimilarCharacter(password: string): boolean {
    try {
        const similarChars: { [key: string]: string[] } = {
            "0": ["o", "O"],
            "1": ["l", "I"],
            "2": ["z"],
            "5": ["s"],
            "8": ["B"]
        };

        for (const char in similarChars) {
            const regex = new RegExp(`[${char}${similarChars[char].join("")}]`, "g");
            if (password.match(regex)) {
                return true;
            }
        }

        return false;
    } catch (error) {
        return false;
    }
}

/**
 * Check if a given string has sequential characters, like abc, 123, etc.
 * @param password - The password to be checked
 * @param sequenceLength - The minimum length of the sequence to be considered
 * @returns true if password has sequential characters, false otherwise
 */
export function hasSequentialCharacters(password: string, sequenceLength: number): boolean {
    try {
        for (let i = 0; i < password.length - sequenceLength; i++) {
            const sequence = password.slice(i, i + sequenceLength);
            if (sequence.match(/^\d+$/) || isAlphabeticOnly(sequence) || sequence.match(/^[@#$_-]+$/)) {
                const sequenceArray = Array.from(sequence);
                if (new Set(sequenceArray).size === sequenceArray.length && sequenceArray.every((char, i) => {
                    const nextChar = sequenceArray[i + 1];
                    return !nextChar || char.charCodeAt(0) + 1 === nextChar.charCodeAt(0);
                })) {
                    return true;
                }
            }
        }

        return false;
    } catch (error) {
        return false;
    }
}

/**
 * Check if a given string is a complex password, which has a combination of lowercase letters, uppercase letters, numbers and special characters
 * @param password - The password to be checked
 * @param minLength - The minimum length of the password to be considered as complex
 * @returns true if password is complex, false otherwise
 */
export function isComplexPassword(password: string, minLength: number = 8): boolean {
    try {
        return password.length >= minLength &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*()\-_=+{};:,<.>/?~\[\]|\\]/.test(password);
    } catch (error) {
        return false;
    }
}
