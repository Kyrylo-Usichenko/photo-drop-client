import React from 'react';
import {
    Add,
    Avatar,
    Circle,
    Description,
    HorizontalLine,
    Icon,
    Item, ItemText,
    Menu,
    VerticalLine,
    Wrapper
} from "./AddSelfieStyles";
import {Container} from "../../components/container/Container";
import useToggle from "../../components/hooks/useToggle";
import useOnClickOutside from "../../components/hooks/useOnClickOutside";

const AddSelfie = () => {
    const [isOpen, setIsOpen] = useToggle();
    const modalRef = useOnClickOutside(() => {
        setIsOpen(false);
    });
    return (
        <Container>
            <Wrapper>
                <Add>Add a selfie</Add>
                <Description>A selfie allows your photos to be synced with your account.</Description>
                <Avatar>
                    <Circle ref={modalRef} onClick={setIsOpen}>
                        <VerticalLine/>
                        <HorizontalLine/>
                    </Circle>
                    <Menu  isOpen={isOpen}>
                        <Item>
                            <ItemText>
                                Photo Library
                            </ItemText>
                            <Icon width={'33px'} height={'27px'} src="/assets/icons/photo-library.png" alt=""/>
                        </Item>
                        <Item>
                            <ItemText>
                                Take Photo
                            </ItemText>
                            <Icon width={'33px'} height={'25px'} src="/assets/icons/camera.png" alt=""/>
                        </Item>
                        <Item>
                            <ItemText>
                                Choose File
                            </ItemText>
                            <Icon width={'33px'} height={'20px'} src="/assets/icons/choose-file.png" alt=""/>
                        </Item>
                    </Menu>
                </Avatar>
            </Wrapper>
        </Container>
    );
};

export default AddSelfie;
