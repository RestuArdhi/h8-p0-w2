// Nomor 1

console.log('LOOPING PERTAMA')
var charly = 0;
var dodol = 2;
while(charly < 20) {
  charly += dodol;
  console.log(charly + ' - I love coding')
}


console.log('LOOPING KEDUA')
var alfa = 22;
var beta = 2;
while(alfa > 2) {
  alfa -= beta;
  console.log(alfa + ' - I will become fullstack developer')
}

// Nomor 2

console.log('LOOPING PERTAMA')
for(var angka = 1; angka <= 20; angka++) {
  console.log(angka + ' - I love coding')
}

console.log('LOOPING KEDUA')
for(var angka = 20; angka >= 1; angka--) {
  console.log(angka + ' - I will become fullstack developer')
}


// Nomor 3

for (var x=1; x<=100; x++) {
  if (x === 0) {
          console.log(x +  ' GENAP');
  }
  else if (x % 2 === 0) {
          console.log(x + ' GENAP');   
  }
  else {
          console.log(x + ' GANJIL');
  }
}

for (var x=1; x<=100; x+= 2) {
if (x % 3 === 0){
console.log(x + ' KELIPATAN ' + 3);
} else {
console.log (x + ' - ');
}

}

for (var x=1; x<=100; x+= 5) {
if (x % 6 === 0){
console.log(x + ' KELIPATAN ' + 6);
} else {
console.log (x + ' - ');
}
}


for (var x=1; x<=100; x+= 9) {
if (x % 10 === 0){
console.log(x + ' KELIPATAN ' + 10);
} else {
console.log (x + ' - ');
}
}







