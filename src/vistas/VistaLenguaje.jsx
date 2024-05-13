import React from "react";
import "./VistaLenguaje.css"

export function VistaLenguaje({len}){
    return(
        <div className="lenVista">

            <h1>{len.nombre}</h1>
            <h2>{len.comentario}</h2>
            <img src= {len.image}alt={len.image + "image"}/>

        </div>
    )
}