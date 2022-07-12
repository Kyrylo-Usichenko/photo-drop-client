import React from 'react';
import {Button, Cross, Img, Wrapper } from './LandscapeImageStyles';

interface Props {
    image?: string,
    setIsOpen: (value: boolean) => void
}

const LandscapeImage = ({image, setIsOpen}: Props) => {
    return (
        <Wrapper>
            <Cross onClick={() => setIsOpen(false)} src="/assets/icons/cross.svg"
                   alt=""/>
            <Img src={image} alt=""/>
            <Button>Unlock photo</Button>
        </Wrapper>
    );
};

export default LandscapeImage;
