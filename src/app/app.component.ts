import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  private _count = 0;
  timer = 0;

  get count(): number {
    this._count++;
    return this._count;
  }

  get title(): string {
    console.log(`%c<<< Comprobación de la vista principal nro: ${this.count} >>>`, 'background: #fff; color: red');
    return 'Change Detection!';
  }

  private subject: Subject<string> = new Subject<string>();
  pipeAsync$ = this.subject.asObservable();

  // /**
  //  * @example Evento del DOM
  //  * @param $event
  //  * @private
  //  */
  // @HostListener('document:mousewheel', ['$event']) private onScroll($event: Event): void {
  //   console.log('Evento scroll');
  // }

  constructor(private cdRef: ChangeDetectorRef) { }


  getTitle() {
    console.log(`%c<<< Comprobación de la vista principal nro: ${this.count} >>>`, 'background: #fff; color: red');
    return 'Change Detection!';
  }

  ngOnInit() {}

  /**
   * @example Eventos del DOM
   */
  eventoClick() {
    console.log('Click en el DOM');
  }

  /**
   * @example setTimeout y setInterval
   */
  eventoTimer() {
    setInterval(() => {
      this.timer++;
      // this.cdRef.detectChanges();
    }, 1000);
    // setTimeout(() => {
    //   this.timer++;
    //   this.cdRef.detectChanges()
    // }, 1000);
  }

  /**
   * @example Pipe Async
   * suscribe a un observable y devuelve el último valor que ha emitido
   * cancela automáticamente todas las suscripciones activas cuando se destruye el componente
   * llama internamente a markForCheck () cada vez que se emite un nuevo valor .
   */
  pipeAsync() {
    this.subject.next('Pipe async works!');
  }
}
