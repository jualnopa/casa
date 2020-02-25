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

	habitacionlibre(persona, habitacion){
		if(this.habpersona[0][0] === habitacion){
			if(this.habpersona[0][1]==="vacio") {
				this.habpersona[0][1] = persona;
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				return alert("Fin");
			}
		}
		if(this.habpersona[1][0] === habitacion){
			if(this.habpersona[1][1]==="vacio"){
				this.habpersona[1][1]=persona;
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				return alert("Fin");
			}

		}
		if(this.habpersona[2][0] === habitacion){
			if(this.habpersona[2][1]==="vacio"){
				this.habpersona[2][1]=persona;
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				return alert("Fin");
			}

		}
		if(this.habpersona[3][0] === habitacion){
			if(this.habpersona[3][1]==="vacio"){
				this.habpersona[3][1]=persona;
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				return alert("Fin");
			}

		}
		if(this.habpersona[4][0] === habitacion){
			if(this.habpersona[4][1]==="vacio"){
				this.habpersona[4][1]=persona;
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				return alert("Fin");
			}

		}
		if(this.habpersona[5][0] === habitacion){
			if(this.habpersona[5][1]==="vacio"){
				this.habpersona[5][1]=persona;
				if (this.habpersona[6][1] === persona) {
					this.habpersona[6][1] = "vacio";
				}
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				return alert("Fin");
			}

		}
		if(this.habpersona[6][0] === habitacion){
			if(this.habpersona[6][1]==="vacio"){
				this.habpersona[6][1]=persona;
				if (this.habpersona[0][1] === persona) {
					this.habpersona[0][1] = "vacio";
				}
				if (this.habpersona[1][1] === persona) {
					this.habpersona[1][1] = "vacio";
				}
				if (this.habpersona[2][1] === persona) {
					this.habpersona[2][1] = "vacio";
				}
				if (this.habpersona[3][1] === persona) {
					this.habpersona[3][1] = "vacio";
				}
				if (this.habpersona[4][1] === persona) {
					this.habpersona[4][1] = "vacio";
				}
				if (this.habpersona[5][1] === persona) {
					this.habpersona[5][1] = "vacio";
				}
				return alert("Fin");
			}

		}

		alert("La habitación no existe");





	}
}
// A PARTIR DE AQUI, SE EJECUTA (VARIABLES Y LLAMADAS -INSTANCIAS-)

var patri = "Patricia";
var juan = "Juan";
var alex = "Alex";
var noa = "Noa";


var CasaMartinSanz = new MiCasa();


CasaMartinSanz.habitacionlibre("Alex", "cocina");

console.log(CasaMartinSanz.habpersona);

