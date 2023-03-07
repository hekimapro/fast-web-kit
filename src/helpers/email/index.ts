import dns from 'dns';
import net from 'net';
import axios from 'axios';

/**
 * Returns an array of disposable email domains using the API from 'https://github.com/andreis/disposable-email-domains'
 */
export async function getDisposableEmailDomains(): Promise<string[]> {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/andreis/disposable-email-domains/master/domains.json');
        const domains: string[] = response.data;
        return domains;
    } catch (error) {
        throw new Error(`Error getting disposable email domains: ${error.message}`);
    }
}

/**
 * Returns the domain of a given email address.
 * @param email The email address to get the domain from.
 * @returns The domain name of the email address.
 */
export function getEmailDomain(email: string): string {
    try {
        const domain = email.split('@')[1];
        return domain;
    } catch (err) {
        console.error(err);
        return '';
    }
}

/**
 * Returns the username of a given email address.
 * @param email The email address to get the username from.
 * @returns The username of the email address.
 */
export function getEmailUsername(email: string): string {
    try {
        const username = email.split('@')[0];
        return username;
    } catch (err) {
        console.error(err);
        return '';
    }
}

/**
 * Validates if the provided string is a valid email address.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the provided email address is valid, otherwise false.
 */
export function isValidEmail(email: string): boolean {
    try {
        // Email regex pattern taken from https://emailregex.com/
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Normalizes an email address by converting it to lowercase and removing any extra spaces.
 *
 * @param {string} email - The email address to normalize.
 * @returns {string} - Returns the normalized email address.
 */
export function normalizeEmail(email: string): string {
    try {
        const normalizedEmail = email.trim().toLowerCase();
        return normalizedEmail;
    } catch (error) {
        console.error(error);
        return '';
    }
}

/**
 * Validates if the domain of the provided email address has a valid MX record.
 *
 * @param {string} email - The email address to validate.
 * @returns {Promise<boolean>} - Returns a Promise that resolves to true if the domain of the provided email address has a valid MX record, otherwise false.
 */
export async function validateMXRecord(email: string): Promise<boolean> {
    try {
        const domain = email.split('@')[1];
        const mxRecords = await dns.promises.resolveMx(domain);

        return mxRecords.length > 0;
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Validates if the SMTP connection to the mail server of the provided email address is successful.
 *
 * @param {string} email - The email address to validate.
 * @param {number} [port=25] - The port to connect to the mail server. Defaults to port 25.
 * @returns {Promise<boolean>} - Returns a Promise that resolves to true if the SMTP connection to the mail server is successful, otherwise false.
 */
export async function validateSMTPConnection(email: string, port = 25): Promise<boolean> {
    try {
        const domain = email.split('@')[1];
        const smtpSocket = net.createConnection(port, domain);

        // Wait for the 'connect' event
        await new Promise((resolve: any, reject) => {
            smtpSocket.once('connect', () => {
                resolve();
            });

            smtpSocket.once('error', (error: Error) => {
                reject(error);
            });
        });

        // Send a test message to the SMTP server
        await new Promise((resolve, reject) => {
            smtpSocket.write('EHLO example.com\r\n', (error: Error) => {
                if (error) {
                    reject(error);
                }
            });

            smtpSocket.on('data', (data: any) => {
                const responseCode = data.toString().split(' ')[0];
                if (responseCode === '250') {
                    resolve(data.toString());
                } else {
                    reject(data.toString());
                }
            });

            smtpSocket.once('error', (error: Error) => {
                reject(error);
            });
        });

        smtpSocket.end();

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

/**
 * Returns true if the given email is a disposable email, false otherwise.
 * @param email The email to check.
 */
export async function isDisposableEmail(email: string): Promise<boolean> {
    try {
        const domains = await getDisposableEmailDomains();
        const domain = email.split('@')[1];
        return domains.includes(domain);
    } catch (error) {
        throw new Error(`Error checking if email is disposable: ${error.message}`);
    }
}

/**
* Returns true if the given email is a role-based email, false otherwise.
* A role-based email is one that is associated with a particular function or role, such as "admin@website.com" or "support@website.com".
* @param email The email to check.
*/
export function isRoleEmail(email: string): boolean {
    try {
        const parts = email.split('@');
        const user = parts[0];
        const domain = parts[1];
        const userParts = user.split('+');
        return userParts.length > 1 || ['admin', 'webmaster', 'support', 'info', 'sales', 'contact', 'abuse'].includes(user.toLowerCase()) || domain.includes('support.') || domain.includes('help.');
    } catch (error) {
        throw new Error(`Error checking if email is a role email: ${error.message}`);
    }
}

/**
* Returns true if the given email is a free email (e.g. Gmail, Yahoo, Hotmail), false otherwise.
* @param email The email to check.
*/
export function isFreeEmail(email: string): boolean {
    try {
        const domain = email.split('@')[1];
        return ['gmail.com', 'yahoo.com', 'hotmail.com', 'aol.com', 'outlook.com', 'icloud.com', 'mail.com', 'inbox.com', 'zoho.com', 'gmx.com'].includes(domain);
    } catch (error) {
        throw new Error(`Error checking if email is a free email: ${error.message}`);
    }
}

/**
 * Returns true if the domain of the given email exists and is valid, false otherwise.
 * @param email The email to check.
 */
export async function isValidEmailDomain(email: string): Promise<boolean> {
    try {
        const domain = email.split('@')[1];
        await new Promise((resolve, reject) => {
            dns.resolve(domain, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(true);
                }
            });
        });
        return true;
    } catch (error) {
        return false;
    }
}
