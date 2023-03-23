"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyExist = exports.hasAllKeys = exports.mapObject = exports.stringify = exports.toObject = exports.sortByKey = exports.setNestedProperty = exports.getNestedProperty = exports.unflattenObject = exports.getObjectValues = exports.isValid = exports.filterObject = exports.mapValues = exports.mapKeys = exports.pick = exports.omit = exports.deepMerge = exports.deepClone = exports.areEqual = exports.isNotEmpty = exports.isEmpty = void 0;
/**
 * This function checks if an object is empty.
 * @param obj The object to check.
 * @returns A boolean indicating whether the object is empty.
 */
function isEmpty(obj) {
    try {
        if (isValid(obj))
            return Object.keys(obj).length === 0;
        // Function logic and other codes inside try block
        return true;
    }
    catch (error) {
        return true;
    }
}
exports.isEmpty = isEmpty;
/**
* This function checks if an object is not empty.
* @param obj The object to check.
* @returns A boolean indicating whether the object is not empty.
*/
function isNotEmpty(obj) {
    try {
        // Validate function parameters
        if (!isValid(obj))
            return false;
        // Function logic and other codes inside try block
        return Object.keys(obj).length !== 0;
    }
    catch (error) {
        return false;
    }
}
exports.isNotEmpty = isNotEmpty;
/**
 * This function checks if two objects are equal.
 * @param obj1 The first object to compare.
 * @param obj2 The second object to compare.
 * @returns A boolean indicating whether the two objects are equal.
 */
function areEqual(obj1, obj2) {
    try {
        // Validate function parameters
        if (typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 === null)
            return false;
        if (typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 === null)
            return false;
        // Function logic and other codes inside try block
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    catch (error) {
        return false;
    }
}
exports.areEqual = areEqual;
/**
 * Function to create a deep clone of an object
 * @param obj - The object to clone
 * @returns A deep clone of the object
 */
function deepClone(obj) {
    try {
        return JSON.parse(JSON.stringify(obj));
    }
    catch (err) {
        return obj;
    }
}
exports.deepClone = deepClone;
/**
 * Function to merge two objects deeply
 * @param obj1 - The first object to merge
 * @param obj2 - The second object to merge
 * @returns A new object that is a deep merge of the two input objects
 */
function deepMerge(obj1, obj2) {
    try {
        return Object.assign(Object.assign({}, obj1), obj2);
    }
    catch (err) {
        return Object.assign({}, obj1);
    }
}
exports.deepMerge = deepMerge;
/**
 * Function to create a new object with some properties omitted
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to omit from the new object
 * @returns A new object with the specified keys omitted
 */
function omit(obj, keys) {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
    }
    catch (err) {
        return Object.assign({}, obj);
    }
}
exports.omit = omit;
/**
 * Function to create a new object with only some properties included
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to include in the new object
 * @returns A new object with only the specified keys included
 */
function pick(obj, keys) {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key)));
    }
    catch (err) {
        return {};
    }
}
exports.pick = pick;
/**
 * Function to map the keys of an object to new names
 * @param obj - The object to map
 * @param keyMap - An object containing the key mapping
 * @returns A new object with the keys mapped to new names
 */
function mapKeys(obj, keyMap) {
    try {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [keyMap[key] || key, val]));
    }
    catch (err) {
        return {};
    }
}
exports.mapKeys = mapKeys;
/**
 * Function to map the values of an object using a callback function
 * @param obj - The object to map
 * @param callback - The callback function to apply to each value
 * @returns A new object with the values mapped
 */
function mapValues(obj, callback) {
    try {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, callback(val, key)]));
    }
    catch (err) {
        return {};
    }
}
exports.mapValues = mapValues;
/**
 * Function to filter an object based on a predicate function
 * @param obj - The object to filter
 * @param predicate - The predicate function to apply to each value
 * @returns A new object containing the filtered key-value pairs
 */
function filterObject(obj, predicate) {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key, val]) => predicate(val, key)));
    }
    catch (err) {
        return {};
    }
}
exports.filterObject = filterObject;
/**
 * Function to check if a value is an object
 * @param value - The value to check
 * @returns Whether the value is an object or not
 */
function isValid(value) {
    try {
        if ((value === null) || Array.isArray(value))
            return false;
        return typeof value === 'object';
    }
    catch (err) {
        return false;
    }
}
exports.isValid = isValid;
/**
 * Function to get an array of all the own property values of an object
 * @param obj - The object to get values from
 * @returns An array of all the own property values of the object
 */
function getObjectValues(obj) {
    try {
        return Object.keys(obj).map(key => obj[key]);
    }
    catch (err) {
        return [];
    }
}
exports.getObjectValues = getObjectValues;
/**
 * Function to unflatten an object with dot-separated keys into a nested object with nested properties
 * @param obj - The object to unflatten
 * @returns A new object with nested properties representing the original object's dot-separated keys
 */
function unflattenObject(obj) {
    try {
        const result = {};
        for (const key in obj) {
            const keys = key.split(".");
            keys.reduce((acc, curKey, idx) => {
                if (!acc[curKey]) {
                    acc[curKey] = isNaN(Number(keys[idx + 1])) ? {} : [];
                }
                if (idx === keys.length - 1) {
                    acc[curKey] = obj[key];
                }
                return acc[curKey];
            }, result);
        }
        return result;
    }
    catch (err) {
        return {};
    }
}
exports.unflattenObject = unflattenObject;
/**
 * Gets the value of a nested property of an object given its path as an array of keys.
 * Returns `undefined` if the path doesn't exist.
 *
 * @param obj - The object to get the nested property from.
 * @param path - An array of keys representing the path to the nested property.
 * @returns The value of the nested property or `undefined` if it doesn't exist.
 */
function getNestedProperty(obj, path) {
    try {
        // Use reduce to iterate over the keys in the path, updating the accumulator (the current object) with each iteration.
        // If the current key doesn't exist in the current object, return undefined.
        // Otherwise, return the value of the current key in the current object.
        return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    }
    catch (error) {
        return undefined;
    }
}
exports.getNestedProperty = getNestedProperty;
/**
 * Sets the value of a nested property of an object given its path as an array of keys.
 * If the path doesn't exist, it creates the necessary objects along the way.
 *
 * @param obj - The object to set the nested property on.
 * @param path - An array of keys representing the path to the nested property.
 * @param value - The value to set the nested property to.
 * @returns The object with the updated nested property.
 */
function setNestedProperty(obj, path, value) {
    try {
        // Use reduce to iterate over the keys in the path, updating the accumulator (the current object) with each iteration.
        // If the current key doesn't exist in the current object, create it.
        // If the current key is the last one in the path, set its value to the given value.
        // Otherwise, return the value of the current key in the current object.
        path.reduce((acc, key, index) => {
            if (index === path.length - 1) {
                acc[key] = value;
            }
            else {
                acc[key] = acc[key] || {};
            }
            return acc[key];
        }, obj);
        return obj;
    }
    catch (error) {
        return obj;
    }
}
exports.setNestedProperty = setNestedProperty;
/**
 * Sorts the keys of an object in ascending or descending order.
 *
 * @param obj The object to sort.
 * @param order The sort order ("asc" or "desc"). Defaults to "asc".
 * @returns A new object with the same properties as `obj`, but with the keys sorted.
 */
function sortByKey(obj, order = "asc") {
    try {
        const sortedKeys = Object.keys(obj).sort();
        if (order === "desc") {
            sortedKeys.reverse();
        }
        const sortedObj = {};
        for (const key of sortedKeys) {
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    }
    catch (err) {
        return {};
    }
}
exports.sortByKey = sortByKey;
/**
 * This function converts a provided JSON string to an object.
 * @param jsonString The JSON string to convert to an object.
 * @returns An object representing the JSON string, or null if the string is not valid JSON.
 */
function toObject(jsonString) {
    try {
        // Validate function parameters
        if (typeof jsonString !== 'string')
            return null;
        // Function logic and other codes inside try block
        const obj = JSON.parse(jsonString);
        return obj;
    }
    catch (error) {
        return null;
    }
}
exports.toObject = toObject;
/**
 * This function converts a provided object to a JSON string.
 * @param obj The object to convert to a JSON string.
 * @returns A string representing the object in JSON format, or null if the object is undefined.
 */
function stringify(obj) {
    try {
        // Validate function parameters
        if (obj === undefined)
            return null;
        // Function logic and other codes inside try block
        const jsonString = JSON.stringify(obj);
        return jsonString;
    }
    catch (error) {
        return null;
    }
}
exports.stringify = stringify;
/**
* Applies a mapping function to each value in an object and returns a new object with the same keys.
*
* @param obj The object to map.
* @param fn The mapping function to apply to each value in the object.
* @returns A new object with the same properties as `obj`, but with the values transformed by `fn`.
*/
function mapObject(obj, fn) {
    try {
        const mappedObj = {};
        for (const [key, value] of Object.entries(obj)) {
            mappedObj[key] = fn(value, key);
        }
        return mappedObj;
    }
    catch (err) {
        return {};
    }
}
exports.mapObject = mapObject;
/**
 * This function checks if an object has all the specified keys.
 * @param obj The object to check.
 * @param keys An array of strings representing the keys to check for.
 * @returns A boolean indicating whether the object has all the specified keys.
 */
function hasAllKeys(obj, keys) {
    try {
        // Validate function parameters
        if (!isValid(obj))
            return false;
        if (!Array.isArray(keys))
            return false;
        if (keys.length === 0)
            return false;
        // Function logic and other codes inside try block
        for (const key of keys) {
            if (!obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.hasAllKeys = hasAllKeys;
/**
 * This function checks if a provided object has a given key.
 * @param obj The object to check.
 * @param key The key to check for.
 * @returns A boolean indicating whether the key exists in the object.
 */
function keyExist(obj, key) {
    try {
        // Validate function parameters
        if (!isValid(obj))
            return false;
        if (typeof key !== 'string' || key.trim().length === 0)
            return false;
        // Function logic and other codes inside try block
        return obj.hasOwnProperty(key);
    }
    catch (error) {
        return false;
    }
}
exports.keyExist = keyExist;
