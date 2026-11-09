import { useEffect, useState } from "react"
import {obtenerProductos,agregarProductos,eliminarProductos} from "../services/productoService"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";
export default function CatalogoProductos()
{
   const [data, setData] = useState([]);

   async function cargarProductos()
            {
                const datos = await obtenerProductos();
                console.log(datos);
                setData(datos.data);                 
            }

   async function agregarProducto(producto)
   {
      await agregarProductos(producto);
      await cargarProductos();
   }

   async function eliminarproducto(id)
   {
        await eliminarProductos(id);
        await cargarProductos();     
   }

    useEffect(
        ()=>
        {           
            cargarProductos();
        }        
        ,[]
    )

    return(
        <>
        <FormularioProducto guardar={agregarProducto} />
        <h2>Listado de Productos</h2>
        <div className="products-container">
        {
            data.map((e, indice)=>
            <CardProducto 
            key = {indice}
             id = {e.id}
             category = {e.category}
             name = {e.name} 
             stock = {e.stock}
             imageUrl = {e.imageUrl}  
             eliminar={eliminarproducto}         
            />
            
            )
        } 
        </div>        
        </>
    )
}
