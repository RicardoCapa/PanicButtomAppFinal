import {Entity, PrimaryColumn, Column} from "typeorm";


@Entity()
export class Homicidios {

    @PrimaryColumn()
    id: number;

    @Column()
    canton: string;

    @Column()
    circuito: string;

    @Column()
    fecha_infraccion:string;

    @Column()
    tipo_muerte: string;

    @Column()
    edad: number;

    @Column()
    sexo: string;

    @Column()
    latitud: string;

    @Column()
    longitud: string;
}
