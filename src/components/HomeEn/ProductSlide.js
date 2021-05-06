import React from 'react';
import Slider from 'react-slick';

const ProductSlide = () => {
    const config = {
        arrows: false,
        dots: false,
        centerMode: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease",
        centerPadding: "30px",
    };

    return (
        <div className='product-slide'>
            <div>
                <Slider {...config}>
                    <div className="product-item product-item-a">
                        
                        <div className="pi-box">
                            <div className="pi-box-inner">
                                <div className="pi-box-a pi-bg">
                                    <h2 className="pi-box-head">OSN Streaming app</h2>
                                    <div className="pi-box-low">
                                        <span>Only <span className='price'>SAR 19.5</span> /month</span>
                                    </div>
                                </div>
                                <div className="pi-box-b">
                                    <ul className="pi-box-list">
                                        <li>Home of Hollywood, Disney+ Originals, HBO &amp; more.</li>
                                        <li>All in one place, for one great price.</li>
                                        <li>Watch on your TV, computer, smartphone or tablet.</li>
                                        <li>In your preferred language.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pi-box-cta">
                                <a className="pi-box-link" href="https://stream.osn.com/">Start Your Free Trial</a>
                            </div>
                        </div>

                        <span className="tool-banner">
                        <i className="fas fa-box-open"></i>
                        Place your offer here
                        </span>

                    </div>

                    <div className="product-item product-item-b">
                        
                        <div className="pi-box">
                            <div className="pi-box-inner">
                                <div className="pi-box-a">
                                    <h2 className="pi-box-head">Live TV & OSN Streaming app</h2>
                                    <div className="pi-box-low">
                                        <span>Only SAR <span className='price'>99</span> /month</span>
                                    </div>
                                </div>
                                <div className="pi-box-b">
                                    <ul className="pi-box-list">
                                        <li>Unbox LIVE tv & OSN OnDemand with the OSN Box</li>
                                        <li>Control your TV with rewind, record, pause, Parental Control and more</li>
                                        <li>Enjoy 1000+ LIVE tv channels, including 150 in HD and 50+ exclusive OSN channels</li>
                                        <li>On the couch or on the move – get both, TV & Streaming</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pi-box-cta">
                                <a className="pi-box-link" href="https://stream.osn.com/">Start Your Free Trial</a>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ProductSlide;
