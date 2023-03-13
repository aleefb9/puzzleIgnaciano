"use strict" //activo modo estricto
import {Vista} from './vista.js'

export class VistaPuzzle extends Vista {

	/**
     * Contructor de la clase VistaAvisos
     * @param {HTMLDivElement} div Div de la vista
     * @param {Object} controlador Controlador de la vista
     */
	constructor(div, controlador) {
		super(div)
          this.controlador = controlador
          this.nivel = 0;
          this.btnInicio = document.getElementById('volver1');
          this.btnInicio.onclick=this.mostrarInicio.bind(this);
          this.div = document.getElementById('contenedor1')
          this.cargarPuzzle(this.nivel)
          // this.mostrarNivel(this.nivel);
	}
     mostrarInicio(){
          this.controlador.mostrarInicio();
     }
     mostrarNivel(nivel){
          return this.controlador.sacarSiguiente(nivel)
     }
     cargarPuzzle(nivelActual){
          nivelActual=this.mostrarNivel(this.nivel)
          console.log(nivelActual);

          let imagen = nivelActual.imagen
          let img = document.createElement('img')
          img.src = imagen
          this.div.appendChild(img)
     }
}