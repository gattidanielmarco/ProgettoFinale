import { bacheca } from './bacheca';
import {loginDati} from './bacheca';
import {commenti} from './bacheca';

export const Utenti: bacheca[] = [
  { nome: 'Luca',cognome: 'Rossi',  email: 'luca.giurato@gmlai.it', password: 'xxx123##', numeri: '3456789002'},
  { nome: 'Umberto',cognome: 'Verdi',  email: 'umberto.verdi@gmlai.it', password: 'xxx345##', numeri: '3496389102'}

];
export const Dati: loginDati[] = [
  { nomeLogin: 'Luca',cognomeLogin: 'Rossi'},
  { nomeLogin: 'Umberto',cognomeLogin: 'Verdi'}
];
export const CommentoUtente: commenti[] = [
  { commento: 'Vedo macchina da cucire', nome: 'Luca', cognome: 'Rossi',
  vettRisposte:[
    {risposta: "la compro", nome: "Umberto", cognome: "Verdi"}
  ]},
  { commento: 'Cerco macchina Tesla', nome: 'Umberto', cognome: 'Verdi', vettRisposte:[
    {risposta: "te la vendo io", nome: "Luca", cognome: "Rossi"}
  ]}
];
