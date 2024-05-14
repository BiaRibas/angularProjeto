import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent {

  // variaveis
  peso!: number;
  altura!: number;
  calc: number = 0;
  mensagemResultado: string = 'Resultado';
  mensagemError: string = '';
  imcPeso:number =0;

  // input
  clicarCalculadora() {
    if (this.altura === 0 || this.peso === 0) {
      // se os valores  0
      this.setMensagemError('Os valores diferentes 0!');
    } else if (this.altura < 0 || this.peso < 0) {
      // se os valores negativos
      this.setMensagemError('Os valores positivos!');
    } else if (!this.altura || !this.peso) {
      // se os inputs não entre novamente
      this.setMensagemError('um erro entre novamente!');
    } else {
      // se tudo deu certo ok!
      this.setMensagemError('');
      this.calculoImc(this.altura, this.peso);

    }

  }

  // calculo de imc
  calculoImc(altura: number, peso: number) {
    if (altura > 3) {
      // se usuario digita sem vingula
      altura = altura / 100;
    } else {
    }
    this.calc = peso / Math.pow(altura, 2);
    this.pessoaTipo(this.calc);
  }

//tipo da pessoa
  pessoaTipo(imc: number) {
    if (imc < 18.5) {
      //Abaixo do normal
      this.setTipo('Abaixo do normal');
    } else if (imc < 24.9) {
      // normal
      this.setTipo('Normal');
    } else if (imc < 29.9) {
      // sobrepeso
      this.setTipo('Sobrepeso');
    } else if (imc < 34.9) {
      // obesidadeI
      this.setTipo('Obesidade I');
    } else if (imc < 39.9) {
      // obesidadeII
      this.setTipo('Obesidade II');
    } else {
      // obesidadeIII
      this.setTipo('Obesidade III');
    }
  }

  // mensagem de erro
  setMensagemError(mensage: string) {
    this.mensagemError = mensage;
  }
  //tipo
  setTipo(tipo: string) {
    this.mensagemResultado = tipo;
  }
}

