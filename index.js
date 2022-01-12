/**
 * Complete the function holidays that accepts an array of strings and iterates through the array. 
 * If the array contains the string "October", return
 *  "Happy Halloween". Otherwise, return the string
 *   "Have a great day!". Do not use a variable to store the result that you are returning.
 */
function holidays(arr) {
  // Do not use a variable to store your result 
  // ADD CODE HERE
  for(let i = 0; i <arr.length; i++)
    {
      if(arr[i] === "October") return "Happy Halloween";

    }
 return "Have a great day!";
}