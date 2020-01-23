function kaliTerusRekursif(angka) {
    var huruf = `${angka}`;
    var kali = 0;
    for(var i = 0; i < huruf.length; i++){
        if(i === 0){
            kali += Number(huruf[i]);
        } else{
            kali *= Number(huruf[i]);
        }
    }

    var cek = `${kali}`;
    if(cek.length === 1){
        return kali;
    } else{
        return kaliTerusRekursif(kali);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6