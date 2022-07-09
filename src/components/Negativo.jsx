import React, {useState} from "react";
import "./styles.css"

const arrayListaNegativo = []

export function ListNegativo () {
    return (
        <div className={'div-lista-egreso'}>
            <h3>Lista de Egresos</h3>
            <div id={'div-lista-egreso'}></div>
        </div>
    )
}

export function Negativo() {

    const [datos, setDatos] = useState({   //Creamos un array que va acontener 2 tipos de valores, el dato en sí y su estado actual.
        entrada: '',                                //Posición 0 del OBJETO con el valor inicial null correspondiente al input con nombre = entrada.
        montoASumar: '',                            //objeto 1 del array con el valor inicial null correspondiente al input con nombre = monto.
        fecha: ''                                   //objeto 2 del array con el valor inicial null correspondiente al input con nombre = fecha.
    })

    const handleInputChange = (datoNegativo) => {
        setDatos({
            ...datos,
            [datoNegativo.target.name] : datoNegativo.target.value  //El primero asigna al primer NAME que aparece en nuestro objeto el valor del input
        })                                                          //que le corresponde del INPUT con el mismo NAME. Entonces, name = entrada, recibe
    }                                                               //el value del primer INPUT. Itera al recibir datos de distintos inputs.

    const cargarDatos = (props) => {
        props.preventDefault()

        const valorLista = (`${datos.entrada} -$${datos.montoASumar} ${datos.fecha}`)
        const valorListaArray = (`${datos.entrada} $${datos.montoASumar} ${datos.fecha}`)

        if (arrayListaNegativo.includes(valorListaArray)){

            alert("Ingreso duplicado")          // Alertamos al usuario de los datos duplicados.
            return                              // cortamos la ejecución del if.

        } else {

            arrayListaNegativo.push(valorListaArray) // Empujamos los datos al array que creamos previamente.
            console.log(arrayListaNegativo)          // Devolvemos por consola el contenido de dicho array.
        }

        const lista = document.querySelector("#div-lista-egreso")   // Seleccionamos el Div-Contenedor a manipular.
        const itemLista = document.createElement("div")             // Creamos un Div para nuestro item de la lista.

        //console.log(valorLista)                       // Muestra el último valor ingresado.
        itemLista.innerText = valorLista                // Asignamos el contenido de valorLista al texto interno del Div creado.
        itemLista.classList.add("list-item-negativo")   // Le agregamos a dicho Div una clase "list-item".
        lista.appendChild(itemLista)                    // Sumamos dicho Div dentro del Div-Contenedor.

        itemLista.addEventListener("click", () => {
            lista.removeChild(itemLista)
            arrayListaNegativo.pop()
            console.log(arrayListaNegativo)
        })
    }

    return (
        <div className={'form-div'}>
            <h2>Datos de egresos</h2>
            <form onSubmit={cargarDatos} className={'form-input-negativo'}>

                <input type="text"
                       placeholder={'Razon del egreso...'}
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
                />

                <input type="date"
                       onChange={handleInputChange}
                       className={'date-input'}
                       name="fecha"
                       required
                />

                <button type={'submit'}
                        className={'boton-egreso'}
                >Registrar egreso
                </button>
                <br/>
                <ListNegativo/>

            </form>
        </div>
    )
}