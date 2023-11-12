import useWindowWidth from "../hooks/useWindow"

export default function WindowWidth() {

   const  windowWidth =   useWindowWidth();
  return (
    <div className="flex flex-col items-center w-64 p-2 bg-gray-200 rounded-md gap-y-4">
        <h1 className="w-full font-black text-center">Vista para ver el uso del hook UseWindowWidth</h1>
        <p className="w-full text-center">Medida width actual de la pantalla encoja la pantalla si quiere ver como varia</p>
          <p className="w-32 p-2 font-semibold text-center text-white bg-blue-600 rounded-sm">{windowWidth}</p>
          
    </div>
  )
}
