module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let openBr = [];
  let closeBr = [];
  let matchBr = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    openBr.push(bracketsConfig[i][0]);
    closeBr.push(bracketsConfig[i][1]);
    if (bracketsConfig[i][0] === bracketsConfig[i][1]) {
      matchBr.push(true);
    } else {
      matchBr.push(false);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (openBr.includes(str[i])) {
      if (
        matchBr[openBr.indexOf(str[i])] &&
        stack[stack.length - 1] === str[i]
      ) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (stack.length === 0) {
        return false;
      } else if (stack[stack.length - 1] === openBr[closeBr.indexOf(str[i])]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
