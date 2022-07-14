import React, { useCallback } from 'react';
import {
    Button,
    Cross,
    Download,
    Footer,
    FooterButton,
    Img,
    LeftWrapper,
    Share,
    Word,
    Wrapper
} from './LandscapeImageStyles';

interface Props {
    image?: string,
    setIsOpen: (value: boolean) => void
}

const LandscapeImage = ({image, setIsOpen}: Props) => {
    const onButtonClick = useCallback(
        (e: any) => {
            if (e.preventDefault) {
                e.preventDefault();
            }

            if (!image?.length) {
                console.log('Please add an image url');
                return;
            }

            const fetchUrl = `${e.target.href}${
                true ? `?dummy=${Math.floor(Date.now())}` : ''
            }`;

            fetch(fetchUrl, {
                method: 'GET',
                headers: {}
            })
                .then((response) => {
                    response.arrayBuffer().then(function (buffer) {
                        const url = window.URL.createObjectURL(new Blob([buffer]));
                        const link = document.createElement('a');

                        link.href = url;
                        link.setAttribute(
                            'download',
                            image!.substr(image!.lastIndexOf('/') + 1)
                        );
                        document.body.appendChild(link);
                        link.click();
                    });
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
        },
        [image]
    );

    return (
        <Wrapper>
            <Cross onClick={() => setIsOpen(false)} src="/assets/icons/cross.svg"
                   alt=""/>
            <Img src={image} alt=""/>
            {
                false ? <Button>Unlock photo</Button> : (
                    <Footer>
                        <LeftWrapper>
                            <Download
                                href={image} download onClick={(e) => onButtonClick(e)}
                            >
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
