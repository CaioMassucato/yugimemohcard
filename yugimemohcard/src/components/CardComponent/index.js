import React from 'react';
import {
    Container,
    Card,
    ImageDiv,
    Image
} from './styles';

const CardComponent= ({src, color, title, creator}) => {
    return (
        <div style={{padding: '1rem'}}>
            <Container style = {{ backgroundColor: color }}>
                <Card style = {{ backgroundColor: color }}>
                    <ImageDiv>
                        <Image src={src}></Image>
                    </ImageDiv>
                </Card>
            </Container>
            <h1>{title}</h1>
            <span>{creator}</span>
        </div>
    );
}

export default CardComponent;