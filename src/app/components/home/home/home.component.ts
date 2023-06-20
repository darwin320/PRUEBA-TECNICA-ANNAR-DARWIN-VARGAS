import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/models/card';
import { CardsApiService } from "src/app/services/api/cards/cards-api.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public userForm = new FormGroup({
    IdPersona: new FormControl<number>(1, [Validators.required]),
    Documento: new FormControl<string>("", [Validators.required]),
    Nombres: new FormControl<string>("", [Validators.required]),
    Apellidos: new FormControl<string>("", [Validators.required]),
    Telefono: new FormControl<string>("", [Validators.required,
      Validators.pattern("[0-9]*")]),
    
    Correo: new FormControl<string>("", [
        Validators.required,
        Validators.email,
    ]),
    Direccion: new FormControl<string>("", [Validators.required]),
});
  public goal:string = '--------------';
  public goalMoney:string = '---------------';


     public cards: Card[] = this.cardsApiService.getCardsList();
  constructor(
   private cardsApiService : CardsApiService,
  // public modalService: NgbModal,
   //public activeModal: NgbActiveModal,
  ) { 

  }


  public createUser(){
      if(this.userForm.valid){
        this.cardsApiService.createCard({
          IdPersona: this.userForm.value!.IdPersona as number,
          Documento: this.userForm.value!.Documento as string,
          Nombres: this.userForm.value!.Nombres as string,
          Apellidos: this.userForm.value!.Apellidos as string,
          Telefono: this.userForm.value!.Telefono as string,
          Correo: this.userForm.value!.Correo as string,
          Direccion: this.userForm.value!.Direccion as string,
        }).then(card=> {
          console.log('Usuario creado satisfactoriamente',card);
        })
      }
  }

  ngOnInit(): void {
    //this.cardsApiService.getCards();  
  }

}
