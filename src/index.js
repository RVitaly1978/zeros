module.exports = function zeros(expression) {
  // your solution
  let str = expression;
  let str_array = str.split("*");
  let sum5 = 0;
  let sum2 = 0;
  str_array.forEach(element => {
    let number = element.replace(/!/g, "");
    let i = element.length - number.length;
    let n = Number(number);
    let number5 = 0;
    let number2 = 0;
    if (i === 1) {
      for (let j = n; j >= 5; j--) {
        number5 += ((j % 5 != 0) ? 0 : 1 + ((j % 25 != 0) ? 0 : 1) + ((j % 125 != 0) ? 0 : 1));
      };
    } else {
      for (let j = n; j >= 5; j = j - 2) {
        number5 += ((j % 5 != 0) ? 0 : 1 + ((j % 25 != 0) ? 0 : 1) + ((j % 125 != 0) ? 0 : 1));
      };
    };
    if (i === 1) {
      for (let j = n; j >= 2; j--) {
        number2 += ((j % 2 != 0) ? 0 : 1 + ((j % 4 != 0) ? 0 : 1) + ((j % 8 != 0) ? 0 : 1) + ((j % 16 != 0) ? 0 : 1) + ((j % 32 != 0) ? 0 : 1) + ((j % 64 != 0) ? 0 : 1) + ((j % 128 != 0) ? 0 : 1));
      };
    } else {
      for (let j = n; j >= 2; j = j - 2) {
        number2 += ((j % 2 != 0) ? 0 : 1 + ((j % 4 != 0) ? 0 : 1) + ((j % 8 != 0) ? 0 : 1) + ((j % 16 != 0) ? 0 : 1) + ((j % 32 != 0) ? 0 : 1) + ((j % 64 != 0) ? 0 : 1) + ((j % 128 != 0) ? 0 : 1));
      };
    };
    sum5 += number5;
    sum2 += number2;
  });
  return Math.min(sum5, sum2);
}
// function factorial(n) {
  //   return (n != 1) ? n * factorial(n - 1) : 1;
  // };

  // function factorial_double(n) {
  //   if (n % 2 != 0) {
  //     return (n != 1) ? n * factorial(n - 2) : 1;
  //   } else {
  //     return (n != 2) ? n * factorial(n - 2) : 2;
  //   };
  // };
