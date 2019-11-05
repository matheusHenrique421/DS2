import { ClienteEntity } from './cliente.entity';
import { VendedorEntity } from './vendedor.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { itemPedidoEntity } from './itempedido.entity';
import { tabelaPrecoEntity } from './tabelapreco.entity';

@Entity({ name: 'pedido' })
export class PedidoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 6, nullable: false })
    codigo: string;

    @Column({ nullable: false })
    dtpedido: string;
    
    @ManyToOne(type => tabelaPrecoEntity, { eager: true, nullable: true })
    @JoinColumn({ name: 'tabelapreco_id' })
    tabelapreco: tabelaPrecoEntity;

    @ManyToOne(type => ClienteEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'cliente_id' })
    cliente: ClienteEntity;

    @ManyToOne(type => VendedorEntity, { eager: true, nullable: false })
    @JoinColumn({ name: 'vendedor_id' })
    vendedor: VendedorEntity;

    @OneToMany(type => itemPedidoEntity, item => item.pedido)
    itens: itemPedidoEntity[];

}