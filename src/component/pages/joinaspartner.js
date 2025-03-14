import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import GetApp from '../getapp';
import '../css/joinasdriver.css';
import ScrollToTop from '../ScrollToTop';
import Shellalogo from '../img/Shellalogo.png';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import icon4 from '../img/icon4.png';
import icon5 from '../img/icon5.png';
import icon6 from '../img/icon6.png';
import icon7 from '../img/icon7.png';
import icon8 from '../img/icon8.png';

const JoinAsPartner = () => {
    const [formData, setFormData] = useState({
        storeName: "",
        storeCategory: "",
        store_offers: "",
        city: "",
        branchCount: "",
        phone: "",
        fullName: "",
        idNumber: "",
        detailedAddress: "",
        additionalInfo: "",
    });

    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.storeName) {
            newErrors.storeName = "يرجى إدخال اسم المتجر";
            isValid = false;
        }
        if (!formData.city) {
            newErrors.city = "يرجى إدخال المدينة";
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isAgreed) {
            alert('يرجى الموافقة على الشروط والأحكام!');
            return;
        }

        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('تم إرسال النموذج بنجاح!');
            handleReset();
        }
    };

    const handleReset = () => {
        setFormData({
            storeName: "",
            storeCategory: "",
            store_offers: "",
            city: "",
            branchCount: "",
            phone: "",
            fullName: "",
            idNumber: "",
            detailedAddress: "",
            additionalInfo: "",
        });
        setErrors({});
        setIsAgreed(false);
    };

    return (
        <section className="join-as-driver">
            <Header />
            <div className="join-as-driver-container">
                <div className="join-as-partner-content">
                    <div className="join-as-driver-hero"></div>
                </div>
                <div className="join-as-driver-main-content">
                    <div className="join-as-driver-form-title">
                        <h1>الانضمام كشريك تاجر</h1>
                        <p className="textsh"> إنضم الينا وزد مبيعاتك مع تحقيق اكبر استفادة من خدماتنا المميزة </p>
                    </div>
                    <div className="join-as-driver-form">
                        <form className="main-form" onSubmit={handleSubmit}>
                            <div className="main-form-description">
                                <p>معلومات المتجر</p>
                            </div>
                            <div className="form-fields">
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">اسم المتجر</label>
                                        <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">تصنيف المتجر</label>
                                        <input type="text" name="storeCategory" value={formData.storeCategory} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">ماذا يقدمه المتجر</label>
                                        <input type="text" name="store_offers" value={formData.store_offers} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">المدينة</label>
                                        <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>

                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">عدد الفروع</label>
                                        <input type="number" name="branchCount" value={formData.branchCount} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">رقم الهاتف </label>
                                        <input type="phone" name="branchCount" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>

                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">اسم المتجر بالانكليزية</label>
                                        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">رقم الهوية الشخصية</label>
                                        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>

                                </div>

                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">العنوان التفصيلي</label>
                                        <input type="text" name="detailedAddress" value={formData.detailedAddress} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                </div>

                                <div className="extra-info">
                                    <h3>معلومات اضافية</h3>
                                </div>
                                <div>
                                    <div className="form-agreement">
                                        <input type="checkbox" id="terms" name="terms" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)} />
                                        <label htmlFor="terms"> الموافقة على جميع <span>الشروط والأحكام</span></label>
                                    </div>
                                    <div className="form-actions">
                                        <button type="reset" className="btn btn-reset" onClick={handleReset}>إعادة ضيط </button>
                                        <button type="submit" className="btn btn-submit" disabled={!isAgreed}>ارسال</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="driver-benefits">
                            <div className="benefits-title">
                                <h2 >فوائد الإنضمام كشريك تاجر في <span>شلة</span></h2>

                            </div>

                        </div>
                        <div class="container1">
                            <img src={Shellalogo} alt="Logo" class="logo1" />
                            <div class="features">
                                <div class="feature">
                                    <img src={icon1} alt="أيقونة"/>
                                        <h3>أرباح أعلى وطلبات أكثر</h3>
                                        <p>ستحصل على عدد طلبات أكثر من خلال اشتراكك بمتاجر شلة</p>
                                </div>
                                <div class="feature">
                                    <img src={icon2} alt="أيقونة"/>
                                        <h3>خدمة الدفع المباشر</h3>
                                        <p>ستحصل على ثمن الطلب مباشرة عند تسليمه للكابتن التوصيل</p>
                                </div>
                                <div class="feature">
                                    <img src={icon3} alt="أيقونة"/>
                                        <h3>توسيع نقاط البيع</h3>
                                        <p>ستتمكن من توصيل منتجاتك إلى جميع أنحاء المملكة</p>
                                </div>
                                <div class="feature">
                                    <img src={icon4} alt="أيقونة"/>
                                        <h3>رسوم منخفضة</h3>
                                        <p>سوف يتم تحصيل رسوم مخفضة على كل طلب من التطبيق</p>
                                </div>
                                <div class="feature">
                                    <img src={icon5} alt="أيقونة"/>
                                        <h3>إحصائيات البيع</h3>
                                        <p>يمكنك رؤية الإحصائيات اليومية والشهرية لمتابعة أداء مبيعاتك</p>
                                </div>
                                <div class="feature">
                                    <img src={icon6} alt="أيقونة"/>
                                        <h3>ابدأ في عملك</h3>
                                        <p>يمكنك إدارة كل شيء من التطبيق بسهولة</p>
                                </div>
                                <div class="feature">
                                    <img src={icon7} alt="أيقونة"/>
                                        <h3>لا قلق بعد اليوم</h3>
                                        <p>طلباتك في أيدٍ أمينة مع كباتن شلة</p>
                                </div>
                                <div class="feature">
                                    <img src={icon8} alt="أيقونة"/>
                                        <h3>خاصية التنبيه بالطلبات الجديدة</h3>
                                        <p>ستحصل على إشعارات عند توفر طلبات جديدة</p>
                                </div>
                            </div>

                        </div>
                        <div class="contai">
                            <div class="subscription">
                                <h2>اشترك في قائمتنا البريدية</h2>
                                <p>هل ترغب في تلقي اخر الاخبار والمعلومات عن تطبيق شلة
                                    ادخل بريدك الالكتروني هنا لنصل إليك</p>
                                <button className="subbutton">اشترك</button>
                                <input type="email" name="email" value={formData.email} style={{ width: "80%" }} placeholder="ex@example.com" className="w-full p-2 border rounded-lg" required />

                            </div>
                        </div>
                    </div>
                </div>
                <GetApp />
                <Footer />
                <ScrollToTop />
            </div>

        </section>

    );
};

export default JoinAsPartner;