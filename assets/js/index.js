



document
	.querySelector('#btn_to_change')
	.addEventListener('click', handleChangeStyleBtn);

//ejercicio 2

document
	.querySelectorAll('input')
	.forEach((element) => element.addEventListener('input', handleGetCategories));

document.getElementById('calcular').addEventListener('click', function() {
    // Llamada a ambas funciones
    verifyCategories();
    verifyRules();
});

// functions
let category_1 = 0,
	category_2 = 0,
	category_3 = 0;

function handleGetCategories(event) {
	const element = event.target;
	console.log(element)
	//me devuelve el id
	const id = event.target.id;
	
	//me devuelve el value que ingreso en el input
	const value = Number(element.value);
	


	
	if (id === 'category_1') {
		category_1 = value;
	} else if (id === 'category_2') {
		category_2 = value;
	} else {
		category_3 = value;
	}
}


function verifyCategories() {
	const suma = category_1 + category_2 + category_3;
		if (suma <= 10) {
			document.getElementById("mensaje").innerHTML = 'Llevas ' + suma + ' productos';
			// Mostar el texto de la cantidad de stickers ern pantalla
		} else {
			document.getElementById("mensaje").innerHTML = 'Llevas demasiados productos';
		}
}

function verifyRules() {
    // Asumiendo que category_1, category_2 y category_3 son variables previamente definidas
    if (!category_1 && !category_2 && !category_3) {
        document.getElementById("msjInput1").innerHTML = "Debes ingresar un valor del 1 al 10 en cada campo";
    }
}

	// 	if (
	// 		category_1 == -1 ||
	// 		category_1 == 0 ||
	// 		category_1 > 10 ||

	// 		category_2 == -1 ||
	// 		category_2 == 0 ||
	// 		category_2 > 10 ||

	// 		category_3 == -1 ||
	// 		category_3 == 0 ||
	// 		category_3 > 10

	// 	) {
	// 		document.getElementById("mensaje").innerHTML = "Agrega un número entre 1 y 10";
	// 	}
	// }
	// if (
	// 	category_1 == undefined &&
	// 	category_2 == undefined &&
	// 	category_3 == undefined
	// ) {
	// 	document.getElementById("mensaje").innerHTML = "Agrega un número entre 1 y 10";

	// } 
	
	// else if (
	// 	category_1 == -1 ||
	// 	category_1 > 10 ||
	// 	category_2 == -1 ||
	// 	category_2 > 10 ||
	// 	category_3 == -1 ||
	// 	category_3 > 10
	// ) {
	// 	document.getElementById("mensaje").innerHTML = "Agrega un número entre 1 y 10";
	// } 



function handleChangeStyleBtn() {
	const element = this;
	const classList = element.classList;

	const hasClassActive = classList.contains('btn_active');

	if (hasClassActive) {
		// Quitamos la clase
		classList.remove('btn_active');
	} else {
		// Ponemos la clase
		classList.add('btn_active');
	}
}


//ejercicio3 

let selectedValues = { select1: null, select2: null, select3: null };

document.querySelectorAll('.select-ej3 select').forEach(function(selectElement) {
	selectElement.addEventListener('change', function(event) {
		const selectedValue = event.target.value; 
		const selectId = event.target.id; 

		console.log(`Seleccionado: ${selectedValue} del <select> con ID: ${selectId}`);

		// Actualizar el valor seleccionado para el <select> correspondiente
		selectedValues[selectId] = parseInt(selectedValue, 10);

		console.log(selectedValues);
	});
});

// Agregar evento de clic al botón con ID "ingresar"
document.getElementById('ingresar').addEventListener('click', function() {
	// Verificar las condiciones solo cuando se hace clic en el botón
	if(selectedValues.select1 === 9 && selectedValues.select2 === 1 && selectedValues.select3 === 1) {
		document.getElementById("mensaje3").innerHTML = "password 1 correcto";
	} else if (selectedValues.select1 === 7 && selectedValues.select2 === 1 && selectedValues.select3 === 4) {
		document.getElementById("mensaje3").innerHTML = "password 2 correcto";
	  } else {
		document.getElementById("mensaje3").innerHTML = "password incorrecto";
	  }
});