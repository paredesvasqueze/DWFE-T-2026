let objeto  = {
nombre: "pancho"
}
let objeto2  = {
apellido: "villa"
}

let nuevapropiedad = "apellido";

let objeto3 = {
    ...objeto, ...objeto2, [nuevapropiedad]: "casado"
}
console.log(objeto3);