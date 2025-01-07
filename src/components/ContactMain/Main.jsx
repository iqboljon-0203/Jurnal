import { Search, Menu, X } from "lucide-react";
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from "../LanguageSelector/App";
import NavItem from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
const App = () => {
  const { t } = useTranslation();
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
    <div className="h-[28.38rem] main_wrapper bg-[#1a365d]">
      <header className="h-full  flex flex-col w-full ">
        <nav style={{position: 'relative', zIndex: 20}} className="navbar_main py-4 bg-[#FFFFFF1A] px-12">
        <div className="navbar_inner flex items-center justify-between">
        <Link to={"/"}>
            <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />
          </Link>

          <div className="flex items-center gap-6 list_inner">
            <NavItem text={t("home_page")}/>
                        <NavItem text={t("about_us")} hasDropdown="about" />
                        <NavItem text={t("for_authors")} hasDropdown="authors" />
                        <NavItem text={t("articles")} />
                        <NavItem text={t("archive")} />
                        <NavItem text={t("contacts")} />
          </div>
          <div className="flex items-center gap-4 ml-4 search-lang">
            <div className="navbar_form">
            <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent input_inner text-white placeholder-white w-72 h-10 pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
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
        <main className="flex-grow flex flex-col items-center justify-center -mt-20 container mx-auto px-4">
          <div className="main_article_path md:text-base text-sm font-normal leading-[1.37rem] text-center text-white mb-6">
            <Link className="hover:text-[#FFC82A]" to={"/"}>{t("home_page")}</Link> /{" "}
            <span className="md:text-base text-sm font-normal leading-[1.37rem] text-left text-[#FFFFFF80]">
              {t("contacts")}
            </span>
          </div>
          <h2 className="md:w-2/3 w-full main_article_title  md:text-5xl text-4xl font-bold leading-[3.30rem] text-center text-white uppercase mb-6">
            {t("contacts")}
          </h2>
        </main>
      </header>
    </div>
  );
};

export default App;
