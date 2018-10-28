function recursion(tree) {
  const array = [];
  let nodeLevel = 0;
  (function stepNode(node) {
    if (node.left) {
      nodeLevel += 1;
      stepNode(node.left);
      nodeLevel -= 1;
    }
    if (node.right) {
      nodeLevel += 1;
      stepNode(node.right);
      nodeLevel -= 1;
    }
    if (!array[nodeLevel]) {
      array[nodeLevel] = [];
    }
    array[nodeLevel].push(node.value);
  }(tree));
  return array;
};
module.exports = recursion;