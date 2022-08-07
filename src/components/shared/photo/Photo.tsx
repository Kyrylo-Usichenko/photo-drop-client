import { useEffect, useState } from "react";
import styled from "styled-components";
import LandscapeImage from "../../../screens/landscapeImage/LandscapeImage";

interface Props {
  thumbnail?: string;
  image?: string;
  imageId: string;
  isUnlocked?: boolean;
  albumId: string;
}

const Photo = ({ thumbnail, image, imageId, isUnlocked, albumId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      window.addEventListener("scroll", (e) => {
        e.preventDefault();
      });
    } else {
      window.removeEventListener("scroll", (e) => {});
      document.body.style.overflow = "visible";
      document.body.style.touchAction = "auto";
    }
    return window.removeEventListener("scroll", (e) => {});
  }, [isOpen]);
  return (
    <Wrapper>
      <Img onClick={() => setIsOpen(true)} src={thumbnail} loading="lazy" />
      {isOpen ? (
        <LandscapeImage
          albumId={albumId}
          isUnlocked={isUnlocked}
          imageId={imageId}
          setIsOpen={setIsOpen}
          image={image}
        />
      ) : null}
    </Wrapper>
  );
};

export const Img = styled.img`
  height: 33.33vw;
  object-fit: cover;
  width: 100%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  background: #d3d3d3;
  @media (min-width: 1440px) {
    height: 400px;
  }
`;
export const Wrapper = styled.div`
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  background: #d3d3d3;
  width: 100%;
  @media (min-width: 1440px) {
    height: 400px;
  }
`;
export default Photo;
