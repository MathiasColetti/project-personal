import { Component } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";
import { CardButtonRoxoComponent } from "../card-button-roxo/card-button-roxo.component";

@Component({
  selector: 'app-card-roxo',
  standalone: true,
  imports: [CardButtonComponent, CardButtonRoxoComponent],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.css'
})
export class CardRoxoComponent {

}
