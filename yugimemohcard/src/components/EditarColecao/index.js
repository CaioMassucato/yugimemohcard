import { useState } from "react";
import perfil from '../../images/perfil.png'
import setabaixo from '../../images/seta-para-baixo.png'
import setaesquerda from '../../images/seta-para-esquerda.png'
import styled from 'styled-components'
import React, { Component } from 'react'


const Header = styled.div `
background-color: #846DB4;
display: flex;
flex-direction: row;
justify-content: left;
height: 10vh;
` 

const HeaderLinks = styled.p `
color: white;
font-size: 21px;
margin-left: 40px;
cursor: pointer;
display: flex;
`

const DivLinks = styled.div `
margin-left: 30px;
display: flex;  
`

const Logo = styled.div `
background-color: white;
height: 6vh;
width: 24px;
margin-left: 20px;
margin-top: 12px;
`

const LogoP = styled.p `
color: #846DB4;
margin: 0px;
margin-left: 2px;
font-size: 18px;
justify-content: flex-start;
`

const LogoHeader = styled.p `
color: white;
margin: 0px;
margin-left: 2px;
font-size: 18px;
justify-content: flex-start;
`

const DivLogoHeader = styled.div `
margin-top: 12px;
margin-left: 3px;
`

const DivPerfil = styled.div `
display: flex;
`

const ImgSetaPerfil = styled.img `
margin-top: 25px;
margin-left: 13px;
height: 15px;
width: 25px;
`

const ImgPerfil = styled.img `
background-color: #dcdcdc;
display: flex;
margin-top: 4px;
margin-left: 118vh;
border-radius: 100%;
height: 50px;
width: 50px;
border: 3px solid white;
`

const Voltar = styled.p `
width: 79px;
color: #382268;
font-size: 22px;
margin-left: 60px;
margin-bottom: 0px;
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


function EditarColecao({criarColecao}) 
{

    const [nomeColecao, setNomeColecao] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();
        criarColecao(nomeColecao)
    }


    return <div>
        <Header>
            <Logo>
                <LogoP>Yu</LogoP>
                <LogoP>Gi</LogoP> 
            </Logo>
            <DivLogoHeader>
                <LogoHeader>Memoh</LogoHeader>
                <LogoHeader>Card</LogoHeader>
            </DivLogoHeader>
            <DivLinks>
                <HeaderLinks>Minhas Coleções</HeaderLinks>
                <HeaderLinks>Explorar</HeaderLinks>
            </DivLinks>
            <DivPerfil>
            <ImgPerfil src={perfil} alt="menino" ></ImgPerfil>
            <ImgSetaPerfil src={setabaixo} alt="seta para baixo" ></ImgSetaPerfil>
            </DivPerfil>
        </Header>  
        <Voltar> 
            <ImgSetaEsquerda src={setaesquerda} alt="seta para esquerda" ></ImgSetaEsquerda>
            Voltar 
        </Voltar>
        <Title> Editar Coleção  </Title>
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

export default EditarColecao;