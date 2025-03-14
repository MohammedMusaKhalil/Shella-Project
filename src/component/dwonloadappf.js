import './css/landingpage.css';
import appStore from './img/Badge1.webp';
import googlePlay from './img/Badge2.webp';
import appGallery from './img/Badge3.webp';
import godotIcon from './img/godot.png';

function AppDownload() {
    return (
        <section className="underhero slideUp" aria-labelledby="app-download-title">
            <div className="under-hero-container">
                <div className="under-hero-right">
                    <h2 id="app-download-title">تطبيق الجوال</h2>
                    <h3>حمل تطبيق شلة على جوالك واطلب بضغطة زر</h3>
                    <div className="under-hero-right-links">
                        <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="تحميل تطبيق شلة من App Store"
                        >
                            <img src={appStore} alt="تحميل من App Store" loading="lazy" />
                        </a>
                        <a
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="تحميل تطبيق شلة من Google Play"
                        >
                            <img src={googlePlay} alt="تحميل من Google Play" loading="lazy" />
                        </a>
                        <a
                            href="https://appgallery.huawei.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="تحميل تطبيق شلة من App Gallery"
                        >
                            <img src={appGallery} alt="تحميل من App Gallery" loading="lazy" />
                        </a>
                    </div>
                </div>
                <div className="under-hero-left">
                    <img
                        src={godotIcon}
                        alt="شعار تطبيق شلة"
                        className="under-hero-left-img2"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default AppDownload;