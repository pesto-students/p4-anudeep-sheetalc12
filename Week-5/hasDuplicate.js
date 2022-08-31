const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

let result = hasDuplicate([1, 5, -1, 4]); // false
console.log(result);

function hasDup(arr) {
  const set = new Set(arr);
  if (set.size === arr.length) {
    return false;
  }
  return true;
}

result = hasDup([6, 7, 9, 40, 5, 4]); // false
console.log(result);

result = hasDup([1, 5, 3, 1, 5, 7]); // true
console.log(result);