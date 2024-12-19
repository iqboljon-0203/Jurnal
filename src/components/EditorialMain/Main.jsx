import { Search } from "lucide-react";
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from "../LanguageSelector/App";
import NavItem from "../Navbar/Navbar";

const App = () => {
  return (
    <div className="h-[34.38rem] bg-[#1a365d]">
      <header className="h-full  flex flex-col w-full ">
        <nav className="flex items-center justify-between py-4 bg-[#FFFFFF1A] px-12">
          <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />

          <div className="flex items-center gap-6">
            <NavItem text="Biz haqimizda" hasDropdown="about" />
            <NavItem text="Mualliflar uchun" hasDropdown="authors" />
            <NavItem text="Maqolalar" />
            <NavItem text="Arxiv" />
            <NavItem text="Bog'lanish" />
          </div>
          <div className="flex items-center gap-4 ml-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Izlash..."
                className="bg-transparent text-white placeholder-white w-72 h-10 pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
              />
              <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
            </div>

            <LanguageSelector></LanguageSelector>
          </div>
        </nav>

        <main className="flex-grow flex flex-col items-center justify-center -mt-20 container mx-auto px-4">
          <div className="main_article_path text-base font-normal leading-[1.37rem] text-center text-white mb-6">
            Bosh sahifa /{" "}
            <span className="text-base font-normal leading-[1.37rem] text-left">
              Biz haqimizda
            </span>{" "}
            /{" "}
            <span className="text-base font-normal leading-[1.37rem] text-left text-[#FFFFFF80]">
              Tahririyat hay’ati
            </span>
          </div>
          <h2 className="w-2/3 main_article_title text-5xl font-bold leading-[3.30rem] text-center text-white uppercase mb-12">
            Tahririyat hay’ati
          </h2>
          <p className="w-10/12 mx-auto text-lg font-normal leading-[1.57rem] text-center text-white">
            "Fan va Texnologiyalar universiteti" Ilmiy jurnali Tahririyat
            hay’ati va Jamoatchilik kengashi a’zolari
          </p>
        </main>
      </header>
    </div>
  );
};

export default App;
