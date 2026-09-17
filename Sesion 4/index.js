async function cargardatos()
{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    let tablita = "";
    /*
    data.forEach(element => {        
    tablita += `<tr><td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                </tr>`
    });   
    */

    const cuerpo = document.getElementById("cuerpo");
    data.forEach(element => {
        let fila = document.createElement("tr");                
        let id = document.createElement("td");
        id.textContent = element.id;
        let name = document.createElement("td");
        name.textContent = element.name;        
        let username = document.createElement("td");
        username.textContent = element.username;
        let email = document.createElement("td");
        email.textContent = element.email;
        let phone = document.createElement("td");        
        phone.textContent = element.phone;        
        fila.appendChild(id);
        fila.appendChild(name);
        fila.appendChild(username);
        fila.appendChild(email);
        fila.appendChild(phone);
        cuerpo.appendChild(fila);      
    });
}

cargardatos();



