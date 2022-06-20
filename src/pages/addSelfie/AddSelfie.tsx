import React, {useCallback, useRef, useState} from 'react';
import {
    Action,
    Add,
    Avatar,
    BottomWrapper,
    Buttons,
    Circle, CropInner, CropWrapper,
    Cross,
    Description, HeaderCrop,
    HorizontalLine, Retake, Save,
    VerticalLine,
    Wrapper
} from "./AddSelfieStyles";
import {Container} from "../../components/container/Container";
import axios from 'axios';
import Cropper from 'react-easy-crop';
import Header from "../../components/header/Header";
import {AppDispatch} from "../../App";
import {useDispatch} from 'react-redux';
import {sendPhoto} from "../../store/actions/user";

const AddSelfie = () => {
    const hiddenFileInput = useRef(null);
    const [fileUrl, setFileURL] = useState(null)
    const [file, setFile] = useState({type: null})
    const onUploadChange = (e: any) => {
        const file = e.target.files[0];
        setFile(file)
        const fileUrl = URL.createObjectURL(file)
        console.log(file)
        console.log(fileUrl)
        setFileURL(fileUrl as any)
    }
    const onAddClick = () => {
        // @ts-ignore
        hiddenFileInput.current.click();
    }
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const dispatch = useDispatch<AppDispatch>();

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        console.log(croppedArea, croppedAreaPixels)
    }, [])
    if (fileUrl) {
        return (
            <CropWrapper>
                    <HeaderCrop>
                        <Cross onClick={() => setFileURL(null)} width={30} height={30} src="/assets/icons/cross.svg"
                               alt=""/>
                        <div>
                            Take selfie
                        </div>
                    </HeaderCrop>
                    <Action>
                        Drag and zoom image to crop
                    </Action>
                <BottomWrapper>
                <CropInner>
                        <Cropper
                            image={fileUrl as any}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape='round'
                            showGrid={false}
                            cropSize={{width: 285, height: 285}}
                            objectFit='horizontal-cover'
                            style={{
                                containerStyle: {
                                    margin: '0 auto',
                                    borderRadius: '50%',
                                    width: 285,
                                    height: 285,
                                    border: 'none',
                                    borderCollapse: 'separate',
                                    WebkitBorderRadius: '50%',
                                    MozBorderRadius: '50%',
                                    transform: 'translateZ(0)'
                                },
                                mediaStyle: {
                                    overflow: 'hidden',
                                },
                                cropAreaStyle: {
                                    borderRadius: '50%',

                                    border: '1px solid #CECCB5'
                                }
                            }}
                        />
                    </CropInner>
                    <Buttons>
                        <Retake onClick={onAddClick}>Retake</Retake>
                        <Save onClick={() => dispatch(sendPhoto(file.type))}>Save</Save>
                    </Buttons>
                </BottomWrapper>
                <input type="file"
                       ref={hiddenFileInput}
                       onChange={onUploadChange}
                       style={{display: "none"}}
                />
            </CropWrapper>
        )
    }
    return (
        <div>
            <Header backUrl='/'/>
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
                    />
                </Wrapper>
            </Container>
        </div>
    );

};

export default AddSelfie;
