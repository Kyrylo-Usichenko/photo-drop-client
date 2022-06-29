import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {ArrowLeft, Avatar, Inner, Wrapper} from './HeaderStyles';

interface HeaderProps {
    backUrl?: boolean
    imageSrc?: string | null
}

const Header = ({backUrl, imageSrc}: HeaderProps) => {
    const nav = useNavigate()

    return (
        <Wrapper>
            <Inner>
                {
                    backUrl &&
                        <ArrowLeft onClick={() => nav(-1)}/>
                }
                {
                    imageSrc && (<Link to='/my-profile'>
                        <Avatar src={imageSrc} alt=""/>
                    </Link>)
                }
                <img src="/assets/icons/logo.svg" width='125px' height='16px' alt="logo"/>
            </Inner>
        </Wrapper>
    );
};

export default Header;
