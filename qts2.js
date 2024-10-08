const num = [2,4,6,8,10];

const squareIterator = {
 
  [Symbol.iterator]() {
    let index = 0; 
    const arr = num; 

    return {
      next() {
        if (index < arr.length) {
          const value = arr[index] ** 2;
          index++; 
          return { value, done: false }; 
        } else {
          return { done: true }; 
        }
      }
    };
  }
};

console.log('Squares of the entered numbers:');
for (let square of squareIterator) {
  console.log(square); 
}

