//definición de macrozona
function macroZona(id,
                   nombre,
				   cDesafio[]
                   cDesafioEsp[]
                   cMisteriosas[]
                   cPremio[]
                   cConocimiento[]
                   cFantasma[]){
	this.id = id;
	this.nombre = nombre;
	this.casillasDesafio[] = cDesafio[];
	this.casillasDesafioEsp[] = cDesafioEsp[];
	this.casillasMisteriosas[] = cMisteriosas[];
	this.casillasPremio[] = cPremio[];
	this.casillasConocimiento[] = cConocimiento[];
	this.casillasFantasma[] = cFantasma[];
}

//funciones de una Macrozona

macroZona.prototype.obtenercDesafio = function(id) {
  return this.casillasDesafio[id];
};
macroZona.prototype.obtenercDesafioEsp = function(id) {
  return this.casillasDesafioEsp[id];
};
macroZona.prototype.obtenercMisteriosas = function(id) {
  return this.casillasMisteriosas[id];
};
macroZona.prototype.obtenercPremio = function(id) {
  return this.casillasPremio[id];
};
macroZona.prototype.obtenercConocimiento = function(id) {
  return this.casillasConocimiento[id];
};
macroZona.prototype.obtenercFantasma = function(id) {
  return this.casillasFantasma[id];
};