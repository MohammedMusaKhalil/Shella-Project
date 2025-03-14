import './css/landingpage.css';
import marketJob from './img/marketeq_job.png';
import carBox from './img/bx_car.png';
import moneyBag from './img/solar_money-bag-linear.png';
import employee from './img/clarity_employee-line.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function RegesterContainer() {
    return (
      <section
        className="register-container"aria-label="خيارات التسجيل في شلة">
        <div className="register-container-wrapper">
          <div className="register-container-gray1 first-Fadein">
            <div className="register-container-img">
              <img
                src={marketJob}
                alt="رمز التسجيل كمطعم أو متجر"
                loading="lazy"
              />
            </div>
            <div className="register-container-title">
              <div className="register-container-title-p">
                <h2 className="register-container-title-1">
                  سجل مطعمك أو متجرك
                </h2>
                <p className="register-container-title-2">
                  قم بتوسعة نشاطك بالوصول إلى عملاء أكثر معنا
                </p>
              </div>
              <div className="register-container-title-link">
                <a
                  href="/register/restaurant"
                  rel="noopener noreferrer"
                  aria-label="سجل الآن كمطعم أو متجر"
                  className="register-link"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: "0.8rem",
                      color: "#2D3633",
                      marginLeft: "20px",
                      backgroundColor: "#fa9d2b",
                      padding: "0.18rem",
                      borderRadius: "4px",
                    }}
                  />
                  سجل الآن
                </a>
              </div>
            </div>
          </div>

          <div className="register-container-white1 second-Fadein">
            <div className="register-container-img">
              <img src={carBox} alt="رمز التسجيل كمندوب توصيل" loading="lazy" />
            </div>
            <div className="register-container-title">
              <div className="register-container-title-p">
                <h2 className="register-container-title-1">سجل كمندوب توصيل</h2>
                <p className="register-container-title-2">
                  كن مندوب توصيل واكسب دخلاً إضافياً معنا
                </p>
              </div>
              <div className="register-container-title-link">
                <a
                  href="/Shella-Project/join-as-driver"
                  rel="noopener noreferrer"
                  aria-label="سجل الآن كمندوب توصيل"
                  className="register-link"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: "0.8rem",
                      color: "#2D3633",
                      marginLeft: "20px",
                      backgroundColor: "#fa9d2b",
                      padding: "0.18rem",
                      borderRadius: "4px",
                    }}
                  />
                  سجل الآن
                </a>
              </div>
            </div>
          </div>

          <div className="register-container-white2 third-Fadein">
            <div className="register-container-img">
              <img
                src={moneyBag}
                alt="رمز التسجيل كمستثمر في شلة"
                loading="lazy"
              />
            </div>
            <div className="register-container-title">
              <div className="register-container-title-p">
                <h2 className="register-container-title-1">
                  سجل الآن كمستثمر في شلة
                </h2>
                <p className="register-container-title-2">
                  قم بالاستثمار في شركتنا وتعرف على مزايا الاستثمار
                </p>
              </div>
              <div className="register-container-title-link">
                <a
                  href="/register/restaurant"
                  rel="noopener noreferrer"
                  aria-label="سجل الآن كمطعم أو متجر"
                  className="register-link"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: "0.8rem",
                      color: "#2D3633",
                      marginLeft: "20px",
                      backgroundColor: "#fa9d2b",
                      padding: "0.18rem",
                      borderRadius: "4px",
                    }}
                  />
                  سجل الآن
                </a>
              </div>
            </div>
          </div>

          <div className="register-container-gray2 fourth-Fadein">
            <div className="register-container-img">
              <img src={employee} alt="رمز التسجيل كمقدم خدمة" loading="lazy" />
            </div>
            <div className="register-container-title">
              <div className="register-container-title-p">
                <h2 className="register-container-title-1">سجل كمقدم خدمة</h2>
                <p className="register-container-title-2">
                  سجل حسب مهنتك معنا واكسب دخلًا إضافيًا
                </p>
              </div>
              <div className="register-container-title-link">
                <a
                  href="/register/restaurant"
                  rel="noopener noreferrer"
                  aria-label="سجل الآن كمطعم أو متجر"
                  className="register-link"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    style={{
                      fontSize: "0.8rem",
                      color: "#2D3633",
                      marginLeft: "20px",
                      backgroundColor: "#fa9d2b",
                      padding: "0.18rem",
                      borderRadius: "4px",
                    }}
                  />
                  سجل الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default RegesterContainer;