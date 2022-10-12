1;
function arr(a, b) {
  return a.concat(b);
}
console.log(arr(["a", "b", "c"], [1, 2, 3]));
2;
let arr = (a) => {
  a.push(1, 2, 3);
  return a;
};
console.log(arr(["a", "b", "c"]));

3;
let arr = (a) => a.reverse();
console.log(arr([1, 2, 3]));

4;
let arr = (a) => {
  a.push(4, 5, 6);
  return a;
};
console.log(arr([1, 2, 3]));

5;
let arr = (a) => a.unshift(4, 5, 6);
console.log(arr([1, 2, 3]));

6;
let arr = function (a) {
  return a[0];
};
console.log(arr(["js", "css", "jq"]));

7;
function arr(a) {
  return a[a.length - 1];
}
console.log(arr(["js", "css", "jq"]));

8;
let arr = (a) => a.slice(0, 3);
console.log(arr([1, 2, 3, 4, 5]));

9;
let arr = function (a) {
  return a.slice(3);
};
console.log(arr([1, 2, 3, 4, 5]));

10;
let arr = (a) => {
  a.splice(1, 2);
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

11;
let arr = (a) => {
  a.splice(0, 1);
  a.splice(3, 1);

  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

12;
let arr = (a) => {
  a.splice(3, 0, "a", "b", "c");
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

13;
let arr = (a) => {
  a.splice(1, 0, "a", "b");
  a.splice(6, 0, "c");
  a.splice(8, 0, "e");
  return a;
};
console.log(arr([1, 2, 3, 4, 5]));

14;
let arr = (a) => {
  a.sort();
  return a;
};
console.log(arr([3, 4, 1, 2, 7]));