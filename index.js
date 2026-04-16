import express from "express"

import { escreverBomDia } from './concatenacaoString/ConcatenacaoString1.js'
import { juntarNome } from './concatenacaoString/ConcatenacaoString2.js'

import { verificarNumero } from './estruturaCondicional/IfComposto.js'
import { verificarAprovacao } from './estruturaCondicional/IfSimples.js'
import { verificarParOuImpar } from './estruturaCondicional/IfTradicional.js'
import { verificarDiaSemana } from './estruturaCondicional/SwitchCase.js'
import { verificarResultado } from './estruturaCondicional/Ternario.js'

import { mostrarPares } from './lacoDeRepeticao/DoWhile.js'
import { mostrarNumeros } from './lacoDeRepeticao/DoWhile2.js'
import { mostrarTabuada } from './lacoDeRepeticao/For.js'
import { mostrarNumerosVetor } from './lacoDeRepeticao/ForEach.js'
import { mostrarDobro } from './lacoDeRepeticao/Map.js'
import { mostrarHelloWorld } from './lacoDeRepeticao/While.js'
import { mostrarTabuada1 } from './lacoDeRepeticao/While2.js'

import { somar, subtrair, multiplicar, dividir, potencia, raizQuadrada, restoDivisao } from './operadoresAritmeticos/OpAritmeticos.js'

import { verificarE } from "./operadoresLogicos/OpLogicoE.js"
import { verificarNao } from "./operadoresLogicos/OpLogicoNot.js"
import { verificarOu } from "./operadoresLogicos/OpLogicoOu.js"

import { diferente } from './operadoresRelacionais/OpRelacionaisDiferente.js'
import { igual } from './operadoresRelacionais/OpRelacionaisIgual.js'
import { maior } from './operadoresRelacionais/OpRelacionaisMaior.js'
import { maiorOuIgual } from './operadoresRelacionais/OpRelacionaisMaiorIgual.js'
import { menor } from './operadoresRelacionais/OpRelacionaisMenor.js'
import { menorOuIgual } from './operadoresRelacionais/OpRelacionaisMenorIgual.js'


import { acumulacao } from './vetores/VetorAcumulacao.js'
import { adicionarElemento } from './vetores/VetorAdicao.js'
import { buscarElemento } from './vetores/VetorBusca.js'
import { removerElemento } from './vetores/VetorRemocao.js'


const app = express()

app.get("/", (req, res) => {
    res.send({
        mensagem: "API de Exercícios",
        rotas: [
            "/concatenacao?nome=Diego&sobrenome=Lima",
            "/condicional/10/7/5/1/1",
            "/lacos?numero=7",
            "/aritmeticos/10/2",
            "/logicos?valor=true",
            "/relacionais/5/3",
            "/vetores?elemento=5"
        ]
    })
})

// CONCATENAÇÃO (query)
app.get("/concatenacao", (req,res)=>{
    let { nome, sobrenome } = req.query

    let resultado = {
        nome: escreverBomDia(nome),
        sobreNome: juntarNome(nome, sobrenome),
        profissao: "Professor"
    }

    res.send(resultado)
})

// CONDICIONAL (params)
app.get("/condicional/:numero/:nota/:valor/:dia/:res",(req,res)=>{
    let { numero, nota, valor, dia, res: resultadoParam } = req.params

    let resultado = {
        numero: verificarNumero(Number(numero)),
        aprovacao: verificarAprovacao(Number(nota)),
        parImpar: verificarParOuImpar(Number(valor)),
        diaSemana: verificarDiaSemana(Number(dia)),
        resultado: verificarResultado(Number(resultadoParam))
    }

    res.send(resultado)
})


// LAÇOS (query)
app.get("/lacos",(req,res)=>{
    let numero = Number(req.query.numero)

    let resultado = {
        pares: mostrarPares(),
        numeros: mostrarNumeros(),
        tabuadaFor: mostrarTabuada(numero),
        vetor: mostrarNumerosVetor(),
        dobro: mostrarDobro(),
        hello: mostrarHelloWorld(),
        tabuadaWhile: mostrarTabuada1(numero)
    }

    res.send(resultado)
})


// ARITMÉTICOS (params)
app.get("/aritmeticos/:a/:b",(req,res) =>{
    let { a, b } = req.params

    a = Number(a)
    b = Number(b)

    let resultado = {
        soma: somar(a,b),
        subtracao: subtrair(a,b),
        multiplicacao: multiplicar(a,b),
        divisao: dividir(a,b),
        potencia: potencia(a,b),
        raiz: raizQuadrada(a),
        resto: restoDivisao(a,b)
    }

    res.send(resultado)
})



// LÓGICOS (query)
app.get("/logicos",(req,res) =>{
    let valor = req.query.valor === "true"

    let resultado = {
        opLogicoE: verificarE(valor),
        opLogicoNot: verificarNao(valor),
        opLogicoOU: verificarOu(valor)
    }

    res.send(resultado)
})


// RELACIONAIS (params)
app.get("/relacionais/:a/:b", (req,res) =>{
    let { a, b } = req.params

    a = Number(a)
    b = Number(b)

    let resultado = {
        diferente: diferente(a,b),
        igual: igual(a,b),
        maior: maior(a,b),
        maiorOuIgual: maiorOuIgual(a,b),
        menor: menor(a,b),
        menorOuIgual: menorOuIgual(a,b)
    }

    res.send(resultado)
})


// VETORES (query)
app.get("/vetores",(req,res)=>{
    let elemento = req.query.elemento

    let resultado = {
        acumulacao: acumulacao(),
        adicionar: adicionarElemento(elemento),
        buscar: buscarElemento(elemento),
        remover: removerElemento(elemento)
    }

    res.send(resultado)
})


app.listen(3000, ()=>{
    console.log("Servidor rodando em http://localhost:3000")
})