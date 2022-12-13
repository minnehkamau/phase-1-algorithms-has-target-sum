function hasTargetSum(array, target) {
  // Write your algorithm here
  {

    //Loop through the array
    for (let i = 0; i < array.length; i++) {
    // calculate target minus the array
    const sumMinusElement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      //find an array that equals the sum of the element
      if (array[j] === sumMinusElement) return true;
    }
  }
  //return result if there is no number that equals the sumMinusElement
  return false;
}


}

/* 
  Write the Big O time complexity of your function here
O(n)

*/

/* 
  Add your pseudocode here
initialize function targetsum and pass array and target as parameters
loop through array 
get the result by minusing one array from the target
loop throgh the array to find if there is another num in the array that equals to the result
return true or false




*/

/*
  Add written explanation of your solution here
The result returned is derived by looping through the array and getion to subtract one of the array items from the target and finding another array item that equals t
to that result. After which the array will return true if it finds a number equal to the sumMinusElement and if not it returns false


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
