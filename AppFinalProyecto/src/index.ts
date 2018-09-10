import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import {Routes} from "./routes";
import * as path from "path";
import {NextFunction, Request, Response} from "express";

createConnection().then(async connection => {

    const app = express();

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.urlencoded({extended: true}));

    Routes.forEach(route => {

        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);

            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? route.executeOnCall(res, result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    app.listen(3000);

    console.log("Express server has started on port 3000. Open localhost:3000/principal to see results");
}).catch(error => console.log(error));
