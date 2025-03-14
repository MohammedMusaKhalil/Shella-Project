import './css/landingpage.css';
import appStore from './img/Badge1.webp';
import playStore from './img/Badge2.webp';
import appGallery from './img/Badge3.webp';

function GetApp() {
    return (
        <section className="getapp-section" aria-labelledby="getapp-title">
            <div className="getapp-section-container">
                <div className="getapp-section-title">
                    <h3 id="getapp-title">حمل التطبيق</h3>
                    <p>
                        احصل على كل ما تحتاجه من المطاعم والسوبر ماركت والمزيد مع الخدمات المميزة
                    </p>
                </div>
                <div className="getapp-section-links">
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
                        aria-label="تحميل تطبيق شلة من Play Store"
                    >
                        <img src={playStore} alt="تحميل من Play Store" loading="lazy" />
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
        </section>
    );
}

export default GetApp;