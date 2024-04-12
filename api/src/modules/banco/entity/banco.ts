import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity("BANCOS")
export class Banco {
    @PrimaryColumn()
    codigo_compensacao: number

    @Column()
    nome: string
}