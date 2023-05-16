function exampleOne(object: object) {
  let value: Array<string> = [];
  for (let key in object) {
    // value = value + object[key];
    value.push(key);
  }
  return value;
}

let test = {
  me: 'kwon',
  age: "20",
  job: "minam",
}

console.log(exampleOne(test));