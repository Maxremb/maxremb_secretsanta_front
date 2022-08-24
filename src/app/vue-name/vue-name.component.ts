import { Component, OnInit } from '@angular/core';
import {Personne} from '../models/personne' ;
import {ItemCadeau} from '../models/itemCadeau' ;


@Component({
  selector: 'app-vue-name',
  templateUrl: './vue-name.component.html',
  styleUrls: ['./vue-name.component.css']
})
export class VueNameComponent implements OnInit {

  listeDonneur: Personne[] = [];
  
  listeReceveur: Personne[] = [];
  mapResult: ItemCadeau[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initObjet();
  }

  goAlgo() : void{
    this.listeReceveur = this.listeDonneur.slice();
    this.listeReceveur.sort(function() {return 0.5 - Math.random()});
    for (let i = 0; i < this.listeDonneur.length ; i ++) {
 /*
            1 ) vérfier si la valeur existe déja en valeur --> changer la valeur
            2 ) vérifier si la valeur existe déjà en clé  
                ---->  puis vérifier si la valeur correspond à la clé de la nouvelle insertion ---> changer la valeur
        */
      console.log( "objet de mapresult : " +this.mapResult?.at(i)?.getNameReceveur(this.mapResult.at(i)! ));
      for (let y = 0 ; y < this.mapResult.length ; y ++) {
        if ((this.listeReceveur.at(i) === this.mapResult.at(y)) 
            && (this.listeDonneur.at(i) === this.mapResult.at(y) ))
        {
            this.listeReceveur.sort(function() {return 0.5 - Math.random()});
        }
      }
        while(this.listeDonneur.at(i) === this.listeReceveur.at(i)) 
        {
        console.log( "while - liste A : " + this.listeDonneur.at(i)?.name + " / liste b : " + this.listeDonneur.at(i)?.name);
        this.listeReceveur.sort(function() {return 0.5 - Math.random()});
       
        }
      

        this.mapResult.push(new ItemCadeau(this.listeDonneur[i], this.listeReceveur[i]));
        console.log(this.mapResult.at(i));
    }
  }

initObjet() : void {


  this.listeDonneur.push(new Personne("Romain"));
  this.listeDonneur.push(new Personne( "Jack"));
  this.listeDonneur.push(new Personne( "Johnes"));
  this.listeDonneur.push(new Personne( "Loucie"));
  this.listeDonneur.push(new Personne( "Arthuro"));
  this.listeDonneur.push(new Personne( "Max"));
  this.listeDonneur.push( new Personne( "Chienchilla"));
  this.listeDonneur.push(new Personne( "bonne soeur"));
  this.listeDonneur.push(new Personne( "Bigot"));
  this.listeDonneur.push( new Personne( "Florent"));
  this.listeDonneur.push(new Personne( "paul"));

  }

}


