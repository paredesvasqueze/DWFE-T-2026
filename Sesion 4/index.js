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
    let edad = 18;
    if (edad >=18)
        {
           setTimeout( ()=>
           {
              resolve("Puede Votar");
           },5000
            )        
        }
    else
        {
        reject("No puede Votar");
        }
    }   
)

function muestraestadopromesa()
{
    console.log(promesa);
}  
console.log(promesa);
promesa
.then( respuesta => {console.log(respuesta)})
.catch( errorpromesa => {console.log(errorpromesa)});  


