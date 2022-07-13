import React from 'react';
import {Button, Cross, Download, Footer, FooterButton, Img, LeftWrapper, Share, Word, Wrapper} from './LandscapeImageStyles';

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
            {
                true ? <Button>Unlock photo</Button> : (
                    <Footer>
                        <LeftWrapper>
                            <Download>
                                <img width='24px' height='21px' src="/assets/icons/download.svg" alt=""/>
                                <Word>Download</Word>
                            </Download>
                            <Share>
                                <img width='24px' height='21px' src="/assets/icons/share.svg" alt=""/>
                                <Word>Share</Word>
                            </Share>
                        </LeftWrapper>
                        <div>
                            <FooterButton>See in a frame</FooterButton>
                        </div>
                    </Footer>
                )
            }

        </Wrapper>
    );
};

export default LandscapeImage;
