// deoendencies
import { dataType, operationType, orderType } from "../../types"

// function thats check if provided value is an array
export const isValid = (value: any): boolean => Array.isArray(value) ? true : false

// function that check if provided array has elements
export const hasElements = (array: any[]): boolean => isValid(array) ? array.length > 0 : false

// function that check if provided array is unique
export const isUnique = (array: any[]): boolean => hasElements(array) ? array.length === new Set(array).size : false

// function that check if provided array has duplicates
export const hasDuplicates = (array: any[]): boolean => !isUnique(array)

// function that check if provided array has elements with same data data type
export const elementsHaveSameDataType = (array: any[], dataType: dataType): boolean => (hasElements(array) && dataType) ? array.every((element: any) => dataType === "array" ? isValid(element) : typeof element === dataType) : false

/* function that check if provided array has falsy elements
    false
    null
    undefined
    0
    NaN
    "" (an empty string)
*/
export const hasFalsyElements = (array: any[]): boolean => hasElements(array) ? array.some((element: any) => !element) : false

// function that check if an element exist in a provided array
export const elementExist = (array: any[], element: any): boolean => hasElements(array) ? array.indexOf(element) >= 0 : false

// function that return element index
export const getIndex = (array: any[], element: any): number => hasElements(array) ? array.indexOf(element) : -1

// function that remove element in a provided array
export const removeElement = (array: any[], element: any): any[] => {
    try {

        // checking if provided elements exists in an array
        if (elementExist(array, element)) {

            // get element index
            const elementIndex: number = getIndex(array, element)

            // checking if element exist in an array
            if (elementIndex !== -1)
                array.splice(elementIndex, 1)

        }

        return array

    } catch (error) {
        return []
    }
}

/*
    function that remove falsy values in a provided array ie:
    false
    null
    undefined
    0
    NaN
    "" (an empty string)
*/
export const removeFalsyElements = (array: any[]): any[] => hasFalsyElements(array) ? array.filter(Boolean) : []

// function that remove element with a provided data type
export const removeElementsByDataType = (array: any[], dataType: dataType): any[] => (hasElements(array) && dataType) ? array.filter((element: any) => dataType === "array" ? !isValid(element) : dataType === "null" ? element !== null : typeof element !== dataType) : []

// function that return elements with the same data type
export const elementsWithSameDataType = (array: any[], dataType: dataType): any[] => (hasElements(array) && dataType) ? array.filter((element: any) => dataType === "array" ? isValid(element) : dataType === "null" ? element === null : ((typeof element === dataType) && (element !== null))) : []

// function that counts elements occurence in a provided array
export const elementsOccurence = (array: any[]): object => {
    try {

        // checking if provided array has elements
        if (hasElements(array))
            return array.reduce((acc, curr) => {
                if (typeof acc[curr] === "undefined") {
                    acc[curr] = 1;
                } else {
                    acc[curr] += 1;
                }
                return acc;
            }, {});
        return {}

    } catch (error) {
        return {}
    }
}

// function that count single element occurence in a provided array
export const elementOccurence = (array: any[], element: any): number => {
    try {

        // checking if provided array has element(s) and element has been provided
        if (elementExist(array, element))
            return array.reduce((acc, curr) => {
                if (curr === element) {
                    return acc + 1;
                } else {
                    return acc;
                }
            }, 0);

        return 0

    } catch (error) {
        return 0
    }
}

// function that compute all numbers provided in any array
export const computeElements = (array: any[], operation: operationType): number => {
    try {

        // checking if provided array has elements and operation has been provided
        if (elementsHaveSameDataType(array, "number") && operation)
            return array.reduce((a: number, b: number) => operation === "+" ? a + b : operation === "-" ? a - b : operation === "/" ? a / b : operation === "*" ? a * b : operation, ((operation === "+") || (operation === "-")) ? 0 : 1)

        return 0

    } catch (error) {
        return 0
    }
}

// function that sort array in a provided order
export const sort = (array: any[], order: orderType, objectKey?: string): any[] => {
    try {

        if (hasElements(array) && order) {

            if (order === "ascending")
                return array.sort((a, b) => {

                    const conditionOne = objectKey ? a[objectKey] < b[objectKey] : a < b
                    const conditionTwo = objectKey ? a[objectKey] > b[objectKey] : a > b

                    if (conditionOne) {
                        return -1;
                    } else if (conditionTwo) {
                        return 1;
                    } else {
                        return 0;
                    }
                })
            else if (order === "descending")
                return array.sort((a, b) => {

                    const conditionOne = objectKey ? a[objectKey] > b[objectKey] : a > b
                    const conditionTwo = objectKey ? a[objectKey] < b[objectKey] : a < b

                    if (conditionOne) {
                        return -1;
                    } else if (conditionTwo) {
                        return 1;
                    } else {
                        return 0;
                    }
                })

            return []

        }

        return []

    } catch (error) {
        return []
    }
}

// function that copy two arrays that have been provided
export const copy = (arrayOne: any[], arrayTwo: any[]): any[] => isValid(arrayOne) && isValid(arrayTwo) ? [...arrayTwo, ...arrayOne] : []

// function that add element in a provided array
export const addElement = (array: any[], element: any): any[] => {
    try {

        // checking if provided value is an array and element has been provided
        if (isValid(array) && element) {
            array.push(element)
            return array
        }

        return []

    } catch (error) {
        return []
    }
}

// function that return length of a provided array
export const length = (array: any[]): number => isValid(array) ? array.length : -1

// function that return last element in an array
export const lastElement = (array: any): any => isValid(array) ? array[length(array) - 1] : null

// function that return first element in an array
export const firstElement = (array: any): any => isValid(array) ? array[0] : null

// function that return certaing array element accourding to a provided index
export const getElement = (array: any[], index: number): any => isValid(array) && index >= 0 ? array[index] : null

// function that reverse a provided array
export const reverse = (array: any[]): any[] => hasElements(array) ? array.reverse() : []