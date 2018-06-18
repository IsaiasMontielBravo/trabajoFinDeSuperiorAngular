import { Injectable } from '@angular/core';
import { Http } from "@angular/http";


@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;
  cargada_sobre_nosotros:boolean = false;
  cargada_fotos:boolean = false;
  equipo :any[] = [];
  fotos: any[] = [];

  constructor( public http:Http) {
    this.carga_sobre_nosotros();
   }

   public carga_sobre_nosotros(){
     this.http.get("https://artworld-86c51.firebaseio.com/equipo.json")
               .subscribe( data =>{
                 console.log(data.json());
                 this.cargada_sobre_nosotros = true;
                 this.equipo = data.json();
               });
   }



}
