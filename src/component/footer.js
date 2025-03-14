import './css/landingpage.css';
import logo from './img/Shellalogo.png';
import Twitter from './img/twitter.png';
import Instagram from './img/instagram.png';
import Linkedin from './img/linkedin.png';
import Facebook from './img/facebook.png';

function Footer() {
    return (
        <footer className="footer slideUp" aria-label="تذييل صفحة شلة">
            <div className="footer-container">
                <div className="footer-logo-section">
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img src={logo} alt="شعار شركة شلة" loading="lazy" />
                        </div>
                        <div className="footer-logo-title">
                            <p>
                                شلة منشأة سعودية مرخصة من قبل وزارة التجارة لممارسة النشاط التسويقي للغير وبيع التجزئة والجملة للأفراد والمنشآت بسجل تجاري رقم <span>1009128112</span> برأس مال 50 مليون ريال سعودي
                            </p>
                        </div>
                    </div>
                    <div className="footer-list-menu">
                        <h3>الشركة</h3>
                        <ul className="footer-list-item">
                            <li><a href="/about" rel="noopener noreferrer">عن شلة</a></li>
                            <li><a href="/careers" rel="noopener noreferrer">الوظائف</a></li>
                            <li><a href="/faq" rel="noopener noreferrer">أسئلة وأجوبة</a></li>
                            <li><a href="/sharia" rel="noopener noreferrer">الشريعة الإسلامية</a></li>
                        </ul>
                    </div>
                    <div className="footer-list-menu">
                        <h3>القانونية</h3>
                        <ul className="footer-list-item">
                            <li><a href="/terms-qayidah" rel="noopener noreferrer">شروط قيدها</a></li>
                            <li><a href="/privacy" rel="noopener noreferrer">سياسة الخصوصية</a></li>
                            <li><a href="/terms" rel="noopener noreferrer">الشروط والأحكام</a></li>
                            <li><a href="/report" rel="noopener noreferrer">الإبلاغ عن المخالفات</a></li>
                        </ul>
                    </div>
                    <div className="footer-list-menu">
                        <h3>التطبيق</h3>
                        <ul className="footer-list-item">
                            <li><a href="/join-delivery" rel="noopener noreferrer">الانضمام كعامل توصيل</a></li>
                            <li><a href="/join-merchant" rel="noopener noreferrer">الانضمام كشريك تاجر</a></li>
                            <li><a href="/join-service" rel="noopener noreferrer">الانضمام كمنفذ خدمة</a></li>
                            <li><a href="/join-investor" rel="noopener noreferrer">الانضمام كمستثمر معنا</a></li>
                        </ul>
                    </div>
                    <div className="footer-list-menu">
                        <h3>خدمة العملاء</h3>
                        <ul className="footer-list-item">
                            <li><a href="/testimonials" rel="noopener noreferrer">إقرارات العملاء</a></li>
                            <li><a href="/contact" rel="noopener noreferrer">تواصل معنا</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="copyright">
                        <div className="copy-right">
                            <span></span> 
                            <span className="letter">C</span>
                        </div>
                        <p>ShellaKsa 2024</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="حساب شلة على تويتر">
                            <img src={Twitter} alt="تويتر" loading="lazy" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="حساب شلة على إنستغرام">
                            <img src={Instagram} alt="إنستغرام" loading="lazy" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="حساب شلة على لينكدإن">
                            <img src={Linkedin} alt="لينكدإن" loading="lazy" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="حساب شلة على فيسبوك">
                            <img src={Facebook} alt="فيسبوك" loading="lazy" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;