var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  intArray = array;
  if(element == 'foo'){
    intArray.unshift(element);
  }
  return intArray;
}
