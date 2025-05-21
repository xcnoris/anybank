import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.component.html',
  styleUrl: './form-nova-transacao.component.css'
})
export class FormNovaTransacaoComponent {
  tipoTransacao = "";
  valorTransacao = "";

  // Tipar o valor que vai ser enviado no output
  trasacaocriada = output<Transacao>();

  aoSubimeter(){
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao) 
    )
    this.trasacaocriada.emit(transacao);
  }
}
