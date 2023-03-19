"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.normalize = exports.getUsername = exports.getDomain = exports.isValid = void 0;
var string = __importStar(require("../string"));
/**
 * Check if the provided string is a valid email
 * @param email - string to be validated as email
 * @returns boolean - true if email is valid, false otherwise
 */
var isValid = function (email) {
    try {
        if (string.isNotEmpty(email)) {
            // Regular expression to match email format
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Validate email using regex
            var isEmailValid = emailRegex.test(email);
            // Return true if email is valid
            return isEmailValid;
        }
        return false;
    }
    catch (error) {
        // Handle error without throw
        console.error("Error in isValidEmail function: ".concat(error.message));
        // Return false if there was an error
        return false;
    }
};
exports.isValid = isValid;
/**
 * Get the domain of the provided email address
 * @param email - string of the email address to get the domain from
 * @returns string - the domain of the provided email address, or an empty string if the email is invalid
 */
var getDomain = function (email) {
    try {
        if ((0, exports.isValid)(email)) {
            // Split email by '@' symbol to get domain
            var emailParts = email.split('@');
            var domain = emailParts[1];
            // Return domain
            return domain;
        }
        return "";
    }
    catch (error) {
        // Handle error without throw
        console.error("Error in getEmailDomain function: ".concat(error.message));
        // Return empty string if there was an error
        return '';
    }
};
exports.getDomain = getDomain;
/**
 * Get the username of the provided email address
 * @param email - string of the email address to get the username from
 * @returns string - the username of the provided email address, or an empty string if the email is invalid
 */
var getUsername = function (email) {
    try {
        if ((0, exports.isValid)(email)) {
            // Split email by '@' symbol to get username
            var emailParts = email.split('@');
            var username = emailParts[0];
            // Return username
            return username;
        }
        return '';
    }
    catch (error) {
        // Handle error without throw
        console.error("Error in getEmailUsername function: ".concat(error.message));
        // Return empty string if there was an error
        return '';
    }
};
exports.getUsername = getUsername;
/**
 * Normalize the provided email address by converting to lowercase and removing any spaces
 * @param email - string of the email address to normalize
 * @returns string - the normalized email address, or an empty string if the email is invalid
 */
var normalize = function (email) {
    try {
        if ((0, exports.isValid)(email)) {
            // Convert email to lowercase and remove spaces
            var normalizedEmail = email.toLowerCase().replace(/\s/g, '');
            // Return normalized email
            return normalizedEmail;
        }
        return '';
    }
    catch (error) {
        // Handle error without throw
        console.error("Error in normalizeEmail function: ".concat(error.message));
        // Return empty string if there was an error
        return '';
    }
};
exports.normalize = normalize;
//# sourceMappingURL=index.js.map