class MedicinaArticulos {
    constructor(categoria, nombre, descripcion, imagen, precio){
        this.categoria = categoria;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;
    }
}

const productos = [
    new MedicinaArticulos(
        "medicamento",
        "Ibuprofeno",
        "Analgésico y antipirético para el alivio del dolor y la fiebre.",                              
        "../imgs/ibuprofeno.png",
        15.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Amoxicilina",
        "Antibiótico de amplio espectro para el tratamiento de infecciones bacterianas.",
        "../imgs/Amoxicilina.jpg",
        25.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Omeprazol",
        "Inhibidor de la bomba de protones para el tratamiento de úlceras gástricas.",
        "../imgs/Omeprazol.png",
        30.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Loratadina",
        "Antihistamínico para el alivio de síntomas alérgicos.",
        "../imgs/Loratadina.png",
        20.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Dipirona",
        "Analgésico y antipirético para el alivio del dolor y la fiebre.",
        "../imgs/Dipirona.png",
        12.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Clonazepam",
        "Ansiolítico para el tratamiento de la ansiedad y los trastornos del sueño.",
        "../imgs/Clonazepam.png",
        35.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Metformina",
        "Hipoglucemiante para el tratamiento de la diabetes tipo 2.",
        "../imgs/Metformina.png",
        28.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Atenolol",
        "Beta bloqueante para el tratamiento de la hipertensión y las enfermedades cardíacas.",
        "../imgs/Atenolol.png",
        22.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Simvastatina",
        "Estatinas para el tratamiento del colesterol alto.",
        "../imgs/Simvastatina.png",
        32.99,
    ),
    new MedicinaArticulos(
        "medicamento",
        "Ciprofloxacino",
        "Antibiótico de amplio espectro para el tratamiento de infecciones bacterianas.",
        "../imgs/Ciprofloxacino.png",
        38.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Cepillo Dental Oral-B",
        "Cepillo dental de alta calidad para una limpieza efectiva.",
        "../imgs/Cepillo Dental Oral-B.png",
        45.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Pacha de Plástico",
        "Pacha de plástico resistente para uso doméstico.",
        "../imgs/Pacha de Plástico.jpg",
        10.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Peine de Madera",
        "Peine de madera natural para un cuidado suave del cabello.",
        "../imgs/Peine de Madera.jpg",
        15.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Kit de Emergencia Básico",
        "Kit con artículos esenciales para situaciones de emergencia.",
        "../imgs/Kit de Emergencia Básico.jpg",
        25.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Salud crema corporal",
        "Crema hidratante para el cuidado diario de la piel.",
        "../imgs/Salud crema corporal.jpg",
        20.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Protector Solar SPF 50",
        "Protector solar con alta protección contra los rayos UV.",
        "../imgs/Protector Solar SPF 50.png",
        12.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Lociones para el Cuidado de la Piel",
        "Loción hidratante para el cuidado diario de la piel.",
        "../imgs/Lociones para el Cuidado de la Piel.jpg",
        18.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Higiene facial",
        "Kit de higiene facial para una limpieza profunda y cuidado de la piel.",
        "../imgs/Higiene facial.png",
        25.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Alka-Seltzer",
        "Analgésico para el alivio del dolor y la inflamación.",
        "../imgs/Alka-Seltzer.png",
        30.99,
    ),
    new MedicinaArticulos(
        "articulo",
        "Redoxitos",
        "Vitaminas en gomitas para el fortalecimiento del sistema inmunológico.",
        "../imgs/Redoxitos.png",
        22.99,
    )
];

const contenedor = document.getElementById("productos");
const modal = document.getElementById("modal");
const modalNombre = document.getElementById("modalNombre");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalPrecio = document.getElementById("modalPrecio");
const modalImagen = document.getElementById("modalImagen");
const cerrarModal = document.getElementById("cerrarModal");
const agregarCarrito = document.getElementById("agregarCarrito");
const contador = document.getElementById("contador");
let carrito = [];
let productoActual = null;

function todosProductos(categoria){
    contenedor.innerHTML = "";
    const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    productosFiltrados.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="${producto.imagen}">
        <div class="contenido">
            <h3>${producto.nombre}</h3>
            <button>Ver</button>
        </div>
    `;
    card.querySelector("button").addEventListener("click", () => {
        productoActual = producto;
        modalNombre.textContent = producto.nombre;
        modalDescripcion.textContent = producto.descripcion;
        modalPrecio.textContent = "Q." + producto.precio;
        modalImagen.src = producto.imagen;
        modal.style.display = "flex";
    });
    contenedor.appendChild(card);
});
}
const enlaceVista = document.querySelectorAll(".enlace-vista");
    enlaceVista.forEach(enlace => {
            enlace.addEventListener("click", (evento) => {
            evento.preventDefault(); 
            const categoriaASeleccionar = evento.currentTarget.getAttribute("data-categoria");
            todosProductos(categoriaASeleccionar);
        });
});

cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
agregarCarrito.addEventListener("click", () => {
    carrito.push(productoActual);
    contador.textContent = carrito.length;
    alert(productoActual.nombre + " agregado al carrito");
    modal.style.display = "none";
});

/*Cambiar tema sitio web*/
function cambiarTema(){
    const selector = document.getElementById("temaSelect");
    const temaSeleccionado = selector.value;
    document.body.className = temaSeleccionado;
}

//elementos carrusel
const carrusel = document.getElementById("carruselContenidoId");
const btnAnterior = document.getElementById("btnAnteriorId");
const btnSiguiente = document.getElementById("btnSiguienteId");
const anchoImagen = 460;

btnSiguiente.onclick = function() {moverSiguiente();}
btnAnterior.onclick = function() {moverAnterior();}

function moverSiguiente() {
        if(carrusel.scrollLeft+carrusel.clientWidth >= carrusel.scrollWidth -10){
            carrusel.scrollLeft = 0;
        }else{
            carrusel.scrollLeft += anchoImagen;
        }
    }

    function moverAnterior() {
        if(carrusel.scrollLeft <= 0){
            carrusel.scrollLeft = carrusel.scrollWidth;
        }else{
            carrusel.scrollLeft -= anchoImagen;
        }
    }
setInterval(function(){moverSiguiente();},2500);