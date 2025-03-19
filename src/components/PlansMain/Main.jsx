import { Search, Menu, X } from "lucide-react";
import UsatLogo from "../../assets/logos/eng_logo.png";
import LanguageSelector from "../LanguageSelector/App";
import NavItem from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Logo from "../../assets/logos/logo.svg"
const App = () => {
  const { t } = useTranslation();
  const language=localStorage.getItem("i18nextLng")||'uz';
  const [searchQuery, setSearchQuery] = useState("");
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMenuOpen]);
  return (
    <div className="h-[34.38rem] main_wrapper bg-[#1a365d]">
      <header className="h-full  flex flex-col w-full ">
        <nav
          style={{ position: "relative", zIndex: 20 }}
          className=" py-4 bg-[#FFFFFF1A] navbar_main px-12"
        >
          <div className="navbar_inner flex items-center justify-between">
            <Link to={"/"}>
              {/* <img src={language==="uz"?UsatLogo:Logo} alt="University Logo" className="h-12 w-50" /> */}
               <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />
            </Link>

            <div className="flex items-center gap-6 list_inner">
              <NavItem text={t("home_page")} />
              <NavItem text={t("about_us")} hasDropdown="about" />
              <NavItem text={t("for_authors")} hasDropdown="authors" />
              <NavItem text={t("articles")} />
              <NavItem text={t("archive")} />
              <NavItem text={t("contacts")} />
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="navbar_form">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="search"
                    placeholder={t("search")}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent input_inner text-white placeholder-white w-72 h-10 pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
                  />
                  <button type="submit">
                    <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
                  </button>
                </form>
              </div>
              <div className="language_selector">
                <LanguageSelector></LanguageSelector>
              </div>
              <button
                className="menu_button w-20 items-center justify-center pr-2 pt-1 pb-1 pl-2 rounded-3xl border-2 border-white"
                onClick={toggleMenu}
              >
                {isMenuOpen ? (
                  <X className="h-7 w-7 text-white" />
                ) : (
                  <Menu className="h-7 w-7 text-white" />
                )}
              </button>
            </div>
          </div>
        </nav>
        <div className={`responsive-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="responsive-menu-inner">
          <div className='navbar_form_inner'>
          <div className='flex  xs:flex-row items-stretch gap-4 w-full max-w-[320px]'>
                <form onSubmit={handleSearch} className="relative flex items-center w-full min-w-0">
                  <input
                    type="search"
                    placeholder={t("search")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-white placeholder-white h-10 input_inner pt-2 pr-2 pb-2 pl-4 rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70 w-full text-sm"
                  />
                  <button type='submit' className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Search className="h-5 w-5 text-white/70" />
                  </button>
                </form>
                <div className='language_selector_inner shrink-0'>
                  <LanguageSelector inner={true} />
                </div>
              </div>
              </div>
            <NavItem text={t("home_page")}/>
            <NavItem text={t("about_us")} hasDropdown="about" isResponsive={true} />
            <NavItem text={t("for_authors")} hasDropdown="authors" isResponsive={true} />
            <NavItem text={t("articles")} />
            <NavItem text={t("archive")} />
            <NavItem text={t("contacts")} />
           
          </div>
        </div>
        <main className="flex-grow flex flex-col items-center justify-center -mt-20 container mx-auto px-4">
          <div className="main_article_path md:text-base text-sm font-normal leading-[1.37rem] text-center text-white mb-6">
            <Link className="hover:text-[#FFC82A]" to={"/"}>
              {t("home_page")}
            </Link>{" "}
            /{" "}
            <Link className="hover:text-[#FFC82A]" to={"/"}>
              <span className="md:text-base text-sm font-normal leading-[1.37rem] text-left">
                {t("about_us")}
              </span>
            </Link>{" "}
            /{" "}
            <span className="md:text-base text-sm font-normal leading-[1.37rem] text-left text-[#FFFFFF80]">
              {t("about_journal")}
            </span>
          </div>
          <h2 className="md:w-2/3 w-full  main_article_title lg:text-5xl md:text-4xl text-3xl font-bold leading-[3.30rem] text-center text-white uppercase mb-12">
            {t("about_journal")}
          </h2>
          <p className="w-10/12 mx-auto lg:text-lg text-md font-normal leading-[1.57rem] text-center text-white">
            {t("plans_text")}
          </p>
        </main>
      </header>
    </div>
  );
};

export default App;
