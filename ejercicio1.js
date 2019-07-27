/*
 *
 * Ejercicio 1: Implemente una funcion que retorne la suma de todos los elementos en el arreglo.
 *
 * Autor:
 * Fecha: 
 *
 */
 
let arraySum = function(array) {
  // TODO: Tu codigo aqui!
  let suma = 0;
  for(let i = 0; i < array.length; i++){
    suma = suma + array[i];
  }
  return suma;
  //return suma;
};
$('#ejercicio1').click(function(){
  $('#rp1Ejercicio1').html(arraySum(a));
  $('#rp2Ejercicio1').html(arraySum(b));
  $('#rp3Ejercicio1').html(arraySum(c));
});
// Prueba (No modificar)

const a = [7, 6, 5, 4, 3];
const b = [-3, -4, -5, -6, -7];
const c = [33];

if (arraySum(a) === 25 &&
    arraySum(b) === -25 &&
    arraySum(c) === 33) {
  console.log('Ejercicio 1 paso la prueba!');
} else {
  console.log('Ejercicio 1 no paso la prueba!');
}

