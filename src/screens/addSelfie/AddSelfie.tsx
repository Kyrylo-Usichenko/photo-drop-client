import { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../App";
import { getCroppedImage } from "../../components/common/cropImage/CropImage";
import useOnClickOutside from "../../components/hooks/useOnClickOutside";
import { Container } from "../../components/shared/container/Container";
import Header from "../../components/shared/header/Header";
import Loader from "../../components/shared/loader/Loader";
import { State } from "../../store";
import { redirectUser, setUserSelfie } from "../../store/actions/user";
import {
  Action,
  Add,
  Avatar,
  BottomWrapper,
  Buttons,
  Circle,
  CropInner,
  CropWrapper,
  Cross,
  DarkWindow,
  Description,
  HeaderCrop,
  HorizontalLine,
  Retake,
  Save,
  VerticalLine,
  Wrapper,
} from "./AddSelfieStyles";

const AddSelfie = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const redirectToUrl = useSelector(
    (state: State) => state.userReducer.redirectToUrl
  );

  const [photoUrl, setPhotoURL] = useState(null);
  const [photo, setPhoto] = useState<null | Blob>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [minZoom, setMinZoom] = useState(1);

  const isLoading = useSelector((state: State) => state.userReducer.isLoading);

  const onCloseModalClick = () => {
    setPhotoURL(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const onUploadChange = async (e: any) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setPhotoURL(fileUrl as any);
  };
  const onAddClick = () => {
    hiddenFileInput.current!.click();
  };
  const onSaveClick = () => {
    if (photo) {
      dispatch(setUserSelfie(photo));
    }
  };
  useEffect(() => {
    dispatch(redirectUser(null));

    if (redirectToUrl) nav(redirectToUrl);
  }, [redirectToUrl]);
  const onCropComplete = useCallback(
    async (_croppedArea: any, croppedAreaPixels: any) => {
      if (photoUrl) {
        const croppedImage = await getCroppedImage(photoUrl, croppedAreaPixels);
        setPhoto(croppedImage);
      }
    },
    [crop, zoom]
  );

  const modalRef = useOnClickOutside(() => {
    onCloseModalClick();
  });

  return (
    <div>
      <Header logoToMainPage={false} backUrl />
      <Container>
        <Wrapper>
          <Add>Add a selfie</Add>
          <Description>
            A selfie allows your photos to be synced with your account.
          </Description>
          <Avatar>
            <Circle onClick={onAddClick}>
              <VerticalLine />
              <HorizontalLine />
            </Circle>
          </Avatar>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={onUploadChange}
            style={{ display: "none" }}
          />
        </Wrapper>
      </Container>
      <DarkWindow isOpen={!!photoUrl} />
      <CropWrapper ref={modalRef} isOpen={!!photoUrl}>
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
              image={photoUrl ? photoUrl : undefined}
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
            <Retake onClick={onAddClick}>Retake</Retake>
            <Save onClick={onSaveClick}>{isLoading ? <Loader /> : "Save"}</Save>
          </Buttons>
        </BottomWrapper>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={onUploadChange}
          style={{ display: "none" }}
        />
      </CropWrapper>
    </div>
  );
};

export default AddSelfie;
