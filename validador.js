var fisrtText = prompt("Digite aqui o número do seu cartão");
function isValidCard(){
var stringToNumber = fisrtText.split('').map(function(i){
  return parseInt(i, 10);});
var invertedArray = stringToNumber.reverse();
var selectNumbers = [];
  for (var i = 1; i < invertedArray.length; i = i + 2){
    selectNumbers.push(invertedArray[i] * 2);
  } 
var selectNumbersTwo = [];
  for (var i = 0; i < invertedArray.length; i = i + 2){
    selectNumbersTwo.push(invertedArray[i]);
  } 
var minusNineSelectedNumbers = [];   
var otherSelectedNumbers = [];
for (var j = 0; j < selectNumbers.length; j++){
  if (selectNumbers[j] > 9){
    minusNineSelectedNumbers.push(selectNumbers[j] - 9);
  }else {
     otherSelectedNumbers.push(selectNumbers[j]);
   }  
 }
var minusPlusOther = minusNineSelectedNumbers.concat(otherSelectedNumbers, selectNumbersTwo);
var sum = 0;
  for (var k = 0; k < minusPlusOther.length; k++){
    sum += minusPlusOther[k];
  }
if (sum === 0){// Condição para usuário não deixar o campo em branco;
  alert("Usuário, por favor, você deve prencher o número do seu cartão");
} else {
    if (sum %10 === 0){
      alert("Seu cartão é válido.");
    } else {
        alert("Seu cartão é inválido");
      }
}
}
isValidCard();