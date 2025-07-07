import {  Routes, Route } from 'react-router-dom';
import './App.css';

// Header and common components
import Header from './components/Header';
import Footer from './pages/Footer';
import Home from './pages/Home';

// Components from first version
import AscotRacecourse from './pages/essentials/AscotRacecourse';
import PerfectAirportTransfer from './pages/essentials/PerfectAirportTransfer';
import Business from './pages/essentials/Business';
import NewBusiness from './pages/essentials/NewBusiness';
import XlClass from './pages/essentials/XlClass';
import FirstClass from './pages/essentials/FirstClass';
import Suv from './pages/essentials/Suv';
import Concierge from './pages/essentials/Concierge';
import ChauffeurForDay from './pages/essentials/ChauffeurForDay';
import TheAcademy from './pages/TheAcademy';
import TheChauffers from './pages/TheChauffeur';
import Becomeac from './pages/BecomeAChauffeur/BecomeAChauffeur';

// Components from second version
import Page1 from './pages/Cities and Classes page/Page1';
import Membership from './pages/Membership-page/Membership';
import WheelyFB from './pages/Wheely for Business/WheelyFB';
import NewsRoom from './pages/Footer-pages/NewsRoom';
import CookiePolicy from './pages/Footer-pages/CookiePolicy';
import JobBoard from './pages/Footer-pages/JobBoard';
import OpenRole from './pages/Footer-pages/OpenRole';
import ContactInfo from './pages/Footer-pages/ContactInfo';
import WorkAtWheely from './pages/Footer-pages/WorkAtWheely';
import HelpCenter from './pages/Footer-pages/HelpCenter';
import LegalPage from './pages/Footer-pages/LegalPage';
import TermsConditions from './pages/Footer-pages/privacy-and-rulse/For-passenger/TermsConditions';
import ServiceProviderTerms from './pages/Footer-pages/privacy-and-rulse/For Partner/ServiceProviderTerms';
import PrivacyPolicypassenger from './pages/Footer-pages/privacy-and-rulse/For-passenger/PrivacyPolicypassenger';
import SubPartnerAgreement from './pages/Footer-pages/privacy-and-rulse/For Partner/SubPartnerAgreement';
import TermsConditionForPartner from './pages/Footer-pages/privacy-and-rulse/For Partner/TermsConditionForPartner';
import TermsConditionsCorporate from './pages/Footer-pages/For_Corporate-client/TermsConditionsCorporate';
import Privacy_Policy_Cor from './pages/Footer-pages/For_Corporate-client/Privacy_Policy_Cor';
import Service_ptF from './pages/Footer-pages/privacy-and-rulse/For-passenger/Service_ptF';
import SptForPartner from './pages/Footer-pages/privacy-and-rulse/For Partner/SptForPartner';
import ServiceProvider from './pages/Footer-pages/For_Corporate-client/ServiceProvider';
import LondonPage from './pages/Cities and Classes page/LondonPage';
import AccessWheelyBusiness from './pages/Wheely For Business/AccessWheelyBusiness';
import Register from './pages/Register';
import DubaiPage from './pages/Cities and Classes page/DubaiPage';
import OnDemand from './pages/Footer-pages/Newspages/OnDeman';
import Announced from './pages/Footer-pages/Newspages/Announced';
import Unveils from './pages/Footer-pages/Newspages/Unveils';
import Valentines from './pages/Footer-pages/Newspages/Valentines';
import Rangerover from './pages/Footer-pages/Newspages/Rangerover';
import Limitededition from './pages/Footer-pages/Newspages/Limitededition';
import Luxury from './pages/Footer-pages/Newspages/Luxury';

function App() {
  return (
    <>
  
      <Header />
      <Routes>
        {/* Common route */}
        <Route path="/" element={<Home />} />

        {/* Routes from first version */}
        <Route path="/essentials/ascot-racecourse" element={<AscotRacecourse />} />
        <Route path="/essentials/perfect-airport-transfers" element={<PerfectAirportTransfer />} />
        <Route path="/essentials/concierge" element={<Concierge />} />
        <Route path="/essentials/chauffeur-for-a-day" element={<ChauffeurForDay />} />
        <Route path="/essentials/the-academy" element={<TheAcademy />} />
        <Route path="/essentials/the-chauffeurs" element={<TheChauffers />} />
        <Route path="/chauffeurs" element={<Becomeac />} />
        <Route path="/classes/business" element={<Business />} />
        <Route path="/classes/new-business" element={<NewBusiness />} />
        <Route path="/classes/first" element={<FirstClass />} />
        <Route path="/classes/xl" element={<XlClass />} />
        <Route path="/classes/suv" element={<Suv />} />

  {/*Cities Pages*/}
           <Route path="/Cities/London" element={<LondonPage/>} />



        {/* Routes from second version */}
        <Route path="/Cities" element={<Page1 />} />
        <Route path="/Membership" element={<Membership />} />
        <Route path="/business" element={<WheelyFB />} />
        <Route path="/Chauffers/the-Chauffers" element={<TheChauffers />} />
        <Route path="/Chauffers/the-Academy" element={<TheAcademy />} />
        <Route path="/Chauffers/Becomeac" element={<Becomeac />} />
        <Route path="/Footer/Newsroom" element={<NewsRoom />} />
        <Route path="/Footer/jobBoard" element={<JobBoard />} />
        <Route path="/Footer/jobRoles" element={<OpenRole />} />
        <Route path="/Footer/ContactUs" element={<ContactInfo />} />
        <Route path="/Footer/WorkAtWheely" element={<WorkAtWheely />} />
        <Route path="/Footer/HelpCenter" element={<HelpCenter />} />
        <Route path="/Footer/LegalPage" element={<LegalPage />} />

        {/* For Passenger Legal Pages */}
        <Route path="/Footer/LegalPage/Pasenger/TermCondition" element={<TermsConditions />} />
        <Route path="/Footer/LegalPage/Pasenger/Service" element={<Service_ptF />} />
        <Route path="/Footer/Passenger/CookiePolicy" element={<CookiePolicy />} />
        <Route path="/Footer/LegalPage/Passenger/PrivacyPolicy" element={<PrivacyPolicypassenger />} />

        {/* For Partner Legal Pages */}
        <Route path="/Footer/Partner/TermsCondition" element={<TermsConditionForPartner />} />
        <Route path="/Footer/Partner/ServiceProviderTerm" element={<SptForPartner />} />
        <Route path="/Footer/Partner/SubPartnerAgreement" element={<SubPartnerAgreement />} />
        <Route path="/Footer/Partner/ServiceProviderTerms" element={<ServiceProviderTerms />} />

        {/* For Corporate Legal Pages */}
        <Route path="/Footer/Corporate/TermsCondition" element={<TermsConditionsCorporate />} />
        <Route path="/Footer/Corporate/Privacy_Policy_Cor" element={<Privacy_Policy_Cor />} />
        <Route path="/Footer/Corporate/Service_Provider" element={<ServiceProvider />} />
          
         
        <Route path="/business/opeen-account" element={<AccessWheelyBusiness/>} />
        <Route path="/business/Register" element={<Register/>} />


 <Route path="/Cities/Dubai" element={<DubaiPage/>} />

 {/*News Pages*/}
  <Route path="/Footer/Newsroom/OnDemand" element={<OnDemand/>} />
    <Route path="/Footer/Newsroom/Announced" element={<Announced/>} />
    <Route path='/Footer/Newsroom/Unveils' element={<Unveils/>} />
           
    <Route path='/Footer/Newsroom/Valentine' element={<Valentines/>} />
    <Route path='/Footer/Newsroom/Rangerover' element={<Rangerover/>} />
    <Route path='/Footer/Newsroom/LimitedEdition' element={<Limitededition/>} />
    <Route path='/Footer/Newsroom/Luxury' element={<Luxury/>} />

           
      </Routes>


     
    

      <Footer />
      </>
  );
}

export default App;