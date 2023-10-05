//----------------------------------------------
// 1.-Productos y CAtegorias
//----------------------------------------------



/*version 2 con precio formateado*/
  
let carrito = [];
let checkiVacio;
const productos = [
  {
    nombre: "Porcelana <br > Rapunzel",
    precio: 30000,
    imagen: "http://petitaideas.com/wp-content/uploads/2022/04/20220409_113515-1-scaled.jpg",
    descripcion: "Figura de porcelana fría de Rapunzel, detallada y delicada, ideal para decorar habitaciones de cuentos de hadas.<br><br>Altura: 15cm<br>Peso: 400grm<br>Base decorativa no incluida",
    categoria: 1
  },
  {
    nombre: "Porcelana <br > Mujer costurera",
    precio: 20000,
    imagen: "http://petitaideas.com/wp-content/uploads/2022/04/20220324_161703-scaled.jpg",
    descripcion: "Figurita de porcelana fría de una mujer sentada frente a una máquina de coser, con detalles realistas y colores vivos.<br><br>Altura: 10cm<br>Peso: 400grm<br>Base decorativa no incluida",
    categoria: 1
  },
  {
    nombre: "Porcelana <br > Novios",
    precio: 19990,
    imagen: "http://petitaideas.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-05-at-17.14.17.jpeg",
    descripcion: "Novios en porcelana<br>12cm<br>Base no incluida",
    categoria: 1
  },
  {
    nombre: "Producto 2.1 <br > Product Name",
    precio: 15500,
    imagen: "http://petitaideas.com/wp-content/uploads/2019/07/WhatsApp-Image-2019-05-18-at-02.51.17-1.jpg",
    descripcion: "Descripción del producto 3",
    categoria: 2
  },
  {
    nombre: "Producto 2.2 <br > Product Name",
    precio: 12500,
    imagen: "http://petitaideas.com/wp-content/uploads/2022/04/20220409_113515-1-scaled.jpg",
    descripcion: "Descripción del producto 4",
    categoria: 2
  },
  {
    nombre: "Producto 2.3 <br > Product Name",
    precio: 6000,
    imagen: "http://petitaideas.com/wp-content/uploads/2019/02/Petitaideas2018AUGUST09-e1549706787501.jpg",
    descripcion: "Descripción del producto 6",
    categoria: 2
  },
  {
    nombre: "Foamy <br > Product Name",
    precio: 10500,
    imagen: "http://petitaideas.com/wp-content/uploads/2019/02/Januar-2019-006-.jpg",
    descripcion: "Descripción del producto 5",
    categoria: 3
  },
  {
    nombre: "Porcelana <br > Product Name",
    precio: 13550,
    imagen: "http://petitaideas.com/wp-content/uploads/2019/02/Februar-2019-022-.jpg",
    descripcion: "Novios en porcelana<br>12cm<br>Base no incluida",
    categoria: 3
  },
  {
    nombre: "*Envio por Correo (Nacional)*",
    precio: 6000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpjL1H_x9CwpC9JZShpxJpuPBnD7q4i7M_Hg&usqp=CAU",
    descripcion: "Se envia a todo el territorio nacional<br >El precio del envio se paga junto con el total<br > ",
    categoria: 4
  }

];

// Agregar productos a sus categorías
productos.forEach(producto => {
  let productoHTML = `<div>
      <h3 class="nombre_producto">${producto.nombre}</h3>
      <img class="img_producto" src="${producto.imagen}" alt="${producto.nombre}">
      <p class="descripcion_producto">${producto.descripcion}</p>
      <p class="precio_producto">Precio CLP: $${producto.precio.toLocaleString()}</p>
      <button onclick="agregarProducto(event, '${producto.nombre}', ${producto.precio},'${producto.imagen}')">Agregar al carrito</button>
<p class="info_producto">CLP = PESO CHILENO</p>
  </div>`;
  switch (producto.categoria) {
    case 1:
      document.getElementById("categoria1").innerHTML += productoHTML;
      break;
    case 2:
      document.getElementById("categoria2").innerHTML += productoHTML;
      break;
    case 3:
      document.getElementById("categoria3").innerHTML += productoHTML;
      break;
    case 4:
      document.getElementById("categoria4").innerHTML += productoHTML;
      break;
    default:
      break;
  }
});

//----------------------------------------------
// 2.-AGREGAR PRODUCTO AL CARRITO / Carrito
//----------------------------------------------

const agregarProducto = (event, nombre, precio, imagen) => {
    event.preventDefault();
 
    if (nombre === "*Envio por Correo (Nacional)*") {

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombre);
    if (productoExistente) {
      // Mostrar el mensaje de envío
      const mensajeEnvio = document.getElementById("mensaje-envio");
      mensajeEnvio.textContent = "Aviso: El envío ya se ha agregado! Revise su carrito de compras.";
      mensajeEnvio.style.display = "block";
      // Ocultar el mensaje después de 3 segundos
      setTimeout(() => {
        mensajeEnvio.style.display = "none";
      }, 3000);
      return;
    }
  }

  carrito.push({ nombre, precio, imagen });
    actualizarCarrito();

  // Agregar clase al botón
  // event.target.classList.add("btn-agregar");
  // Eliminar clase después de un tiempo
  // setTimeout(() => {
  //   event.target.classList.remove("mensaje-envio")
  // }, 500);

};


//----------------------------------------------
// 3.-FUNCIONES DE ACTUALIZACION CARRITO
//----------------------------------------------
// Declara la variable checkiVacio fuera de la función actualizarCarrito para almacenar total de manera global
const actualizarCarrito = () => {
  let lista = "";
  let total = 0;

  // Ordfena lis productos alfabeticamente
  carrito.sort((a, b) => a.nombre.localeCompare(b.nombre));
  for (let i = 0; i < carrito.length; i++) {
    lista += `<li> <img src="${carrito[i].imagen}" width="50px"><div id="prod_nomebrecarrito">${carrito[i].nombre}</div> <div id="prod_precioencarrito">$${formatearNumero(carrito[i].precio)}</div> <button onclick='quitarProducto(${i})'>Quitar</button></li>`;
    total += carrito[i].precio; 
  }

  document.getElementById("carrito").innerHTML = lista;
  document.getElementById("total").innerHTML = `$${formatearNumero(total)}`;

  // toma el valor de total
  checkiVacio = total;

  // Actualizar la lista de carrito en el formulario de contacto
  actualizarListaCarrito();
  actualizarListaCarritoTotal(total);

  //muestra el contenido de Total
   // window.alert();

  //Check si el carrito esta vacio, asi depliega el boton de Enviar pedido
  if (checkiVacio === 0) {
    enviarPanel.classList.add('esconder');
    //window.alert('Carrito está vacío');
  } else {
    enviarPanel.classList.remove('esconder');
  }

};


//actializar Lista en el formulario
const actualizarListaCarrito = () => {
    let lista = "";
  for (let i = 0; i < carrito.length; i++) {
    lista += `${carrito[i].nombre} - $${carrito[i].precio.toLocaleString()}\n`;
  }
  document.getElementById("listacarrito").value = lista;
}


//actializar total en el formulario
const actualizarListaCarritoTotal = (total) => {
  document.getElementById("ListaCarritoTotal").value = `$${formatearNumero(total)}`;
  // Actualizar el número de artículos en el carrito al cargar la página
  actualizarNumItems();
};


// Mostrar el número de artículos en el carrito
function actualizarNumItems() {
  const numItems = carrito.length;
  const numItemsEl = document.querySelector('.num-items');
  numItemsEl.innerText = numItems;
  //sacudir el carrito cuando se agrega un numero
}


// Agrego formato al precio
const formatearNumero = (numero) => {
  return new Intl.NumberFormat('es-CL', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(numero);
};


//----------------------------------------------
// 4. panel carruito
//----------------------------------------------

// quitar producto
const quitarProducto = (index) => {
  carrito.splice(index, 1);
  actualizarCarrito();   
};

var botonCarrito = document.getElementById('boton-carrito');
var panelCarrito = document.getElementById('panel-carrito');
var cerrarPanel = document.getElementById('cerrarPanel_id');
var enviarPanel = document.getElementById('enviarPanel_id');
var tocheckout_btn = document.getElementById('tocheckout_id');
var todatoscontacto_btn = document.getElementById('atras_id');

// Seleccionar secciones 1, 2, 3
 const seccion1 = document.querySelector('#seccion1_id');
 const seccion2 = document.querySelector('#seccion2_id');
 const seccion3 = document.querySelector('#seccion3_id');

 seccion1.style.display = 'block';
 seccion2.style.display = 'none';
 seccion3.style.display = 'none';


// Boton carrito. Funciones al click

botonCarrito.addEventListener('click', function (e) {
  e.preventDefault();
  actualizarCarrito();

   // Actualizo carrito para que apareca con valor 0
  panelCarrito.classList.toggle('mostrar');
  
  if (panelCarrito.classList.contains('mostrar')) {
    document.body.style.overflow = 'hidden';
  } else { 
    document.body.style.overflow = 'initial';
  }

  

});

// Al cerrar el panel, que vuelva a la tienda online y active el scrolling
cerrarPanel.addEventListener('click', function (e) {
  panelCarrito.classList.toggle('mostrar');
  document.body.style.overflow = 'initial';
  seccion1.style.display = 'block';
  seccion2.style.display = 'none';
  seccion3.style.display = 'none';
  // seccion1.scrollIntoView({ behavior: 'smooth' });

});

// Este aplica a cunando precionas el boton "enciar pedido" naranjo
enviarPanel.addEventListener('click', function (e) {
  panelCarrito.classList.toggle('mostrar');
  document.body.style.overflow = 'initial';
  seccion1.style.display = 'none';
  seccion2.style.display = 'block';
  seccion3.style.display = 'none';
  seccion2.scrollIntoView({ behavior: 'smooth' });
  
});

// Al precoionar el btn de "Atrás" en el check out
todatoscontacto_btn.addEventListener('click', function (e) {
  // panelCarrito.classList.toggle('mostrar');
  // document.body.style.overflow = 'initial';
  seccion1.style.display = 'none';
  seccion2.style.display = 'block';
  seccion3.style.display = 'none';
  seccion2.scrollIntoView({ behavior: 'smooth' });
  
});

// Al precoionar el btn de proceder a check out
tocheckout_btn.addEventListener('click',function(e){

  seccion1.style.display = 'none';
  seccion2.style.display = 'none';
  seccion3.style.display = 'block';
  seccion3.scrollIntoView({ behavior: 'smooth' });
});





actualizarCarrito();

// Animar boton feedback
const btnAgregar = document.querySelector('.btn-agregar');
btnAgregar.addEventListener('click', () => {
  btnAgregar.classList.add('shake');
  setTimeout(() => {
    btnAgregar.classList.remove('shake');
  }, 100);
});


