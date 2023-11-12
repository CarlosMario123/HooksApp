import React, { useState } from "react";

export default function PostmanLike() {
  const [endpoint, setEndpoint] = useState("");
  const [respuesta, setRespuesta] = useState(null);

  const realizarPeticion = async () => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setRespuesta(data);
    } catch (error) {
      console.error("Error al realizar la petición:", error);
      setRespuesta(null);
    }
  };

  const handleInputChange = (event) => {
    setEndpoint(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-3 pb-2 overflow-y-auto bg-gray-200 rounded-md gap-y-4 h-72 w-[30rem]">
      <h2>Ingrese el endpoint para realizar la petición</h2>
      <input type="text" className="w-full" value={endpoint} onChange={handleInputChange} />
      <button className="w-56 p-1 text-white bg-blue-800 hover:bg-blue-500" onClick={realizarPeticion}>
        Realizar Petición
      </button>

      <div className="overflow-x-auto overflow-y-auto w-[29rem] px-2 mt-2">
        <p>Respuesta:</p>
        {respuesta ? (
            
          <pre className="text-[0.7rem]">{JSON.stringify(respuesta, null, 2)}</pre>
        ) : (
          <p>No hay respuesta o error en la petición</p>
        )}
      </div>
    </div>
  );
}
