function totalDigitRekursif(angka) {
    var huruf = `${angka}`;
    if(huruf.length === 1){
        return Number(huruf);
    } else{
        return Number(huruf[0]) + totalDigitRekursif(Number(huruf.substring(1, huruf.length)));
    }
    
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5