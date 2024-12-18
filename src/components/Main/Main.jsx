import { ChevronDown, Search, Globe } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import Jurnal from "../../assets/logos/jurnal.png";
import LanguageSelector from '../LanguageSelector/App';
const NavItem = ({ text, hasDropdown = false }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-white/90 hover:text-white py-6">
        <span className='font-manrope text-base font-normal leading-[1.37rem] text-left text-white'>{text}</span>
        {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />}
      </button>
      
      {hasDropdown && (
        <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          <a href="#" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
            Jurnal haqida
          </a>
          <a href="#" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
            Jurnal tahririyati
          </a>
          <a href="#" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
            Tahririyat hay'ati
          </a>
          <a href="#" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
            Konferensiyalar sayti
          </a>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="h-[34.38rem] bg-[#1a365d]">
      <header className="h-full  flex flex-col container mx-auto px-4 ">
        <nav className="flex items-center justify-between py-4 bg-[#FFFFFF1A] px-6">
          
            <img
              src={UsatLogo}
              alt="University Logo"
              className="h-12 w-50"
            />
            
          
          <div className="flex items-center gap-6">
            <NavItem text="Biz haqimizda" hasDropdown />
            <NavItem text="Ma'rifat uchun" hasDropdown />
            <NavItem text="Maqolalar" />
            <NavItem text="Arxiv" />
            <NavItem text="Bog'lanish" />
            
            
          </div>
          <div className="font-manrope  flex items-center gap-4 ml-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="bg-white/10 text-white placeholder-white/60 rounded-md py-1 px-3 pr-8 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
              </div>
              
              <LanguageSelector></LanguageSelector>
            </div>
        </nav>

        <main className="flex-grow flex items-center justify-between gap-12 ">
          <div className="w-1/2 space-y-6">
            <h1 className="font-manrope text-5xl font-bold leading-[3.30rem] text-left text-white">
              MUVAFFAQIYATLI KELAJAK SHU YERDAN BOSHLANADI
            </h1>
            <p className="font-manrope text-white/80 text-lg font-normal leading-[1.57rem] text-left">
              USAT - Fan va Texnologiyalar Universiteti o'z ichiga zamonaviy va samarali jahon standartlari asosidagi ta'limni qamrab olgan.
            </p>
          </div>
          
          <div className="w-1/2 flex justify-center">
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

