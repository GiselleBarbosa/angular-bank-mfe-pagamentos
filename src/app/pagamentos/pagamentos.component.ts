import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.scss'],
})
export class PagamentosComponent {
  saldo = 1000;

  realizarPagamento() {
    this.saldo -= 200;
  }
}