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
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 6000,
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
                                <h2 className="mi-content-head">Open up to</h2>
                                <ul className="mi-content-list">
                                    <li>Exclusive content &amp; dedicated channels</li>
                                    <li>Home of Disney+ Originals and HBO</li>
                                    <li>Subtitles and dubbing in Arabic</li>
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
                                <h2 className="mi-content-head">Open up to</h2>
                                <ul className="mi-content-list">
                                    <li>Exclusive content &amp; dedicated channels</li>
                                    <li>Home of Disney+ Originals and HBO</li>
                                    <li>Subtitles and dubbing in Arabic</li>
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
                                <h2 className="mi-content-head">Open up to</h2>
                                <ul className="mi-content-list">
                                    <li>Exclusive content &amp; dedicated channels</li>
                                    <li>Home of Disney+ Originals and HBO</li>
                                    <li>Subtitles and dubbing in Arabic</li>
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
