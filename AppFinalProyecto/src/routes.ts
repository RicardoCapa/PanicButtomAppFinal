import {EstacionesControlador} from "./controller/Controlador";
import {HomicidioControlador} from "./controller/Controlador";
import * as express from "express";
/*router.get('/prueba', async (req, res) => {
  const mod = await personaRepository.find();
  console.log(mod);
  res.render('test', {mod});
});*/
export const Routes = [{
  method: "get",
  route: "/estaciones",
  controller: EstacionesControlador,
  action: "all",
  executeOnCall: function(res, data){
    res.render("EstacionTabla", {data: data})
  }
},{
  method: "post",
  route: "/homicidio/busqueda",
  controller: HomicidioControlador,
  action: "busquedaHomicidio",
  executeOnCall: function(res, data){
    res.render("HomicidioTabla", {data: data})
  }
},{
  method: "post",
  route: "/estaciones/busqueda",
  controller: EstacionesControlador,
  action: "busquedaEstacion",
  executeOnCall: function(res, data){
    res.render("EstacionTabla", {data: data})
  }
},{
  method: "get",
  route: "/principal",
  controller: EstacionesControlador,
  action: "principal",
  executeOnCall: function(res, data){
    res.render("principal", {data: data})
  }
},{
  method: "get",
  route: "/totalHomicidio",
  controller: HomicidioControlador,
  action: "totalHomicidios",
  executeOnCall: function(res, data){
    // console.log("Delitos: ",data);
    res.render("HomicidioTabla", {data: data})
  }
}];
