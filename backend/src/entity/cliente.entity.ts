import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { CidadeEntity } from './cidade.entity';

@Entity({ name: 'cliente' })
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 6, nullable: false })
    codigo: string;

    @Column({ length: 50, nullable: false })
    nome: string;

    @Column({ length: 100, nullable: false })
    email: string;

    @ManyToOne(type => CidadeEntity, { eager: true })
    @JoinColumn({ name: 'cidade_id' })
    cidade: CidadeEntity   

}