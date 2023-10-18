import { Component } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
})
export class DataBindingComponent {
  public contadorClique: number = 10;
  public urlImagem: string =
    "https://conteudo.imguol.com.br/2012/11/26/logomarca-remete-o-numero-11-utilizado-pelo-craque-no-santos-e-na-selecao-brasileira-1353961569070_300x300.jpg";
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }
  zerarContador() {
    this.contadorClique = 0;
  }

  // KeyUp(event: any) {
  //   this.nome = event.target.value;
  // }
}
