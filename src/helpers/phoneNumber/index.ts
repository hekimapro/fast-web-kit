/**
 * Normalizes a phone number string to a standard format.
 * @param phoneNumber - The phone number to normalize.
 * @returns The normalized phone number.
 * @throws Error if the input is not a string or contains invalid characters.
 */
export function normalizePhoneNumber(phoneNumber: string): string {
    try {
        // Remove all non-numeric characters from the input
        const cleanedNumber = phoneNumber.replace(/[^\d]/g, "");

        // Check if the cleaned number is valid (should have between 7 and 15 digits)
        if (cleanedNumber.length < 7 || cleanedNumber.length > 15) {
            throw new Error("Invalid phone number format.");
        }

        // Format the cleaned number to a standard format (e.g. "+1 (555) 123-4567")
        const countryCode = cleanedNumber.substring(0, cleanedNumber.length - 10);
        const areaCode = cleanedNumber.substring(cleanedNumber.length - 10, cleanedNumber.length - 7);
        const prefix = cleanedNumber.substring(cleanedNumber.length - 7, cleanedNumber.length - 4);
        const lineNumber = cleanedNumber.substring(cleanedNumber.length - 4);
        return `+${countryCode} (${areaCode}) ${prefix}-${lineNumber}`;
    } catch (error) {
        throw new Error(`Unable to normalize phone number: ${error.message}`);
    }
}
