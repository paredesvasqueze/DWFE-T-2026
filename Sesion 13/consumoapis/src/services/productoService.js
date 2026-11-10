const URL_API = "http://localhost:3000/api/products";

export async function obtenerProductos(){
  const response = await fetch(URL_API);
  if (!response.ok)
    {
        throw new Error("Error al obtener datos");
    }   
    return await response.json();
} 

export async function agregarProductos(producto)
{
  const response = await fetch(URL_API,{
    method : "POST",
    headers : {
           "Content-Type": "application/json"
    },
    body: JSON.stringify(producto)
  }) ;

    if (!response.ok) {
        throw new Error("Error al registrar producto");
    }
    return await response.json();
}

export async function eliminarProductos(id) {
  const response = await fetch(`${URL_API}/${id}`,{
    method : "DELETE",
    headers : {
           "Content-Type": "application/json"
    }}) ;

    if (!response.ok) {
        throw new Error("Error al eliminar producto");
    }
    return await response.json();  
}