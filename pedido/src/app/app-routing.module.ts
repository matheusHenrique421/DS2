import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ClienteComponent } from './cliente/cliente.component';
import { CidadeComponent } from './cidade/cidade.component';
import { EstadoComponent } from './estado/estado.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProdutoComponent } from './produto/produto.component';
import { TabelaprecoComponent } from './tabelapreco/tabelapreco.component';
import { VendedorComponent } from './vendedor/vendedor.component';

import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './_components/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



const routes: Routes = [

  { path: 'cliente', component: ClienteComponent },
  { path: 'cidade', component: CidadeComponent },
  { path: 'estado', component: EstadoComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'tabelapreco', component: TabelaprecoComponent },
  { path: 'vendedor', component: VendedorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  entryComponents: [ConfirmDialogComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
