import React from 'react';
import * as Styled from './styles';

const Card= ({children}) => {
    return (
        <Styled.Card>
            <Styled.ImageDiv>
                <Styled.Image src="https://images.emojiterra.com/google/android-10/512px/1f3c0.png"></Styled.Image>
            </Styled.ImageDiv>
        </Styled.Card>
    );
}

export default Card;