exports.roman_to_int = function (str) {
  let total = 0;
  let old_value = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let value = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    }[char];

    if (old_value < value) {
      total += value - 2 * old_value;
    } else {
      total += value;
    }

    old_value = value;
  }

  return total;
};
