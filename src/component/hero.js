import './css/landingpage.css';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-title fade-in">
                <h1>
                    مع <span>شلة</span> كل احتياجاتك بضغطة زر
                </h1>
                <h2>
                    أكثر من <span>60,000</span> مطعم ومتجر
                </h2>
            </div>
            <button className="slide-up" aria-label="تصفح جميع المطاعم والمتاجر الآن">
                تصفح الآن
            </button>
        </section>
    );
}

export default Hero;