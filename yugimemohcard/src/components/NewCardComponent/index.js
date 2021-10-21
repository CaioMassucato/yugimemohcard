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
            <p style = {{ fontSize: "1.5rem", padding: "0.5rem", maxWidth: "12rem", display: 'flex', justifyContent: 'center' }}>{title}</p>
        </div>
    );
}

export default NewCardComponent;