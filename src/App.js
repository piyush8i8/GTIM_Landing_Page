// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Testimonial from './Components/Testimonial';
// import TestimonialScroller from './Components/TestimonialScroller';
// import CompanyScroller from './Components/CompanyScroller';
// import CareerConsultationForm from './Components/CareerConsultationForm';
// import TrendingCoursesSection from './Components/TrendingCoursesSection';
// import LearningModesSection from './Components/LearningModesSection';
// import PartnerUniversities from './Components/PartnerUniversities';
// import Certifications from './Components/Certifications';
// import Hero from './Components/Hero';
// import UniversityDetail from './Components/UniversityDetail';

// function App() {
//   return (
//     <div className="App">
//       <Hero></Hero>
//       <Certifications></Certifications>
//      {/* // <UniversityDetail></UniversityDetail> */}
//        <Router>
//       <Routes>
//         <Route path="/" element={<PartnerUniversities />} />
//         <Route path="/universities/:slug" element={<UniversityDetail />} />
//       </Routes>
//     </Router>
//       {/* <PartnerUniversities></PartnerUniversities> */}
//       <LearningModesSection></LearningModesSection>
//       <TrendingCoursesSection></TrendingCoursesSection>
//       <CareerConsultationForm></CareerConsultationForm>
//       <CompanyScroller></CompanyScroller>
//      <TestimonialScroller></TestimonialScroller>
//     <Testimonial></Testimonial>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Testimonial from './Components/Testimonial';
import TestimonialScroller from './Components/TestimonialScroller';
import CompanyScroller from './Components/CompanyScroller';
import CareerConsultationForm from './Components/CareerConsultationForm';
import TrendingCoursesSection from './Components/TrendingCoursesSection';
import LearningModesSection from './Components/LearningModesSection';
import PartnerUniversities from './Components/PartnerUniversities';
import Certifications from './Components/Certifications';
import Hero from './Components/Hero';
import UniversityDetail from './Components/UniversityDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Certifications />
                <PartnerUniversities />
                <LearningModesSection />
                <TrendingCoursesSection />
                <CareerConsultationForm />
                <CompanyScroller />
                <TestimonialScroller />
                <Testimonial />
              </>
            }
          />
          <Route path="/universities/:slug" element={<UniversityDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
