

//la funcionalidad del codigo cifrado y descifrado se ejecutan por separado :(


  
//CIFRAR mayusculas  

/*var frase = prompt("escribe tu frase");
function cipher(frase){
var arr= [];
for(var i = 0 ; i<str.length ; i++)
{
var l = frase.charCodeAt(i);
var num = (l - 65 + 33)%26 + 65 ;
var n = String.fromCharCode(num);
arr.push(n);
}
return  arr.join("");
}
console.log(cipher(frase));*/

// Descifrar 

//declarar una variable frase para poder preguntar por un prompt
var frase = prompt("escribe tu frase");
// crear la function decipher para poder llamarla y guardar un pedazo de 
//nuestro codigo que esta dentro de ella
function decipher(frase){
  //crear un  Array vacio para guardar los nuevos elementos
var Array= [];
//hacer un for para que pueda recorrer la pocision de nuestra frase que se ingresa 
for(var i = 0 ; i<frase.length ; i++)
{
  //charCodeAt nos sirve para pasar la posicion de nuestra frase a las pocisiones ascii 

var l = frase.charCodeAt(i);
var numer = (l + 65 - 33)%26 + 65 ;
//creamos una variable from para guardar las posiciones ascci a que se pasan a las palabras descifradas por medio fromCharCode.
var from= String.fromCharCode(numer);
Array.push(from);
}
return  Array.join("");
}
console.log(decipher(frase));
