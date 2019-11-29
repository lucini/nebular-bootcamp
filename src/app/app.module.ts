import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NbCardModule, NbLayoutModule, NbMenuModule, NbMenuService, NbSidebarModule, NbSidebarService, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HomeComponent} from './pages/home/home.component';
import {NbMenuInternalService} from '@nebular/theme/components/menu/menu.service';
import {ProdutoService} from './service/produto.service';
import { ProdutoListComponent } from './pages/produto/produto-list/produto-list.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbSidebarModule,
    NbMenuModule,
    Ng2SmartTableModule,
    HttpClientModule,
  ],
  providers: [
    NbSidebarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
