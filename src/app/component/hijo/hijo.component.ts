import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

export interface Hijo {
  nombre: string;
  edad: number;
  genero: string;
}

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HijoComponent implements OnInit {

  private _hijo: Hijo;

  get hijo(): Hijo {
    return this._hijo;
  }

  /**
   * @example Setter basico sin realizar operaciones
   *
   * Compara el valor actual de la propiedad utilizada en la expresión del template con el valor anterior de esa propiedad.
   *
   * hay tres tipos de data que pasan por una referencia: array, function y object
   * si asignamos un objeto a una variable, la variable apunta hacia la ubicación del objeto en la memoria.
   */
  @Input() set hijo(value: Hijo) {
    this._hijo = value;
  }

  /**
   * @example Setter complejo realizando operaciones
   */
  // @Input() set hijo(value: Hijo) {
  //   setTimeout(() => {
  //     this._hijo = value;
  //     //  Comprobamos la vista y sus hijas
  //     // this.cdRef.detectChanges();
  //     //  Comprobamos la vista y sus padres
  //     // this.cdRef.markForCheck();
  //   },1000);
  //   // this.cdRef.detectChanges();
  // }

  get getNombre(): string {
    console.log('%cHijo > ' + this.hijo?.nombre ?? 'cargando...', 'color: green');
    return this.hijo?.nombre ?? 'cargando...';
  }

  constructor(private cdRef: ChangeDetectorRef) {
    //  Separamos la vista de la detección de cambios
    // cdRef.detach();
  }

  ngOnInit() {
  }

  eventoClick() {
    console.log('Evento click en el hijo');
    // Forzamos la comprobación de la vista
    // this.cdRef.detectChanges();
  }
}
