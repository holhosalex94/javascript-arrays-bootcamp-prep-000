var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var intArray = [array];
  if(element !== 'undefined'){
    array.unshift(element);
  }
  return intArray;
}
