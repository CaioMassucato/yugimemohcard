import { useState } from "react";
import Headers from '../../components/Header/index'
import styled from 'styled-components'
import React, { Component } from 'react'
import setaesquerda from '../../images/seta-para-esquerda.png'

const Voltar = styled.p `
width: 79px;
color: #382268;
font-size: 19px;
margin-top: 15px;
margin-left: 60px;
margin-bottom: 10px;
cursor: pointer;
`

const Title = styled.p `
font-size: 35px;
margin-left: 60px;
margin-bottom: 10px;
padding: 0;
`

const DivLinha= styled.div `
background-color: #c4c4c4;
height: 1px;
width: 90vw;
margin: 0 55px;
`

const ImgSetaEsquerda = styled.img `
height: 15px;
width: 15px;
margin-right: 10px;
margin-bottom: 0px;
`

const DivFormTemplate = styled.div `
display: flex;
flex-direction: row;
`

const DivForm = styled.div `
margin-top: 40px;
margin-left: 75px;
display: flex;
flex-direction: column;
`

const PForm = styled.p `
color: #846DB4;
font-size: 25px;
margin-bottom: 10px; 
`

const InputForm = styled.input `
width: 45vw;
border: 1px solid #846DB4;
padding: 8px;
border-radius: 20px;
outline: none;
margin-bottom: 20px; 
font-size: 15px;
`

const TextForm = styled.textarea `
background-color: white;
width: 45vw;
height: 140px;
border: 1px solid #846DB4;
padding: 8px;
border-radius: 20px;
outline: none;
font-size: 15px;
`

const BotaoSalvar = styled.button `
background-color: #846DB4;
color: white;
border: 1px solid #846DB4;
width: 150px;
height: 40px;
font-size: 20px;
margin-top: 25px;
border-radius: 20px;
margin-bottom: 50px;
margin-left: 40vw;
cursor: pointer;
`
const DivTemplate = styled.div `
margin-top: 50px;
margin-left: 70px;
`

const DivCarta = styled.div `
width: 210px;
height: 280px;
background-color: antiquewhite;
border-radius: 20px;
border: 2px solid #846DB4;
`
const FenteVerso = styled.p `
font-size: 20px;
margin-left: 72px;
margin-bottom: 20px;
`

function NewCard() 
{


    return <div>
        <Headers></Headers>  
        <Voltar> 
            <ImgSetaEsquerda src={setaesquerda} alt="seta para esquerda" ></ImgSetaEsquerda>
            Voltar 
        </Voltar>
        <Title> Novo Cartão </Title>
        <DivLinha></DivLinha>
        <form>
            <DivFormTemplate>
                <DivForm>
                    <PForm>Frente do Cartão (Pergunta)</PForm>
                    <InputForm></InputForm>
                    <PForm>Verso do Cartão (Resposta)</PForm>
                    <TextForm></TextForm>
                </DivForm>
                <DivTemplate>
                    <FenteVerso>Frente</FenteVerso>
                    <DivCarta></DivCarta>
                </DivTemplate>
                <DivTemplate>
                    <FenteVerso>Verso</FenteVerso>
                    <DivCarta></DivCarta>
                </DivTemplate>



            </DivFormTemplate>



            <BotaoSalvar>Salvar</BotaoSalvar>
        </form>



    </div>

}

export default NewCard;