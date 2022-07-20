import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import LandscapeImage from "../../../screens/landscapeImage/LandscapeImage";

interface Props {
    thumbnail?: string,
    image?: string,
    imageId: string,
}

const Photo = ({thumbnail, image, imageId}: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [isOpen])
    return (
        <Wrapper>
            <Img onClick={() => setIsOpen(true)} src={thumbnail} loading='lazy'/>
            {
                isOpen ? <LandscapeImage imageId={imageId} setIsOpen={setIsOpen} image={image}/> : null
            }
        </Wrapper>

    );
};

export const Img = styled.img`
  height: 33.33vw;
  object-fit: cover;
  width: 100%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  background: #D3D3D3;
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
  background: #D3D3D3;
  width: 100%;
  @media (min-width: 1440px) {
    height: 400px;
  }
`;
export default Photo;
