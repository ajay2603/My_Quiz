function getValue(j){
  return j;
}

var val = getValue(5).then(val => {return (val+1);});

console.log(val);