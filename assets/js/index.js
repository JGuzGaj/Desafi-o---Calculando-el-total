const precioinicial = document.querySelector(".precio-inicial");
const cantidad = document.querySelector(".cantidad");
const valortotal = document.querySelector(".valor-total");
const botonmas = document.querySelectorAll("button")[0];
const botonmenos = document.querySelectorAll("button")[1];

let precioBase = 400000;
let cantidadactual = 0;


precioinicial.innerHTML = precioBase;
valortotal.innerHTML = 0;

botonmas.addEventListener("click", function () {
  cantidadactual++;
  actualizarTotal();
});

botonmenos.addEventListener("click", function () {
  if (cantidadactual > 0) {
    cantidadactual--;
    actualizarTotal();
  }
});

function actualizarTotal() {
  cantidad.innerHTML = cantidadactual;
  valortotal.innerHTML = cantidadactual * precioBase;
}