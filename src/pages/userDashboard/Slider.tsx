import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
//@ts-ignore
import smoothscroll from 'smoothscroll-polyfill';

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState<number>();

    const tips = [
        {
            photo: '/assets/images/slide1.png',
            // desktopPhoto: HeaderTipDesktopPhoto1,
        },
        {
            photo: '/assets/images/slide2.png',
            // desktopPhoto: HeaderTipDesktopPhoto1,
        },
        {
            photo: '/assets/images/slide1.png',
            // desktopPhoto: HeaderTipDesktopPhoto1,
        },
        {
            photo: '/assets/images/slide2.png',
            // desktopPhoto: HeaderTipDesktopPhoto1,
        },
    ];
    smoothscroll.polyfill();

    useEffect(() => {
        sliderRef.current?.scrollTo({
            left: sliderRef.current?.clientWidth * currentSlide,
            behavior: 'smooth',
        });
        setTimeout(() => (
            setCurrentSlide(currentSlide === 3 ? 0 : currentSlide + 1)
        ), 3000);
    }, [currentSlide]);

    return (
        <TipsWrap>
            <HeaderTips ref={sliderRef}>
                {tips.map((tip, i) => (
                    <Tip
                        photo={tip.photo}
                        currentSlide={currentSlide}
                        key={i}
                        src={tip.photo}
                    />
                ))}
            </HeaderTips>
        </TipsWrap>
    );
};

const TipsWrap = styled.div`
  width: 100%;
  height: 100vh;

  @media (min-width: 320px){
    height: unset;
  }
  @media (min-width: 375px){
    height:unset;
  }
  @media (min-width: 425px){
    height: unset;
  }
`;

const HeaderTips = styled.div`
  display: flex;
  background: #F0F0F0;
  flex-wrap: nowrap;
  overflow-x: hidden;
  padding: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-align: start;
  @media(min-width: 768px){}
`;

interface SliderTip {
    photo: string,
    desktopPhoto?: string,
    currentSlide: number,
    big?: boolean,
}

const Tip = styled.img<SliderTip>`
  object-fit: cover;
  display: flex;
  object-position: center;
  align-items: center;
  flex-shrink: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  color: white;
    // background: url(${({ photo }) => photo}) no-repeat;
  background-size: cover;
  //object-fit: contain;
  user-select: none;
  @media (max-width: 320px){
    background-size: contain;
    background-position: center;
    width: 320px;
    height: 335px;
  }
  @media (min-width: 375px){
    background-size: contain;
    background-position: center;
    width: 100%;
    height: auto;
  }
  @media (min-width: 425px){
    height: 335px;
    width: 425px;
  }
  @media (min-width: 768px){
    height: 100vh;
    width: 100%;
  }
`;

const TipText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1040px;
  width: 100%;
  height: 100%;
  padding: 20px 0;

  div {
    font-size: 70px;
    line-height: 77px;
    font-weight: 400;
    color: #3A3A3A99;
  }
`;

const TipTextBlock = styled.div`
  margin-bottom: 32px;
  width: 68%;
`;

const SliderButtons = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const SliderButtonWrap = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SliderButton = styled.div<{ isActive: boolean }>`
  width: 16px;
  height: 16px;
  font-size: 0;
  border-radius: 50%;
  background-color: ${({ isActive }) => (isActive ? '#888888' : '#0000001A')};
  transition: .2s ease-out;
`;

const IphoneWithSticker = styled.p<{ offersAmount?: number }>`
  position: relative;
  display: inline-block;
  color: inherit;
`;

const Sticker = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border-radius: 60px;
  transform: translateX(100%);
`;

const LearnMore = styled.div`
  width: 198px;
`;

export default MainSlider;
