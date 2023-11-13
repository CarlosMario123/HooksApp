import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching";
import { useCounter } from "../hooks/useCounter";

export default function VistaFetch() {
    const {Increment,decrement,counter} = useCounter(1);
  const { data, isLoading, hasError } = useFetching(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  const [info, setInfo] = useState({});

  useEffect(() => {
    /*nota*/

    /*El error en tu código es que estás tratando de acceder a la propiedad data del gancho useFetching antes de que se haya 
    inicializado. El gancho useFetching es un gancho asíncrono, y tarda algún tiempo en recuperar los datos de la API. 
    Como resultado, la propiedad data será undefined cuando se llame por primera vez al callback useEffect. */

    //--> por esa razon agregamos una condicional si lo datos son undefined es que no estan cargados todavia
    if (data) {
      const{front_default} = data.sprites.other.home;
      setInfo({ name: data.name,url:front_default});
      console.log(info)
    }

  }, [data]);

  if (hasError) {
    return <p>Oh no parece que hubo un error</p>;
  }

  return (
    <div className="flex flex-col items-center p-4 rounded-sm w-96 bg-slate-300">
      <h1 className="text-xl font-semibold text-center text-black">
        Usando el custom hook useFetch
      </h1>

      {isLoading ? (<p>Cargando...</p>) : (
      <div className="flex flex-col items-center">
          <img src={info.url} alt="" className="h-32 w-36"/>
          <p className="mt-2 text-xl font-bold">{info.name}</p>
          <div className="flex flex-wrap mt-3 gap-x-2">
          <button onClick={decrement} className="p-1 text-white bg-blue-700" disabled = {isLoading}>Regresar</button>
          <button onClick={Increment} className="p-1 text-white bg-blue-700" disabled = {isLoading}>Next pokemon</button>
          </div>
      
       
      </div>)}
    </div>
  );
}
