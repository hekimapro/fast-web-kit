/**
 * This function checks if an object is empty.
 * @param obj The object to check.
 * @returns A boolean indicating whether the object is empty.
 */
export function isEmpty(obj: any): boolean {
    try {

        if (isValid(obj))
            return Object.keys(obj).length === 0

        // Function logic and other codes inside try block
        return true

    } catch (error) {
        return true;
    }
}

/**
* This function checks if an object is not empty.
* @param obj The object to check.
* @returns A boolean indicating whether the object is not empty.
*/
export function isNotEmpty(obj: any): boolean {
    try {
        // Validate function parameters
        if (!isValid(obj))
            return false

        // Function logic and other codes inside try block
        return Object.keys(obj).length !== 0;
    } catch (error) {
        return false;
    }
}

/**
 * This function checks if two objects are equal.
 * @param obj1 The first object to compare.
 * @param obj2 The second object to compare.
 * @returns A boolean indicating whether the two objects are equal.
 */
export function areEqual(obj1: Record<string, any>, obj2: any): boolean {
    try {
        // Validate function parameters
        if (typeof obj1 !== 'object' || Array.isArray(obj1) || obj1 === null)
            return false
        if (typeof obj2 !== 'object' || Array.isArray(obj2) || obj2 === null)
            return false

        // Function logic and other codes inside try block
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    } catch (error) {
        return false;
    }
}


/**
 * Function to create a deep clone of an object
 * @param obj - The object to clone
 * @returns A deep clone of the object
 */
export function deepClone<T extends object>(obj: T): T {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (err) {
        return obj;
    }
}

/**
 * Function to merge two objects deeply
 * @param obj1 - The first object to merge
 * @param obj2 - The second object to merge
 * @returns A new object that is a deep merge of the two input objects
 */
export function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    try {
        return { ...obj1, ...obj2 };
    } catch (err) {
        return { ...obj1 } as T & U;
    }
}

/**
 * Function to create a new object with some properties omitted
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to omit from the new object
 * @returns A new object with the specified keys omitted
 */
export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key as K))) as Omit<T, K>;
    } catch (err) {
        return { ...obj } as Omit<T, K>;
    }
}

/**
 * Function to create a new object with only some properties included
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to include in the new object
 * @returns A new object with only the specified keys included
 */
export function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key]) => keys.includes(key as K))) as Pick<T, K>;
    } catch (err) {
        return {} as Pick<T, K>;
    }
}

/**
 * Function to map the keys of an object to new names
 * @param obj - The object to map
 * @param keyMap - An object containing the key mapping
 * @returns A new object with the keys mapped to new names
 */
export function mapKeys<T extends object, U extends keyof T>(obj: T, keyMap: Record<U, string>): { [key: string]: any } {
    try {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [keyMap[key as U] || key, val]));
    } catch (err) {
        return {};
    }
}

/**
 * Function to map the values of an object using a callback function
 * @param obj - The object to map
 * @param callback - The callback function to apply to each value
 * @returns A new object with the values mapped
 */
export function mapValues<T extends object, U>(obj: T, callback: (value: T[keyof T], key: keyof T) => U): { [key in keyof T]: U } {
    try {
        return Object.fromEntries(Object.entries(obj).map(([key, val]) => [key, callback(val, key as keyof T)])) as { [key in keyof T]: U };
    } catch (err) {
        return {} as { [key in keyof T]: U };
    }
}

/**
 * Function to filter an object based on a predicate function
 * @param obj - The object to filter
 * @param predicate - The predicate function to apply to each value
 * @returns A new object containing the filtered key-value pairs
 */
export function filterObject<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T> {
    try {
        return Object.fromEntries(Object.entries(obj).filter(([key, val]) => predicate(val, key as keyof T))) as Partial<T>;
    } catch (err) {
        return {} as Partial<T>;
    }
}

/**
 * Function to check if a value is an object
 * @param value - The value to check
 * @returns Whether the value is an object or not
 */
export function isValid(value: any): boolean {
    try {

        if ((value === null) || Array.isArray(value))
            return false
        return typeof value === 'object'

    } catch (err) {
        return false;
    }
}

/**
 * Function to get an array of all the own property values of an object
 * @param obj - The object to get values from
 * @returns An array of all the own property values of the object
 */
export function getObjectValues(obj: any): any[] {
    try {
        return Object.keys(obj).map(key => obj[key]);
    } catch (err) {
        return [];
    }
}

/**
 * Function to unflatten an object with dot-separated keys into a nested object with nested properties
 * @param obj - The object to unflatten
 * @returns A new object with nested properties representing the original object's dot-separated keys
 */
export function unflattenObject(obj: any): any {
    try {
        const result: any = {};
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
    } catch (err) {
        return {};
    }
}

/**
 * Gets the value of a nested property of an object given its path as an array of keys.
 * Returns `undefined` if the path doesn't exist.
 *
 * @param obj - The object to get the nested property from.
 * @param path - An array of keys representing the path to the nested property.
 * @returns The value of the nested property or `undefined` if it doesn't exist.
 */
export function getNestedProperty(obj: any, path: string[]): any | undefined {
    try {
        // Use reduce to iterate over the keys in the path, updating the accumulator (the current object) with each iteration.
        // If the current key doesn't exist in the current object, return undefined.
        // Otherwise, return the value of the current key in the current object.
        return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
    } catch (error) {
        return undefined;
    }
}

/**
 * Sets the value of a nested property of an object given its path as an array of keys.
 * If the path doesn't exist, it creates the necessary objects along the way.
 *
 * @param obj - The object to set the nested property on.
 * @param path - An array of keys representing the path to the nested property.
 * @param value - The value to set the nested property to.
 * @returns The object with the updated nested property.
 */
export function setNestedProperty(obj: any, path: string[], value: any): any {
    try {
        // Use reduce to iterate over the keys in the path, updating the accumulator (the current object) with each iteration.
        // If the current key doesn't exist in the current object, create it.
        // If the current key is the last one in the path, set its value to the given value.
        // Otherwise, return the value of the current key in the current object.
        path.reduce((acc, key, index) => {
            if (index === path.length - 1) {
                acc[key] = value;
            } else {
                acc[key] = acc[key] || {};
            }
            return acc[key];
        }, obj);
        return obj;
    } catch (error) {
        return obj;
    }
}

/**
 * Sorts the keys of an object in ascending or descending order.
 *
 * @param obj The object to sort.
 * @param order The sort order ("asc" or "desc"). Defaults to "asc".
 * @returns A new object with the same properties as `obj`, but with the keys sorted.
 */
export function sortByKey<T>(obj: Record<string, T>, order: "asc" | "desc" = "asc"): Record<string, T> {
    try {
        const sortedKeys = Object.keys(obj).sort();
        if (order === "desc") {
            sortedKeys.reverse();
        }
        const sortedObj: Record<string, T> = {};
        for (const key of sortedKeys) {
            sortedObj[key] = obj[key];
        }
        return sortedObj;
    } catch (err) {
        return {}
    }
}


/**
 * This function converts a provided JSON string to an object.
 * @param jsonString The JSON string to convert to an object.
 * @returns An object representing the JSON string, or null if the string is not valid JSON.
 */
export function toObject(jsonString: string): object | any[] | null {
    try {
        // Validate function parameters
        if (typeof jsonString !== 'string')
            return null

        // Function logic and other codes inside try block
        const obj = JSON.parse(jsonString);
        return obj
    } catch (error) {
        return null;
    }
}


/**
 * This function converts a provided object to a JSON string.
 * @param obj The object to convert to a JSON string.
 * @returns A string representing the object in JSON format, or null if the object is undefined.
 */
export function stringify(obj: any): string | null {
    try {
        // Validate function parameters
        if (obj === undefined)
            return null


        // Function logic and other codes inside try block
        const jsonString = JSON.stringify(obj);
        return jsonString;
    } catch (error) {
        return null;
    }
}


/**
* Applies a mapping function to each value in an object and returns a new object with the same keys.
*
* @param obj The object to map.
* @param fn The mapping function to apply to each value in the object.
* @returns A new object with the same properties as `obj`, but with the values transformed by `fn`.
*/
export function mapObject<T, U>(obj: Record<string, T>, fn: (value: T, key: string) => U): Record<string, U> {
    try {
        const mappedObj: Record<string, U> = {};
        for (const [key, value] of Object.entries(obj)) {
            mappedObj[key] = fn(value, key);
        }
        return mappedObj;
    } catch (err) {
        return {}
    }
}

/**
 * This function checks if an object has all the specified keys.
 * @param obj The object to check.
 * @param keys An array of strings representing the keys to check for.
 * @returns A boolean indicating whether the object has all the specified keys.
 */
export function hasAllKeys(obj: Record<string, any>, keys: string[]): boolean {
    try {
        // Validate function parameters
        if (!isValid(obj))
            return false

        if (!Array.isArray(keys))
            return false

        if (keys.length === 0)
            return false

        // Function logic and other codes inside try block
        for (const key of keys) {
            if (!obj.hasOwnProperty(key)) {
                return false;
            }
        }

        return true;
    } catch (error) {
        return false;
    }
}

/**
 * This function checks if a provided object has a given key.
 * @param obj The object to check.
 * @param key The key to check for.
 * @returns A boolean indicating whether the key exists in the object.
 */
export function keyExist(obj: Record<string, any>, key: string): boolean {
    try {

        // Validate function parameters
        if (!isValid(obj))
            return false

        if (typeof key !== 'string' || key.trim().length === 0)
            return false

        // Function logic and other codes inside try block
        return obj.hasOwnProperty(key);
    } catch (error) {
        return false;
    }
}