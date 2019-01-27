var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
//var candyString = "foo"
function addElementToBeginningOfArray(array,element) {
 return [element,...array]
}
  function destructivelyAddElementToBeginningOfArray(array,element) {
    return `${array}.${element}`
  }
function addElementToEndOfArray(array,element) {
 return [...array, element]
}
function destructivelyAddElementToEndOfArray(array,element) {
  return `${array}.${element}`
}
function accessElementinArray(array,index) {
  return `${array}[${index}]`
}
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
 