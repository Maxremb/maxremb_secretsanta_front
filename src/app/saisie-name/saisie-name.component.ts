import { Component, OnInit } from '@angular/core';

import {Personne} from '../models/personne' ;

@Component({
  selector: 'app-saisie-name',
  templateUrl: './saisie-name.component.html',
  styleUrls: ['./saisie-name.component.css']
})
export class SaisieNameComponent implements OnInit {

  //newPersonne = new Personne();
  
  listeDonneur: Personne[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.newPersonne = new Personne();
  }

  enregistrer() : void {
    
  //this.listeDonneur.push(this.newPersonne);
  //localStorage.setItem("listeDonneur", this.listeDonneur);
  console.log("Ajout OK");
}

}
