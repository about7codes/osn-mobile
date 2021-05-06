import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.png';
import arImg from '../../assets/icon-header-arabic-dark.png';
import MediaSlide from './MediaSlide';
import ProductSlide from './ProductSlide';



const HomeEn = ({ containerVariants }) => {
    useEffect(() => {
        document.title = "OSN Mobile";
    }, []);
    return (
        <motion.div className='main'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
        
            <div className="nav">
                <div className="nav-a">
                    <a href="/" className="nav-a-link">
                        <img className='nav-a-logo' src={logo} alt="nav-logo"/>
                    </a>
                </div>
                <div className="nav-b">
                    <div className="cta">
                        <a className='cta-btn' href="tel:041234567">
                            <i className="fas fa-phone-alt"></i>
                            <span>Call to Join</span>
                        </a>
                    </div>
                    <div className="lang">
                        <Link to='home-ar'>
                            <span>
                                <img className='lang-ar' src={arImg} alt="ar-logo"/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <MediaSlide />
            <ProductSlide />

            <footer className='footer-34'>
                <p>© 2021 OSN. All rights reserved.</p>
            </footer>
        </motion.div>
    )
}

export default HomeEn;
