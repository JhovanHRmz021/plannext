import formulario from "./componentes/formulario.js";
import renderMetas from "./componentes/metas.js";

const meta = [
    {
      id: "1",
      icono: "🏃🏻‍♀️",
      meta: "Correr una cuadra",
      frecuencia: 1,
      periodo: "semana",
      duracion: 10,
      min_hr: "minutos",
      repeticiones: 2,
      total_repeticiones: 10,
      fecha_inicio: "2024-12-10",
      fecha_fin: "2025-02-12",
    },
    {
      id: "22",
      icono: "📚",
      meta: "Leer un libro",
      frecuencia: 1,
      periodo: "mes",
      duracion: 12,
      min_hr: "minutos",
      repeticiones: 3,
      total_repeticiones: 10,
      fecha_inicio: "2024-12-10",
      fecha_fin: "2025-02-12",
    },
  ];
  
  // Selecciona el contenedor principal donde se renderizarán los componentes
  const divMain = document.querySelector(".main");
  
  // Función que limpia el contenido actual
  function limpiarContenido() {
    divMain.innerHTML = "";
  }
  
  // Función para manejar las rutas
  function manejarRuta(ruta) {
    limpiarContenido(); // Limpia el contenido actual del main
  
    if (ruta === "lista") {
      // Renderizar la lista de metas
      const metasRenderizadas = renderMetas(meta);
      divMain.appendChild(metasRenderizadas);
    } else if (ruta === "nuevo") {
      // Renderizar el formulario
      const formularioRender = formulario();
      divMain.appendChild(formularioRender);
    } else {
      divMain.innerHTML = "<p>Ruta no encontrada</p>"; // Para rutas desconocidas
    }
  }
  
  // Configurar el evento de clic para los enlaces
  document.querySelectorAll("a[data-route]").forEach((enlace) => {
    enlace.addEventListener("click", (evento) => {
      evento.preventDefault(); // Evitar la recarga de página
      const ruta = enlace.dataset.route; // Obtener el valor de data-route
      manejarRuta(ruta); // Manejar la ruta correspondiente
    });
  });
  
  // Renderizar la ruta inicial
  manejarRuta("lista");