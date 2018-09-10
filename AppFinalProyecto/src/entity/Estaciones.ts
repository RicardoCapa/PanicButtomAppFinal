import {Entity, PrimaryColumn, Column} from "typeorm";


@Entity()
export class Estaciones {

    @PrimaryColumn()
    idEstaciones: number;

    @Column()
    canton: string;

    @Column()
    parroquia: string;

    @Column()
    nombre_Circuito: string;

    @Column()
    infraestructura: string;

    @Column()
    latitud: string;

    @Column()
    longitud: string;
}
