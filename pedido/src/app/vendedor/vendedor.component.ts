import { Component, OnInit, ViewChild} from '@angular/core';
import { CidadeService, CidadeEntity } from './../_services/cidade.service';
import { VendedorService, VendedorEntity } from './../_services/vendedor.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.scss']
})
export class VendedorComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'nome', 'email', 'cidade', 'options'];

  public vendedores: VendedorEntity[] = [];
  public cidades: CidadeEntity[] = [];

  public vendedor: VendedorEntity = new VendedorEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: VendedorService, private cidadeService: CidadeService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {

    
    this.msgerror = '';
    this.loading = true;

    
    this.service.find().subscribe(result => {

      this.vendedores = result;

      this.cidadeService.find().subscribe(result => {

        this.cidades = result;

        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }
  private openSidebar(vendedor: VendedorEntity) {
    this.vendedor = vendedor;

    this.sidenav.open();
  }
  public add() {
    this.openSidebar(new VendedorEntity());
  }
  public editar(vendedor: VendedorEntity) {
    this.openSidebar(vendedor);
  }
  public excluir(vendedor: VendedorEntity): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro?')
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;
        this.service.delete(vendedor.id).subscribe(result => {
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

    this.service.save(this.vendedor).subscribe(result=>{
      this.snackBar.open('Registro salvo com sucesso!', '', {
        duration: 3000
      });
    }, error=>{
      this.msgerror = error.message;
    }).add(()=> {
      this.sidenav.close();

      this.loading = false;
    });
}

  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }
}