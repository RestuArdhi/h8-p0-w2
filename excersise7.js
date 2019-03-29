
var rows1 = 5

for(var i = 1; i <= 5; i++) {
  console.log('*');
}



var rows2 = 5

for(var i = 1; i <= 5; i++) {
  var output = '';
  for(var j = 1; j <= 5; j++) {
    output += '*';
  }
  console.log(output);
}




var rows3 = 5

for(var i = 1; i <= 5; i++) {
  var output = '';
  for(var j = 1; j <= i; j++) {
    output += '*';
  }
  console.log(output);
}
