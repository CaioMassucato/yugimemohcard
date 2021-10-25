import { useState } from "react";
import Headers from "../../components/Header";
import setaesquerda from '../../images/seta-para-esquerda.png'
import styled from 'styled-components'
import CardComponent from "../../components/CardComponent";
import React, { Component } from 'react'



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
width: 50vw;
border: 1px solid #846DB4;
padding: 8px;
border-radius: 20px;
outline: none;
font-size: 15px;
`

const OptionsForm = styled.select `
width: 51vw;
border: 1px solid #846DB4;
padding: 8px;
border-radius: 20px;
outline: none;
cursor: pointer;
font-size: 15px;
background-color: white;
`

const TextForm = styled.textarea `
background-color: white;
width: 50vw;
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

const DivFormTemplate = styled.div `
display: flex;
flex-direction: row;
`

const Previa = styled.p `
font-size: 20px;
`

const DivTemplate = styled.div `
margin-top: 30px;
margin-left: 240px;
`

const Cartoes = styled.div `
background-color: antiquewhite;
margin-left: -100px;
width: 250px;
height: 300px;
border-radius: 20px;
border: 2px solid #846DB4;
box-shadow: 20px 0px antiquewhite, 22px 2px  #846DB4, 22px -1px #846DB4;
`

const Label = styled.div `
font-size: 20px;
color: #382268;
`

const Emoji = styled.select `
font-size: 20px;
background-color: white;
`

const DivEmojis = styled.div `
display: flex;
justify-content: space-around;
flex-direction: row;
margin-left: -80px;
margin-top: 20px;
`


function NewCollection({criarColecao}) 
{

    const [nomeColecao, setNomeColecao] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        criarColecao(nomeColecao)
    }


    return <div>
        <Headers></Headers>  
        <Voltar> 
            <ImgSetaEsquerda src={setaesquerda} alt="seta para esquerda" ></ImgSetaEsquerda>
            Voltar 
        </Voltar>
        <Title> Nova Coleção  </Title>
        <DivLinha></DivLinha>
        <form onSubmit={handleSubmit}>
        <DivFormTemplate>        
            <DivForm>
                <PForm> Nome da Coleção</PForm>
                <InputForm value={nomeColecao} onChange={event => setNomeColecao(event.target.value)}></InputForm>
                <PForm> Categoria</PForm>
                    <OptionsForm class="form-control" id="categorias">
                        <option>Artes Visuais</option>
                        <option>Atualidades</option>
                        <option>Espanhol</option>
                        <option>Filosofia</option>
                        <option>Física</option>
                        <option>Geografia</option>
                        <option>Gramática</option>
                        <option>História</option>
                        <option>Inglês</option>
                        <option>Matemática</option>
                        <option>Música</option>
                        <option>Outro</option>
                        <option>Química</option>
                    </OptionsForm>
                <PForm>Descrição (opcional)</PForm>
                <TextForm></TextForm>
            </DivForm>
            <DivTemplate>
                <Previa>Prévia</Previa>
                <Cartoes></Cartoes>
                <DivEmojis>
                    <Label>Emoji da Capa: </Label>
                    <Emoji class="form-control" id="emojis">
                        <option>🎨</option>
                        <option>📰</option>
                        <option>🦠</option>
                        <option>📝</option>
                        <option>🧲</option>
                        <option>🌍</option>
                        <option>📚</option>
                        <option>📜</option>
                        <option>🚀</option>
                        <option>🔢</option>
                        <option>🎻</option>
                        <option>🖊</option>
                        <option>⚗️</option>
                        <option>😁</option>
                    </Emoji>
                </DivEmojis>

            </DivTemplate>
        </DivFormTemplate>  
            <BotaoSalvar>Salvar</BotaoSalvar>
        </form>


    </div>

}

export default NewCollection;