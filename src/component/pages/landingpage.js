
import '../css/landingpage.css';
import Header from '../header';
import Hero from '../hero'; 
import AppDwonload from '../dwonloadappf';
import DateCalculation from '../datecalculation';
import RegesterContainer from '../logcontainer';
import Footer from '../footer';
import GetApp from '../getapp';
import ScrollToTop from '../ScrollToTop';

function Landingpage() {
  return (
    <section className='App-container'>
      <Header />
    <div className={"bigcontainer"}>
      <Hero />
      <AppDwonload />
      <DateCalculation />
      <RegesterContainer />
      <GetApp />
      <Footer />
      <ScrollToTop />
    </div>
    </section>
  );
}

export default Landingpage;