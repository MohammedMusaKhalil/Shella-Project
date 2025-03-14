import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import GetApp from '../getapp';
import '../css/joinasdriver.css';
import ScrollToTop from '../ScrollToTop';
import Investment from '../img/investment.png';
import Earnings from '../img/earnings.png';
import Returning from '../img/Returning.png';


const JoinAsInvestor = () => {
    const [formData, setFormData] = useState({ 
        firstName: "",     
        lastName: "",
        email: "",
        nationality: "",
        amount: "",
        aboutme: ""
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
            firstName: "",   
            lastName: "",
            email: "",
            nationality: "",
            amount: "",
            aboutme: ""
        });
        setErrors({});
        setIsAgreed(false);
    };
    return (
        <section className="join-as-driver">
            <Header />
            <div className="join-as-driver-container">
                <div className="join-as-inv-content">
                    <div className="join-as-driver-hero"></div>
                </div>
                <div className="join-as-driver-main-content">
                    <div className="join-as-driver-form-title">
                        <h1>الإنضمام كمستثمر في <span>شلة</span> </h1>
                        <p className="textsh"> سنستحوذ على كلّ السوق وسيرغب الجميع باستخدام منتجنا</p>
                    </div>
                    <div className="join-as-driver-form">
                        <form className="main-form" onSubmit={handleSubmit}>
                            <div className="main-form-description">
                                <p>معلومات المستثمر</p>
                            </div>
                            <div className="form-fields">
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700"> الاسم الاول</label>
                                        <input type="text" name="firstName" value={formData.firstName} placeholder="الرجاء ادخال الاسم الاول" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700"> الاسم الاخير</label>
                                        <input type="text" name="lastName" value={formData.lastName} placeholder="الرجاء ادخال الاسم الاخير" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">البريد الالكتروني</label>
                                        <input type="email" name="email" value={formData.email} placeholder="example@example,com" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">مدينة الاقامة</label>
                                        <input type="text" name="city" value={formData.city} placeholder="السعودية" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>

                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">رقم الهاتف </label>
                                        <input type="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">الجنسية</label>
                                        <input type="text" name="nationality" value={formData.nationality} placeholder="السعودية" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>


                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">نبذة عن خلفيتك العلمية وخبراتك </label>
                                        <textarea
                                            name="aboutme"
                                            value={formData.aboutme}
                                            onChange={handleChange}
                                            className="custom-textarea"
                                            required
                                        />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">المبلغ المراد الاستثمار فيه</label>
                                        <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="10000SAR" className="w-full p-2 border rounded-lg" required />

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
                                <h2 >فوائد الدخول باستثمار تجاري</h2>
                            <img src={Investment} className="imageinvestment"/>
                            </div>
                            <div className="benefits-list">
                               <div className="benefit-item right">
                                    <img src={Earnings} alt="Always Connected" loading='lazy' />
                                    <div className='benefit-item-description'>
                                      <h3>ارباح سنوية مدروسة</h3>
                                      <p>قم بزيادة راس مالك عن طريق الاستثمار في شركتنا واحصل على مبالغ سنوية مجزية</p>
                                    </div>
                                </div>
                                <div className="benefit-item left">
                                    <img src={Returning} alt="Competitive Rates" loading='lazy' />
                                    <div className='benefit-item-description'>
                                       <h3>تحقيق عائد طويل الاجل خلال الاستثمار</h3>
                                       <p>سوف تحصل على عائد طويل الاجل لطالما بقيت من المستثمرين معنا في شلة</p>
                                    </div>
                                </div>
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

export default JoinAsInvestor;