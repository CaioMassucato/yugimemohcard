import React from 'react';
import CardComponent from '../../components/CardComponent';
import NewCardComponent from '../../components/NewCardComponent';
import Headers from '../../components/Header/index';
import SearchBarImg from '../../images/pesquisa.png';

import {
    Container,
    Header,
    Title,
    SearchBar,
    Collections,
    Options,
    Review,
    Select,
    SelectCollections,
    EraseCollections,
    CardDiv
} from './styles';

const MyCollection = () => {
return (

    <Container>
        <Headers></Headers>
        <Header>
            <Title>Minhas Coleções</Title>
            <SearchBar src={SearchBarImg}></SearchBar>
        </Header>
        <Options>
            <Review>Revisar Coleções</Review>
            <Select>
                <span>Select</span>
                <span>Erase</span>
            </Select>
        </Options>
        <Collections>
            <NewCardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" title="Nova Coleção"></NewCardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
            <CardComponent src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png" color="red" title="Título" creator="Criador"></CardComponent>
        </Collections>
    </Container>
);
}

export default MyCollection;