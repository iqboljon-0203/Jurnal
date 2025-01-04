import { Search, Menu, X } from "lucide-react";
import UsatLogo from "../../assets/logos/usat_logo.webp";
import LanguageSelector from "../LanguageSelector/App";
import { Download } from "lucide-react";
import NavItem from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import fileUrl from "../../assets/files/nizom.pdf";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const App = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleDownload = useCallback(() => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "ro'yhat.pdf"; // You can change the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
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
    <div className="xl:h-[44.38rem] h-[48rem] main_wrapper bg-[#1a365d]">
      <header className="h-full  flex flex-col w-full ">
        <nav
          style={{ position: "relative", zIndex: 20 }}
          className=" py-4 navbar_main bg-[#FFFFFF1A] px-12"
        >
          <div className="navbar_inner flex items-center justify-between">
            <Link to={"/"}>
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
        <div className={`responsive-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="responsive-menu-inner">
            <div className="navbar_form_inner">
              <form
                onSubmit={handleSearch}
                className="relative flex items-center"
              >
                <input
                  type="search"
                  placeholder={t("search")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-72 h-10 input_inner pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
                />
                <button type="submit">
                  <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
                </button>
              </form>
            </div>
            <NavItem text={t("home_page")} />
            <NavItem
              text={t("about_us")}
              hasDropdown="about"
              isResponsive={true}
            />
            <NavItem
              text={t("for_authors")}
              hasDropdown="authors"
              isResponsive={true}
            />
            <NavItem text={t("articles")} />
            <NavItem text={t("archive")} />
            <NavItem text={t("contacts")} />
            <div className="language_selector_inner">
              <LanguageSelector inner={true}></LanguageSelector>
            </div>
          </div>
        </div>
        <main className="flex-grow flex flex-col items-center justify-center 2xl:-mt-20 mt-4 container mx-auto px-4 py-4">
          <div className="main_article_path md:text-base text-sm font-normal leading-[1.37rem] text-center text-white mb-6">
            <Link className="hover:text-[#FFC82A]" to={"/"}>
              {t("home_page")}
            </Link>{" "}
            /{" "}
            <Link className="hover:text-[#FFC82A]" to={"/"}>
              <span className="md:text-base text-sm font-normal leading-[1.37rem] text-left">
                {t("for_authors")}
              </span>
            </Link>{" "}
            /{" "}
            <span className="md:text-base text-sm font-normal leading-[1.37rem] text-left text-[#FFFFFF80]">
              {t("checklist")}
            </span>
          </div>
          <h2 className="lg:w-2/3 w-full main_article_title lg:text-5xl md:text-4xl text-3xl font-bold leading-[3.30rem] text-center text-white uppercase mb-6">
            {t("checklist")}
          </h2>
          <p className="lg:w-1/2 w-11/12 xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white mb-6">
            <ol className="list-decimal list-inside">
              <p className="xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white mb-2">
                {t("checklist_info_top")}
              </p>
              <li className="xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white mb-1">
                {t("checklist_info1")}
              </li>
              <li className="xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white  mb-1">
                {t("checklist_info2")}
              </li>
              <li className="xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white  mb-1">
                {t("checklist_info3")}
              </li>
              <li className="xl:text-lg text-base font-normal leading-[1.57rem] text-left text-white  mb-1">
                {t("checklist_info4")}
              </li>
            </ol>
          </p>
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 pt-3.5  pr-6  pb-3.5  pl-6  rounded-full bg-[#ffc107] hover:bg-[#ffcd38] text-black  transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{t("download")}</span>
          </button>
        </main>
      </header>
    </div>
  );
};

export default App;
