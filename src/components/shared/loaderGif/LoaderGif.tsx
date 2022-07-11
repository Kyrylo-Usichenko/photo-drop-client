import React from 'react';
import styled from 'styled-components';
interface Props {
    isLoading: boolean
}
const LoaderGif = ({isLoading}: Props ) => {
    return (
        <LoaderWrapper isLoading={isLoading}>
            <img src='/assets/icons/gif-loader.gif'/>
        </LoaderWrapper>
    );
};
const LoaderWrapper = styled.div<{isLoading: boolean}>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  display: ${({isLoading}) => isLoading ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 999;
`;
export default LoaderGif;
