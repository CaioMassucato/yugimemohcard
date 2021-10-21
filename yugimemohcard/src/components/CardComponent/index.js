import React from 'react';
import {
    Container,
    Card,
    ImageDiv,
    Image
} from './styles';

const CardComponent= ({src, color}) => {
    return (
        <Container style = {{ backgroundColor: color }}>
            <Card style = {{ backgroundColor: color }}>
                <ImageDiv>
                    <Image src={src}></Image>
                </ImageDiv>
            </Card>
        </Container>
    );
}

export default CardComponent;