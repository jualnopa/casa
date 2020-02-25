

/* CLASE mascota {
	PROPIEDADES (variables)
		- cabeza
		- patas
		- cola

	METODOS (funciones)
		- camina
		- corre
		- come	
}

     OBJETO GATO UNO {
	cabeza: grande
	patas: largas
	cola: pequena

	camina: rápido
	corre: largas distancias
	come: comida especial
}

     OBJETO GATO DOS {
	cabeza: pequena
	patas: cortas
	cola: larga

	camina: lento
	corre: no
	come: cualquier comida 
}


mostrar gato uno >  cómo es su cabeza //  EL GATO 1 , MUESTRAME SU CABEZA

*/


// CREAR UNA CLASE

	class miClaseuno{
		constructor (nombre, apellido){ /* el constructor envía esas propiedades: el primero y el segundo */
			this.uno = nombre; // primera propiedad, la llamamos
			this.dos = apellido; // segunda propiedad, también la llamamos
			this.tres = "Hola a todos"; 
		}


		miMetodoUno(parametro_uno, parametro_dos){
			return this.uno;  // me devuelve el valor pero aún no sé donde si en la consola, document.write,....
		};
		

		miMetodoDos(parametroUno, parametroDos){
			document.write(  // aqui ya he decido que lo voy a mostrar en document.write
	        	"El parametro UNO es: " + parametroUno + "</br> El parametro DOS es: " + parametroDos );
		}
	};

// CREAR UN OBJETO - instanciar un objeto 

var objetoUno = new miClaseuno ("Luis", "Gomez"); // instanciar un objeto

var objetoDos = new miClaseuno ("Cristina", "Sanz"); // instanciar un objeto

// RECUPERAR DATOS QUE HEMOS SOLICITADO

	document.write(objetoUno.uno);
	document.write(objetoUno.dos);
	document.write(objetoDos.uno);
	document.write(objetoDos.dos);

	objetoUno.miMetodoUno("Lucia", 5555);
	objetoUno.miMetodoDos("Alex", 2222);
	objetoDos.miMetodoUno("Carmen", 11111);
	objetoDos.miMetodoDos("Silvia", 9999);


// HERENCIA (reutilizar una clasa, anteriormente dada)


	class miClasedos extends miClaseuno{			// herencia de la miClaseuno
		constructor (uno, dos, cuarto){
			super (uno, dos)
			this.cuatro = cuarto;
		}

	}

var ObjetoTres = new miClasedos ("Miguel", "Gonzalez", 55);

document.write( ObjetoTres.uno);
document.write( ObjetoTres.dos);
document.write (ObjetoTres.tres);
document.write (ObjetoTres.cuatro);

