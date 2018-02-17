var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array = [array];
  if(element !== undefined){
    array.unshift(element);
  }
}