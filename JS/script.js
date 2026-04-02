
document.addEventListener("DOMContentLoaded", () => {

  const productos = [
  {
    id:1,
    nombre:"Rosas Rojas",
    precio:19990,
    imagen:"img/Rosas.jpg",
    descripcion:"Hermoso ramo romántico ideal para regalar a quien más amas"
  },
  {
    id:2,
    nombre:"Girasoles",
    precio:14990,
    imagen:"img/Girasoles.jpg",
    descripcion:"Flores alegres que transmiten felicidad"
  },
  {
    id:3,
    nombre:"Orquídea",
    precio:24990,
    imagen:"img/Orquidea.jpg",
    descripcion:"Regala elegancia y sofistificación"
  },
  {
    id:4,
    nombre:"Tulipanes",
    precio:17990,
    imagen:"img/Tulipanes.jpg",
    descripcion:"Destacan por sobre otras por sus tonos coloridos y frescos"
  },
  {
    id:5,
    nombre:"Lavandas",
    precio:12990,
    imagen:"img/Lavanda.jpg",
    descripcion:"Si priorizas el aroma y la relajación"
  },
  {
    id:6,
    nombre:"Peonías",
    precio:22990,
    imagen:"img/Peonias.jpg",
    descripcion:"Conocidas como las más delicadas y hermosas"
  }
];
window.productos = productos; //

  const contenedor = document.getElementById("productos");

  productos.forEach(p => {
    contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card shadow">
          <img src="${p.imagen}" 
      class="card-img-top"
               style="height:250px; object-fit:contain;">
          <div class="card-body text-center">
            <h5>${p.nombre}</h5>
            <p class="text-success">$${p.precio}</p>
            <button onclick="agregar(${p.id})" class="btn btn-success">
              Agregar
            </button>
            <button onclick="verDetalle(${p.id})"
            class="btn btn-outline-primary mt-2">
            Ver más
            </button>
          </div>
        </div>
      </div>
    `;
  });

  actualizarContador();
});


function agregar(id){
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const producto = window.productos.find(p => p.id === id);

  carrito.push(producto);

  localStorage.setItem("carrito", JSON.stringify(carrito));

  actualizarContador();

  alert("Producto agregado 🛒");
}

function actualizarContador(){
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const contador = document.getElementById("contador");

  if(contador){
    contador.textContent = carrito.length;
  }
  }

  function verDetalle(id){
localStorage.setItem("productoSeleccionado", id);
window.location.href = "producto.html";
}