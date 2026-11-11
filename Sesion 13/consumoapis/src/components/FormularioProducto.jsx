import { useEffect, useState } from "react";

export default function FormularioProducto({guardar,productoeditar})
{
    const [formulario, setFormulario]= useState({        
      id: 0,
      category: "",
      name: "",
      stock: 0,
      imageUrl: ""    
    });  

  

    function cambiarvalor(e){
        const {name,value} = e.target;  

        setFormulario({...formulario, 
          [name] : name == "stock"? Number(value): value
            }      
         )
    }

    function guardarProducto(e)
    {
        e.preventDefault();//esta linea evita el recargado de la pagina         
        guardar(formulario);
    }

    useEffect(
        ()=>{
          setFormulario(productoeditar);
        }, [productoeditar]
    );

    return(
        <form onSubmit={guardarProducto} >
            <label htmlFor="category">Categoria</label>
            <input type="text" id= "category" name= "category"
            value= {formulario.category}
            onChange={cambiarvalor}
            />
            <br/>
            <label htmlFor="name">Nombre</label>
            <input type="text" id= "name" name= "name"            
            value= {formulario.name}
            onChange={cambiarvalor}
            />
            <br/>            
            <label htmlFor="stock">Stock</label>
            <input type="number" id= "stock" name= "stock"
            value= {formulario.stock}
            onChange={cambiarvalor}
            />
            <br/>
            <label htmlFor="imageUrl">Imagen</label>
            <input type="url" id= "imageUrl" name= "imageUrl"
            value= {formulario.imageUrl}
            onChange={cambiarvalor}
            />
            <br/>
            <button type="submit">{productoeditar.id>0? "Editar": "Guardar" }</button>
       </form>
    ) 
}
