import { CidadeEntity, CidadeService } from '../_services/cidade.service';
import { EstadoService, EstadoEntity} from '../_services/estado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogComponent, ConfirmDialogModel } from '../_components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.scss']
})
export class CidadeComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['nome', 'estado', 'Latitude', 'Longitude', 'options'];

  public cidades: CidadeEntity[] = [];
  public estados: EstadoEntity[] = [];


  public cidade: CidadeEntity = new CidadeEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: CidadeService, private estadoService: EstadoService,
    private snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {


    this.msgerror = '';
    this.loading = true;


    this.service.find().subscribe(result => {

      this.cidades = result;

      this.estadoService.find().subscribe(result => {

        this.estados = result;

        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      });

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }

  private openSidebar(cidade: CidadeEntity) {
    this.cidade = cidade;

    this.sidenav.open();
  }

  public add() {
    this.openSidebar(new CidadeEntity());
  }

  public editar(cidade: CidadeEntity) {
    this.openSidebar(cidade);
  }

  public excluir(cidade: CidadeEntity): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: new ConfirmDialogModel('Excluir Registro', 'Deseja realmente excluir o registro?')
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = false;
        this.service.delete(cidade.id).subscribe(result => {
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
    this.service.save(this.cidade).(subscribe(result => {
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