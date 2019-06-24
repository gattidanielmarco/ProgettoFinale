export class bacheca{
    nome: string;
    cognome: string;
    email: string;
    password: string;
    numeri: string;



}
export class bacheca2{
    email2: string;
    password2: string;
}
export class loginDati{
    nomeLogin: string;
    cognomeLogin: string;
}
export class commenti{
    commento: string;
    nome: string;
    cognome: string;

}
export class risposte{

  risposta: string;
  nome: string;
  cognome: string;
  t: Boolean;
  constructor(ris: string, n: string, c: string, login: Boolean){
    this.risposta = ris;
    this.nome = n;
    this.cognome = c;
    this.t = login;
  }
}
