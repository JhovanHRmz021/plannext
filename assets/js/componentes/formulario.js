import guardar from "../logica/memoria.js";
import renderEtiquetas from "./renderEtiqueta.js";

const iconoList = ["🏃🏻‍♀️", "📚", "🎁", "🛠️", "💵", "💻", "🏥", "🏕️", "🍲"];
const periodoList = ["Día", "Semana", "Mes", "Año"];

export default function formulario() {
  const form = renderEtiquetas("form", "form");
  
  // Campo Icono
  const divIcon = renderEtiquetas("div", "icon-meta");
  const labelIcono = renderEtiquetas("label");
  labelIcono.textContent = "Icono:";
  const selectIcono = renderEtiquetas("select");
  selectIcono.name = "icono";
  iconoList.forEach((icono) => {
    const option = renderEtiquetas("option");
    option.value = icono;
    option.textContent = icono;
    selectIcono.appendChild(option);
  });

  // Campo Meta
  const labelMeta = renderEtiquetas("label");
  labelMeta.textContent = 'meta: '
  const inputMeta = renderEtiquetas("input");
  inputMeta.type = "text";
  inputMeta.name = "meta";
  inputMeta.required = true;
  divIcon.append(labelIcono,selectIcono,labelMeta, inputMeta);

  // Campo Frecuencia
  const divPeriodo = renderEtiquetas('div','frecuencia-periodo')
  const labelFrecuencia = renderEtiquetas("label");
  labelFrecuencia.textContent = "Frecuencia:";
  const inputFrecuencia = renderEtiquetas("input");
  inputFrecuencia.type = "number";
  inputFrecuencia.name = "frecuencia";
  inputFrecuencia.required = true;

  // Campo Periodo
  const labelPeriodo = renderEtiquetas("label");
  labelPeriodo.textContent = "Periodo:";
  const selectPeriodo = renderEtiquetas("select");
  selectPeriodo.name = "periodo";
  periodoList.forEach((periodo) => {
    const option = renderEtiquetas("option");
    option.value = periodo.toLowerCase();
    option.textContent = periodo;
    selectPeriodo.appendChild(option);
  });
  divPeriodo.append(labelFrecuencia, inputFrecuencia, labelPeriodo, selectPeriodo);

  // Campo Duración
  const labelDuracion = renderEtiquetas("label");
  const divDuracion = renderEtiquetas('div', 'duracion-min');
  labelDuracion.textContent = "Duración:";
  const inputDuracion = renderEtiquetas("input");
  inputDuracion.type = "number";
  inputDuracion.name = "duracion";
  inputDuracion.required = true;

  // Campo Minutos/Horas
  const labelMinHr = renderEtiquetas("label");
  labelMinHr.textContent = "Minutos/Horas:";
  const selectMinHr = renderEtiquetas("select");
  selectMinHr.name = "min_hr";
  ["minutos", "hora"].forEach((unidad) => {
    const option = renderEtiquetas("option");
    option.value = unidad;
    option.textContent = unidad;
    selectMinHr.appendChild(option);
  });
  divDuracion.append(labelDuracion,inputDuracion,labelMinHr,selectMinHr)

  // Campo Repeticiones
  const labelRepeticiones = renderEtiquetas("label");
  const divRepeticiones = renderEtiquetas('div', 'rep-total');
  labelRepeticiones.textContent = "Repeticiones:";
  const inputRepeticiones = renderEtiquetas("input");
  inputRepeticiones.type = "number";
  inputRepeticiones.name = "repeticiones";
  inputRepeticiones.required = true;

  // Campo Total de Repeticiones
  const labelTotalRepeticiones = renderEtiquetas("label");
  labelTotalRepeticiones.textContent = "Total de Repeticiones:";
  const inputTotalRepeticiones = renderEtiquetas("input");
  inputTotalRepeticiones.type = "number";
  inputTotalRepeticiones.name = "total_repeticiones";
  inputTotalRepeticiones.required = true;
  divRepeticiones.append(labelRepeticiones,inputRepeticiones,labelTotalRepeticiones,inputTotalRepeticiones)

  // Campo Fecha Inicio
  const labelFechaInicio = renderEtiquetas("label");
  const divFecha = renderEtiquetas('div', 'fechas');
  labelFechaInicio.textContent = "Fecha Inicio:";
  const inputFechaInicio = renderEtiquetas("input");
  inputFechaInicio.type = "date";
  inputFechaInicio.name = "fecha_inicio";
  inputFechaInicio.required = true;

  // Campo Fecha Fin
  const labelFechaFin = renderEtiquetas("label");
  labelFechaFin.textContent = "Fecha Fin:";
  const inputFechaFin = renderEtiquetas("input");
  inputFechaFin.type = "date";
  inputFechaFin.name = "fecha_fin";
  inputFechaFin.required = true;
  divFecha.append(labelFechaInicio,inputFechaInicio,labelFechaFin,inputFechaFin)

  // Botón Crear
  const botonCrear = renderEtiquetas("button");
  const divButton = renderEtiquetas('div', 'botones');
  botonCrear.textContent = "Crear";
  divButton.appendChild(botonCrear)

  // Agregar evento al formulario
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar recarga
    const nuevaMeta = {
      id: Date.now().toString(), // Generar ID único
      icono: selectIcono.value,
      meta: inputMeta.value,
      frecuencia: inputFrecuencia.value,
      periodo: selectPeriodo.value,
      duracion: inputDuracion.value,
      min_hr: selectMinHr.value,
      repeticiones: inputRepeticiones.value,
      total_repeticiones: inputTotalRepeticiones.value,
      fecha_inicio: inputFechaInicio.value,
      fecha_fin: inputFechaFin.value,
    };
    guardar(nuevaMeta)
    // console.log("Nueva meta creada:", nuevaMeta);
    form.reset(); // Limpiar formulario
  });

  // Añadir elementos al formulario
  form.append(
    // labelIcono,
    // selectIcono,
    divIcon,
    // labelMeta,
    // inputMeta,
    // labelFrecuencia,
    // inputFrecuencia,
    // labelPeriodo,
    // selectPeriodo,
    divPeriodo,
    // labelDuracion,
    // inputDuracion,
    // labelMinHr,
    // selectMinHr,
    divDuracion,
    // labelRepeticiones,
    // inputRepeticiones,
    // labelTotalRepeticiones,
    // inputTotalRepeticiones,
    // divRepeticiones,
    // labelFechaInicio,
    // inputFechaInicio,
    // labelFechaFin,
    // inputFechaFin,
    divRepeticiones,
    divFecha,
    divButton
    // botonCrear
  );

  return form;
}
