import renderEtiquetas from "./renderEtiqueta.js";

function renderTitulo(icono, meta) {
  const divTitulo = renderEtiquetas("div", "meta-titulo");
  const span = renderEtiquetas("span");
  const p = renderEtiquetas("p");
  span.innerHTML = icono;
  p.innerHTML = meta;
  divTitulo.appendChild(span);
  divTitulo.appendChild(p);
  return divTitulo;
}

function renderPerido(frecuencia, periodo) {
  const divPeriodo = renderEtiquetas("div", "meta-periodo");
  const p = renderEtiquetas("p");
  p.innerHTML = `${frecuencia} / ${periodo}`;
  divPeriodo.appendChild(p);
  return divPeriodo;
}

function renderCompleto(repeticiones, totalRepeticiones) {
  const divCompleto = renderEtiquetas("div", "meta-completo");
  const p = renderEtiquetas("p");
  p.innerHTML = `${repeticiones} / ${totalRepeticiones}`;
  divCompleto.appendChild(p);
  return divCompleto;
}

export default function renderMetas(lista) {
  if (!Array.isArray(lista)) {
    console.error(
      "El argumento proporcionado a renderMetas no es un array:",
      lista
    );
    return document.createTextNode(
      "Error: no se pudieron renderizar las metas."
    );
  }

  const fragment = document.createDocumentFragment(); // Usar un fragmento para optimizar el DOM

  lista.forEach((index) => {
    const {
      icono,
      meta,
      frecuencia,
      periodo,
      repeticiones,
      total_repeticiones,
    } = index;

    // Crear un contenedor para cada meta
    const divMeta = renderEtiquetas("div", "metass");

    // Agregar los elementos individuales a este contenedor
    divMeta.appendChild(renderTitulo(icono, meta));
    divMeta.appendChild(renderPerido(frecuencia, periodo));
    divMeta.appendChild(renderCompleto(repeticiones, total_repeticiones));

    // Agregar el contenedor de la meta al fragmento
    fragment.appendChild(divMeta);
  });

  // Retornar el fragmento con todas las metas
  return fragment;
}