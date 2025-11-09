import Stack from "./stack.js";

const parenthesis = ["{", ")", "[", "]", "{", "}"];

const checkValidParenthesis = (str) => {
  const stack = new Stack();
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (
      str[i] === "(" ||
      str[i] === "[" ||
      str[i] === "{"
    ) {
      stack.push(str[i]);
    } else{
      if(stack.isEmpty()){
        return false;
      }
      else if(str[i] == ")" && stack.peek() == '('){
        console.log("U")
        stack.pop()
      }else if(str[i] == "]" && stack.peek() == '['){
        stack.pop();
      }else if(str[i] == '}' && stack.peek() == '{'){
        stack.pop()
      }
    }
  }
 console.log(stack)
  if(stack.isEmpty()){
    return true;
  }else{
    return false;
  }

};

console.log(checkValidParenthesis(")[{}])"))
