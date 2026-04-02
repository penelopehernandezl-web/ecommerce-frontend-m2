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
    descripcion:"Regala elegancia y sofisticación"
  },
  {
    id:4,
    nombre:"Tulipanes",
    precio:17990,
    imagen:"img/Tulipanes.jpg",
    descripcion:"Destacan por sus tonos coloridos y frescos"
  },
  {
    id:5,
    nombre:"Lavandas",
    precio:12990,
    imagen:"img/Lavanda.jpg",
    descripcion:"Ideales para aroma y relajación"
  },
  {
    id:6,
    nombre:"Peonías",
    precio:22990,
    imagen:"img/Peonias.jpg",
    descripcion:"Conocidas como las más delicadas y hermosas"
  }
];

// 🔥 obtener ID guardado
const id = localStorage.getItem("productoSeleccionado");

// 🔥 buscar producto correcto
const producto = productos.find(p => p.id == id);

// 🔥 mostrar datos
document.getElementById("nombre").textContent = producto.nombre;
document.getElementById("precio").textContent = "$" + producto.precio;
document.getElementById("descripcion").textContent = producto.descripcion;
document.getElementById("imagen").src = producto.imagen;


// 🔥 agregar al carrito correctamente
function agregarCarrito(){ 
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  carrito.push(producto); // 👈 guarda objeto completo

  localStorage.setItem("carrito", JSON.stringify(carrito)); 

  alert("Producto agregado 🛒"); 
}
