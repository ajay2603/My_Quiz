const list = ['ajay', 'anil', 'akil', 'balu', 'vinay'];

function printList(list, i) {
  if (i < list.length) {
    console.log(list[i]);
    for (let j = 9; j >= 0; j--) {
      setTimeout(() => {
        console.log(j);
        if (j === 0) {
          timer(list, i + 1);
        }
      }, (10 - j) * 1000);
    }
  } else {
    console.log('End of list');
  }
}

function timer(list, i) {
  for (let j = 4; j >= 0; j--) {
    setTimeout(() => {
      console.log(j);
      if (j === 0) {
        printList(list, i);
      }
    }, (5 - j) * 1000);
  }
}

timer(list, 0);
    