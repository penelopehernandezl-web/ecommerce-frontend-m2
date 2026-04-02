let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let lista = document.getElementById("lista");
let total = 0;

function mostrarCarrito(){
  lista.innerHTML = "";
  total = 0;

  if(carrito.length === 0){
    lista.innerHTML = "<p>Tu carrito está vacío</p>";
    document.getElementById("total").textContent = "";
    return;
  }

  carrito.forEach((item, index) => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        
        <div>
          <strong>${item.nombre}</strong><br>
          <span>$${item.precio}</span>
        </div>

        <button onclick="eliminar(${index})" class="btn btn-danger btn-sm">
          Eliminar
        </button>

      </li>
    `;
    total += item.precio;
  });

  document.getElementById("total").textContent = "Total: $" + total;
}


// 🔥 FUNCIÓN ELIMINAR
function eliminar(index){
  carrito.splice(index, 1); // elimina 1 elemento

  localStorage.setItem("carrito", JSON.stringify(carrito));

  mostrarCarrito();
}


// iniciar
mostrarCarrito();