import { Personne } from './personne';

export class ItemCadeau {

    constructor( donneur : Personne, receveur : Personne) {
        this.donneur = donneur;
        this.receveur = receveur;
     }
    donneur?: Personne;
    receveur?: Personne;

    getNameReceveur(item : ItemCadeau) : string {
        if (item != null) {
            console.log ("name receveur + " + item?.receveur?.name);
            return item?.receveur!.name;
        }
        else {
            console.log(" item == null");
                return "null";

        }
    }

}