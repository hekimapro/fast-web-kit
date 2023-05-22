/**
 * Check if the provided string is a valid email
 * @param email - string to be validated as email
 * @returns boolean - true if email is valid, false otherwise
 */
export declare const isValid: (email: string) => boolean;
/**
 * Get the domain of the provided email address
 * @param email - string of the email address to get the domain from
 * @returns string - the domain of the provided email address, or an empty string if the email is invalid
 */
export declare const getDomain: (email: string) => string;
/**
 * Get the username of the provided email address
 * @param email - string of the email address to get the username from
 * @returns string - the username of the provided email address, or an empty string if the email is invalid
 */
export declare const getUsername: (email: string) => string;
/**
 * Normalize the provided email address by converting to lowercase and removing any spaces
 * @param email - string of the email address to normalize
 * @returns string - the normalized email address, or an empty string if the email is invalid
 */
export declare const normalize: (email: string) => string;
