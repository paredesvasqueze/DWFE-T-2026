
const asignar =()=>{

    let alumnos = [
    {
        nombre: "Juan",
        apellido : "Perez"
    }
    ,
    {
        nombre:"Juan",
        apellido:"Cabrera"
    }
    ]  
    localStorage.setItem("nombre",JSON.stringify(alumnos));
}

const mostrar =() =>
{
    let objeto = JSON.parse(localStorage.getItem("nombre"))
    alert(objeto[0].apellido);    
}