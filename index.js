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

//Uncomment these to check your work!
const months = ["April", "May", "June", "October"];
const animals = ["Cats", "Dogs", "Pigs"];
console.log(holidays(months)); // should return: "Happy Halloween"
console.log(holidays(animals)); // should return: "Have a great day!"

/*
 * 
 * Using a FOR loop, write a function addN which adds the argument n to each number in the array arr and returns the updated arr.
 */

function addN(arr, n){
	  // ADD CODE HERE
	  for(let i = 0; i<arr.length; i++)
	    {
	      arr[i] = arr[i] + n;
	    }
	  return arr;
	} 

	// Uncomment these to check your work!
	console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
	console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]