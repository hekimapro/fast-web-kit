import crypto from "crypto-js"

/**
 * Defines the return type of the encryption function.
 */
type EncryptReturnType = {
    payload: string
}

/**
 * Defines the supported encryption types.
 */
type EncryptionType = "base64" | "hex";


/**
 * Encrypts the provided data using the specified parameters.
 * @param data - The data to encrypt.
 * @param key - The encryption key.
 * @param iv - The initialization vector.
 * @param encryptionType - The type of encryption (base64 or hex).
 * @returns The encrypted payload.
 * @throws Error if validation fails.
 */
export function encrypt(data: any, key: string, iv: string, encryptionType: EncryptionType): EncryptReturnType {
    // Validate parameters
    if (typeof key !== "string" || !key) {
        throw new Error("Encryption key must be a non-empty string.");
    }

    if (typeof iv !== "string" || !iv) {
        throw new Error("Initialization vector must be a non-empty string.");
    }

    if (!["base64", "hex"].includes(encryptionType)) {
        throw new Error("Invalid encryption type.");
    }

    try {

        // Convert data to a string
        const dataToEncrypt = JSON.stringify(data)
        const encryptionKey = crypto.enc.Utf8.parse(key)
        const initializationVector = crypto.enc.Utf8.parse(iv)

        // Encrypt the data
        const encryptedData = crypto.AES.encrypt(
            dataToEncrypt,
            encryptionKey,
            { iv: initializationVector }
        ).toString()

        // Convert encrypted data to the specified encryption type
        let encryptedPayload: string;

        if (encryptionType === "base64") {
            encryptedPayload = encryptedData;
        } else {
            encryptedPayload = crypto.enc.Hex.stringify(crypto.enc.Base64.parse(encryptedData));
        }

        return { payload: encryptedPayload }

    } catch (error) {
        // Return error message if encryption fails
        throw new Error(`Encryption failed: ${(error as Error).message}`);
    }
}

/**
 * Decrypts the provided encrypted data using the specified parameters.
 * @param encryptedData - The encrypted payload.
 * @param key - The encryption key.
 * @param iv - The initialization vector.
 * @param encryptionType - The type of encryption (base64 or hex).
 * @returns The decrypted data.
 * @throws Error if validation fails or decryption fails.
 */
export function decrypt(encryptedData: EncryptReturnType, key: string, iv: string, encryptionType: EncryptionType): any {
    // Validate parameters
    if (typeof key !== "string" || !key) {
        throw new Error("Encryption key must be a non-empty string.");
    }
    if (typeof iv !== "string" || !iv) {
        throw new Error("Initialization vector must be a non-empty string.");
    }
    if (!["base64", "hex"].includes(encryptionType)) {
        throw new Error("Invalid encryption type.");
    }

    try {
        // Convert key and IV to CryptoJS format
        const encryptionKey = crypto.enc.Utf8.parse(key);
        const initializationVector = crypto.enc.Utf8.parse(iv);

        // Convert encrypted payload to CryptoJS format
        let encryptedDataBytes: crypto.lib.WordArray;
        if (encryptionType === "base64") {
            encryptedDataBytes = crypto.enc.Base64.parse(encryptedData.payload);
        } else {
            encryptedDataBytes = crypto.enc.Hex.parse(encryptedData.payload);
        }

        // Decrypt the data
        const decryptedData = crypto.AES.decrypt(
            crypto.enc.Base64.stringify(encryptedDataBytes),
            encryptionKey,
            { iv: initializationVector }
        ).toString(crypto.enc.Utf8);

        return JSON.parse(decryptedData)

    } catch (error) {
        // Return error message if decryption fails
        throw new Error(`Decryption failed: ${(error as Error).message}`);
    }
}