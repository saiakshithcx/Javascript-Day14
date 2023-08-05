function lookAndSay(start, n) {
    let result = [start.toString()]; 
    for (let i = 1; i < n; i++) {
      const currentTerm = result[i - 1];
      let nextTerm = "";
      let count = 1;
  
      for (let j = 0; j < currentTerm.length; j++) {
        if (currentTerm[j] !== currentTerm[j + 1]) {
          nextTerm += count + currentTerm[j];
          count = 1;
        } else {
          count++;
        }
      }
  
      result.push(nextTerm);
    }
  
    return result.map(Number);
  }
  console.log(lookAndSay(1, 7)); 
  console.log(lookAndSay(123, 4)); 
  console.log(lookAndSay(70, 5)); 
  