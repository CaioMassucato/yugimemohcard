import { useState } from "react";
import perfil from '../../images/perfil.png'
import setabaixo from '../../images/seta-para-baixo.png'
import setaesquerda from '../../images/seta-para-esquerda.png'
import styled from 'styled-components'

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
color: #382268;
font-size: 22px;
margin-left: 60px;
margin-bottom: 0px;
`

const NovaColecao = styled.p `
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

`

const PForm = styled.p `
color: #846DB4;
font-size: 25px;
margin-bottom: 10px; 
`

const InputForm = styled.input `
width: 50vw;
border: 1px solid #846DB4;
padding: 10px;
border-radius: 20px;
outline: none;
font-size: 15px;
`

function EditarColecao() 
{

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
        <NovaColecao> Nova Coleção  </NovaColecao>
        <DivLinha></DivLinha>
        <DivForm>
            <PForm> Nome da Coleção</PForm>
            <InputForm></InputForm>
            <PForm> Categoria</PForm>
        </DivForm>


    </div>

}

export default EditarColecao;