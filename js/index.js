
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnBomba = document.querySelector('.bomba');
const btnPasta = document.querySelector('.pasta');
const btnAtaque = document.querySelector('.ataque');
const btnEspecialidades = document.querySelector('.especialidades');
const contenedorPlatos = document.querySelector('.platos');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platos();
});

const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const imagen = entry.target;
                imagen.src = imagen.dataset.src;
                observer.unobserve(imagen);
            }
        }); 
});

imagenes.forEach(imagen=>{
    observer.observe(imagen);
});

const platos = () =>{
    let platosArreglo = [];
    const platos = document.querySelectorAll('.plato');

    platos.forEach(plato=> platosArreglo = [...platosArreglo,plato]);

    const bomba = platosArreglo.filter(bomba=> bomba.getAttribute('data-plato') === 'bomba');
    const pastas = platosArreglo.filter(pasta => pasta.getAttribute('data-plato') === 'pasta');
    const ataque = platosArreglo.filter(ataque=> ataque.getAttribute('data-plato') === 'ataque');
    const especialidades = platosArreglo.filter(especialidades=> especialidades.getAttribute('data-plato') === 'especialidades');

    mostrarPlatos(bomba, pastas, ataque, especialidades, platosArreglo);

}

const mostrarPlatos = (bomba, pastas, ataque, especialidades, todos) =>{
    btnBomba.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        bomba.forEach(bomba=> contenedorPlatos.appendChild(bomba));
    });

    btnPasta.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        pastas.forEach(pasta=> contenedorPlatos.appendChild(pasta));
    });

    btnAtaque.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        ataque.forEach(ataque=> contenedorPlatos.appendChild(ataque));
    });
    btnEspecialidades.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatos);
        especialidades.forEach(especialidades=> contenedorPlatos.appendChild(especialidades));
    });
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatos);
        todos.forEach(todo=> contenedorPlatos.appendChild(todo));
    });
}

const limpiarHtml = (contenedor) =>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}