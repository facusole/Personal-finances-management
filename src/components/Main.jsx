import React from "react"
import {Title} from "./Title"
import {Negativo} from "./Negativo"
import {Positivo} from "./Positivo"

export function Main() {
    return (
        <div className="grid-container">
            <Title/>
            <Positivo/>
            <Negativo/>
        </div>
            
    )
}