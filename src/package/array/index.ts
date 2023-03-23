import { dataType } from "../../types"

/**
 * Check if a given value is an array
 * @param value The value to check
 * @returns true if the value is an array, false otherwise
 */
export const isValid = (value: any): boolean => Array.isArray(value)

/**
 * Check if a given array has elements
 * @param arr The array to check
 * @returns true if the array has elements, false otherwise
 */
export const hasElements = (arr: any[]): boolean => isValid(arr) ? arr.length > 0 : false

/**
 * Check if a given array is unique
 * @param arr The array to check
 * @returns true if the array is unique, false otherwise
 */
export const isUnique = (arr: any[]): boolean => hasElements(arr) ? new Set(arr).size === arr.length : false

/**
 * Check if a given array has duplicates
 * @param arr The array to check
 * @returns true if the array has duplicates, false otherwise
 */
export const hasDuplicates = (arr: any[]): boolean => hasElements(arr) ? arr.length !== new Set(arr).size : false

/**
 * Check if a given array has elements with the same provided data type
 * @param arr The array to check
 * @param type The data type to compare against
 * @returns true if the array has elements with the same data type, false otherwise
 */
export const hasSameDataType = <T>(arr: T[], type: dataType): boolean => hasElements(arr) && type ? arr.every(item => type === "array" ? isValid(item) : typeof item === type) : false

/**
 * Check if a given array has falsy values
 * @param arr The array to check
 * @returns true if the array has falsy values, false otherwise
 */
export const hasFalsyValues = <T>(arr: T[]): boolean => hasElements(arr) ? arr.some(item => !item) : false

/**
 * Check if a given element exists in an array
 * @param arr The array to check
 * @param elem The element to search for
 * @returns true if the element exists in the array, false otherwise
 */
export const elementExist = <T>(arr: T[], elem: T): boolean => hasElements(arr) ? arr.includes(elem) : false

/**
 * Get the index of a given element in an array
 * @param arr The array to search in
 * @param elem The element to search for
 * @returns The index of the element if it exists in the array, or -1 if it does not
 */
export const getElementIndex = <T>(arr: T[], elem: T): number => elementExist(arr, elem) ? arr.indexOf(elem) : -1

/**
 * Removes an element from the given array
 *
 * @param arr The array to remove the element from
 * @param elem The element to remove from the array
 * @returns The array with the element removed
 */
export const removeElement = (arr: any[], elem: any): any[] => {
    try {
        if (elementExist(arr, elem)) {
            const index = getElementIndex(arr, elem)
            if (index !== -1) {
                arr.splice(index, 1)
            }
        }
        return arr
    } catch (error) {
        return arr
    }
}


/**
 * Removes falsy elements from the given array
 * @param arr The array to remove falsy elements from
 * @returns A new array with the falsy elements removed
 */
export const removeFalsyElements = (arr: any[]): any[] => hasElements(arr) ? arr.filter(Boolean) : []

/**
 * This function returns all elements in an array that have the same provided data type.
 * @param arr The array to search for elements with the same data type.
 * @param dataType The data type to search for.
 * @returns An array containing all elements in arr that have the same data type as dataType.
 */
export const elementsWithSameType = <T>(arr: T[], dataType: dataType): T[] => hasElements(arr) && dataType ? arr.filter((element: any) => dataType === "array" ? isValid(element) : dataType === "null" ? element === null : ((typeof element === dataType) && (element !== null))) : []

/**
 * Returns an object with the count of all elements in the given array
 *
 * @param arr - The input array to count the elements in
 * @returns An object with keys for each element in the array and their respective count
 */
export function countElements(arr: any[]): Record<string, number> {
    const counts: Record<string, number> = {}
    try {
        if (hasElements(arr)) {
            arr.forEach((elem) => {
                if (counts[elem]) {
                    counts[elem]++
                } else {
                    counts[elem] = 1
                }
            })
        }

    } catch (error) {
    }

    return counts
}

/**
 * Returns the number of times a provided element occurs in a given array.
 * @param arr The array to search.
 * @param elem The element to count occurrences of.
 * @returns The number of occurrences of the element in the array.
 */
export const countOccurrences = (arr: any[], elem: any): number => {
    try {
        if (elementExist(arr, elem)) {
            return arr.reduce((acc, curr) => {
                if (curr === elem) {
                    return acc + 1
                } else {
                    return acc
                }
            }, 0)
        }
        return 0
    } catch (error) {
        return 0
    }
}

/**
 * Computes the math operation of elements in a given array
 * @param nums An array of numbers
 * @param operator The math operator to use (+, -, /, or *)
 * @returns The result of the math operation
 */
export const computeMathOperation = (nums: number[], operator: '+' | '-' | '/' | '*'): number => {
    try {
        if (hasSameDataType(nums, "number") && (typeof operator === 'string' && ['+', '-', '/', '*'].includes(operator)))
            return nums.reduce((acc, num) => {
                switch (operator) {
                    case '+':
                        return acc + num
                    case '-':
                        return acc - num
                    case '*':
                        return acc * num
                    case '/':
                        return acc / num
                }
            })
        return 0
    } catch (error) {
        return 0
    }
}

/**
 * Sorts an array of objects, strings, or numbers by a given key and order.
 * @param arr The array to sort.
 * @param key The object key to sort by.
 * @param order The order to sort in. Must be either "asc" or "desc".
 * @returns The sorted array.
 */
export const sort = (array: any[], order: "asc" | "desc", key?: string): any[] => {
    try {

        if (hasElements(array) && (typeof order === "string" && ["asc", "desc"].includes(order))) {
            if (order === "asc")
                return array.sort((a, b) => {

                    const conditionOne = key ? a[key] < b[key] : a < b
                    const conditionTwo = key ? a[key] > b[key] : a > b

                    if (conditionOne) {
                        return -1
                    } else if (conditionTwo) {
                        return 1
                    } else {
                        return 0
                    }
                })
            return array.sort((a, b) => {

                const conditionOne = key ? a[key] > b[key] : a > b
                const conditionTwo = key ? a[key] < b[key] : a < b

                if (conditionOne) {
                    return -1
                } else if (conditionTwo) {
                    return 1
                } else {
                    return 0
                }
            })
        }

        return []

    } catch (error) {
        return []
    }
}

/**
 * This function copies two arrays and returns a new array that contains all the elements of the two arrays.
 * @param {T[]} arr1 - the first array to be copied.
 * @param {T[]} arr2 - the second array to be copied.
 * @returns {T[]} - a new array that contains all the elements of the two arrays.
 */
export const copy = <T>(arr1: T[], arr2: T[]): T[] => {
    try {
        // Check if the provided arrays are not undefined, null, or empty.
        if (hasElements(arr1) && hasElements(arr2)) {
            // Copy the two arrays into a new array.
            const copiedArray: T[] = [...arr2, ...arr1]
            return copiedArray
        }
        return []
    } catch (error) {
        return []
    }
}

/**
 * Adds a new element to the given array.
 *
 * @param arr The array to which the element should be added.
 * @param elem The element to add to the array.
 * @returns The updated array.
 */
export const addElement = (arr: any[], elem: any): any[] => {
    try {
        if (isValid(arr))
            arr.push(elem)
        return arr
    } catch (error) {
        return arr
    }
}


/**
 * This function takes an array and returns its length.
 *
 * @param arr The array whose length is to be calculated.
 * @returns The length of the array.
 */
export const getLength = (arr: any[]): number => {
    try {
        if (isValid(arr))
            return arr.length
        return 0
    } catch (error) {
        return 0
    }
}

/**
* This function takes an array and returns its last element.
*
* @param arr: The array to retrieve the last element from.
* @return The last element of the array, or undefined if the array is empty.
*/
export const getLastElement = (arr: any[]): any[] | undefined => {
    try {
        if (hasElements(arr))
            return arr[arr.length - 1]
        return undefined
    } catch (error) {
        return undefined
    }
}

/**
* This function takes an array and returns its first element.
*
* @param arr: The array to retrieve the first element from.
* @return The first element of the array, or undefined if the array is empty.
*/
export const getFirstElement = (arr: any[]): any[] | undefined => {
    try {
        if (hasElements(arr))
            return arr[0]
        return undefined
    } catch (error) {
        return undefined
    }
}

/**
* This function takes an array and returns a middle element.
* If the array has an even length, the middle element to the right of the center is returned.
*
* @param arr: The array to retrieve the middle element from.
* @return A middle element of the array, or undefined if the array is empty or has less than 3 elements.
*/
export const getMiddleElement = (arr: any[]): any => {
    try {

        if (hasElements(arr)) {
            const length: number = getLength(arr)
            if (length > 3) {
                const middleIndex = Math.floor(length / 2) - 1
                return length % 2 === 0 ? arr[middleIndex] : arr[middleIndex + 1]
            }
        }
        return undefined

    } catch (error) {
        return undefined
    }
}

/**
 * Returns an element in a given array by its index.
 *
 * @param arr The array to retrieve the element from.
 * @param index The index of the element to retrieve.
 * @returns The element at the given index, or undefined if the index is out of bounds.
 */
export const getElementByIndex = (arr: any[], index: number): any | undefined => {
    try {
        if (hasElements(arr) && (typeof index === "number" && index >= 0))
            return arr[index]
        return undefined
    } catch (error) {
        return undefined
    }
}

/**
 * Removes duplicate elements from an array.
 *
 * @param arr The array to remove duplicates from.
 * @returns A new array with the duplicates removed.
 */
export const removeDuplicates = (arr: any[]): any[] => {
    try {

        if (!Array.isArray(arr))
            return arr

        const uniqueArr = [...new Set(arr)];
        return uniqueArr;
    } catch (err) {
        return arr;
    }
};

/**
 * Check if an array is empty.
 * @param arr The array to check.
 * @returns True if the array is empty, false otherwise.
 */
export const isEmpty = (arr: any[]): boolean => {
    try {

        // Validate function parameters
        if (!Array.isArray(arr))
            return true

        // Code logic should be written inside the try block
        return arr.length === 0;

    } catch (error) {
        // Handle errors in the catch block
        return true;
    }
}

