import React, {useCallback, useEffect, useRef, useState} from 'react';
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
import {Container} from "../../components/shared/container/Container";
import Cropper from 'react-easy-crop';
import Header from "../../components/shared/header/Header";
import {AppDispatch} from "../../App";
import {useDispatch, useSelector} from 'react-redux';
import {redirectUser, setUserSelfie} from "../../store/actions/user";
import {State} from "../../store";
import Loader from '../../components/shared/loader/Loader';
import {getCroppedImage} from "../../components/common/cropImage/CropImage";
import {useNavigate} from 'react-router-dom';

const AddSelfie = () => {
    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const tempSelfie = useSelector((state: State) => state.userReducer.tempSelfie)
    const redirectToUrl = useSelector((state: State) => state.userReducer.redirectToUrl)

    const [photoUrl, setPhotoURL] = useState(null)
    const [photo, setPhoto] = useState<null | Blob>(null)
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)

    const isLoading = useSelector((state: State) => state.userReducer.isLoading)

    const onUploadChange = async (e: any) => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file)
        setPhotoURL(fileUrl as any)
    }
    const onAddClick = () => {
        hiddenFileInput.current!.click();
    }
    const onSaveClick = () => {
        if (photo) {
            dispatch(setUserSelfie(photo))
        }
    }
    useEffect(() => {
        dispatch(redirectUser(null))

        if (redirectToUrl) nav(redirectToUrl)
    }, [redirectToUrl])
    const onCropComplete = useCallback(async (_croppedArea: any, croppedAreaPixels: any) => {
        if (photoUrl) {
            const croppedImage = await getCroppedImage(
                photoUrl,
                croppedAreaPixels
            )
            setPhoto(croppedImage)
        }
    }, [crop, zoom])


    if (photoUrl) {
        return (
            <CropWrapper>
                <HeaderCrop>
                    <Cross onClick={() => setPhotoURL(null)} width={30} height={30} src="/assets/icons/cross.svg"
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
                            image={photoUrl}
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
                        <Save onClick={onSaveClick}>{isLoading ? <Loader/> : 'Save'}</Save>
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
