class productos {
	constructor(nombre, precio, stock) {
		this.nombre = nombre;
		this.precio = precio;
		this.stock = stock;
	}
}
const producto1 = new productos("resma A4 Autor", 650, 87)
const producto2 = new productos("resma A3 Autor", 900, 64)
const producto3 = new productos("taza magica personalizada", 500, 30)
const producto4 = new productos("sello automatico", 450, 42)
const producto5 = new productos("aceite de Coco", 750, 25)
const producto6 = new productos("dulce de leche chico", 340, 18)
const producto7 = new productos("dulce de leche grande", 790, 18)
const producto8 = new productos("yerba Don Arregui", 350, 20)
const producto9 = new productos("yerba Kalena", 450, 20)

let productosGrafica = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]

let user = "javi";
let password = "gimenez";
let login;

function iniciarSesion(){
do {
	let userInput = prompt("Ingresar usuario por favor");
	let passwordInput = prompt("Ingresar password por favor");
 	login = (userInput == user && passwordInput == password)? true : false;
} while (login == false);
alert("¡Bienvenido " + user + " a graficaB377!");}

let abrirSesion = document.querySelector(".inicio")
let buscarInput = document.querySelector(".buscador")
let consultaFooter = document.getElementById("consultaFooter")

abrirSesion.addEventListener("click", iniciarSesion)
buscarInput.addEventListener("input", () => {
	let buscador = buscarInput.value
	console.log(buscador.toLowerCase())
	console.log(productosGrafica.filter (productosGrafica => productosGrafica.nombre.includes(buscador.toLowerCase())))	
})
consultaFooter.addEventListener("submit",(event) => {
	event.preventDefault()
	let email = document.querySelector(".correoFooter").value
	let asunto = document.querySelector(".asuntoFooter").value
	let consulta = document.querySelector(".textoFooter").value
	let correoConsulta = {contacto: email, Asunto: asunto, consulta: consulta}
	console.log(correoConsulta)
	consultaFooter.reset()
})








