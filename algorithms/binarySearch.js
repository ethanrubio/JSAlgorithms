module.exports = {
  binarySearch: (array, target) => {
    // psuedocode
    // 1. let min = 0 and max = n - 1.
    // 2. if max < min, then stop
      // target is not present in array
      // return -1
    // 3. compute guess as average of max and min,
    // rounded down so that it is an integer
    // 4. if array[guess] = target, then stop
      // you found it! return guess
    // 5. if guess was too low, that is, 
    // array[guess] < target, then set 
    // min = guess + 1
    // 6. otherwise, the guess was too high.
    // set max = guess - 1
    // 7. go back to step 2
    let numberFound = -1;
    let min = 0;
    let max = array.length - 1;
    
    while (max >= min) {
      let guess = Math.floor((max + min) / 2);
      if (array[guess] === target) {
        numberFound = guess;
        break;
      } else if (array[guess] < target) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    } 
    
    return numberFound;
  },
  
  timeComplexity: 'lg n'
}