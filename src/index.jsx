import React from "react"
import {Main} from "./components/Main"
import {createRoot} from "react-dom/client"

/*
createRoot(document.getElementById('root')).render(<Title/>)
createRoot(document.getElementById('Positivo')).render(<Positivo/>)
createRoot(document.getElementById('Negativo')).render(<Negativo/>)
createRoot(document.getElementById('List')).render(<List/>)
*/

createRoot(document.getElementById('root')).render(<Main/>)