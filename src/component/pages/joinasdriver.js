import Header from '../header';
import GetApp from '../getapp';
import Footer from '../footer';
import ScrollToTop from '../ScrollToTop';
import React, { useState } from 'react';
import '../css/joinasdriver.css';
import deliveryMan from '../img/deliveryman.webp';
import bickedriver from '../img/bickedriver.webp';
import uploadImg from '../img/uploadImg.png';

function JoinAsAdriver(){
// State for form inputs
const [formData, setFormData] = useState({
    firstName: '',
    familyName: '',
    email: '',
    driverType: '', 
    area: '',
    vehicleType: '', 
    idType: '', 
    idNumber: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    firstName: '',
    familyName: '',
    email: '',
    driverType: '',
    area: '',
    vehicleType: '',
    idType: '',
    idNumber: '',
  });

  // State for image preview and agreement
  const [imagePreview, setImagePreview] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`); // Debugging
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear error for this field when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

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

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

//check fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'هذا الحقل مطلوب';
        isValid = false;
      }
    });
// Additional validation for specific fields
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const isValid = validateForm();

    if (!isAgreed) {
      alert('يرجى الموافقة على الشروط والأحكام!');
      return;
    }

    if (isValid) {
      console.log('Form submitted:', formData);
      alert('تم إرسال النموزج بنجاح!');
      // Reset form after successful submission
      handleReset();
    }
  };

  // Handle reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      familyName: '',
      email: '',
      driverType: '',
      area: '',
      vehicleType: '',
      idType: '',
      idNumber: '',
    });
    setErrors({
      firstName: '',
      familyName: '',
      email: '',
      driverType: '',
      area: '',
      vehicleType: '',
      idType: '',
      idNumber: '',
    });
    setImagePreview(null);
    setIsAgreed(false);
  };
    return(
        <section className="join-as-driver">
            <Header />
            <div className="join-as-driver-container">
                <div className="join-as-driver-content">
                    <div className="join-as-driver-hero"></div>
                </div>
                <div className="join-as-driver-main-content">
                    <div className="join-as-driver-form-title">
                        <h1>الانضمام كعامل توصيل </h1>
                    </div>
                    <div className="join-as-driver-form">
                        <form className="main-form" onSubmit={handleSubmit}>
                            <div className="main-form-description">
                                <p>معلومات  عامل التوصيل </p>
                            </div>
                            <div className="form-fields">
                                <div className="field-group">
                                    <div className="field-group-items">
                                        <div className="field-group-name">
                                            <label>الاسم الأول </label>
                                            <input type="text" className={errors.firstName ? 'error-border' : ''} name="firstName" value={formData.firstName} onChange={handleChange} placeholder="احمد" required />
                                            {errors.firstName && <span className="error">{errors.firstName}</span>}
                                        </div>
                                        <div className="field-group-family">
                                            <label>اسم العائلة </label>
                                            <input type="text" className={errors.familyName ? 'error-border' : ''}  name="familyName" placeholder="خلف" value={formData.familyName} onChange={handleChange} required /> 
                                            {errors.familyName && <span className="error">{errors.familyName}</span>}
                                        </div>
                                    </div>
                                    <div className="field-group-items">
                                        <div className="field-group-email">
                                            <label>البريد الالكتروني </label>
                                            <input type="email" className={errors.email ? 'error-border' : ''} name="email" placeholder="ex@example.com" value={formData.email} onChange={handleChange} required />
                                            {errors.email && <span className="error">{errors.email}</span>}
                                        </div>
                                        <div className="field-group-driver">
                                            <label>نوع مندوب التوصيل </label>
                                                    <div className="select-warpper">
                                                        <select className={`field-group-driver-type ${errors.driverType ? 'error-border' : ''}`} name="driverType" value={formData.driverType } onChange={handleChange} required>
                                                            <option value="independent" defaultValue={""}>مستقل</option>
                                                            <option value="independent">مستقل</option>
                                                            <option value="partner">شريك</option>
                                                            <option value="employee">تاجر</option>
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
                                 <input type="checkbox" id="terms" name="terms" checked={isAgreed} onChange={(e) => setIsAgreed(e.target.checked)}/>
                                 <label htmlFor="terms"> الموافقة على جميع <span>الشروط والأحكام</span></label>
                                 </div>
                                 <div className="form-actions">
                                    <button type="reset" className="btn btn-reset" onClick={handleReset}>إعادة ضيط </button>
                                    <button type="submit" className="btn btn-submit" disabled={!isAgreed}>ارسال</button>
                                 </div>
                            </div>
                        </form>
                        <div className="driver-benefits">
                            <div className="benefits-title">
                                <h2>فوائد الإنضمام كعامل توصيل في <span>شلة</span></h2>
                            </div>
                            <div className="benefits-list">
                               <div className="benefit-item right">
                                    <img src={deliveryMan} alt="Always Connected" loading='lazy' />
                                    <div className='benefit-item-description'>
                                      <h3>متصل في اي وقت </h3>
                                      <p>التمتع بحرية العمل في الاوقات الملائمة لك كما سوف تتمكن من عملك ومسؤولياتك الاخرى </p>
                                    </div>
                                </div>
                                <div className="benefit-item left">
                                    <img src={bickedriver} alt="Competitive Rates" loading='lazy' />
                                    <div className='benefit-item-description'>
                                       <h3>استمتع برسوم خدمة تنافسية</h3>
                                       <p>استمتع برسوم توصيل تنافسية عند توصيل كل طلب واختر الطلبات القريبة منك</p>
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
    )
}
export default JoinAsAdriver;



  

