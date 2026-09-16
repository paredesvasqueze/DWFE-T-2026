/*
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => console.log(data))


setTimeout(
() => {
    console.log("Holitas");
    }
    ,
    1000
);

*/

let promesa = new Promise( (resolve, reject )=>{
    let edad = 8;
    if (edad >=18)
        {
           setTimeout( ()=>
           {    
                    resolve(["Puede votar"] );                
           },1000
            )        
        }
    else
        {
        reject("No puede Votar");
        }
    }   
)

async function obtenervalorpromesa()
{
    try{
    let valorpromesa = await promesa;
    console.log(valorpromesa);
    }catch(e)
    {
        console.log(e)
    }
}

obtenervalorpromesa();

/*

function muestraestadopromesa()
{
    console.log(promesa);
}  
console.log(promesa);
promesa
.then( respuesta => {console.log(respuesta)})
.catch( errorpromesa => {console.log(errorpromesa)});  
*/

