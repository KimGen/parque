//fuente https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// CCastro
function obtenerPerdidaHabilidad(){
	var cantidad_maxima = 4;
	var tipos = 2;
	return [getRandomIntInclusive(0, 2),getRandomIntInclusive(0,4)];
}