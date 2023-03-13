'use strict'

window.onload = iniciar

var img
var rot = ['rot_0', 'rot_90', 'rot_180', 'rot_270']

function iniciar() {

    new Sortable(contenedor1, {
        group: 'shared',
        animation: 150
    });

    new Sortable(contenedor2, {
        group: 'shared',
        touchStartThreshold: 0,
        animation: 150
    });

    this.div = document.getElementsByTagName('div')[0]

    let x = 100
    let y = 70

    let dato = {
        img: 'ignacio1.png',
        numPiezas: 4,
        margen: [0,0]
    }

    const W = 3508;
    const H = 2480;


        img = document.createElement('img')
        div.appendChild(img)
        img.src = `poc.php?img=ignacio1.png&x=${0}&y=${0}&width=${W/Math.sqrt(dato.numPiezas)}&height=${H/Math.sqrt(dato.numPiezas)}`
        img.style.width = '250px'
        img.style.height = '250px'
        img.classList.add(rot[0])
        img.setAttribute('id', 'img' + i)
        img.addEventListener('click', () => {
            rotar(i)
        })
        //poc.php?img=ignacio%204.png&x=100&y=50&width=100&height=100
      
    }

function rotar(id) {

    let img = document.getElementById('img' + id)
    let clase = img.classList.item(0)
    //console.log(clase)
    let indice = rot.indexOf(clase)
    img.classList.remove(clase)
    img.classList.add(rot[(indice + 1) % 4])


}