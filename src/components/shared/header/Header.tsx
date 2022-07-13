import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ArrowLeft, ArrowWrapper, Avatar, Inner, Logo, Wrapper} from './HeaderStyles';

interface Props {
    backUrl?: boolean | string
    imageSrc?: string | null
    logoToMainPage?: boolean
}

const Header = ({backUrl, imageSrc, logoToMainPage}: Props) => {
    const nav = useNavigate()

    return (
        <Wrapper>
            <Inner>
                {
                    backUrl && (
                        <ArrowWrapper onClick={() => backUrl === true ? nav(-1) : nav(backUrl.toString())}>
                            <ArrowLeft/>
                        </ArrowWrapper>
                    )
                }
                {
                    imageSrc && (<Link to='/my-profile'>
                        <Avatar src={imageSrc} alt=""/>
                    </Link>)
                }
                {
                    logoToMainPage === false ?
                        <Logo src="/assets/icons/logo.svg"/>
                        : <Link to='/dashboard'>
                            <Logo src="/assets/icons/logo.svg"/>
                        </Link>
                }
            </Inner>
        </Wrapper>
    );
};

export default Header;
