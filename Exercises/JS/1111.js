function showFirstAndLast(arr) {
    let newArr = [];
    
    arr.forEach(function (value) {
      if (typeof value === "string") {
        newArr.push(value[0] + value[value.length - 1]);
      }
    });
    return newArr;
  }
  console.log(showFirstAndLast(['Toot','Egozy','Sliman','Al-Shafi','Saddam','Hussein']));