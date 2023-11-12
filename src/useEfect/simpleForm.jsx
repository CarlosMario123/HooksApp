import { useState,useEffect } from "react"
import { Mensaje } from "../componentes/Mensaje";

export default function SimpleForm() {
   

 
    const [formState,setForm] = useState({
        username:"",
        email:"",
        contrasena:""
    })

    //evento para cambiar el input
    const inputChange = ({target}) =>{
        const {name,value} = target;//destructuramos esto ya que el target tiene 2 metodos uno para name y otro para value

        //manejemos el set de form
        setForm({
            ...formState,
            [name]:value
        })
        console.log(name + ":" + value)
    }

    //practicadno con useEfect

    useEffect(()=>{
        console.log("la variable form esta cambiando")
    },[formState])
    
    //para evaluar la contrasena y practicando con useEfect
    useEffect(()=>{
        if(formState.contrasena.length < 5){
            console.log("contraseña insegura")
        }else{
            console.log("contraseña segura")
        }
        
       
    },[formState.contrasena])
    
  return (
    <div className="p-3 bg-gray-200 rounded-md ">
        <h1 className="mb-2 font-black">Formulario sImple</h1>
        <div className="flex flex-col gap-y-2">
        <Mensaje pass ={formState.contrasena.length}/>
        <input type="text" placeholder="username" name="username" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        <input type="email" placeholder="Email" name="email" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        <input type="password" placeholder="contrasena" name="contrasena" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        </div>
       
    </div>
  )
}
