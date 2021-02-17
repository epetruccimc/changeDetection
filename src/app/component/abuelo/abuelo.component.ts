import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AbueloComponent implements OnInit {

  get nombre(): string {
    console.log('%c<<< Abuelo >>>', 'background: #2e2e2e; color: white');
    return "Arsenio";
  }

  constructor() { }

  ngOnInit() {
  }

}
