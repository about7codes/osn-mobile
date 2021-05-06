import React from 'react';
import Slider from 'react-slick';

const ProductSlide = () => {
    let config = {
        arrows: false,
        dots: false,
        centerMode: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: true,
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
                                    <h2 className="pi-box-head"> OSN Streaming تطبيق</h2>
                                    <div className="pi-box-low">
                                        <span><span className='price'>ريال 39</span> /شهرياً</span>
                                    </div>
                                </div>
                                <div className="pi-box-b">
                                    <ul className="pi-box-list">
                                        <li>وجهتك لأعمال +Disney الأصلية وإنتاجات هوليوود وHBO وأكثر.</li>
                                        <li>كل ما تحب مشاهدته في مكان واحد، بسعر ممتاز.</li>
                                        <li>تابع على شاشة التلفزيون أو الكمبيوتر أو الهاتف الذكي أو التابلت.</li>
                                        <li>بلغتك المفضلة.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pi-box-cta">
                                <a className="pi-box-link" href="/">ابدأ التجربة المجانية</a>
                            </div>
                        </div>

                    </div>

                    <div className="product-item product-item-b">
                        
                        <div className="pi-box">
                            <div className="pi-box-inner">
                                <div className="pi-box-a">
                                    <h2 className="pi-box-head">OSN Streaming باقات التلفزيون وتطبيق </h2>
                                    <div className="pi-box-low">
                                        <span><span className='price'>ريال 39</span> /شهرياً</span>
                                    </div>
                                </div>
                                <div className="pi-box-b">
                                    <ul className="pi-box-list">
                                        <li>تابع البث التلفزيوني المباشر ومحتوى OSN OnDemand مع جهاز استقبال OSN</li>
                                        <li>تحكّم في الترفيه التلفزيوني بكل راحة عبر التسجيل والتقديم والإيقاف المؤقت وخيارات الإشراف العائلي وأكثر</li>
                                        <li>استمتع بأكثر من 1000 قناة تلفزيونية مباشرة، منها 150 قناة بجودة HD فائقة الدقة وأكثر من 50 قناة OSN حصرية</li>
                                        <li>شاهد قنوات OSN ومحتوى المشاهدة أونلاين على أجهزتك المفضلة في البيت أو أيّ مكان آخر</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pi-box-cta">
                                <a className="pi-box-link" href="/">ابدأ التجربة المجانية</a>
                            </div>
                        </div>

                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default ProductSlide;
