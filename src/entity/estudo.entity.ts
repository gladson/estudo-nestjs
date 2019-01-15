import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn } from 'typeorm';

// Caso precise nomear a tabela
// @Entity('nome_da_tabel')

@Entity('estudo')
export class EstudoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    description: string;

    @CreateDateColumn()
    // tslint:disable-next-line:variable-name
    created_at: Date;

    @UpdateDateColumn()
    // tslint:disable-next-line:variable-name
    updated_at: Date;

    @Column({type: 'timestamp'})
    // tslint:disable-next-line:variable-name
    deleted_at: Date;
}
