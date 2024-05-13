import "./Card.css"
import { Link } from "react-router-dom"


export function Card({titulo= " titulo", descripcion= "descripcion "}){
    
    

    
    return(
<div className="Card">
        <Link to={titulo}>
         <h2>{titulo}</h2>
         </Link>
    <p>{descripcion}</p>
</div>

    )

}