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
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const JoinAsKaidhaService = () => {



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // استبدل بمفتاحك الخاص
    });

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedHomeLocation, setSelectedHomeLocation] = useState(null);

    const handleHomeMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setSelectedHomeLocation(newLocation);
        setFormData(prev => ({
            ...prev,
            homeLocation: `${newLocation.lat}, ${newLocation.lng}`
        }));
    };
    const handleMapClick = (event) => {
        const newLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        };
        setSelectedLocation(newLocation);
        setFormData(prev => ({
            ...prev,
            workLocation: `${newLocation.lat}, ${newLocation.lng}`
        }));
    };







    const [formData, setFormData] = useState({
        firstName: "",
        fatherName: "",
        grandFatherName: "",
        lastName: "",
        birthDate: "",
        nationality: "",
        maritalStatus: "",
        familyMembers: "",
        idType: "",
        idNumber: "",
        idExpiry: "",
        phoneNumber: "",
        whatsappNumber: "",
        email: "",
        city: "",
        district: "",
        homeType: "",
        homeOwnership: "",
        fullAddress: "",
        driverType: "",
        homeLocation: "",
        workLocation: "",
        area: "",
        vehicleType: ""
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
            fatherName: "",
            grandFatherName: "",
            lastName: "",
            birthDate: "",
            nationality: "",
            maritalStatus: "",
            familyMembers: "",
            idType: "",
            idNumber: "",
            idExpiry: "",
            phoneNumber: "",
            whatsappNumber: "",
            email: "",
            city: "",
            district: "",
            homeType: "",
            homeOwnership: "",
            fullAddress: "",
            driverType: "",
            area: "",
            vehicleType: ""
        });
        setErrors({});
        setImagePreview(null);
        setIsAgreed(false);
    };







    return (
        <section className="join-as-driver">
            <Header />
            <div className="join-as-driver-container">
                <p className="textkaidha">تُقدّم خدمة "<span>قيدها</span>" منصةً مبتكرةً تُعيد تعريف مفهوم التمويل الاستهلاكي، حيث تُتيح للمستخدمين مرونةً غير مسبوقة في سداد قيمة مشترياتهم من المواد الغذائية والاستهلاكية. تعتمد "<span>قيدها</span>" على مبدأ "اشتر الآن، ادفع مع الراتب"، مما يُمكّن الأفراد من تلبية احتياجاتهم الأساسية دون القلق بشأن توافر السيولة النقدية في وقت الشراء. وتُمثّل "<span>قيدها</span>" نقلةً نوعيةً في مفهوم التمويل الاستهلاكي، حيث تُوفّر مرونةً غير مسبوقة وتُساهم في تحسين القوة الشرائية للأفراد. ومن خلال التعامل المسؤول والتوعية المالية، يُمكن أن تُساهم "<spane>قيدها</spane>" في تحقيق الاستقرار المالي والرفاهية الاقتصادية للمستخدمين.</p>

                <div className="join-as-driver-main-content">
                    <div className="join-as-driver-form1">
                        <div className="styleform">
                            <div className="main-form-description1">
                                <p> المعلومات الشخصية </p>
                            </div>
                            <form className="form-grid">

                                {/* الاسم الأول */}
                                <div className="input-group">
                                    <label>الاسم الأول</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                </div>

                                {/* اسم الأب */}
                                <div className="input-group">
                                    <label>اسم الأب</label>
                                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                                </div>

                                {/* اسم الجد */}
                                <div className="input-group">
                                    <label>اسم الجد</label>
                                    <input type="text" name="grandFatherName" value={formData.grandFatherName} onChange={handleChange} />
                                </div>

                                {/* اسم العائلة */}
                                <div className="input-group">
                                    <label>اسم العائلة</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                </div>

                                {/* تاريخ الميلاد */}
                                <div className="input-group">
                                    <label>تاريخ الميلاد</label>
                                    <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
                                </div>

                                {/* الجنسية */}
                                <div className="input-group">
                                    <label>الجنسية</label>
                                    <select name="nationality" value={formData.nationality} onChange={handleChange}>
                                        <option value="سعودي">سعودي</option>
                                        <option value="غير سعودي">غير سعودي</option>
                                    </select>
                                </div>

                                {/* الحالة الاجتماعية */}
                                <div className="input-group">
                                    <label>الحالة الاجتماعية</label>
                                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
                                        <option value="متزوج">متزوج</option>
                                        <option value="أعزب">أعزب</option>
                                    </select>
                                </div>

                                {/* عدد أفراد الأسرة */}
                                <div className="input-group">
                                    <label>عدد أفراد الأسرة</label>
                                    <input type="number" name="familyMembers" value={formData.familyMembers} onChange={handleChange} />
                                </div>

                                {/* نوع الهوية */}
                                <div className="input-group">
                                    <label>نوع الهوية</label>
                                    <select name="idType" value={formData.idType} onChange={handleChange}>
                                        <option value="بطاقة هوية">بطاقة هوية</option>
                                        <option value="إقامة">إقامة</option>
                                    </select>
                                </div>

                                {/* رقم الهوية */}
                                <div className="input-group">
                                    <label>رقم الهوية</label>
                                    <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
                                </div>

                                {/* تاريخ انتهاء الهوية */}
                                <div className="input-group">
                                    <label>تاريخ الانتهاء</label>
                                    <input type="date" name="idExpiry" value={formData.idExpiry} onChange={handleChange} />
                                </div>

                                {/* رقم الجوال */}
                                <div className="input-group">
                                    <label>رقم الجوال</label>
                                    <div className="flex items-center">

                                        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="flex-1" />
                                    </div>
                                </div>

                                {/* رقم الواتساب */}
                                <div className="input-group">
                                    <label>رقم الواتساب</label>
                                    <div className="flex items-center">

                                        <input type="text" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} className="flex-1" />
                                    </div>
                                </div>

                                {/* البريد الإلكتروني */}
                                <div className="input-group col-span-2">
                                    <label>بريدك الإلكتروني</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </div>

                                {/* المدينة */}
                                <div className="input-group">
                                    <label>المدينة</label>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} />
                                </div>

                                {/* الحي */}
                                <div className="input-group">
                                    <label>الحي</label>
                                    <input type="text" name="district" value={formData.district} onChange={handleChange} />
                                </div>

                                {/* نوع المنزل */}
                                <div className="input-group">
                                    <label>نوع المنزل</label>
                                    <select name="homeType" value={formData.homeType} onChange={handleChange}>
                                        <option value="شقة">شقة</option>
                                        <option value="فيلا">فيلا</option>
                                    </select>
                                </div>

                                {/* طبيعة المنزل */}
                                <div className="input-group">
                                    <label>طبيعة المنزل</label>
                                    <select name="homeOwnership" value={formData.homeOwnership} onChange={handleChange}>
                                        <option value="أجار">أجار</option>
                                        <option value="ملك">ملك</option>
                                    </select>
                                </div>
                                <div className="input-group full-width">
                                    <label>عنوان السكن التفصيلي</label>
                                    <input type="text" name="fullAddress" placeholder="جدة , شارع 500 تفرع 2" value={formData.fullAddress} onChange={handleChange} />
                                </div>


                                <div className="input-group full-width">
                                    <label>حدد موقع السكن</label>
                                    <input
                                        type="text"
                                        name="homeLocation"
                                        placeholder="saudi arabia gcc656 mmt 11m"
                                        value={formData.homeLocation || ''}
                                        readOnly
                                        className="location-input"
                                    />
                                    {isLoaded && (

                                        <GoogleMap
                                            mapContainerStyle={{
                                                width: '100%',
                                                height: '400px',
                                                marginTop: '10px',
                                                borderRadius: '8px'
                                            }}
                                            center={selectedHomeLocation || { lat: 24.7136, lng: 46.6753 }}
                                            zoom={12}
                                            onClick={handleHomeMapClick}
                                        >
                                            {selectedHomeLocation && (
                                                <Marker
                                                    position={selectedHomeLocation}
                                                    label="🏠" // رمز بيت للتمييز
                                                />
                                            )}
                                        </GoogleMap>
                                    )}

                                   
                                </div>

                                <div className="input-group full-width">
                                    <div className="main-form-description1">
                                        <p>معلومات العمل </p>
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label htmlFor="companyName">اسم الشركة <span>*</span></label>
                                    <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="jobTitle">المسمى الوظيفي <span>*</span></label>
                                    <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="yearsOfExperience">عدد سنين العمل <span>*</span></label>
                                    <input type="number" id="yearsOfExperience" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="totalSalary">إجمالي الراتب <span>*</span></label>
                                    <input type="number" id="totalSalary" name="totalSalary" value={formData.totalSalary} onChange={handleChange} required />
                                </div>
                                <div className="input-group full-width">
                                    <label>  العنولن التفصيلي للعمل <span>*</span></label>
                                    <input type="text" name="fullAddress" placeholder="جدة , شارع 500 تفرع 2" value={formData.fullAddress} onChange={handleChange} />
                                </div>

                                {isLoaded && (
                                    <div className="input-group full-width" style={{ marginTop: '20px' }}>
                                        <label>  حدد موقع العمل </label>
                                        <input
                                            type="text"
                                            name="workLocation"
                                            placeholder=" saudi arabia gcc656 mmt 11m"
                                            value={formData.workLocation || ''}
                                            readOnly
                                            style={{ marginTop: '10px' }}
                                        />
                                        <GoogleMap
                                            mapContainerStyle={{
                                                width: '100%',
                                                height: '400px',
                                                marginTop: '10px',
                                                borderRadius: '8px'
                                            }}
                                            center={selectedLocation || { lat: 24.7136, lng: 46.6753 }} // إحداثيات الرياض الافتراضية
                                            zoom={12}
                                            onClick={handleMapClick}
                                        >
                                            {selectedLocation && <Marker position={selectedLocation} />}
                                        </GoogleMap>

                                    </div>
                                )}




                                <div className="full-width  ">
                                    <label>هل لديك أقساط؟</label>
                                </div>
                                <div className="full-width">
                                    <button type="button" className="addbutton">
                                        إضافة قسط
                                    </button>
                                </div>


                                <div className="input-group">
                                    <label>اسم الجهة</label>
                                    <input
                                        type="text"
                                        placeholder="اسم الجهة"
                                        value="بنك الراجحي"
                                        className="border p-2"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>  المبلغ</label>
                                    <input
                                        type="number"
                                        placeholder="مبلغ الالتزام"
                                        value="5000"
                                        className="border p-2"
                                    />
                                </div>
                                <div className="input-group">
                                    <button type="button" className="removebutton">
                                        إزالة
                                    </button>
                                </div>

                                <div className="input-group full-width">
                                    <div className="main-form-description1">
                                        <p> مصادر دخل اضافية </p>
                                    </div>
                                </div>


                                <div className="full-width">
                                    <button type="button" className="addbutton">
                                        إضافة مصدر دخل اخر
                                    </button>
                                </div>


                                <div className="input-group">
                                    <label> جهة الدخل</label>
                                    <input
                                        type="text"
                                        placeholder="اسم الجهة"
                                        value="بنك الراجحي"
                                        className="border p-2"
                                    />
                                </div>
                                <div className="input-group">
                                    <label>المبلغ</label>
                                    <input
                                        type="number"
                                        placeholder="مبلغ الالتزام"
                                        value="5000"
                                        className="border p-2"
                                    />
                                </div>
                                <div className="input-group">
                                    <button type="button" className="removebutton">
                                        إزالة
                                    </button>
                                </div>
                                <div className="form-actions full-width1">
                                    <button type="reset" className="btn btn-reset" onClick={handleReset}>إعادة ضيط </button>
                                    <button type="submit" className="btn btn-submit" disabled={!isAgreed}>ارسال</button>
                                </div>
                            </form>
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

export default JoinAsKaidhaService;