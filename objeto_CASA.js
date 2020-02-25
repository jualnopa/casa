class MiCasa {

	constructor() {
		this.habpersona = new Array();
		this.habpersona[0] = new Array("salon", "Patricia");
		this.habpersona[1] = new Array("cocina", "vacio");
		this.habpersona[2] = new Array("habitacion mediana", "Alex");
		this.habpersona[3] = new Array("habitacion pequeña", "Noa");
		this.habpersona[4] = new Array("habitacion matrimonio", "Juan");
		this.habpersona[5] = new Array("baño grande", "vacio");
		this.habpersona[6] = new Array("baño pequeño", "vacio");
	}

	estalibre(persona, habitacion){
		for (var i = 0; i < 7; i++) {
			if(this.habpersona[i][0] === habitacion){
				if(this.habpersona[i][1]==="vacio") {
					this.habpersona[i][1] = persona;
					for (var e = 0; e < 7; e++) {
						if (this.habpersona[e][1] === persona && i !== e) {
							this.habpersona[e][1] = "vacio";
							break;
						}

					}
					break;
				}
			}
		}
	}
}
// A PARTIR DE AQUI, SE EJECUTA (VARIABLES Y LLAMADAS -INSTANCIAS-)

var patri = "Patricia";
var juan = "Juan";
var alex = "Alex";
var noa = "Noa";



var CasaMartinSanz = new MiCasa();

CasaMartinSanz.estalibre("Alex", "cocina");
CasaMartinSanz.estalibre("Patricia", "habitacion mediana");
CasaMartinSanz.estalibre("Juan", "baño pequeño");

