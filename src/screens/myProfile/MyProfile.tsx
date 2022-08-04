import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../App";
import { getCroppedImage } from "../../components/common/cropImage/CropImage";
import useOnClickOutside from "../../components/hooks/useOnClickOutside";
import { Container } from "../../components/shared/container/Container";
import Header from "../../components/shared/header/Header";
import Loader from "../../components/shared/loader/Loader";
import LoaderGif from "../../components/shared/loaderGif/LoaderGif";
import { Tab } from "../../components/shared/tab/Tab";
import { State } from "../../store";
import { sendPhoto } from "../../store/actions/user";
import photoNormalize from "../../utils/photoNormalize";
import {
  Action,
  BottomWrapper,
  Buttons,
  CropInner,
  CropWrapper,
  Cross,
  DarkWindow,
  HeaderCrop,
  Retake,
  Save,
} from "../addSelfie/AddSelfieStyles";
import {
  ArrowRight,
  Avatar,
  AvatarWrapper,
  Edit,
  Heading,
  LeftWrapper,
  TabBotText,
  TabTopText,
  Wrapper,
  YourSelfie,
} from "./MyProfileStyles";

const MyProfile = () => {
  const nav = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: State) => state.userReducer.isLoading);
  const tempSelfie = useSelector(
    (state: State) => state.userReducer.tempSelfie
  );
  const user = useSelector((state: State) => state.userReducer.user);
  const [selfieUrl, setSelfieURL] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1);

  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState<null | Blob>(null);
  const selfieInput = useRef<HTMLInputElement>(null);

  const onSaveClick = async () => {
    if (photo) {
      await dispatch(sendPhoto(photo, setSelfieURL, setCrop, setZoom));
      onCloseModalClick();
    }
  };

  const onCloseModalClick = () => {
    setIsOpen(false);
    setSelfieURL(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };
  const onEditClick = () => {
    selfieInput.current!.value! = "";
    selfieInput.current!.click();
  };

  const onSelfieSelect = async (e: any) => {
    const file = e.target.files[0];
    const newFile = await photoNormalize(file);
    const fileUrl = URL.createObjectURL(newFile);
    setSelfieURL(fileUrl);
    setIsOpen(true);
  };

  const modalRef = useOnClickOutside(() => {
    onCloseModalClick();
  });

  const onCropComplete = useCallback(
    async (croppedArea: any, croppedAreaPixels: any) => {
      if (selfieUrl) {
        const croppedImage = await getCroppedImage(
          selfieUrl,
          croppedAreaPixels
        );
        setPhoto(croppedImage);
      }
    },
    [crop, zoom, photo, selfieUrl]
  );

  return (
    <div>
      <Header backUrl="/dashboard" />
      <Container>
        <Wrapper>
          <Heading>
            Welcome{user && (user.full_name ? `, ${user.full_name}` : null)}
          </Heading>
          <YourSelfie>Your selfie</YourSelfie>
          <AvatarWrapper>
            <Avatar
              onClick={() => setSelfieURL(tempSelfie)}
              // @ts-ignore
              src={
                user?.selfie?.photo_url
                  ? user.selfie.photo_url
                  : tempSelfie
                  ? tempSelfie
                  : "/assets/images/avatar-icon.png"
              }
              alt=""
            />
            <Edit onClick={onEditClick} />
            <input
              type="file"
              ref={selfieInput}
              onChange={onSelfieSelect}
              style={{ display: "none" }}
            />
          </AvatarWrapper>
          <Tab onClick={() => nav("/name-settings")}>
            {" "}
            <LeftWrapper>
              <TabTopText>Your name</TabTopText>
              <TabBotText>
                Tell us your name to personalize communications.
              </TabBotText>
            </LeftWrapper>
            <ArrowRight />
          </Tab>
          <Tab onClick={() => nav("/account-settings")}>
            <LeftWrapper>
              <TabTopText>Account settings</TabTopText>
              <TabBotText>Update your phone and email</TabBotText>
            </LeftWrapper>
            <ArrowRight />
          </Tab>
          <Tab onClick={() => nav("/notification-settings")}>
            <LeftWrapper>
              <TabTopText>Notification settings</TabTopText>
              <TabBotText>How should we contact you?</TabBotText>
            </LeftWrapper>
            <ArrowRight />
          </Tab>

          <LoaderGif isLoading={isLoading} />
        </Wrapper>
      </Container>
      <DarkWindow isOpen={isOpen} />
      <CropWrapper ref={modalRef} isOpen={isOpen}>
        <HeaderCrop>
          <Cross
            onClick={onCloseModalClick}
            width={30}
            height={30}
            src="/assets/icons/cross.svg"
            alt=""
          />
          <div>Take selfie</div>
        </HeaderCrop>
        <Action>Drag and zoom image to crop</Action>
        <BottomWrapper>
          <CropInner>
            <Cropper
              image={selfieUrl ? selfieUrl : undefined}
              crop={crop}
              zoom={zoom}
              cropShape="round"
              showGrid={false}
              onCropChange={setCrop}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              minZoom={minZoom}
              onMediaLoaded={({ height, width }) => {
                const smallerSide = height >= width ? width : height;
                setMinZoom(285 / smallerSide);
                setZoom(285 / smallerSide);
              }}
              aspect={1}
              cropSize={{ width: 285, height: 285 }}
            />
          </CropInner>
          <Buttons>
            <Retake onClick={onEditClick}>Retake</Retake>
            <Save onClick={onSaveClick}>{isLoading ? <Loader /> : "Save"}</Save>
          </Buttons>
        </BottomWrapper>
        <input
          type="file"
          ref={selfieInput}
          onChange={onSelfieSelect}
          style={{ display: "none" }}
        />
      </CropWrapper>
    </div>
  );
};

export default MyProfile;
