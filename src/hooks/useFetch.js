import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function PostmanLike() {
  const { state, setUrl } = useFetch("");
  const [endpoint, setEndpoint] = useState("");

  const realizarPeticion = () => {
    setUrl(endpoint);
  };

  const handleInputChange = (event) => {
    setEndpoint(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-3 bg-gray-200 rounded-md gap-y-4 w-96">
      <h2 className="w-full">Ingrese el endpoint para realizar la petición</h2>
      <input type="text" className="w-full" value={endpoint} onChange={handleInputChange} />
      <button className="w-56 p-1 text-white bg-blue-800 hover:bg-blue-500" onClick={realizarPeticion}>
        Realizar Petición
      </button>

      <div style={{ maxHeight: "48px", overflowY: "auto" }} className="w-full">
        <p>Respuesta:</p>
        {state.isLoading ? (
          <p>Cargando...</p>
        ) : state.hasError ? (
          <p>Error en la petición: {state.hasError.message}</p>
        ) : (
          <pre>{JSON.stringify(state.data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}
