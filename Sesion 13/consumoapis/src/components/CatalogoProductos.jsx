import { useEffect, useState } from "react"
import {obtenerProductos,agregarProductos,eliminarProductos, actualizarProductos} from "../services/productoService"
import CardProducto from "./CardProducto";
import FormularioProducto from "./FormularioProducto";
export default function CatalogoProductos()
{
   const [data, setData] = useState([]);
   const [productoEditar, setProductoEditar] = useState(
        {
            id: 0,
            category: "",
            name: "",
            stock: 0,
            imageUrl: ""  
        }

   );

   async function cargarProductos()
            {
                const datos = await obtenerProductos();
                console.log(datos);
                setData(datos.data);                 
            }

   async function agregarProducto(producto)
   {
      console.log(producto);
        if (producto.id>0)
        {
          await actualizarProductos(producto.id,producto) 
        }
        else
        {
          await agregarProductos(producto);
        }

      setProductoEditar(
            {
            id: 0,
            category: "",
            name: "",
            stock: 0,
            imageUrl: ""  
        });  
      //await agregarProductos(producto);
      await cargarProductos();
   }

   async function eliminarproducto(id)
   {
        await eliminarProductos(id);
        await cargarProductos();     
   }

   function enviarValorFormulario(producto)
   {
        setProductoEditar(producto);
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
        <FormularioProducto guardar={agregarProducto} productoeditar={productoEditar} />
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
             editar={enviarValorFormulario}       
            />
            
            )
        } 
        </div>        
        </>
    )
}
