const listaMeta = [];
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
export default function guardar(metaObj) {
    console.log('Meta guardada ');
    listaMeta.push(metaObj);

}