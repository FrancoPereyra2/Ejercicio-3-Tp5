const btnAgregar = document.getElementById('agregar')


const agregarTarea = (e) => {
    (e).preventDefault()

    const padre = document.getElementById('listaTareas')
    let input = document.getElementById('tareaInput')
    let dato = input.value
        
    if(dato){
        let lugar = document.createElement('li')
        lugar.className = 'list-group-item d-flex justify-content-between align-items-center';
        lugar.innerHTML += `${dato} <button type="button" class="btn btn-danger borrar mt-2">Eliminar Tarea</button>`
        padre.appendChild(lugar)
        input.value = ''
        borrarTarea()
    }else{
        alert('Debe Ingresar una tarea')
    }
}

const borrarTarea = () => {
        const tarea = document.querySelectorAll('.borrar')
        tarea.forEach((borrar) => 
        borrar.addEventListener('click', (tar) =>
        tar.target.parentElement.remove()
        )
    )
}

btnAgregar.addEventListener('click', agregarTarea)