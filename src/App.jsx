// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import {
  Home, BookOpen, Atom, School, Award, FileText, MessageSquare, ChevronLeft, Menu, X,
  Book, Building, GraduationCap, FlaskConical, Sparkles, User, Heart, Info, Crosshair, Target,
  Landmark, BadgeCheck, ClipboardList, Brain, ArrowRight
} from 'lucide-react';
import { Send, Facebook, Mail } from 'lucide-react';


import Bacground from './assets/background.jpg';
import Profile from './assets/profile.png';

/* ----------------- Reusable UI Components ----------------- */
const ContentButton = ({ icon: Icon, title, description, onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-gray-800 text-left p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:bg-gray-700 transition-all duration-300 ease-in-out group"
  >
    <div className="flex items-center space-x-4">
      <div className="p-3 bg-cyan-100 rounded-full group-hover:bg-cyan-200 transition-duration-300">
        <Icon className="w-6 h-6 text-cyan-700" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  </button>
);

const InfoCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 mt-6">
    <div className="flex items-center mb-4 pb-2 border-b-2 border-cyan-500">
      {Icon && <Icon className="w-7 h-7 text-cyan-600 mr-3 shrink-0" />}
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    </div>
    <div className="prose prose-lg max-w-none text-gray-800">{children}</div>
  </div>
);

const BackButton = ({ to }) => (
  <Link
    to={to}
    className="flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mb-4 group"
  >
    <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
    Back
  </Link>
);

const ExploreCard = ({ icon: Icon, title, description, to }) => (
  <Link
    to={to}
    className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl hover:border-cyan-500 transition-all duration-300 ease-in-out group text-left"
  >
    <div className="p-3 bg-cyan-100 rounded-full inline-block group-hover:bg-cyan-500 transition-duration-300">
      <Icon className="w-6 h-6 text-cyan-700 group-hover:text-white transition-duration-300" />
    </div>
    <h3 className="text-lg font-semibold text-white mt-4">{title}</h3>
    <p className="text-sm text-gray-300 mt-1 mb-4">{description}</p>
    <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
      Learn More
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </div>
  </Link>
);

/* ----------------- Pages ----------------- */
const HomePage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="h-[40rem] md:h-[50rem] w-full bg-cover bg-center bg-no-repeat relative flex justify-center items-center pb-4 rounded-xl"
        style={{ backgroundImage: `url(${Bacground})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
        <div className="relative z-50 w-full max-w-[75rem] flex flex-col md:flex-row items-center justify-between px-4 md:px-20">
          <div className="text-white flex flex-col justify-end md:pr-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[8rem] xl:text-[12rem] font-bold leading-tight uppercase tracking-wider mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
              MY FIELD STUDY<br />EXPERIENCES
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-lg mb-4" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Observation of Teaching-Learning in<br />Actual School Environment 2025 - 2026
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-2" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Jay John C. Yasis
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light mb-1" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Bachelor of Secondary Education
            </p>
            <p className="text-base sm:text-lg md:text-xl font-light" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
              Major in Sciences
            </p>
            {/* <p className="text-xs sm:text-sm mt-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
              &copy; {new Date().getFullYear()}, All rights reserved. Created as part of Field Study 1 & 2.
            </p> */}
          </div>

          <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src={Profile}
              alt="Jay John C. Yasis"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] rounded-full object-cover shadow-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/E2E8F0/333333?text=:)'; }}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-6 md:py-8 text-transparent ">&nbsp;</div>

      <div className="text-center py-12 bg-gray-800 rounded-xl" >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-widest">
          Introduction
        </h2>
      </div>

      <div className="container mx-auto px-4">
        <InfoCard title="Welcome to My Portfolio!" icon={Info}>
          <p className="text-lg sm:text-xl md:text-2xl">
            Welcome to my digital portfolio! I am Jay John C. Yasis, a passionate and dedicated student
            from Camarines Norte State College (Abaño Campus), pursuing a Bachelor of Secondary
            Education with a major in Sciences.
          </p>
          <p className="mt-2 text-lg sm:text-xl md:text-2xl">
            This portfolio documents my learning experiences, reflections, and growth
            throughout my academic and practical training.
          </p>
        </InfoCard>

        <InfoCard title="About the Author" icon={User}>
          <p className="text-lg sm:text-xl md:text-2xl">
            As a future science educator, I am driven by a passion for inquiry and discovery. 
            This portfolio showcases my academic work and my teaching philosophy.
          </p>
          <Link
            to="/bio"
            className="mt-6 flex items-center text-md font-medium text-cyan-600 hover:text-cyan-800 transition-colors group"
          >
            Read my full biography & teaching philosophy
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </InfoCard>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
          Explore My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-10">
          <ExploreCard
            icon={User}
            title="FSS Biography"
            description="Learn about my background, motivations, and teaching philosophy."
            to="/bio"
          />
          <ExploreCard
            icon={GraduationCap}
            title="In-Campus (FS1)"
            description="See my learning episodes, reflections, and work from my Field Study 1."
            to="/in-campus"
          />
          <ExploreCard
            icon={Landmark}
            title="About CNSC"
            description="Discover the mission, vision, and history of my university."
            to="/cnsc"
          />
        </div>
      </div>
    </div>
  );
};

/* ----------------- Beliefs Section ----------------- */
const BeliefsSection = () => (
  <InfoCard title="Beliefs on Teaching & Learning" icon={Heart}>
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">Before Field Study</h4>
        <p className="text-gray-800">
          Before engaging in my field study, I believed that teaching was primarily about delivering content to students efficiently. I thought that success in the classroom depended mostly on clear instructions and maintaining strict discipline.
        </p>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">After Field Study</h4>
        <p className="text-gray-800">
          After completing my field study experiences, my beliefs have evolved. I realized that effective teaching requires understanding each student’s needs, fostering curiosity, and creating a supportive learning environment. Reflection, empathy, and adaptability are crucial for meaningful learning.
        </p>
      </div>
    </div>
  </InfoCard>
);

/* ----------------- Biography Page ----------------- */
const BiographyPage = () => (
  <div>
    <h1 className="text-4xl font-bold text-white mb-6">FSS Biography</h1>
    <p className="text-lg text-gray-300 mb-8">
      My personal journey as a Field Study Student (FSS), my teaching philosophy, and my reflections on growth.
    </p>

    <InfoCard title="My Profile as a Field Study Student" icon={User}>
      <p>
        I am Jay John C. Yasis, a BSED-Sciences major at Camarines Norte State College, Abaño Campus.  
      </p>
      <img src="" alt="" />
    </InfoCard>

    <BeliefsSection />
  </div>
);

/* ----------------- In-Campus Page ----------------- */
const InCampusPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-4xl font-bold text-white mb-4">In-Campus Experience (FS1)</h1>
      <p className="text-lg text-gray-300 mb-8">
        An abstract and summary of my learning and observations within the
        Camarines Norte State College environment.
      </p>
      <div className="space-y-6">
        <ContentButton
          icon={Award}
          title="Certificate of Completion"
          description="View my in-campus completion certificate (if available)."
          onClick={() => navigate('/in-cert')}
        />
        <ContentButton
          icon={ClipboardList}
          title="FS1 Learning Episodes"
          description="A compilation of all my Field Study 1 learning episodes."
          onClick={() => navigate('/fs1')}
        />
        <ContentButton
          icon={Brain}
          title="Learning Reflections (FS1)"
          description="My personal reflections for each FS1 learning episode."
          onClick={() => navigate('/fs1-reflect')}
        />
      </div>
    </div>
  );
};

/* ----------------- Generic Content Page ----------------- */
const GenericContentPage = ({ title, icon: Icon, children }) => (
  <div>
    <div className="flex items-center mb-6">
      {Icon && <Icon className="w-8 h-8 text-cyan-600 mr-3" />}
      <h1 className="text-4xl font-bold text-white">{title}</h1>
    </div>
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
      <div className="prose prose-lg max-w-none text-gray-800">{children}</div>
    </div>
  </div>
);

/* ----------------- School Info Page ----------------- */
const SchoolInfoPage = ({ pageTitle, org1, org2 }) => (
  <div>
    <h1 className="text-4xl font-bold text-white mb-6">{pageTitle}</h1>
    <div className="space-y-8">
      <InfoCard title={org1.name} icon={org1.icon}>
        <h4 className="font-semibold text-lg">Mission</h4>
        <p>{org1.mission || "Add Mission here..."}</p>
        <h4 className="font-semibold text-lg mt-4">Vision</h4>
        <p>{org1.vision || "Add Vision here..."}</p>
        <h4 className="font-semibold text-lg mt-4">Goals & Objectives</h4>
        <p>{org1.goals || "Add Goals & Objectives here..."}</p>
        <h4 className="font-semibold text-lg mt-4">History</h4>
        <p>{org1.history || "Add History here..."}</p>
      </InfoCard>
      {org2 && (
        <InfoCard title={org2.name} icon={org2.icon}>
          <h4 className="font-semibold text-lg">Mission</h4>
          <p>{org2.mission || "Add Mission here..."}</p>
          <h4 className="font-semibold text-lg mt-4">Vision</h4>
          <p>{org2.vision || "Add Vision here..."}</p>
          <h4 className="font-semibold text-lg mt-4">Goals & Objectives</h4>
          <p>{org2.goals || "Add Goals & Objectives here..."}</p>
          <h4 className="font-semibold text-lg mt-4">History</h4>
          <p>{org2.history || "Add History here..."}</p>
        </InfoCard>
      )}
    </div>
  </div>
);

/* ----------------- Header ----------------- */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'FSS Biography', to: '/bio' },
    { label: 'In-Campus (FS1)', to: '/in-campus' },
    { label: 'About CNSC', to: '/cnsc' },
  ];

  return (
    <header className="sticky top-0 z-[90] w-full bg-gray-900/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-cyan-500 rounded-full shadow-md">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-gray-200 font-medium text-sm px-3 py-2 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800/90 backdrop-blur-md transition-max-height duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        } rounded-b-xl shadow-lg`}
      >
        <nav className="flex flex-col space-y-2 px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 rounded-lg text-gray-200 hover:bg-cyan-500 hover:text-white font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};


/* ----------------- Footer ----------------- */

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 mt-0">
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm font-medium text-white">Jay John C. Yasis - BSED Sciences</p>
          <p className="text-sm">Camarines Norte State College - Abaño Campus</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://t.me/Ejon29" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Send className="w-6 h-6" />
          </a>
          <a href="https://www.facebook.com/jayjohn.yasis.9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="mailto:jjcy020529@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Jay John C. Yasis. All rights reserved.</p>
        <p>Built with React & Tailwind CSS.</p>
      </div>
    </div>
  </footer>
);



/* ----------------- Main App ----------------- */
export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 font-inter">
        <Header />
        <main className="flex-1 w-screen">
          <div className="container mx-auto px-4 py-8 md:px-8 md:py-12">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bio" element={<BiographyPage />} />
              <Route path="/in-campus" element={<InCampusPage />} />
              <Route path="/cnsc" element={
                <SchoolInfoPage
                  pageTitle="About CNSC"
                  org1={{ name: "Camarines Norte State College (CNSC)", icon: Landmark }}
                  org2={{ name: "Abaño Campus", icon: Building }}
                />
              } />
              <Route path="/in-cert" element={
                <GenericContentPage title="In-Campus Certificate" icon={BadgeCheck}>
                  <p>Certificate placeholder for FS1.</p>
                </GenericContentPage>
              } />
              <Route path="/fs1" element={
                <GenericContentPage title="FS1 Learning Episodes" icon={ClipboardList}>
                  <p>FS1 learning episodes go here.</p>
                </GenericContentPage>
              } />
              <Route path="/fs1-reflect" element={
                <GenericContentPage title="FS1 Learning Reflections" icon={Brain}>
                  <p>FS1 reflections go here.</p>
                </GenericContentPage>
              } />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
