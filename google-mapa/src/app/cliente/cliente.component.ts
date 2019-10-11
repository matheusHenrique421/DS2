import { CidadeService, CidadeEntity } from './../_services/cidade.service';
import { ClienteService, ClienteEntity } from './../_services/cliente.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  public displayedColumns: string[] = ['codigo', 'nome', 'email', 'cidade', 'options'];

  public clientes: ClienteEntity[] = [];
  public cidades: CidadeEntity[] = [];

  public cliente: ClienteEntity = new ClienteEntity();

  public msgerror: string;
  public loading: boolean;

  constructor(private service: ClienteService, private cidadeService: CidadeService) { }

  ngOnInit() {


    // INICIA VARIAVEIS DE CONTROLE

    this.msgerror = '';

    // CARREGA DADOS 

    this.service.find().subscribe(result => {

      this.clientes = result;

      this.cidadeService.find().subscribe(result => {

        this.cidades = result;

        this.loading = false;

      }, error => {
        this.msgerror = error.message;
      })

    }, error => {
      this.msgerror = error.message;
    }).add(() => this.loading = false);
  }

  private openSidebar(cliente: ClienteEntity) {
    this.cliente = cliente;
    this.sidenav.open();


  }
  public add() {
    this.openSidebar(new ClienteEntity());
  }
  public editar(cliente: ClienteEntity) {
    this.openSidebar(cliente);
  }

  public confirmar() {
    this.loading = true;
    this.service.save(this.cliente).subscribe(result => {

    }, error =>{
      this.msgerror = error.message;
    }).add(() => 
  
    this.loading = false
    );
  }
  public compareOptions(id1, id2) {
    return id1 && id2 && id1.id === id2.id;
  }


}