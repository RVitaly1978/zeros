module.exports = function zeros(expression) {
  // your solution
  let str = expression;
  let str_array = str.split("*");
  let number_zeros = 0;
  str_array.forEach(element => {
    let number = element.replace(/!/g, "");
    let i = element.length - number.length;
    let n = Number(number);
    let zeros_local = 0;
    if (i === 1) {
      for (let j = n; j >= 5; j--) {
        zeros_local += ((j % 5 != 0) ? 0 : 1 + ((j % 25 != 0) ? 0 : 1) + ((j % 125 != 0) ? 0 : 1));
      };
    } else {
      for (let j = n; j >= 5; j = j - 2) {
        zeros_local += ((j % 5 != 0) ? 0 : 1 + ((j % 25 != 0) ? 0 : 1) + ((j % 125 != 0) ? 0 : 1));
      };
    };
    number_zeros += zeros_local;
  });
  return number_zeros;
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
