import { arrayHasElements } from "./validation"

// function that remove element in a provided array
export const removeElement = (array: any[], element: any): any[] => {
    try {

        // checking if provided value has elements and element to remove has been provided
        if (arrayHasElements(array) && element) {

            // get element index
            const elementIndex: number = array.indexOf(element)

            // checking if element exist in an array
            if (elementIndex !== -1)
                array.splice(elementIndex, 1)

        }

        return array

    } catch (error) {
        return array
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
export const removeFalsyElements = (array: any[]): any[] => arrayHasElements(array) ? array.filter(Boolean) : array