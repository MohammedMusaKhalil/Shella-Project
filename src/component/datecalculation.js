import './css/landingpage.css';
import datePart from './img/date 1.webp';

function DateCalculation() {
    return (
        <section className="date-calculation" aria-labelledby="date-calculation-title">
            <div className="date-calculation-container">
                <div className="date-calculation-part1 slide-right">
                    <div>
                        <h2 id="date-calculation-title">مع قيدها</h2>
                        <h3>لا تحسب كم باقي على الراتب</h3>
                        <p>شوف كم ناقصك في بيتك مقاضي واحنا نعطيك علي الراتب!</p>
                        <a
                            href="/signup"
                            rel="noopener noreferrer"
                            aria-label="سجل الآن للحصول على المزيد من التفاصيل"
                            className="date-calculation-link"
                        >
                            سجل الآن
                        </a>
                    </div>
                </div>
                <div className="date-calculation-part2 slide-left">
                    <img
                        src={datePart}
                        alt="تقويم يوضح الأيام المتبقية حتى الراتب"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}

export default DateCalculation;
