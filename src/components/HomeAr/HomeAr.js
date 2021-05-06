import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../../assets/logo.png';
import enImg from '../../assets/icon-header-english-dark.png';
import MediaSlide from './MediaSlide';
import ProductSlide from './ProductSlide';

const HomeAr = ({ containerVariants }) => {
    useEffect(() => {
        document.title = "شاهد التلفزيون مباشرة وإعادة كيفما تريد | الإمارات - OSN";
    }, []);
    return (
        <motion.div className='main main-ar'
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
                            <span>للاشتراك اتصل</span>
                        </a>
                    </div>
                    <div className="lang">
                        <Link to='/home-en'>
                            <span>
                                <img className='lang-ar' src={enImg} alt="en-logo"/>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <MediaSlide />
            <ProductSlide />

            <footer className='footer-34'>
                <p>© OSN 2021 جميع الحقوق محفوظة</p>
            </footer>
        </motion.div>
    )
}

export default HomeAr;
