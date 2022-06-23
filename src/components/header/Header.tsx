import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowLeft, Avatar, Inner, Wrapper} from './HeaderStyles';

interface HeaderProps {
    backUrl?: string
    imageSrc?: string | null
}

const Header = ({backUrl, imageSrc}: HeaderProps) => {
    return (
        <Wrapper>
            <Inner>
                {
                    backUrl && <Link to={backUrl}>
                        <ArrowLeft/>
                    </Link>
                }
                {
                    imageSrc && (<Link to='/my-profile'>
                        <Avatar src={imageSrc} alt=""/>
                    </Link>)
                }
                <img src="/images/logo.svg" width='125px' height='16px' alt="logo"/>
            </Inner>
        </Wrapper>
    );
};

export default Header;
