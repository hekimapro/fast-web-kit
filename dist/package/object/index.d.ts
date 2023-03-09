/**
 * Function to check if an object is empty
 * @param obj - The object to check
 * @returns Whether the object is empty or not
 */
export declare function isEmpty(obj: object): boolean;
/**
 * Function to check if two objects are equal
 * @param obj1 - The first object to compare
 * @param obj2 - The second object to compare
 * @returns Whether the two objects are equal or not
 */
export declare function isEqual(obj1: object, obj2: object): boolean;
/**
 * Function to create a deep clone of an object
 * @param obj - The object to clone
 * @returns A deep clone of the object
 */
export declare function deepClone<T extends object>(obj: T): T;
/**
 * Function to merge two objects deeply
 * @param obj1 - The first object to merge
 * @param obj2 - The second object to merge
 * @returns A new object that is a deep merge of the two input objects
 */
export declare function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): T & U;
/**
 * Function to create a new object with some properties omitted
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to omit from the new object
 * @returns A new object with the specified keys omitted
 */
export declare function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
/**
 * Function to create a new object with only some properties included
 * @param obj - The object to create a new object from
 * @param keys - An array of keys to include in the new object
 * @returns A new object with only the specified keys included
 */
export declare function pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>;
/**
 * Function to map the keys of an object to new names
 * @param obj - The object to map
 * @param keyMap - An object containing the key mapping
 * @returns A new object with the keys mapped to new names
 */
export declare function mapKeys<T extends object, U extends keyof T>(obj: T, keyMap: Record<U, string>): {
    [key: string]: any;
};
/**
 * Function to map the values of an object using a callback function
 * @param obj - The object to map
 * @param callback - The callback function to apply to each value
 * @returns A new object with the values mapped
 */
export declare function mapValues<T extends object, U>(obj: T, callback: (value: T[keyof T], key: keyof T) => U): {
    [key in keyof T]: U;
};
/**
 * Function to filter an object based on a predicate function
 * @param obj - The object to filter
 * @param predicate - The predicate function to apply to each value
 * @returns A new object containing the filtered key-value pairs
 */
export declare function filterObject<T extends object>(obj: T, predicate: (value: T[keyof T], key: keyof T) => boolean): Partial<T>;
/**
 * Function to check if a value is an object
 * @param value - The value to check
 * @returns Whether the value is an object or not
 */
export declare function isObject(value: any): boolean;
/**
 * Function to get an array of all the own property values of an object
 * @param obj - The object to get values from
 * @returns An array of all the own property values of the object
 */
export declare function getObjectValues(obj: any): any[];
/**
 * Function to check if an object has a specified key
 * @param obj - The object to check
 * @param key - The key to check for
 * @returns True if the object has the specified key, false otherwise
 */
export declare function hasKey(obj: any, key: string): boolean;
/**
 * Function to flatten an object with nested properties into a single-level object with dot-separated keys
 * @param obj - The object to flatten
 * @returns A new object with dot-separated keys representing the original object's nested properties
 */
export declare function flattenObject(obj: any): any;
/**
 * Function to unflatten an object with dot-separated keys into a nested object with nested properties
 * @param obj - The object to unflatten
 * @returns A new object with nested properties representing the original object's dot-separated keys
 */
export declare function unflattenObject(obj: any): any;
/**
 * Gets the value of a nested property of an object given its path as an array of keys.
 * Returns `undefined` if the path doesn't exist.
 *
 * @param obj - The object to get the nested property from.
 * @param path - An array of keys representing the path to the nested property.
 * @returns The value of the nested property or `undefined` if it doesn't exist.
 */
export declare function getNestedProperty(obj: any, path: string[]): any | undefined;
/**
 * Sets the value of a nested property of an object given its path as an array of keys.
 * If the path doesn't exist, it creates the necessary objects along the way.
 *
 * @param obj - The object to set the nested property on.
 * @param path - An array of keys representing the path to the nested property.
 * @param value - The value to set the nested property to.
 * @returns The object with the updated nested property.
 */
export declare function setNestedProperty(obj: any, path: string[], value: any): any;
/**
 * Sorts the keys of an object in ascending or descending order.
 *
 * @param obj The object to sort.
 * @param order The sort order ("asc" or "desc"). Defaults to "asc".
 * @returns A new object with the same properties as `obj`, but with the keys sorted.
 */
export declare function sortByKey<T>(obj: Record<string, T>, order?: "asc" | "desc"): Record<string, T>;
/**
* Parses a JSON string into a JavaScript object.
*
* @param jsonString The JSON string to parse.
* @returns The resulting JavaScript object.
*/
export declare function parseJSON<T>(jsonString: string): T;
/**
* Converts a JavaScript object into a JSON string.
*
* @param obj The object to convert.
* @returns The resulting JSON string.
*/
export declare function stringifyJSON(obj: any): string;
/**
* Applies a mapping function to each value in an object and returns a new object with the same keys.
*
* @param obj The object to map.
* @param fn The mapping function to apply to each value in the object.
* @returns A new object with the same properties as `obj`, but with the values transformed by `fn`.
*/
export declare function mapObject<T, U>(obj: Record<string, T>, fn: (value: T, key: string) => U): Record<string, U>;
