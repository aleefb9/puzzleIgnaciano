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

    for (let i = 1; i <= 5; i++) {
        img = document.createElement('img')
        div.appendChild(img)
        img.src = 'poc.php?img=ignacio%204.png&x=' + x + '&y=70&width=100&height=100'
        img.classList.add(rot[0])
        img.setAttribute('id', 'img' + i)
        img.addEventListener('click', () => {
            rotar(i)
        })
        //poc.php?img=ignacio%204.png&x=100&y=50&width=100&height=100
        x += 100
        // y+=70
    }

}

function rotar(id) {

    let img = document.getElementById('img' + id)
    let clase = img.classList.item(0)
    //console.log(clase)
    let indice = rot.indexOf(clase)
    img.classList.remove(clase)
    img.classList.add(rot[(indice + 1) % 4])


}