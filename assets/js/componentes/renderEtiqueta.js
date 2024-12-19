export default function renderEtiquetas(etiqueta, clase) {
    const render = document.createElement(etiqueta)
    if(clase != null) {
        render.classList.add(clase)
    }
    return render;
}