import * as string from "../string"

/**
 * Check if the provided string is a valid email
 * @param email - string to be validated as email
 * @returns boolean - true if email is valid, false otherwise
 */
export const isValid = (email: string): boolean => {
    try {

        if (string.isNotEmpty(email)) {
            // Regular expression to match email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Validate email using regex
            const isEmailValid = emailRegex.test(email);
            // Return true if email is valid
            return isEmailValid;
        }
        return false
    } catch (error) {
        // Return false if there was an error
        return false;
    }
};

/**
 * Get the domain of the provided email address
 * @param email - string of the email address to get the domain from
 * @returns string - the domain of the provided email address, or an empty string if the email is invalid
 */
export const getDomain = (email: string): string => {
    try {
        if (isValid(email)) {
            // Split email by '@' symbol to get domain
            const emailParts = email.split('@');
            const domain = emailParts[1];
            // Return domain
            return domain;
        }
        return ""
    } catch (error) {
        return '';
    }
};

/**
 * Get the username of the provided email address
 * @param email - string of the email address to get the username from
 * @returns string - the username of the provided email address, or an empty string if the email is invalid
 */
export const getUsername = (email: string): string => {
    try {
        if (isValid(email)) {
            // Split email by '@' symbol to get username
            const emailParts = email.split('@');
            const username = emailParts[0];
            // Return username
            return username;
        }
        return ''
    } catch (error) {
        // Return empty string if there was an error
        return '';
    }
};

/**
 * Normalize the provided email address by converting to lowercase and removing any spaces
 * @param email - string of the email address to normalize
 * @returns string - the normalized email address, or an empty string if the email is invalid
 */
export const normalize = (email: string): string => {
    try {
        if (isValid(email)) {
            // Convert email to lowercase and remove spaces
            const normalizedEmail = email.toLowerCase().replace(/\s/g, '');
            // Return normalized email
            return normalizedEmail;
        }
        return ''
    } catch (error) {
        // Return empty string if there was an error
        return '';
    }
}