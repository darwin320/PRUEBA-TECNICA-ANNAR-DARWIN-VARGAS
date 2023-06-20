

import { Injectable } from "@angular/core";
import { Card } from 'src/app/models/card';
import { ApiService, ApiWithSearch } from "../api.service";
import { Observable, from } from "rxjs";
import { SearchResult } from "../apiTypes";


//en esta clase consumo la api referente a las tarjetas que se deben mostrar en el aplicativo



@Injectable({
    providedIn: "root",
})

export class CardsApiService
    extends ApiService
    
    
{

    //esta variable es declarada para una vez que los datos esten cargados estos se puedan mostrar en la pantalla
    //solamente cuando esten cargados y de esta manera no se generen cards vacios.

    public isDataLoaded = false;

    //creo una lista de cards que alimentare con la solicitud get que hare posteriormente
    private cards: Card[] = [];
   

    /**
     * 
     * @param newCard Recibo como parametro la nuevaTarjeta que contendra la respectiva informacion de usuario
     * @returns  devuelvo un valor nulo en el llegado caso de que no se pueda devolver una respuesta idonea.
     */
    public async createCard(newCard: {
         IdPersona: number,
         Documento: string,
         Nombres: string,
         Apellidos: string,
         Telefono: string,
         Correo: string,
         Direccion: string,
    }){
        const result = await this.makeSimplePostRequest<Card>("/Help/Api/POST-api-Personas",newCard);
        
        //console.log(result)
        if(result.ok){
            //console.log("valido")
            this.cards.push(result.val);
            this.isDataLoaded = true;
            return result.val;
        }else{
            console.error(result.err)
        }
        return null;
    }

    /**
     * Este metodo se encarga de hacer la solicitud GET al api dada para poder obtener los valores
     * correspondientes a cada tarjeta los cuales se asociaran a la lista de tarjetas previamente creadas
     */


    public getCardsList(): Card[] {
        return this.cards;
    }
    
  
    
    
}