import React from 'react';
import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return(
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <h1 data-test="logoText">SimpleTut</h1>
                </div>
            </div>
        </header>
    );
}

export default Header;