import styled from "styled-components";
import button from "../../components/shared/button/Button";

export const AlbumsHeading = styled.p`
  margin: 15px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 21px;
    margin: 40px 0 0;
  }
`;
export const PhotosHeading = styled.p`
  margin: 34px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  @media (min-width: 1440px) {
    margin: 100px 0 0;
    font-size: 16px;
    line-height: 21px;
  }
`;

export const AlbumsList = styled.div`
  margin: 10px 0 0;
  display: flex;
  padding: 0 0 6px 0;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1440px) {
    margin: 19px 0 0;
  }
`;

export const AlbumPhoto = styled.img`
  width: 110px;
  height: 140px;
  background: #000000;
  object-fit: cover;
  border-radius: 20px;
  @media (min-width: 1440px) {
    height: 255px;
    width: 200px;
  }
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
  @media (min-width: 1440px) {
    margin: 104px auto 0;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const AlbumWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 140px;
  margin: 0 5px 0 0;
  cursor: pointer;
  @media (min-width: 1440px) {
    height: 255px;
    width: 200px;
  }
`;
export const AlbumNameWrapper = styled.div`
  position: absolute;
  width: 110px;
  height: 73px;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 44.34%, rgba(0, 0, 0, 0) 100%);
  border-radius: 20px;
  @media (min-width: 1440px) {
    height: 133px;
    width: 200px;
  }
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
  @media (min-width: 1440px) {
    max-width: 1200px;
    margin: 19px auto 0;
  }
`;
export const Photo = styled.img`
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  @media (min-width: 1440px) {
    height: 400px;
  }
`;
export const AlbumsWrapper = styled.div`
  padding: 0 15px;
  width: 100%;
  margin: 0 auto;
  //max-width: 450px;
  @media (min-width: 1440px) {
    padding: 0;
    max-width: 1200px;
  }
`;

export const ButtonWrapper = styled.div`
  margin: 40px auto 40px;
  @media (min-width: 1440px) {
    width: 100%;
    max-width: 300px;
    margin: 100px auto 100px;
  }
`;




