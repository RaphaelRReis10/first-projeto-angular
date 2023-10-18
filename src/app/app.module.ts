import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
registerLocaleData(localePt);

import { AppComponent } from "./app.component";
import { MenuComponent } from "./navegação/menu/menu.component";
import { HomeComponent } from "./navegação/home/home.component";
import { FooterComponent } from "./navegação/footer/footer.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { rootRouterConfig } from "./app.routes";
import { DataBindingComponent } from "./demo/data-binding/data-binding.component";
import { ProdutoService } from "./produtos/produtos.service";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })],
  ],
  providers: [ProdutoService, { provide: APP_BASE_HREF, useValue: "/" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
