function make(...nums){
  const num = [];
  num.push(...nums);
  const func = (...val) => {
    if (typeof val[0] === 'function') {
      return num.reduce((accumulator, currentValue) => accumulator + currentValue);
    } else {
      num.push(...val);
      return func;
    }
  };
  return func;
};
module.exports = make;