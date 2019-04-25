const snippets = [
`function fibonacci(num) {
  if (num < 2) return 1;
  return fibonacci(num-2) + fibonacci(num-1);
}`,
`function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}`,
`function LinkedList() {
  this.head = null;
  this.tail = null;
}`,
`function Stack() {
  this.storage = [];
  this.max = -Infinity;
  this.length = 0;
}`,
`let mean = Math.floor(array.reduce( (acc, val) => acc + val) / array.length);`,
`interface Junior {
  name: string,
  age: number,
  pongSkillLevel: number,
  isASam: boolean,
  paidTuition: boolean,
  struggledOnSoloProject: boolean,
  greet?: (a: Junior) : string,
}`
]

export default snippets;