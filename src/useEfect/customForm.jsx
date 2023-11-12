import { useEffect } from "react"
import { Mensaje } from "../componentes/Mensaje";
//importamos nuestro custom hook
import { useForm } from "../hooks/useForm";
export default function CustomForm() {
   

    //utilizamos nuestro custom hook
    const {formState,inputChange} = useForm({
        username:"",
        email:"",
        contrasena:""
    })
 
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

    const enviarDatos = ()=>{
        console.log(formState)
    }
    
  return (
    <div className="p-3 bg-gray-200 rounded-md ">
        <h1 className="mb-2 font-black">Formulario con custom hook</h1>
        <div className="flex flex-col gap-y-2">
        <Mensaje pass ={formState.contrasena.length}/>
        <input type="text" placeholder="username" name="username" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        <input type="email" placeholder="Email" name="email" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        <input type="password" placeholder="contrasena" name="contrasena" className="p-1 border rounded-sm border-slate-400 text-[0.9rem]" onChange={inputChange}/>
        </div>
       <button onClick={enviarDatos} className="p-1 mt-2 text-white bg-blue-600 rounded-sm">Simular envio</button>
    </div>
  )
}
