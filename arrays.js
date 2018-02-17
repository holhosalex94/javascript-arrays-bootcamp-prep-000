var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array = [array.unshift(element)];
  if(element == undefined){
    array = [array];
  }
}