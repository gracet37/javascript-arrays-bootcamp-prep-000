var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array,element) {
 const 
}
  function destructivelyAddElementToBeginningOfArray(array,element) {
    return `${array}.${element}`
  }
function addElementToEndOfArray(array,element) {
 return `[${element},...${array}]` 
}
function destructivelyAddElementToEndOfArray(array,element) {
  return `${array}.${element}`
}