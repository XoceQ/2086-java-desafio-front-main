import getDatos from "./getDatos.js";

const btnSortear = document.querySelector('.btn-sortear');
const fichaDescripcion = document.getElementById('ficha-descripcion');

function cargarInfoSerie() {
  getDatos(`/series/phrases`)
      .then(data => {
        fichaDescripcion.innerHTML = `
        <img src=" ${data.poster} " alt="${data.title}" style="width: 150px; height: auto; object-fit: cover;"/>
              <div>
                  <h2>${data.title}</h2>
                  <div class="descripcion-texto">
                      <p><i>"${data.phrase}"</i></p>
                      <p><b>Quoted by:</b> ${data.character}</p>
                  </div>
              </div>
          `;
      })
      .catch(error => {
          console.error('Error when obtaining the information of the series:', error);
      });
}


window.onload = cargarInfoSerie();
btnSortear.addEventListener('click', cargarInfoSerie);

// Selecciona el título
const titulo = document.getElementById('titulo');

// Inicializa la posición y la dirección del movimiento
let position = 0;
let direction = 1; // 1 para abajo, -1 para arriba

// Define la función de animación
function animarTitulo() {
  // Cambia la posición del título
  position += direction;

  // Aplica la transformación al título
  titulo.style.transform = `translateY(${position}px)`;

  // Cambia la dirección si alcanza un límite
  if (position > 10 || position < -10) {
    direction *= -1; // Cambia la dirección
  }

  // Llama a la función de nuevo en el siguiente frame
  requestAnimationFrame(animarTitulo);
}

// Inicia la animación
animarTitulo();