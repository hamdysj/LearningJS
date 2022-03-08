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
	
	
/*Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.*/
	function getTheSum(arr){
		  // ADD CODE HERE
		  
		  let sum = 0;
		  for(let i=0; i<arr.length; i++)
		    {
		      sum = sum + arr[i];
		    }
		  return sum;
		}

		// Uncomment these to check your work!
		console.log(getTheSum([3, 6, 9])); // expected log 18
		console.log(getTheSum([10, 11, 12])); // expected log 33
		
		
/*
 * Create a function multiplyAll that takes an unknown number of integer arguments,
 *  multiplies them all together, and returns the result.
 *  */	
		
		// ADD CODE HERE 
		function multiplyAll(...value)
		{
		  let total = 1;
		  
		  for(let i = 0; i<value.length; i++)
		    {
		     total = total * value[i];
		    }
		  
		  return total;
		}

		// Uncomment these to check your work!
		console.log(multiplyAll(9, 4, 5, 6, 7, 2, 1, 8, 3)) // should log: 362880
		console.log(multiplyAll(5, 5, 5, 3)) // should log: 375

		
/*Write a function mergingElements which adds each element in array1 
 * to the corresponding element of array2 and returns the new array.
 * */

  //create function
const mergingElements = (arr1, arr2) => {
  //create a new array
  const arr3 = [];
  //iterate through the arrays
  for(let i = 0; i<arr1.length; i++)
    {
      //Add element in Array 1 to it correspondence
      arr3.push(arr1[i] + arr2[i]);
    }
  
    //return the new array
  return arr3;
}
// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]



/*
 * 
 *Write a function mergingTripletsAndQuints which takes in two arrays as arguments.
 *  This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5.
 *  The number should be replaced with the sum of itself added to the element at the corresponding index in array2.
 */


function mergingTripletsAndQuints(array1, array2) {
	 // ADD CODE HERE
	  //for loop iteration
	  for(let i = 0; i<array1.length; i++)
	    {
	       //return a new array if element is divisible by 3 or 5
	      let value = array1[i] % 3;
	      let value1 = array1[i] % 5;
	      if(value === 0 || value1 === 0 )
	        {
	          array1[i] = array1[i] + array2[i];
	        }
	    }
	  
	  return array1;
	}

	// Uncomment these to check your work!
	console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
	console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]
	
	
	/*
	 * Using a loop, write a function getTheRange 
	 * which finds the range (difference between high and low) of arr. 
	 * The value returned should be an array with the low, high, and range.*/
	
	function getTheRange(arr){
		  // ADD CODE HERE
		  const high = Math.max(...arr);
		  const low = Math.min(...arr);
		  const range = high - low;
		  
		  const newArr = [];
		  newArr.push(low);
		  newArr.push(high);
		  newArr.push(range);
		  
		  return newArr;
		  
		}

		// Uncomment these to check your work!
		console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]
		
		
		/*
		 * Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers
		 *  in array2 to each element under 10 in array1. Similarly, addingAllTheWeirdStuff 
		 *  should also add the sum of all the even numbers in array2 to those elements over 10 
		 *  in array1.
		 *  BONUS: If any element in array2 is greater than 20, 
		 *  add 1 to every element in array1.*/
		
		const addingAllTheWeirdStuff = (array1, array2) => {
		    // ADD CODE HERE
		  let valueOdd = 0;
		  let valueEven = 0;
		  let bonus = 0;
		  
		  //Condition 1: Add the sum of all odd numbers / even numbers in Array 2  
		  for(let i = 0; i<array2.length; i++)
		  {
		    if(array2[i] % 2 != 0)
		      {
		        valueOdd = valueOdd + array2[i];
		      }
		    else if(array2[i] % 2 === 0)
		        {
		          valueEven = valueEven + array2[i];   
		  			} 
		  	}
		  
				//cHECK elements less than or greater than 10 in Array 1 and add sum of oddNumbers / evenNumbers to it
		    for(let j = 0; j<array1.length; j++)
		    {
		       if(array1[j] < 10)
		      {
		        array1[j] = array1[j] + valueOdd;
		      }
		      else if(array1[j] > 10)
		      {
		        array1[j] = array1[j] + valueEven;
		      }
		    }
		  
		  //BONUS
		   for(let x = 0; x<array2.length; x++)
		     {
		       if(array2[x] > 20)
		      {
		        bonus = 1;
		        for(let y = 0; y<array1.length; y++)
		          {
		            array1[y] = array1[y] + bonus;
		          }
		        
		        return array1;
		      }
		     }
		  return array1;
		  
		}

		// Uncomment these to check your work!
		 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
		console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]
	
	
		/*
		Write a function disemvowel 
		that takes in a string and returns a new string with all vowels removed. */
		
		//SOLUTION 1
		function disemvowel(string) {
			  // ADD CODE HERE
			  /* Regular Expression: For case senstitivity, Use //g, For Case insentitive, Use //gi */
			  const regex = /[aeiou]/gi;
			  const emVowel = string.replace(regex, '');
			  return emVowel;
			}

			// Uncomment these to check your work!
			console.log(disemvowel('CodeSmith')); // => 'CdSmth'
			console.log(disemvowel('BANANA')); // => 'BNN'
			console.log(disemvowel('hello world')); // => 'hll wrld'
	
	
	//SOLUTION 2
		const disemvowel = (string) => {
			//Create an objects of vowels
			let vowels = {
					'a': true,
					'e': true,
					'i': true,
					'o': true,
					'u': true
			}
			
			//initialize a new variable
			let result = '';
			
			//Loop through the string
			for(let i = 0; i<string.length; i++)
			{
				let letter = string[i].toLowerCase();
				if(!vowels[letter])
					{
					result += string[i];
					}
			}
			
			return result;
		}
	
	
	
	
	
	
