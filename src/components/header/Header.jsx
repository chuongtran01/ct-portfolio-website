import React from 'react';
import PropTypes from 'prop-types';
import CTA from './CTA';
import me from '../../assets/ctme.jpeg'
import HeaderSocials from './HeaderSocials';
import './Header.css'

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5 className='hello'>Hello, I'm</h5>
                <h1>Chuong Tran</h1>
                <h5 className="text-light">I'm seeking a SWE internship for Summer 2023</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={me} alt="me" />
                </div>
            </div>
        </header>
    );
}

export default Header;