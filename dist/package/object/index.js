"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapObject = exports.stringifyJSON = exports.parseJSON = exports.sortByKey = exports.setNestedProperty = exports.getNestedProperty = exports.unflattenObject = exports.flattenObject = exports.hasKey = exports.getObjectValues = exports.isObject = exports.filterObject = exports.mapValues = exports.mapKeys = exports.pick = exports.omit = exports.deepMerge = exports.deepClone = exports.isEqual = exports.isEmpty = void 0;
/**
 * Function to check if an object is empty
 * @param obj - The object to check
 * @returns Whether the object is empty or not
 */
function isEmpty(obj) {
    try {
        return Object.keys(obj).length === 0;
    }
    catch (err) {
        console.error(err);
        return false;
    }
}
exports.isEmpty = isEmpty;
/**
 * Function to check if two objects are equal
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns Whether the two objects are equal or not
 */
function isEqual(obj1, obj2) {
    try {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    catch (err) {
        console.error(err);
        return false;
    }
}
exports.isEqual = isEqual;
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
        console.error(err);
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
        return { ...obj1, ...obj2 };
    }
    catch (err) {
        console.error(err);
        return { ...obj1 };
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
        console.error(err);
        return { ...obj };
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
        console.error(err);
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
        console.error(err);
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
        console.error(err);
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
        console.error(err);
        return {};
    }
}
exports.filterObject = filterObject;
/**
 * Function to check if a value is an object
 * @param value - The value to check
 * @returns Whether the value is an object or not
 */
function isObject(value) {
    try {
        return typeof value === 'object' && value !== null && !Array.isArray(value);
    }
    catch (err) {
        console.error(err);
        return false;
    }
}
exports.isObject = isObject;
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
        console.error(err);
        return [];
    }
}
exports.getObjectValues = getObjectValues;
/**
 * Function to check if an object has a specified key
 * @param obj - The object to check
 * @param key - The key to check for
 * @returns True if the object has the specified key, false otherwise
 */
function hasKey(obj, key) {
    try {
        return key in obj;
    }
    catch (err) {
        console.error(err);
        return false;
    }
}
exports.hasKey = hasKey;
/**
 * Function to flatten an object with nested properties into a single-level object with dot-separated keys
 * @param obj - The object to flatten
 * @returns A new object with dot-separated keys representing the original object's nested properties
 */
function flattenObject(obj) {
    try {
        const result = {};
        function recurse(obj, currentKey) {
            for (const key in obj) {
                const value = obj[key];
                const newKey = currentKey ? `${currentKey}.${key}` : key;
                if (typeof value === "object" && value !== null) {
                    recurse(value, newKey);
                }
                else {
                    result[newKey] = value;
                }
            }
        }
        recurse(obj, "");
        return result;
    }
    catch (err) {
        console.error(err);
        return {};
    }
}
exports.flattenObject = flattenObject;
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
        console.error(err);
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
        console.error(`Error getting nested property: ${error}`);
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
        console.error(`Error setting nested property: ${error}`);
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
        console.error(err);
        return {};
    }
}
exports.sortByKey = sortByKey;
/**
* Parses a JSON string into a JavaScript object.
*
* @param jsonString The JSON string to parse.
* @returns The resulting JavaScript object.
*/
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonString);
    }
    catch (err) {
        console.error(err);
        return null;
    }
}
exports.parseJSON = parseJSON;
/**
* Converts a JavaScript object into a JSON string.
*
* @param obj The object to convert.
* @returns The resulting JSON string.
*/
function stringifyJSON(obj) {
    try {
        return JSON.stringify(obj);
    }
    catch (err) {
        console.error(err);
        return '';
    }
}
exports.stringifyJSON = stringifyJSON;
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
        console.error(err);
        return {};
    }
}
exports.mapObject = mapObject;
//# sourceMappingURL=index.js.map