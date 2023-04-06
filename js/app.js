function main(a, b, c) {
  if(typeof(c) === 'function')
  return c(sum(a, b))
  else {
    return sum(a, b)
  }
};

function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
alert(result);
alert(main(5, 10, function(sum){
  return sum
}));
console.log(result);
console.log(main(5, 10, function(sum){
  return sum
}));