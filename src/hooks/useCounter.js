//un hook no es mas que una simple funcion

import { useState } from "react"

//validamos cuanto el usuario no manda el valor inicial por preterminado sera cero
export const useCounter = (valorInicial = 0)=>{
    const [counter, setcounter] = useState(valorInicial)

    const Increment = ()=>{
        setcounter(counter + 1)
    }

    const decrement = () =>{
        //podemos meter validaciones si queremos

        if(counter == 0) return;
         setcounter(counter - 1)
    }

    const reset = () =>{
        setcounter(0)
    }
    return {//mayormente se retorna objeto para destructurar
        counter,
        Increment,
        decrement,
        reset
    }
}