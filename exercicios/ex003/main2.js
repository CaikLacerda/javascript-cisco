"use strict";

console.log("Tarefa 1");

const valorRosa = 8;
let qntdRosa = 70;

const valorLirio = 10;
let qntdLirio = 50;

const valorTulipa = 2;
let qntdTulipa = 120;

let valorTotRosa = valorRosa * qntdRosa;
let valorTotLirio = valorLirio * qntdLirio;
let valorTotTulipa = valorTulipa * qntdTulipa;

let total = valorTotRosa + valorTotLirio + valorTotTulipa;

function impressaoValores (x, y, z, ) {
    console.log("Rose - unit price: ", x, ", quantity: ", y, ", value: ", z);
}

impressaoValores(valorRosa, qntdRosa, valorTotRosa)
impressaoValores(valorLirio, qntdLirio, valorTotLirio,)
impressaoValores(valorTulipa, qntdTulipa, valorTotTulipa)
console.log("Total: ", total)

qntdRosa = qntdRosa - 20;
qntdLirio = qntdLirio - 30;

valorTotRosa = valorRosa * qntdRosa;
valorTotLirio = valorLirio * qntdLirio;
valorTotTulipa = valorTulipa * qntdTulipa;

total = valorTotRosa + valorTotLirio + valorTotTulipa;

console.log(" ")
console.log("Quantidade de flores alteradas: ")
console.log(" ")

impressaoValores(valorRosa, qntdRosa, valorTotRosa)
impressaoValores(valorLirio, qntdLirio, valorTotLirio)
impressaoValores(valorTulipa, qntdTulipa, valorTotTulipa)
console.log(total)


