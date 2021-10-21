import React from 'react';
import PlusImg from '../../images/plus.png';
import {
    Card,
    ImageDiv,
    Image
} from './styles';

const NewCardComponent= ({src, color, title}) => {
    return (
        <div style={{padding: '1rem'}}>
            <Card style = {{ backgroundColor: color }}>
                <ImageDiv>
                    <Image src={PlusImg}></Image>
                </ImageDiv>
            </Card>
            <h1 style = {{ maxWidth: "1rem", maxHeight: "4rem" }}>{title}</h1>
        </div>
    );
}

export default NewCardComponent;