import React, {useState} from "react"
import "./styles.css"

const arrayListaPositivo = []                      // Creamos una array vacío como contendor de futuros datos a manipular.

export function ListPositivo() {                   // Encabezado de la lista positiva y contenedor Div de la futura lista.
    return (
        <div className={'div-lista-ingreso'}>
            <h3>Lista de Ingresos</h3>
            <div id={'div-lista'}></div>
        </div>
    )
}

export function Positivo() {

    const [datos, setDatos] = useState({   //Creamos un array que va acontener 2 tipos de valores, el dato en sí y su estado actual.
        entrada: '',                                //Posición 0 del OBJETO con el valor inicial null correspondiente al input con nombre = entrada.
        montoASumar: '',                            //objeto 1 del array con el valor inicial null correspondiente al input con nombre = monto.
        fecha: ''                                   //objeto 2 del array con el valor inicial null correspondiente al input con nombre = fecha.
    })

    const handleInputChange = (datoPositivo) => {
        setDatos({
            ...datos,
            [datoPositivo.target.name]: datoPositivo.target.value //El primero asigna al primer NAME que aparece en nuestro objeto el valor del input
        })                                                         //que le corresponde del INPUT con el mismo NAME. Entonces, name = entrada, recibe
    }                                                              //el value del primer INPUT. Itera al recibir datos de distintos inputs.

    const cargarDatos = (props) => {
        props.preventDefault()

        const valorLista = (`${datos.entrada} $${datos.montoASumar} ${datos.fecha}`)
        const valorListaArray = (`${datos.entrada} $${datos.montoASumar} ${datos.fecha}`)

        if (arrayListaPositivo.includes(valorListaArray)) {
            alert("Ingreso duplicado")          // Alertamos al usuario de los datos duplicados.
            return                              // cortamos la ejecución del if.
        } else {
            arrayListaPositivo.push(valorListaArray) // Empujamos los datos al array que creamos previamente.
            console.log(arrayListaPositivo)     // Devolvemos por consola el contenido de dicho array.
        }

        const lista = document.querySelector("#div-lista")  // Seleccionamos el Div-Contenedor a manipular.
        const itemLista = document.createElement("div")     // Creamos un Div para nuestro item de la lista.

        //console.log(valorLista)                       // Muestra el último valor ingresado.
        itemLista.innerText = valorLista                // Asignamos el contenido de valorLista al texto interno del Div creado.
        itemLista.classList.add("list-item-positivo")   // Le agregamos a dicho Div una clase "list-item".
        lista.appendChild(itemLista)                    // Sumamos dicho Div dentro del Div-Contenedor.

        itemLista.addEventListener("click", () => {
            lista.removeChild(itemLista)
            arrayListaPositivo.pop()
            console.log(arrayListaPositivo)
        })
    }

    return (
        <div className={'form-div'}>
            <h2>Datos de ingresos</h2>
            <form onSubmit={cargarDatos} className={'form-input-positivo'}>

                <input type="text"
                       placeholder={'Razon del ingreso...'}
                       onChange={handleInputChange}
                       className={'text-positivo'}
                       name="entrada"
                       required
                />

                <input type="number"
                       onChange={handleInputChange}
                       className={'amount-input'}
                       placeholder={'Monto...'}
                       name="montoASumar"
                       required
                       min={1}
                />

                <input type="date"
                       onChange={handleInputChange}
                       className={'date-input'}
                       name="fecha"
                       required
                />

                <button type={'submit'}
                        className={'boton-ingreso'}
                >Registrar ingreso
                </button>
                <br/>
                <ListPositivo/>

            </form>
        </div>
    )
}