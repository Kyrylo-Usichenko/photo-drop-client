import React, {useCallback} from 'react';
import {
    Button,
    Cross,
    CrossWrapper,
    Download,
    Footer,
    FooterButton,
    Img,
    LeftWrapper,
    Share,
    Word,
    Wrapper
} from './LandscapeImageStyles';
import FileSaver from "file-saver";


interface Props {
    image?: any,
    setIsOpen: (value: boolean) => void
}

const LandscapeImage = ({image, setIsOpen}: Props) => {

    const onButtonClick = () => {
        FileSaver.saveAs(image.url, image.id);
    }

    const handleShareButton = () => {
        // Check if n isavigator.share supported by the browser
        if (navigator.share) {
            console.log("Congrats! Your browser supports Web Share API");
            navigator
                .share({
                    url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`
                })
                .then(() => {
                    console.log("Sharing successfull");
                })
                .catch(() => {
                    console.log("Sharing failed");
                });
        } else {
            console.log("Sorry! Your browser does not support Web Share API");
        }
    };
    return (
        <Wrapper>
            <CrossWrapper>
                <Cross onClick={() => setIsOpen(false)} src="/assets/icons/cross.svg"
                       alt=""/>
            </CrossWrapper>

            <Img src={image.url} alt=""/>
            {
                false ? <Button>Unlock photo</Button> : (
                    <Footer>
                        <LeftWrapper>
                            <Download
                                onClick={onButtonClick}
                            >
                                <img width='24px' height='21px' src="/assets/icons/download.svg" alt=""/>
                                <Word>Download</Word>
                            </Download>

                            <Share
                                onClick={handleShareButton}
                            >
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
