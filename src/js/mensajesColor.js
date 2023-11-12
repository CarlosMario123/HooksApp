export function mensajeColor(valor){
    let color = `bg-green-500 text-white`;

    if(!valor){
        color = `bg-red-500 text-white`;
    }
   return color;
}