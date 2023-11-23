//Buatlah fungsi yang menerima 2 input angka 
//dan mengembalikan nilai yang terbesar dari angka
//yang dimasukan
//Buatlah dalam bentuk IIFE dan Callback function

const maxNumber = (function(a, b) {
    return a > b ? a : b;
  })(28, 15);
  
  console.log(maxNumber); // Output: 28

  function compareAndReturn(a, b, callback) {
    return callback(a, b);
  }
  
  const result = compareAndReturn(28, 99, function(a, b) {
    return a > b ? a : b;
  });
  
  console.log(result); // Output: 99
  