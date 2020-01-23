function changeVocals (str) {
    var holder = '';
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            holder += 'b';
        } else if(str[i] === 'i'){
            holder += 'j';
        } else if(str[i] === 'u'){
            holder += 'v';
        } else if(str[i] === 'e'){
            holder += 'f';
        } else if(str[i] === 'o'){
            holder += 'p';
        } else if(str[i] === 'A'){
            holder += 'B';
        } else if(str[i] === 'I'){
            holder += 'J';
        }else if(str[i] === 'U'){
            holder += 'V';
        }else if(str[i] === 'E'){
            holder += 'F';
        }else if(str[i] === 'O'){
            holder += 'P';
        }else{
            holder += str[i];
        }
    }

    return holder;
  }
  
  function reverseWord (str) {
    var terbalik = '';
    for(var j = str.length - 1; j >= 0 ; j--){
        terbalik += str[j];
    }
    return terbalik;
  }
  
  function setLowerUpperCase (str) {
    var ukuranHuruf = '';
    for(var k = 0; k < str.length; k++){
        if(str[k] !== str[k].toLowerCase()){
            ukuranHuruf += str[k].toLowerCase();
        } else{
            ukuranHuruf += str[k].toUpperCase();
        }
    }
    return ukuranHuruf;
  }
  
  function removeSpaces (str) {
    var removedSpaces = '';
    for(var l = 0; l < str.length; l++){
        if(str[l] !== ' '){
            removedSpaces += str[l];
        }
    }
    return removedSpaces;
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }

    var ubah = changeVocals(name);
    var balik = reverseWord(ubah);
    var huruf = setLowerUpperCase(balik);
    var spasi = removeSpaces(huruf);

    return spasi;
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'