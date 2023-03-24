/**
 * Check if a given value is an array
 * @param value The value to check
 * @returns true if the value is an array, false otherwise
 */
export declare const isValid: (value: any) => boolean;
/**
 * Check if a given array has elements
 * @param arr The array to check
 * @returns true if the array has elements, false otherwise
 */
export declare const hasElements: (arr: any[]) => boolean;
/**
 * Check if a given array is unique
 * @param arr The array to check
 * @returns true if the array is unique, false otherwise
 */
export declare const isUnique: (arr: any[]) => boolean;
/**
 * Check if a given array has duplicates
 * @param arr The array to check
 * @returns true if the array has duplicates, false otherwise
 */
export declare const hasDuplicates: (arr: any[]) => boolean;
/**
 * Check if a given array has elements with the same provided data type
 * @param arr The array to check
 * @param type The data type to compare against
 * @returns true if the array has elements with the same data type, false otherwise
 */
export declare const hasSameDataType: <T>(arr: T[], type: "string" | "object" | "number" | "null" | "undefined" | "array" | "boolean" | "bigint" | "function" | "symbol") => boolean;
/**
 * Check if a given array has falsy values
 * @param arr The array to check
 * @returns true if the array has falsy values, false otherwise
 */
export declare const hasFalsyValues: <T>(arr: T[]) => boolean;
/**
 * Check if a given element exists in an array
 * @param arr The array to check
 * @param elem The element to search for
 * @returns true if the element exists in the array, false otherwise
 */
export declare const elementExist: <T>(arr: T[], elem: T) => boolean;
/**
 * Get the index of a given element in an array
 * @param arr The array to search in
 * @param elem The element to search for
 * @returns The index of the element if it exists in the array, or -1 if it does not
 */
export declare const getElementIndex: <T>(arr: T[], elem: T) => number;
/**
 * Removes an element from the given array
 *
 * @param arr The array to remove the element from
 * @param elem The element to remove from the array
 * @returns The array with the element removed
 */
export declare const removeElement: (arr: any[], elem: any) => any[];
/**
 * Removes falsy elements from the given array
 * @param arr The array to remove falsy elements from
 * @returns A new array with the falsy elements removed
 */
export declare const removeFalsyElements: (arr: any[]) => any[];
/**
 * This function returns all elements in an array that have the same provided data type.
 * @param arr The array to search for elements with the same data type.
 * @param dataType The data type to search for.
 * @returns An array containing all elements in arr that have the same data type as dataType.
 */
export declare const elementsWithSameType: <T>(arr: T[], dataType: "string" | "object" | "number" | "null" | "undefined" | "array" | "boolean" | "bigint" | "function" | "symbol") => T[];
/**
 * Returns an object with the count of all elements in the given array
 *
 * @param arr - The input array to count the elements in
 * @returns An object with keys for each element in the array and their respective count
 */
export declare function countElements(arr: any[]): Record<string, number>;
/**
 * Returns the number of times a provided element occurs in a given array.
 * @param arr The array to search.
 * @param elem The element to count occurrences of.
 * @returns The number of occurrences of the element in the array.
 */
export declare const countOccurrences: (arr: any[], elem: any) => number;
/**
 * Computes the math operation of elements in a given array
 * @param nums An array of numbers
 * @param operator The math operator to use (+, -, /, or *)
 * @returns The result of the math operation
 */
export declare const computeMathOperation: (nums: number[], operator: '+' | '-' | '/' | '*') => number;
/**
 * Sorts an array of objects, strings, or numbers by a given key and order.
 * @param arr The array to sort.
 * @param key The object key to sort by.
 * @param order The order to sort in. Must be either "asc" or "desc".
 * @returns The sorted array.
 */
export declare const sort: (array: any[], order: "asc" | "desc", key?: string) => any[];
/**
 * This function copies two arrays and returns a new array that contains all the elements of the two arrays.
 * @param {T[]} arr1 - the first array to be copied.
 * @param {T[]} arr2 - the second array to be copied.
 * @returns {T[]} - a new array that contains all the elements of the two arrays.
 */
export declare const copy: <T>(arr1: T[], arr2: T[]) => T[];
/**
 * Adds a new element to the given array.
 *
 * @param arr The array to which the element should be added.
 * @param elem The element to add to the array.
 * @returns The updated array.
 */
export declare const addElement: (arr: any[], elem: any) => any[];
/**
 * This function takes an array and returns its length.
 *
 * @param arr The array whose length is to be calculated.
 * @returns The length of the array.
 */
export declare const getLength: (arr: any[]) => number;
/**
* This function takes an array and returns its last element.
*
* @param arr: The array to retrieve the last element from.
* @return The last element of the array, or undefined if the array is empty.
*/
export declare const getLastElement: (arr: any[]) => any[] | undefined;
/**
* This function takes an array and returns its first element.
*
* @param arr: The array to retrieve the first element from.
* @return The first element of the array, or undefined if the array is empty.
*/
export declare const getFirstElement: (arr: any[]) => any[] | undefined;
/**
* This function takes an array and returns a middle element.
* If the array has an even length, the middle element to the right of the center is returned.
*
* @param arr: The array to retrieve the middle element from.
* @return A middle element of the array, or undefined if the array is empty or has less than 3 elements.
*/
export declare const getMiddleElement: (arr: any[]) => any;
/**
 * Returns an element in a given array by its index.
 *
 * @param arr The array to retrieve the element from.
 * @param index The index of the element to retrieve.
 * @returns The element at the given index, or undefined if the index is out of bounds.
 */
export declare const getElementByIndex: (arr: any[], index: number) => any | undefined;
/**
 * Removes duplicate elements from an array.
 *
 * @param arr The array to remove duplicates from.
 * @returns A new array with the duplicates removed.
 */
export declare const removeDuplicates: (arr: any[]) => any[];
/**
 * Check if an array is empty.
 * @param arr The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export declare const isEmpty: (arr: any[]) => boolean;
