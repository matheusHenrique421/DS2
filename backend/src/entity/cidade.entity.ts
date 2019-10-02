import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { EstadoEntity } from './estado.entity';

@Entity({ name: 'cidade' })
export class CidadeEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100, nullable: false })
    nome: string;

    @ManyToOne(type => EstadoEntity, { eager: true })
    @JoinColumn({ name: 'estado_id' })
    estado: EstadoEntity;

    @Column({ type: 'double', nullable: false })
    lat: number;

    @Column({ type: 'double', nullable: false })
    lng: number;
}