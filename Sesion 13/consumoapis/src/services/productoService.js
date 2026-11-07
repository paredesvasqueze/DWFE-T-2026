const URL_API = "http://localhost:3000/api/products";

export async function obtenerProductos(){
  const response = await fetch(URL_API);
  if (!response.ok)
    {
        throw new Error("Error al obtener datos");
    }   
    return await response.json();
} 