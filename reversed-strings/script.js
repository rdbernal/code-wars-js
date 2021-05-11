/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'


*/

// function solution(str) {
//   const myArr = str.split(""); // converte a string em um array  "" => []
//   console.log(myArr);
//   const reverseArray = myArr.reverse(); // inverte a array
//   console.log(reverseArray);
//   const result = reverseArray.join(""); // converte a array em string
//   console.log(result);
// }

// function solution(str) {
//   const myArray = str.split("");
//   console.log(myArray);
//   const reverseArray = myArray.reverse();
//   console.log(reverseArray);
//   console.log(reverseArray.join(""));
// }

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("Hello"));
console.log(solution("world"));
