var sehri = ['4:51am', '4:50am', '4:49am', ' 4:48am',' 4:47am','4:46am','4:45am','4:44am',
   '4:43am','4:42am','4:41am','4:40am','4:39am','4:38am','4:37am','4:36am','4:35am',
  ' 4:34am','4:33am',' 4:32am','4:31am','4:30am',' 4:29am','4:28am',' 4:28am',
' 4:27am','4:26am','4:25am','4:24am','4:24am'];

var iftari =[
    '6:55pm','6:56pm','6:56pm','6:57pm','6:57pm','6:57pm','6:58pm','6:58pm','6:59pm',
'6:59pm','7:00pm','7:00pm','7:01pm','7:01pm','7:02pm','7:02pm','7:03pm','7:03pm','7:04pm',
'7:04pm','7:05pm','7:05pm','7:06pm','7:06pm','7:07pm','7:07pm','7:08pm','7:08pm',
'7:09pm','7:09pm'];

var a = prompt('Do you want to know Sehr and Iftar timing of Ramdan 2021? Search date here...');

var b;
var c;

if(a == 1){
  b = sehri[0]
  c = iftari[0]
}
else if(a == 2){
  b = sehri[1]
  c = iftari[1]
}
else if(a == 3){
  b = sehri[2]
  c = iftari[2]
}
else if(a == 4){
  b = sehri[3]
  c = iftari[3]
}
else if(a == 5){
  b = sehri[4]
  c = iftari[4]
}
else if(a == 6){
  b = sehri[5]
  c = iftari[5]
}
else if(a == 7){
  b = sehri[6]
  c = iftari[6]
}
else if(a == 8){
  b = sehri[7]
  c = iftari[7]
}
else if(a == 9){
  b = sehri[8]
  c = iftari[8]
}
else if(a == 10){
  b = sehri[11]
  c = iftari[11]
}
else if(a == 11){
  b = sehri[12]
  c = iftari[12]
}
else if(a == 12){
  b = sehri[13]
  c = iftari[13]
}
else if(a == 13){
  b = sehri[14]
  c = iftari[14]
}
else if(a == 14){
  b = sehri[15]
  c = iftari[15]
}
else if(a == 15){
  b = sehri[16]
  c = iftari[16]
}
else if(a == 16){
  b = sehri[17]
  c = iftari[17]
}
else if(a == 17){
  b = sehri[18]
  c = iftari[18]
}
else if(a == 18){
  b = sehri[19]
  c = iftari[19]
}
else if(a == 19){
  b = sehri[20]
  c = iftari[20]
}
else if(a == 20){
  b = sehri[21]
  c = iftari[21]
}
else if(a == 21){
  b = sehri[22]
  c = iftari[22]
}
else if(a == 22){
  b = sehri[23]
  c = iftari[23]
}
else if(a == 23){
  b = sehri[24]
  c = iftari[24]
}
else if(a == 24){
  b = sehri[25]
  c = iftari[25]
}
else if(a == 25){
  b = sehri[26]
  c = iftari[26]
}
else if(a == 26){
  b = sehri[27]
  c = iftari[27]
}
else if(a == 27){
  b = sehri[28]
  c = iftari[28]
}
else if(a == 28){
  b = sehri[29]
  c = iftari[29]
}
else if(a == 29){
  b = sehri[30]
  c = iftari[30]
}
else{
  alert('Please enter correct date' + '\n' + 'from 1-29')
  
}

alert(a + ' Ramadan' + '\n' +'Sehri : ' + b + '\n' + 'Iftari : ' + c)