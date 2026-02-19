// imaginne arr = [1, 4, 7, 8, 10]
// think the logic before writing the code
	// •	Create count
	// •	Loop through array
	// •	Check if value is even
	// •	Increase count
	// •	Return total
   
function findEvenNumber(arr) {
   let count = 0;

   for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
         count++;
      }
   }

   return count;
}


function add(arr) {
   let sum = 0;;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
   }
   return sum
}


const arr = [6, 2, 9, 1]

function findMin(arr) {
   let min = arr[0];

   for (let i = 0; i < arr.length; i ++){
      if (arr[i] < min) {
         min = arr[i]
      }
   }

   return min;
}




