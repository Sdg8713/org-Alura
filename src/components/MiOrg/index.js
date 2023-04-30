import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    /*Estado - hooks
    useState
    Se declara de la siguiente forma useState()
    Para usar useState, se tiene que declarar una variable, la cual al ser de React,
    se tiene que usar corchetes, solo para los casos de useState, de lo contrario, 
    NO FUNCIONARA.
    const [nombreDeLaVariable, funcionQueActualiza] = useState(conSuValorInicial)
    const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () =>{
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }
*/
    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg