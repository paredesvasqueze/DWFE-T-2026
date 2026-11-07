import { useEffect, useState } from "react"
import {obtenerProductos} from "../services/productoService"
import CardProducto from "./CardProducto";
export default function CatalogoProductos()
{
   const [data, setData] = useState([]);

    useEffect(
        ()=>
        {
            async function cargarProductos()
            {
                const datos = await obtenerProductos();
                setData(datos.data);                 
            }
            cargarProductos();

        }        
        ,[]
    )

    return(
        <>
        
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
            />
            
            )
        } 
        </div>        
        </>
    )
}
