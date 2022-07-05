import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <div>
            <FooterWrapper>
                <FooterInner>
                    <div>
                        <Author>PhotoDrop is brought to you by</Author>
                        <Logo src="/assets/icons/frameology-logo.svg" alt=""/>
                        <Info>Our mission is to help people connect with their memories. If you framing some of the photos from
                            your experience, please consider using Frameology. It supports the photographers and makes
                            PhotoDrop possible.</Info>
                        <Button>Order photos</Button>
                        <Inc>© 2022 FOM Online Inc</Inc>
                    </div>
                    <div>
                        <GetTouch>Questions? Get in touch - hello@photodrop.me</GetTouch>
                        <ClimateLogo src="/assets/icons/climate-neutral-logo.svg" alt=""/>
                        <Inc375>© 2022 FOM Online Inc</Inc375>
                        <Terms>Terms of services</Terms>
                        <Privacy>Privacy Party</Privacy>
                    </div>
                </FooterInner>
            </FooterWrapper>
        </div>
    );
};
export const FooterWrapper = styled.div`
  background: #262626;
  width: 100%;
  color: #FFFFFF;
  //margin: 60px 0 0;
  padding: 60px 15px 134px;
  @media (min-width: 1440px) {
    //margin: 101px 0 0;
    padding: 60px 0 40px;
  }
`;
export const FooterInner = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    max-width: 791px;
    width: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }
`;
export const Author = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 26px;
    letter-spacing: -0.02em;

  }
`;
export const Logo = styled.img`
  width: 150px;
  height: 25px;
  margin: 15px 0 0;
  @media (min-width: 1440px) {
    width: 185px;
    height: 31px;
    margin: 19px 0 0;
  }
`;
export const Info = styled.p`
  margin: 23px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  width: 100%;
  max-width: 500px;
  @media (min-width: 1440px) {
    margin: 21px 0 0;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: -0.02em;
    max-width: 420px;
  }
`;

export const Button = styled.button`
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  outline: none;
  margin: 39px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  color: #fff;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  padding: 17px 0 18px;
  width: 100%;
  max-width: 500px;
  @media (min-width: 1440px) {
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    outline: none;
    margin: 29px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: #fff;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: -0.02em;
    padding: 17px 0 18px;
    width: 300px;
    max-width: 300px;
  }
`;

export const Inc = styled.p`
  display: none;
  @media (min-width: 1440px) {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 200%;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 60px 0 0;
  }
`;
export const Inc375 = styled.p`
  margin: 30px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const GetTouch = styled.p`
  margin: 60px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (min-width: 1440px) {
    font-family: 'Futura PT';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin: 0;
  }
`;
export const ClimateLogo = styled.img`
  width: 100px;
  height: 40px;
  margin: 30px 0 0;
  @media (min-width: 1440px) {
    margin: 20px 0 0;
  }
`;


export const Terms = styled.p`
  font-family: 'Futura PT';
  font-style: normal;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin: 19px 0 0;
  @media (min-width: 1440px) {
    margin: 30px 0 0;
    font-size: 18px;
  }
`;
export const Privacy = styled.p`
  margin: 20px 0 0;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  @media (min-width: 1440px) {
    margin: 19px 0 0;
    font-size: 18px;
  }
`;
export default Footer;
