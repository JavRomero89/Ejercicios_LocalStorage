// // let name ="Javier"
// // let age = 34
// // let city = "Lima"
// // localStorage.setItem("name", name)
// // localStorage.setItem("age", age)
// // localStorage.setItem("ciudad de origen", city)

// /////////////////////////////////////////////////////////////////////////////
// let student = {
//     firstname: "Pepito",
//     lastname: "Perez",
//     age: 34,
//     country: "Namekusei",
//     courses : "[Math, Literature, Biology, Art]"
// }

// localStorage.setItem("ejercicio2",JSON.stringify(student))

// ////////////////////////////////////////////////////////////////////////////
// document.createElement("h1");

// let form = document.createElement("form");

// let firstname = document.createElement("input");
// firstname.name = "firstname";
// firstname.placeholder = "firstname";
// firstname.type = "text";
// form.appendChild(firstname);
// form.appendChild(document.createElement("br"));

// let lastname = document.createElement("input");
// lastname.name = "lastname";
// lastname.placeholder = "lastname";
// lastname.type = "text";
// form.appendChild(lastname);
// form.appendChild(document.createElement("br"));

// let age = document.createElement("input");
// age.name = "age";
// age.placeholder = "age";
// age.type = "number";
// form.appendChild(age);
// form.appendChild(document.createElement("br"));

// let country = document.createElement("input");
// country.name = "country";
// country.placeholder = "country";
// country.type = "text";
// form.appendChild(country);
// form.appendChild(document.createElement("br"));

// let courses = document.createElement("input");
// courses.name = "courses";
// courses.placeholder = "courses (comma separated)";
// courses.type = "text";
// form.appendChild(courses);

// form.appendChild(document.createElement("br")); 

// let submitButton = document.createElement("input");
// submitButton.type = "submit";
// submitButton.value = "Guardar";
// form.appendChild(submitButton);

// // Añadimos el formulario al documento
// document.body.appendChild(form);

// // Manejamos el evento de envío del formulario
// form.onsubmit = function(event) {
//     event.preventDefault();  
//     let student = {
//         firstname: form.firstname.value,
//         lastname: form.lastname.value,
//         age: parseInt(form.age.value),
//         country: form.country.value,
//         courses: form.courses.value.split(",")  // Convertimos el string a un array separando por comas
//     };
//     localStorage.setItem("ejercicio2", JSON.stringify(student));  
// };

const pokemons = [
	{ id: 1, name: 'bulbasaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
	{ id: 2, name: 'ivysaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
	{ id: 3, name: 'venusaur', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
	{ id: 4, name: 'charmander', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
	{ id: 5, name: 'charmeleon', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
	{ id: 6, name: 'charizard', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
	{ id: 7, name: 'squirtle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
	{ id: 8, name: 'wartortle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
	{ id: 9, name: 'blastoise', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' },
	{ id: 10, name: 'caterpie', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
	{ id: 11, name: 'metapod', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png' },
	{ id: 12, name: 'butterfree', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
	{ id: 13, name: 'weedle', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
	{ id: 14, name: 'kakuna', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
	{ id: 15, name: 'beedrill', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png' },
	{ id: 16, name: 'pidgey', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
	{ id: 17, name: 'pidgeotto', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png' },
	{ id: 18, name: 'pidgeot', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png' },
	{ id: 19, name: 'rattata', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png' },
	{ id: 20, name: 'raticate', img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png' }
]

function addToCart(pokemon) {
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	cart.push(pokemon);
	localStorage.setItem('cart', JSON.stringify(cart));
}

window.onload = function() {
	let container = document.getElementById('pokemonContainer');
	pokemons.forEach(pokemon => {
		let card = document.createElement('div');
		card.className = 'card';
		card.innerHTML = `
			<h2>${pokemon.name}</h2>
			<img src="${pokemon.img}" alt="${pokemon.name}">
			<button onclick='addToCart(${JSON.stringify(pokemon)})'>Comprar</button>
		`;
		container.appendChild(card);
	});
}

/////////////////////////////////////////////////////////////

function loadCart() {
	let container = document.getElementById('pokemonContainer');
	let cart = JSON.parse(localStorage.getItem('cart')) || [];
	
	if (cart.length === 0) {
		container.innerHTML = "<h2>Carrito vacío...</h2>";
	} else {
		cart.forEach(pokemon => {
			let card = document.createElement('div');
			card.className = 'card';
			card.innerHTML = `
				<h2>${pokemon.name}</h2>
				<img src="${pokemon.img}" alt="${pokemon.name}">
				<button onclick='removeFromCart(${pokemon.id})'>Eliminar</button>
			`;
			container.appendChild(card);
		});
	}
}

document.getElementById('loadCart').addEventListener('click', loadCart);
