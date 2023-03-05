// deoendencies
import { dataType } from "../../types"

// function thats check if provided value is an array
export const isArray = (value: any): boolean => Array.isArray(value) ? true : false

// function that check if provided array has elements
export const arrayHasElements = (array: any[]): boolean => isArray(array) ? array.length > 0 : false

// function that check if provided array is unique
export const arrayIsUnique = (array: any[]): boolean => arrayHasElements(array) ? array.length === new Set(array).size : false

// function that check if provided array has duplicates
export const arrayHasDuplicates = (array: any[]): boolean => !arrayIsUnique(array)

// function that check if provided array has elements with same data data type
export const arrayHasSameDataType = (array: any[], dataType: dataType): boolean => (arrayHasElements(array) && dataType) ? array.every((element: any) => dataType === "array" ? isArray(element) : typeof element === dataType) : false