// write code here
function removeRandom(arr) {
  const copyArray = arr.slice();
  const randomIndex = Math.floor(Math.random() * copyArray.length);
  copyArray.splice(randomIndex, 1);
  return copyArray;
}

const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = removeRandom(originalArray);

console.log(originalArray); 
console.log(modifiedArray); 
