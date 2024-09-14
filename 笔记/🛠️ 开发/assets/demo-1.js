// 初始化
const stack = [];
// 入栈
stack.push("东北大板");
stack.push("光明冰砖");
//出栈过程
while (stack.length) {
  //访问
  const top = stack[stack.length - 1];
  console.log(top);
  //出栈
  stack.pop();
}
console.log(stack);
