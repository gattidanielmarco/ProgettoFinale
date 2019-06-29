export class oggetto1{
  descrizione: string;
  prezzo: number;
  link: string;
}
export class Oggetto{
  nome: string;
  cognome: string;
  vettOggetto: oggetto1[];
  constructor(n: string, c: string, vO: oggetto1[]){
    this.nome = n;
    this.cognome = c;
    this.vettOggetto = vO;
  }

}
