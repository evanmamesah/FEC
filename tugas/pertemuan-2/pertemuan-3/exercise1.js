// Buatlah fungsi yang menerima 2 input angka 
// dan mengembalikan nilai yang terbesar dari angka yang dimasukkan


function nilaiTerbesar(angka1, angka2) {
    if (angka1 > angka2) {
      return angka1;
    } else {
      return angka2;
    }
  }
  
  // Contoh penggunaan
  let input1 = 19;
  let input2 = 8;
  let hasil = nilaiTerbesar(input1, input2);
  console.log("Nilai terbesar adalah: " + hasil); // Output: Nilai terbesar adalah: 19
  