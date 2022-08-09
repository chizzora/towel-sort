
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [], newarr = [];
  if (matrix == undefined || matrix.length == 0) {
    return []
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0){
      arr.push(matrix[i].reverse().join(','))
    } else {
      arr.push(matrix[i].join(','))
    }
  }
  let a = arr.join(',');
  let numbers = a.split(',');
  console.log(numbers.map(string => parseInt(string)));
  return numbers.map(string => parseInt(string));
}
