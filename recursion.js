
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

let tree = {
  "value":100,
  "left":{
    "value":90,
    "left":{
      "value":70
    },
    "right":{
      "value":99
    }
    },
  "right":{
    "value":120,
    "left":{
      "value":110
    },
    "right":{
      "value":130
    }
  }
};