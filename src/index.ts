import { removeElement, removeFalsyElements } from "./helpers/array/helpers"
import { arrayHasDuplicates, arrayHasElements, arrayHasSameDataType, arrayIsUnique, isArray } from "./helpers/array/validation"

const testObject = {
    name: "peter mbwanji"
}
const array: any = [1, 2, 3, testObject, 6, undefined, null, false, true]
console.log(isArray(array))
console.log(arrayIsUnique(array))
console.log(arrayHasElements(array))
console.log(arrayHasDuplicates(array))
console.log(arrayHasSameDataType(array, "number"))
console.log(removeElement(array, testObject))
console.log(removeFalsyElements(array))