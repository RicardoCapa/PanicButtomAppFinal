var request = require('request');
import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Estaciones} from "../entity/Estaciones";
import {Homicidios} from "../entity/Homicidios";
import { MoreThan } from  "typeorm" ;
import {LessThan} from "typeorm";
import {Like} from "typeorm";
import {getConnection} from "typeorm";
import {async} from "async";

export class EstacionesControlador {
    private estacionesRepository = getRepository(Estaciones);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.estacionesRepository.find();
    }
    async principal(request: Request, response: Response, next: NextFunction) {
        return this.estacionesRepository.find();
    }
    async busquedaEstacion(request: Request, response: Response, next: NextFunction) {
      var query =request.body;
      query = "%"+query.infraestructura+"%";
      console.log(query);
      return this.estacionesRepository.find({infraestructura: Like(query)});

    }


}
//Homicidio
export class HomicidioControlador {
    private homicidioRepository = getRepository(Homicidios);

    async totalHomicidios(request: Request, response: Response, next: NextFunction) {
        return this.homicidioRepository.find();
    }
    async busquedaHomicidio(request: Request, response: Response, next: NextFunction) {
      var query =request.body;
      query = "%"+query.canton+"%";
      console.log(query);
      return this.homicidioRepository.find({canton: Like(query)});

    }

}
