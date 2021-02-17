import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hijo } from '../hijo/hijo.component';

const HIJOS = [
  {
    nombre: 'Emanuel',
    genero: 'M',
    edad: 29
  },
  {
    nombre: 'Agustin',
    genero: 'M',
    edad: 25
  },
  {
    nombre: 'Rosario',
    genero: 'F',
    edad: 28
  },
  {
    nombre: 'Yanina',
    genero: 'F',
    edad: 25
  },
  {
    nombre: 'Nazarena',
    genero: 'F',
    edad: 22
  },
  {
    nombre: 'Natalia',
    genero: 'F',
    edad: 27
  }
];
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreComponent implements OnInit {

  nombres: Hijo[] = HIJOS;

  get nombre(): string {
    console.log('%c<<< Padre >>>', 'background: #2e2e2e; color: cyan');
    return 'Angel';
  }

  constructor() { }

  ngOnInit() {}

  eventoClick() {
    console.log('Evento click en padre');
  }

  /**
   * Sin cambiar la referencia
   */
  sumaEdadSinReferencia(i: Hijo) {
    i.edad++;
  }

  /**
   * Cambiando la referencia
   */
  sumaEdadCambiandoReferencia(i: Hijo, index: number) {
    i.edad++;
    this.nombres[index] = {
      ...this.nombres[index], edad: i.edad++
    };
  }
}
