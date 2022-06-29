import styled from "styled-components";
import Button from "../../components/shared/button/Button";

export const AlbumsHeading = styled.p`
  margin: 15px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
`;
export const PhotosHeading = styled.p`
  margin: 34px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
`;

export const AlbumsList = styled.div`
  margin: 10px 0 0;
  display: flex;
  padding: 0 0 6px 0;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const AlbumPhoto = styled.img`
  width: 110px;
  height: 140px;
  background: #000000;
  object-fit: contain;
  border-radius: 20px;

`;
export const AlbumName = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 450;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  margin: 44px auto 0;
`;

export const AlbumWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 140px;
  margin: 0 5px 0 0;
`;
export const AlbumNameWrapper = styled.div`
  position: absolute;
  width: 110px;
  height: 73px;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 44.34%, rgba(0, 0, 0, 0) 100%);
  border-radius: 20px;
`;

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0;
  flex: 1 1 30%;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  overflow-y: scroll;
  height: 100%;
  > img {
    flex: 0 0 33.33333%; /*grow | shrink | basis */
  }
`;
export const Photo = styled.img`
  background-color: #fff4e6;
  height: 125px;
  object-fit: cover;
`;

export const ButtonBot = styled.button`
  width: 345px;
  height: 50px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  background: #3300CC;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 17px;
  right: 50%;
  transform: translateX(50%);
  &:disabled{
    opacity: 0.33;
  }
  
`;



