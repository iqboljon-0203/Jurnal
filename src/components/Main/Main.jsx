import { Search, Menu, X } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import Jurnal from "../../assets/logos/jurnal.png";
import LanguageSelector from '../LanguageSelector/App';
import NavItem from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
const App = () => {
  const {t}=useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?s=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <div  className="h-[34.38rem] main_wrapper bg-[#1a365d] rounded-bl-2xl rounded-br-2xl">
      <header  className="h-full  flex flex-col w-full ">
        <nav style={{position: 'relative', zIndex: 20}}  className=" navbar_main py-4 bg-[#FFFFFF1A] px-12">
          <div className='w-full flex items-center justify-between  navbar_inner'>
            
          <Link to={"/"}>
            <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />
          </Link>
            
       
          <div className={`flex items-center list_inner gap-6 }`}>
            <NavItem text={t("home_page")}/>
            <NavItem text={t("about_us")} hasDropdown="about" />
            <NavItem text={t("for_authors")} hasDropdown="authors" />
            <NavItem text={t("articles")} />
            <NavItem text={t("archive")} />
            <NavItem text={t("contacts")} />
          </div>
          <div className={`font-manrope flex items-center gap-4 ml-4 search-lang}`}>
              <div className='navbar_form'>
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="search"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-72 h-10 input_inner pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
                />
                <button type='submit'>
                <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
                </button>
              </form>
              </div>
              <div className='language_selector'>
              <LanguageSelector></LanguageSelector>
              </div>
              <button 
                className='menu_button w-20 items-center justify-center pr-2 pt-1 pb-1 pl-2 rounded-3xl border-2 border-white'
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-7 w-7 text-white" /> : <Menu className="h-7 w-7 text-white" />}
              </button>
            </div>
          </div>
        </nav>
        <div className={`responsive-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="responsive-menu-inner">
          <div className='navbar_form_inner'>
              <form onSubmit={handleSearch} className="relative flex items-center">
                <input
                  type="search"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-72 h-10 input_inner pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
                />
                <button type='submit'>
                <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
                </button>
              </form>
              </div>
            <NavItem text={t("home_page")}/>
            <NavItem text={t("about_us")} hasDropdown="about" isResponsive={true} />
            <NavItem text={t("for_authors")} hasDropdown="authors" isResponsive={true} />
            <NavItem text={t("articles")} />
            <NavItem text={t("archive")} />
            <NavItem text={t("contacts")} />
            <div className='language_selector_inner'>
              <LanguageSelector inner={true}></LanguageSelector>
            </div>
          </div>
        </div>
        <main className="hero_main flex-grow flex items-center justify-between gap-12 container mx-auto px-4 ">
          <div className="hero_item w-1/2 space-y-6">
            <h1 className="hero_title font-manrope text-5xl font-bold leading-[3.30rem] text-left text-white">
              {t("hero_title")}
            </h1>
            <p className="hero_text font-manrope text-white/80 text-lg font-normal leading-[1.57rem] text-left">
              {t("hero_text")}
            </p>
          </div>
          
          <div className="hero_item w-1/2 flex justify-center">
              <img
                src={Jurnal}
                alt="University Journal"
                className="w-64 h-80 object-cover rounded-lg"
              />
          </div>
        </main>
      </header>
    </div>
  );
};

export default App;

