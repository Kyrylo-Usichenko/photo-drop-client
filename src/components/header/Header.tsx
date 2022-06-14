import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowLeft, Wrapper} from './HeaderStyles';

interface HeaderProps {
    backUrl?: string
}

const Header = ({backUrl}: HeaderProps) => {
    return (
        <Wrapper>
            {
                backUrl && <Link to={backUrl}>
                    <ArrowLeft/>
                </Link>
            }

            <img src="/images/logo.svg" height={'16px'} alt="logo"/>
        </Wrapper>
    );
};

export default Header;
