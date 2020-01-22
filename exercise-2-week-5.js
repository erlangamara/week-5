function changeVocals (str) {
    var holder = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] === 'a'){
            holder.push('b');
        } else if(str[i] === 'i'){
            holder.push('j');
        } else if(str[i] === 'u'){
            holder.push('v');
        } else if(str[i] === 'e'){
            holder.push('f');
        } else if(str[i] === 'o'){
            holder.push('p');
        } else{
            holder.push(str[i]);
        }
    }

    return holder;
  }
  
  function reverseWord (str) {
    var terbalik = [];
    for(var j = str.length - 1; j >= 0 ; j--){
        terbalik.push(str[j]);
    }
    return terbalik;
  }
  
  function setLowerUpperCase (str) {
    var ukuranHuruf = [];
    for(var k = 0; k < str.length; k++){
        if(str[k] !== str[k].toLowerCase()){
            ukuranHuruf.push(str[k].toLowerCase());
        } else{
            ukuranHuruf.push(str[k].toUpperCase());
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