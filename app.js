import formulario from "./assets/js/componentes/formulario.js"
import renderEtiquetas from "./assets/js/componentes/renderEtiqueta.js"

const main = document.querySelector('.main')


const div = renderEtiquetas('div')
// const p = renderEtiquetas('p', 'hola')
// p.textContent = 'hola'
const formularios = formulario();
// div.appendChild(p)
div.appendChild(formularios)
main.appendChild(div)
