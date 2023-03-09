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
/**
 * Validates the given email address and checks if its MX record is valid.
 * @param email - The email address to validate.
 * @returns A boolean value indicating whether the email is valid and its MX record is valid.
 */
export declare const validateMXRecord: (email: string) => Promise<boolean>;
/**
 * @returns true if the domain of the given email exists and is valid, false otherwise.
 * @param email The email to check.
 */
export declare function hasValidDomain(email: string): Promise<boolean>;
