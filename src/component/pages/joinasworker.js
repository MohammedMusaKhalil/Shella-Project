import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import GetApp from '../getapp';
import '../css/joinasdriver.css';
import ScrollToTop from '../ScrollToTop';
import Investment from '../img/investment.png';
import General from '../img/general.png';
import uploadImg from '../img/uploadImg.png';
import Spake from '../img/spake.png';


const JoinAsWorker = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        driverType: "",
        area: "",
        vehicleType: "",
        idType: "",
        idNumber: ""
    });     
      const [imagePreview, setImagePreview] = useState(null);
     // Handle file upload and preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

    const [isAgreed, setIsAgreed] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};
    
        if (!formData.firstName) {
            newErrors.firstName = "يرجى إدخال الاسم الأول";
            isValid = false;
        }
        if (!formData.lastName) {
            newErrors.lastName = "يرجى إدخال اسم العائلة";
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = "يرجى إدخال البريد الإلكتروني";
            isValid = false;
        }
        if (!formData.area) {
            newErrors.area = "يرجى إدخال المنطقة";
            isValid = false;
        }
        if (!formData.driverType) {
            newErrors.driverType = "يرجى اختيار نوع العمل";
            isValid = false;
        }
        if (!formData.vehicleType) {
            newErrors.vehicleType = "يرجى اختيار نوع المركبة";
            isValid = false;
        }
        if (!formData.idType) {
            newErrors.idType = "يرجى اختيار نوع الهوية";
            isValid = false;
        }
        if (!formData.idNumber) {
            newErrors.idNumber = "يرجى إدخال رقم الهوية";
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
            driverType: "",
            area: "",
            vehicleType: "",
            idType: "",
            idNumber: ""
        });
        setErrors({});
        setImagePreview(null);
        setIsAgreed(false);
    };
    return (
        <section className="join-as-driver">
            <Header />
            <div className="join-as-driver-container">
                <div className="join-as-worker-content">
                    <div className="join-as-driver-hero"></div>
                </div>
                <div className="join-as-driver-main-content">
                    <div className="join-as-driver-form-title">
                        <h1>الإنضمام كمقدم خدمة</h1>
                    </div>
                    <div className="join-as-driver-form">
                        <form className="main-form" onSubmit={handleSubmit}>
                            <div className="main-form-description1">
                                <p>معلومات مقدم الخدمة</p>
                            </div>
                            <div className="form-fields">
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700"> الاسم الاول</label>
                                        <input type="text" name="firstName" value={formData.firstName} placeholder="الرجاء ادخال الاسم الاول" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-family">
                                        <label className="block text-gray-700">اسم العائلة </label>
                                        <input type="text" name="lastName" value={formData.lastName} placeholder="الرجاء ادخال الاسم الاخير" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-name">
                                        <label className="block text-gray-700">البريد الالكتروني</label>
                                        <input type="email" name="email" value={formData.email} placeholder="example@example,com" onChange={handleChange} className="w-full p-2 border rounded-lg" required />
                                    </div>
                                    <div className="field-group-driver">
                                        <label>نوع العمل الخاص بك </label>
                                        <div className="select-warpper">
                                            <select className={`field-group-driver-type ${errors.driverType ? 'error-border' : ''}`} name="driverType" value={formData.driverType} onChange={handleChange} required>
                                                <option value="independent">سباك</option>
                                                <option value="electric">كهربائي</option>
                                                <option value="employee">عامل تنظيات</option>
                                            </select>
                                        </div>
                                        {errors.driverType && <span className="error">{errors.driverType}</span>}
                                    </div>

                                </div>
                                <div className="field-group-items">
                                    <div className="field-group-erea">
                                        <label>المنطقة </label>
                                        <input type="text" className={errors.area ? 'error-border' : ''} name="area" placeholder="جدة" value={formData.area} onChange={handleChange} required />
                                        {errors.area && <span className="error">{errors.area}</span>}
                                    </div>
                                    <div className="field-group-car">
                                        <label>نوع المركبة </label>
                                        <div className="select-warpper">
                                            <select className={`field-group-vehicle-type ${errors.vehicleType ? 'error-border' : ''}`} name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
                                                <option value="motorcycle" defaultValue={""}>دراجة نارية</option>
                                                <option value="motorcycle">دراجة نارية</option>
                                                <option value="bicycle">دراجة هوائية</option>
                                                <option value="car">سيارة</option>
                                            </select>
                                        </div>
                                        {errors.vehicleType && <span className="error">{errors.vehicleType}</span>}
                                    </div>


                                </div>
                                <div className="field-group-items">
                                <div className="field-group-id">
                                            <label>نوع الهوية </label>
                                            <div className="select-warpper">
                                                <select className={`field-group-id-type ${errors.idType ? 'error-border' : ''}`} name="idType" value={formData.idType } onChange={handleChange} required>
                                                    <option value="passport" defaultValue={""}>جواز سفر</option>
                                                    <option value="passport" >جواز سفر</option>
                                                    <option value="idCard">بطاقة شخصية</option>
                                                    <option value="license">رخصة القيادة</option>
                                                    <option value="residence">إقامة</option>
                                                </select>
                                            </div>
                                            {errors.idType && <span className="error">{errors.idType}</span>}
                                        </div>
                                        
                                        <div className="field-group-id-num">
                                            <label>رقم الهوية الشخصية </label>
                                            <input type="text" name="idNumber" placeholder="EX: xxxxx-xxxxxxxx-x"  value={formData.idNumber} onChange={handleChange} className={errors.idNumber ? 'error-border' : ''} required/>
                                            {errors.idNumber && <span className="error">{errors.idNumber}</span>}
                                            </div>

                                </div>
                                <div className="form-upload">
                                {imagePreview && <img id="imagePreview" src={imagePreview} alt="Preview" />}
                                <img id="imagePreview" src={uploadImg} alt="Preview" />
                                <input type="file" id="imageUpload" name="imageUpload" accept="image/*" onChange={handleImageUpload} />
                                <label htmlFor="imageUpload">تحميل صورة الهوية الشخصية</label>    
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
                                <h2 >فوائد الانضمام كمقدم خدمة في <span>شلة</span></h2>
                            </div>
                            <div className="benefits-list">
                                <div className="benefit-item right">
                                    <img src={Spake} alt="Always Connected" loading='lazy' />
                                    <div className='benefit-item-description'>
                                        <h3>  متصل في اي وقت </h3>
                                        <p>التمتع بحرية العمل في الاوقات الملائمة لك كما سوف تتمكن من
                                        عملك ومسؤولياتك الاخرى </p>
                                    </div>
                                </div>
                                <div className="benefit-item left">
                                    <img src={General} alt="Competitive Rates" loading='lazy' />
                                    <div className='benefit-item-description'>
                                        <h3>استمتع برسوم خدمة تنافسية</h3>
                                        <p>استمتع برسوم خدمة تنافسية عند استلام كل طلب 
                                        واختر الطلبات القريبة منك</p>
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

export default JoinAsWorker;