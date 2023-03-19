"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.getElementByIndex = exports.getMiddleElement = exports.getFirstElement = exports.getLastElement = exports.getLength = exports.addElement = exports.copy = exports.sort = exports.computeMathOperation = exports.countOccurrences = exports.countElements = exports.elementsWithSameType = exports.removeFalsyElements = exports.removeElement = exports.getElementIndex = exports.elementExist = exports.hasFalsyValues = exports.hasSameDataType = exports.hasDuplicates = exports.isUnique = exports.hasElements = exports.isValid = void 0;
/**
 * Check if a given value is an array
 * @param value The value to check
 * @returns true if the value is an array, false otherwise
 */
var isValid = function (value) { return Array.isArray(value); };
exports.isValid = isValid;
/**
 * Check if a given array has elements
 * @param arr The array to check
 * @returns true if the array has elements, false otherwise
 */
var hasElements = function (arr) { return (0, exports.isValid)(arr) ? arr.length > 0 : false; };
exports.hasElements = hasElements;
/**
 * Check if a given array is unique
 * @param arr The array to check
 * @returns true if the array is unique, false otherwise
 */
var isUnique = function (arr) { return (0, exports.hasElements)(arr) ? new Set(arr).size === arr.length : false; };
exports.isUnique = isUnique;
/**
 * Check if a given array has duplicates
 * @param arr The array to check
 * @returns true if the array has duplicates, false otherwise
 */
var hasDuplicates = function (arr) { return (0, exports.hasElements)(arr) ? arr.length !== new Set(arr).size : false; };
exports.hasDuplicates = hasDuplicates;
/**
 * Check if a given array has elements with the same provided data type
 * @param arr The array to check
 * @param type The data type to compare against
 * @returns true if the array has elements with the same data type, false otherwise
 */
var hasSameDataType = function (arr, type) { return (0, exports.hasElements)(arr) && type ? arr.every(function (item) { return type === "array" ? (0, exports.isValid)(item) : typeof item === type; }) : false; };
exports.hasSameDataType = hasSameDataType;
/**
 * Check if a given array has falsy values
 * @param arr The array to check
 * @returns true if the array has falsy values, false otherwise
 */
var hasFalsyValues = function (arr) { return (0, exports.hasElements)(arr) ? arr.some(function (item) { return !item; }) : false; };
exports.hasFalsyValues = hasFalsyValues;
/**
 * Check if a given element exists in an array
 * @param arr The array to check
 * @param elem The element to search for
 * @returns true if the element exists in the array, false otherwise
 */
var elementExist = function (arr, elem) { return (0, exports.hasElements)(arr) ? arr.includes(elem) : false; };
exports.elementExist = elementExist;
/**
 * Get the index of a given element in an array
 * @param arr The array to search in
 * @param elem The element to search for
 * @returns The index of the element if it exists in the array, or -1 if it does not
 */
var getElementIndex = function (arr, elem) { return (0, exports.elementExist)(arr, elem) ? arr.indexOf(elem) : -1; };
exports.getElementIndex = getElementIndex;
/**
 * Removes an element from the given array
 *
 * @param arr The array to remove the element from
 * @param elem The element to remove from the array
 * @returns The array with the element removed
 */
var removeElement = function (arr, elem) {
    try {
        if ((0, exports.elementExist)(arr, elem)) {
            var index = (0, exports.getElementIndex)(arr, elem);
            if (index !== -1) {
                arr.splice(index, 1);
            }
        }
        return arr;
    }
    catch (error) {
        console.error(error.message);
        return arr;
    }
};
exports.removeElement = removeElement;
/**
 * Removes falsy elements from the given array
 * @param arr The array to remove falsy elements from
 * @returns A new array with the falsy elements removed
 */
var removeFalsyElements = function (arr) { return (0, exports.hasElements)(arr) ? arr.filter(Boolean) : []; };
exports.removeFalsyElements = removeFalsyElements;
/**
 * This function returns all elements in an array that have the same provided data type.
 * @param arr The array to search for elements with the same data type.
 * @param dataType The data type to search for.
 * @returns An array containing all elements in arr that have the same data type as dataType.
 */
var elementsWithSameType = function (arr, dataType) { return (0, exports.hasElements)(arr) && dataType ? arr.filter(function (element) { return dataType === "array" ? (0, exports.isValid)(element) : dataType === "null" ? element === null : ((typeof element === dataType) && (element !== null)); }) : []; };
exports.elementsWithSameType = elementsWithSameType;
/**
 * Returns an object with the count of all elements in the given array
 *
 * @param arr - The input array to count the elements in
 * @returns An object with keys for each element in the array and their respective count
 */
function countElements(arr) {
    var counts = {};
    try {
        if ((0, exports.hasElements)(arr)) {
            arr.forEach(function (elem) {
                if (counts[elem]) {
                    counts[elem]++;
                }
                else {
                    counts[elem] = 1;
                }
            });
        }
    }
    catch (error) {
        console.error(error);
    }
    return counts;
}
exports.countElements = countElements;
/**
 * Returns the number of times a provided element occurs in a given array.
 * @param arr The array to search.
 * @param elem The element to count occurrences of.
 * @returns The number of occurrences of the element in the array.
 */
var countOccurrences = function (arr, elem) {
    try {
        if ((0, exports.elementExist)(arr, elem)) {
            return arr.reduce(function (acc, curr) {
                if (curr === elem) {
                    return acc + 1;
                }
                else {
                    return acc;
                }
            }, 0);
        }
        return 0;
    }
    catch (error) {
        console.error(error.message);
        return 0;
    }
};
exports.countOccurrences = countOccurrences;
/**
 * Computes the math operation of elements in a given array
 * @param nums An array of numbers
 * @param operator The math operator to use (+, -, /, or *)
 * @returns The result of the math operation
 */
var computeMathOperation = function (nums, operator) {
    try {
        if ((0, exports.hasSameDataType)(nums, "number") && (typeof operator === 'string' && ['+', '-', '/', '*'].includes(operator)))
            return nums.reduce(function (acc, num) {
                switch (operator) {
                    case '+':
                        return acc + num;
                    case '-':
                        return acc - num;
                    case '*':
                        return acc * num;
                    case '/':
                        return acc / num;
                }
            });
        return 0;
    }
    catch (error) {
        console.log('An error occurred:', error.message);
        return 0;
    }
};
exports.computeMathOperation = computeMathOperation;
/**
 * Sorts an array of objects, strings, or numbers by a given key and order.
 * @param arr The array to sort.
 * @param key The object key to sort by.
 * @param order The order to sort in. Must be either "asc" or "desc".
 * @returns The sorted array.
 */
var sort = function (array, order, key) {
    try {
        if ((0, exports.hasElements)(array) && (typeof order === "string" && ["asc", "desc"].includes(order))) {
            if (order === "asc")
                return array.sort(function (a, b) {
                    var conditionOne = key ? a[key] < b[key] : a < b;
                    var conditionTwo = key ? a[key] > b[key] : a > b;
                    if (conditionOne) {
                        return -1;
                    }
                    else if (conditionTwo) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            return array.sort(function (a, b) {
                var conditionOne = key ? a[key] > b[key] : a > b;
                var conditionTwo = key ? a[key] < b[key] : a < b;
                if (conditionOne) {
                    return -1;
                }
                else if (conditionTwo) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return [];
    }
    catch (error) {
        return [];
    }
};
exports.sort = sort;
/**
 * This function copies two arrays and returns a new array that contains all the elements of the two arrays.
 * @param {T[]} arr1 - the first array to be copied.
 * @param {T[]} arr2 - the second array to be copied.
 * @returns {T[]} - a new array that contains all the elements of the two arrays.
 */
var copy = function (arr1, arr2) {
    try {
        // Check if the provided arrays are not undefined, null, or empty.
        if ((0, exports.hasElements)(arr1) && (0, exports.hasElements)(arr2)) {
            // Copy the two arrays into a new array.
            var copiedArray = __spreadArray(__spreadArray([], arr2, true), arr1, true);
            return copiedArray;
        }
        return [];
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
};
exports.copy = copy;
/**
 * Adds a new element to the given array.
 *
 * @param arr The array to which the element should be added.
 * @param elem The element to add to the array.
 * @returns The updated array.
 */
var addElement = function (arr, elem) {
    try {
        if ((0, exports.isValid)(arr))
            arr.push(elem);
        return arr;
    }
    catch (error) {
        console.error(error);
        return arr;
    }
};
exports.addElement = addElement;
/**
 * This function takes an array and returns its length.
 *
 * @param arr The array whose length is to be calculated.
 * @returns The length of the array.
 */
var getLength = function (arr) {
    try {
        if ((0, exports.isValid)(arr))
            return arr.length;
        return 0;
    }
    catch (error) {
        console.error(error);
        return 0;
    }
};
exports.getLength = getLength;
/**
* This function takes an array and returns its last element.
*
* @param arr: The array to retrieve the last element from.
* @return The last element of the array, or undefined if the array is empty.
*/
var getLastElement = function (arr) {
    try {
        if ((0, exports.hasElements)(arr))
            return arr[arr.length - 1];
        return undefined;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
exports.getLastElement = getLastElement;
/**
* This function takes an array and returns its first element.
*
* @param arr: The array to retrieve the first element from.
* @return The first element of the array, or undefined if the array is empty.
*/
var getFirstElement = function (arr) {
    try {
        if ((0, exports.hasElements)(arr))
            return arr[0];
        return undefined;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
exports.getFirstElement = getFirstElement;
/**
* This function takes an array and returns a middle element.
* If the array has an even length, the middle element to the right of the center is returned.
*
* @param arr: The array to retrieve the middle element from.
* @return A middle element of the array, or undefined if the array is empty or has less than 3 elements.
*/
var getMiddleElement = function (arr) {
    try {
        if ((0, exports.hasElements)(arr)) {
            var length_1 = (0, exports.getLength)(arr);
            if (length_1 > 3) {
                var middleIndex = Math.floor(length_1 / 2) - 1;
                return length_1 % 2 === 0 ? arr[middleIndex] : arr[middleIndex + 1];
            }
        }
        return undefined;
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
};
exports.getMiddleElement = getMiddleElement;
/**
 * Returns an element in a given array by its index.
 *
 * @param arr The array to retrieve the element from.
 * @param index The index of the element to retrieve.
 * @returns The element at the given index, or undefined if the index is out of bounds.
 */
var getElementByIndex = function (arr, index) {
    try {
        if ((0, exports.hasElements)(arr) && (typeof index === "number" && index >= 0))
            return arr[index];
        return undefined;
    }
    catch (error) {
        console.error(error.message);
        return undefined;
    }
};
exports.getElementByIndex = getElementByIndex;
//# sourceMappingURL=index.js.map