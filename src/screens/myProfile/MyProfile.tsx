import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Container} from '../../components/shared/container/Container';
import {
    Avatar,
    AvatarWrapper,
    Edit,
    Heading,
    TabTopText,
    YourSelfie,
    TabBotText,
    LeftWrapper,
    Wrapper,
    ArrowRight
} from './MyProfileStyles';
import {State} from "../../store";
import {getSelfie, getUser, sendPhoto} from "../../store/actions/user";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from "../../App";
import {LoaderWrapper} from "../userDashboard/UserDashboardStyles";
import {Link, useNavigate} from 'react-router-dom';
import {
    Action,
    BottomWrapper,
    Buttons,
    CropInner,
    CropWrapper,
    Cross, DarkWindow,
    HeaderCrop,
    Retake, Save
} from "../addSelfie/AddSelfieStyles";
import Loader from "../../components/shared/loader/Loader";
import Cropper from 'react-easy-crop';
import {getCroppedImage} from "../../components/common/cropImage/CropImage";
import Header from "../../components/shared/header/Header";
import {Tab} from '../../components/shared/tab/Tab';
import useOnClickOutside from "../../components/hooks/useOnClickOutside";

const MyProfile = () => {
    const nav = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const selfie = useSelector((state: State) => state.userReducer.selfie)
    const isLoading = useSelector((state: State) => state.userReducer.isLoading)
    const tempSelfie = useSelector((state: State) => state.userReducer.tempSelfie)
    const user = useSelector((state: State) => state.userReducer.user)
    const [selfieUrl, setSelfieURL] = useState<string | null>(null)
    const [crop, setCrop] = useState({x: 0, y: 0})
    const [zoom, setZoom] = useState(1)
    const [photo, setPhoto] = useState<null | Blob>(null)
    const selfieInput = useRef<HTMLInputElement>(null);

    const onSaveClick = () => {
        if (photo) {
            dispatch(sendPhoto(photo, setSelfieURL, setCrop, setZoom ))
        }
    }
    useEffect(() => {
        if (!selfie && !tempSelfie) {
            dispatch(getSelfie())
        }
    }, [selfie, tempSelfie])
    useEffect(() => {
        // @ts-ignore
        if (!user || !user.phone_number) {
            dispatch(getUser())
        }
    })
    const onCloseModalClick = () => {
        setSelfieURL(null)
        setCrop({x: 0, y: 0})
        setZoom(1)
    }
    const onEditClick = () => {
        selfieInput.current!.click();
    }

    const onSelfieSelect = async (e: any) => {
        const file = e.target.files[0];
        const fileUrl = URL.createObjectURL(file)
        setSelfieURL(fileUrl)
    }

    const modalRef = useOnClickOutside(() => {
        onCloseModalClick()
    });

    const onCropComplete = useCallback(async (croppedArea: any, croppedAreaPixels: any) => {
        if (selfieUrl) {
            const croppedImage = await getCroppedImage(
                selfieUrl,
                croppedAreaPixels
            )
            setPhoto(croppedImage)
        }
    }, [crop, zoom])

    return (
        <div>
            <Header backUrl/>
            <Container>
                <Wrapper>
                    <Heading>Welcome{user && (user.full_name ? `, ${user.full_name}` : null)}</Heading>
                    <YourSelfie>Your selfie</YourSelfie>
                    <AvatarWrapper>
                        <Avatar onClick={() => setSelfieURL(tempSelfie)}
                            // @ts-ignore
                                src={tempSelfie}
                                alt=""/>
                        <Edit onClick={onEditClick}/>
                        <input type="file"
                               ref={selfieInput}
                               onChange={onSelfieSelect}
                               style={{display: "none"}}
                        />
                    </AvatarWrapper>
                    <Tab onClick={() => nav('/name-settings')}> <LeftWrapper>
                        <TabTopText>
                            Your name
                        </TabTopText>
                        <TabBotText>
                            Tell us your name to personalize communications.
                        </TabBotText>
                    </LeftWrapper>
                        <ArrowRight/>
                    </Tab>
                    <Tab onClick={() => nav('/account-settings')}>
                        <LeftWrapper>
                            <TabTopText>
                                Account settings
                            </TabTopText>
                            <TabBotText>
                                Update your phone and email
                            </TabBotText>
                        </LeftWrapper>
                        <ArrowRight/>
                    </Tab>
                    <Tab onClick={() => nav('/notification-settings')}>
                        <LeftWrapper>
                            <TabTopText>
                                Notification settings
                            </TabTopText>
                            <TabBotText>
                                How should we contact you?
                            </TabBotText>
                        </LeftWrapper>
                        <ArrowRight/>
                    </Tab>
                    {
                        isLoading ? <LoaderWrapper>
                            <img src='/assets/icons/gif-loader.gif'/>
                        </LoaderWrapper> : null
                    }
                </Wrapper>
            </Container>
            <DarkWindow isOpen={!!selfieUrl}/>
            <CropWrapper ref={modalRef} isOpen={!!selfieUrl}>
                <HeaderCrop>
                    <Cross onClick={onCloseModalClick} width={30} height={30} src="/assets/icons/cross.svg"
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
                            image={selfieUrl ? selfieUrl : undefined}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            cropShape='round'
                            showGrid={false}
                            cropSize={{width: 285, height: 285}}
                            objectFit='auto-cover'
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
                        <Retake onClick={onEditClick}>Retake</Retake>
                        <Save onClick={onSaveClick}>{isLoading ? <Loader/> : 'Save'}</Save>
                    </Buttons>
                </BottomWrapper>
                <input type="file"
                       ref={selfieInput}
                       onChange={onSelfieSelect}
                       style={{display: "none"}}
                />
            </CropWrapper>
        </div>
    );
};

export default MyProfile;
