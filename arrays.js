var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  if(element == 'foo'){
    var intArray = array.unshift(element);
  }
  return intArray;
}
