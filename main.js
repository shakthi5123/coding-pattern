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