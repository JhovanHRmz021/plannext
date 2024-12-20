// import formulario from "./assets/js/componentes/formulario.js"
import renderMetas from "./assets/js/componentes/metas.js"
import renderEtiquetas from "./assets/js/componentes/renderEtiqueta.js"

const main = document.querySelector('.main')

const listaMok = [{
    id: "1",
    icono: "🏃🏻‍♀️",
    meta: "correr",
    frecuencia: "1",
    periodo: "día",
    duracion: "1",
    min_hr: "minutos",
    repeticiones: "1",
    total_repeticiones: "1",
    fecha_inicio: "2024-12-19",
    fecha_fin: "2024-12-30"
},
{
    id: "2",
    icono: "🏃🏻‍♀️",
    meta: "correr",
    frecuencia: "1",
    periodo: "día",
    duracion: "1",
    min_hr: "minutos",
    repeticiones: "1",
    total_repeticiones: "1",
    fecha_inicio: "2024-12-19",
    fecha_fin: "2024-12-30"
}
]
const div = renderEtiquetas('div')
// const formularios = formulario();
const metasMok = renderMetas(listaMok);
div.appendChild(metasMok)
main.appendChild(div)
