import React from 'react';
import './Footer.module.css';
import FooterTop from './FooterTop';
import Communication from './Communication';
import Coppyright from './Coppyright';


const Footer = () => {

    return (
        <footer>
            <FooterTop />
            <Communication />
            <Coppyright />
        </footer>
    )
}

export default Footer;