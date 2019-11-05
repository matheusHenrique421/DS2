import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService, ClienteEntity } from './../_services/cliente.service';
import { PedidoService, PedidoEntity } from './../_services/pedido.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';
import { VendedorService, VendedorEntity } from '../_services/vendedor.service';
import { TabelaprecoEntity, TabelaprecoService } from '../_services/tabelapreco.service';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'cliente', 'vendedor', 'dtpedido','total', 'options'];

  public pedidos: PedidoEntity[] = [];
  public clientes: ClienteEntity[] = [];
  public vendedores: VendedorEntity[] = [];
  public tabelaprecos: TabelaprecoEntity[] = [];

  public pedido: PedidoEntity = new PedidoEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: PedidoService, private clienteService: ClienteService, private vendedorService: VendedorService, private tabelaprecoService: TabelaprecoService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {


    this.msgerror = '';
    this.loading = true;


    this.service.find().subscribe(result => {

      this.pedidos = result;

      this.clienteService.find().subscribe(result => {

        this.clientes = result;


        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });
      this.vendedorService.find().subscribe(result => {

        this.vendedores = result;


        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });
      this.tabelaprecoService.find().subscribe(result => {

        this.tabelaprecos = result;


        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(pedido: PedidoEntity) {
    this.pedido = pedido;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new PedidoEntity());
  }
  public editar(pedido: PedidoEntity) {
    this.openSidebar(pedido);
  }
  public excluir(pedido: PedidoEntity): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro?')
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;
        this.service.delete(pedido.id).subscribe(result => {
          this.snackBar.open('Registro salvo com sucesso!', '', {
            duration: 3000
          });
        }, error => {
          this.msgerror = error.message;
        }).add(() => {
          this.loading = false;
        })
      }
    })
  }
  public confirmar() {
    this.loading = true;

    this.service.save(this.pedido).subscribe(result => {
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error => {
      this.msgerror = error.message;
    }).add(() => {
      this.sidenav.close();

      this.loading = false;
    });
  }

  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }
}