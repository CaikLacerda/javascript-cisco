"use strict";

let nome1Contato = "Maxwell Wright";
let tel1Contato = "(0191) 719 6495";
let email1Contato = "Curabitur.egestas.nunc@nonummyac.co.uk"

let nome2Contato = "Raja Villarreal";
let tel2Contato = "0866 398 2895";
let email2Contato = "posuere.vulputate@sed.com";

let nome3Contato = "Helen Richards";
let tel3Contato = "0800 1111";
let email3Contato = "libero@convallis.edu";

function exibirCadastro(x, y, z) {
    console.log("Nome: ", x)
    console.log("Telefone: ", y)
    console.log("E-mail :", z)
}

exibirCadastro(nome1Contato, tel1Contato, email1Contato);
console.log("")
exibirCadastro(nome2Contato, tel2Contato, email2Contato);
console.log("")
exibirCadastro(nome3Contato, tel3Contato, email3Contato);

