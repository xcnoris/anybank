import { Component, computed, signal } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { FormNovaTransacaoComponent } from "./components/form-nova-transacao/form-nova-transacao.component";
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  // A funcao computed identifica atualmente quando o valor do signal é alterado. Então ela já executa a funcao call-back dentro dela, assim o valor da propriedade que esta usando um two-way date biding é atualizado altomaticamente para o usuario
  saldo =  computed(() => {
    return this.transacoes().reduce((acc, transacaoAtual) => {
      return acc + transacaoAtual.valor;
    },0)
  });
  processarTransacao(trasacao: Transacao){
    // Usando funcao call-back
    this.transacoes.update((listAtual) => [trasacao ,...listAtual]);
  }
}
