/*var mujeres = ['Mirta', 'Marta', 'Susana', 'Giuliana'];

mujeres.forEach(function(item){
    if(item == 'Susana'){
        alert('Felicidades ' + item + 'te ganaste un 0km')
    }else{
        alert(item + ' Sigue intentando')
    }
})*/

var personas = ['Gustavo', 'Martina', 'Romina', 'Susana'];

var content = document.getElementById('content');

function agregarTabla() {
    content.innerHTML = ''
    personas.forEach(function (item, index) {
        content.innerHTML += `
        <tr>
            <th scope="row">${index}</th>
            <td>${item}</td>
            <td>
                <button onclick="eliminar(${index})">Eliminar</button>
                <button onclick="modificar(${index})">Editar</button>
            </td>
        </tr>`
    })
}

function eliminar(index) {
    personas.splice(index, 1);
    agregarTabla()
}

function modificar(index) {
    personas[index] = prompt('Ingrese nombre')
    agregarTabla()
}

function agregar() {
    var agregarPersona = prompt('Agregar Persona');
    if (agregarPersona) {
        personas.push(agregarPersona);
        agregarTabla()
    }
}

agregarTabla();

