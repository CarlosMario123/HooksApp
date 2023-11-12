import { mensajeColor } from "../js/mensajesColor";
export function Mensaje({pass}) {
    let mensaje = (pass < 5) ? "Contraseña poco segura" : "Contraseña segura";
     
    if(pass == 0){
       return
    }
   
    return (
      <p className= {mensajeColor(pass >= 5)}>{mensaje}</p>
    );
  }