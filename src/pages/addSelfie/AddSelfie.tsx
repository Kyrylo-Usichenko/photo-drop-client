import React, { useRef } from 'react';
import {
    Add,
    Avatar,
    Circle,
    Description,
    HorizontalLine,
    VerticalLine,
    Wrapper
} from "./AddSelfieStyles";
import {Container} from "../../components/container/Container";

const AddSelfie = () => {
    const hiddenFileInput = useRef(null);
    const onUploadChange = (e: any) => {
        const file = e.target.files[0];
    }
    const onAddClick = () => {
        // @ts-ignore
        hiddenFileInput.current.click();
    }
    return (
        <Container>
            <Wrapper>
                <Add>Add a selfie</Add>
                <Description>A selfie allows your photos to be synced with your account.</Description>
                <Avatar>
                    <Circle onClick={onAddClick}>
                        <VerticalLine/>
                        <HorizontalLine/>
                    </Circle>
                </Avatar>
                <input type="file"
                       ref={hiddenFileInput}
                       onChange={onUploadChange}
                       style={{display: "none"}}
                />            </Wrapper>
        </Container>
    );
};

export default AddSelfie;
