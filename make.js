const make = () => {
  const num = [];
  const func = (...val) => {
    if (typeof val[0] === 'function') {
      return num.reduce((accumulator, currentValue) => accumulator + currentValue,);
    } else {
      num.push(...val);
      return func;
    }
  };
  return func;
};
function sum(a, b) {
    return a + b;
};