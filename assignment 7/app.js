
// answer 1

for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  // answer 2
  for (var i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  // answer 3
  for (var i = 1; i <= 15; i += 2) {
    console.log(i);
  }
  //  answer 4
  for (var i = 1; i <= 10; i++) {
    var square = i * i;
    console.log("Square of", i, "is", square);
  }
  // answer 5
  const numbers = [3, 7, 2, 9, 5];
  var largest = numbers[0];
  
  for (var i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }
  
  console.log("The largest element in the array is:", largest);
  // answer 6
  const number = 123;
  var sum = 0;
  var num = number;
  
  while (num > 0) {
      sum += num % 10; 
      num = Math.floor(num / 10); 
  }
  
  console.log("The sum of digits of", number, "is", sum);
  //  
  
  for (var i= 1; i <= 20.; i++) {
  document.write(i,"<br>");
  
    
  }