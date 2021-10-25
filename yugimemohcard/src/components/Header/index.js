import { useState } from "react";
import perfil from '../../images/perfil.png'
import setabaixo from '../../images/seta-para-baixo.png'
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
font-size: 18px;
margin-left: 40px;
cursor: pointer;
margin-top: 20px;
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



function Headers() 
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

    </div>

}

export default Headers;