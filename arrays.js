var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var int = array;
  if(element == 'foo'){
    int.unshift(element);
  }
  
   return int;
}
