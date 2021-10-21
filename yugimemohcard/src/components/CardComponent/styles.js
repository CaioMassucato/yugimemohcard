import styled from 'styled-components'

export const Container = styled.div`
    -webkit-box-shadow:inset 0px 0px 0px 3px gray;
    -moz-box-shadow:inset 0px 0px 0px 3px gray;
    box-shadow:inset 0px 0px 0px 3px gray;
    height: 12rem;
    width: 10rem;
    border-radius: 1rem;
`;

export const Card = styled.div`
    height: 12rem;
    width: 9.25rem;
    border-radius: 1rem;
    border: 3px solid gray;
`;

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const Image = styled.img`
    height: 3rem;
    width: 3rem;
`;