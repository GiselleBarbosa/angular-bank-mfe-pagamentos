import { Component, OnInit } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.scss'],
})
export class PagamentosComponent implements OnInit {
  public saldo!: number;

  extratoService: any;

  ngOnInit() {
    this.loadExtratoService();
  }

  async loadExtratoService() {
    const { ExtratoService } = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './ExtratoService',
    });

    this.extratoService = new ExtratoService();

    if (typeof this.extratoService.saldo === 'function') {
      this.saldo = this.extratoService.saldo();
      console.warn('Caiu no IF', this.saldo);
    } else {
      this.saldo = this.extratoService.saldo;
      console.warn('Caiu no ELSE', this.saldo);
    }
  }

  realizarPagamento(valorPagamento: number) {
    if (this.extratoService && this.extratoService.atualizarSaldo) {
      this.extratoService.atualizarSaldo(-valorPagamento);

      this.saldo = this.extratoService.saldo();

      console.warn('Novo saldo após pagamento:', this.saldo);
    } else {
      alert('Erro ao realizar pagamento');
    }
  }
}
