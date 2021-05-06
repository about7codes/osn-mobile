import React from 'react';
import Slider from 'react-slick';

import mediaA from '../../assets/project-runway-mob.jpg';
import mediaB from '../../assets/the-falcon-mob.jpg';
import mediaC from '../../assets/mare-of-easttown-mob.jpg';

const MediaSlide = () => {
    
    const config = {
        arrows: false,
        dots: false,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: -1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 7000,
        cssEase: "ease"
    };

    return (
        <div className='media-slide'>
            <div>
                <Slider {...config}>
                    <div className="media-item">
                        <div className="media-item-banner">
                            <img src={mediaA} alt='media-img' />
                        </div>

                        <div className="media-item-content">
                            <div className="mi-content">
                                <h2 className="mi-content-head">افتح عينك على</h2>
                                <ul className="mi-content-list">
                                    <li>المحتوى الحصري والقنوات المخصصة</li>
                                    <li>وجهتك لأعمال +Disney الأصلية وHBO</li>
                                    <li>خيارات الترجمة والدبلجة للغة العربية</li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>

                    <div className="media-item">
                        <div className="media-item-banner">
                            <img src={mediaB} alt='media-img' />
                        </div>

                        <div className="media-item-content">
                            <div className="mi-content">
                                <h2 className="mi-content-head">افتح عينك على</h2>
                                <ul className="mi-content-list">
                                    <li>المحتوى الحصري والقنوات المخصصة</li>
                                    <li>وجهتك لأعمال +Disney الأصلية وHBO</li>
                                    <li>خيارات الترجمة والدبلجة للغة العربية</li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>

                    <div className="media-item">
                        <div className="media-item-banner">
                            <img src={mediaC} alt='media-img' />
                        </div>

                        <div className="media-item-content">
                            <div className="mi-content">
                                <h2 className="mi-content-head">افتح عينك على</h2>
                                <ul className="mi-content-list">
                                    <li>المحتوى الحصري والقنوات المخصصة</li>
                                    <li>وجهتك لأعمال +Disney الأصلية وHBO</li>
                                    <li>خيارات الترجمة والدبلجة للغة العربية</li>
                                </ul>
                            </div>
                        </div>
                    
                    </div>

                    

                    
                </Slider>
            </div>
        </div>
    )
}

export default MediaSlide;
