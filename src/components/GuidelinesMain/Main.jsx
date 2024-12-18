import { ChevronDown, Search, Globe } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from '../LanguageSelector/App';
import { Download } from 'lucide-react';
const NavItem = ({ text, hasDropdown = false }) => {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-white/90 hover:text-white py-6">
        <span>{text}</span>
        {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />}
      </button>
      
      {hasDropdown && (
        <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Jurnal haqida
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Jurnal tahririyati
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Tahririyat hay'ati
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-100">
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
          <div className="flex items-center gap-4 ml-4">
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

        <main className="flex-grow flex flex-col items-center justify-center -mt-20">
          <div className='main_article_path text-base font-normal leading-[1.37rem] text-center text-white mb-6'>
                Bosh sahifa / <span className='text-base font-normal leading-[1.37rem] text-left'>Mualliflar uchun</span> / <span className='text-base font-normal leading-[1.37rem] text-left text-[#FFFFFF80]'>Yo‘riqnomalar</span>
          </div>
          <h2 className='w-2/3 main_article_title text-5xl font-bold leading-[3.30rem] text-center text-white uppercase mb-6'>
          Yo‘riqnomalar
          </h2>
          <button className="flex items-center justify-center gap-2 pt-3.5  pr-6  pb-3.5  pl-6  rounded-full bg-[#ffc107] hover:bg-[#ffcd38] text-black  transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Yuklab olish</span>
          </button>
        </main>
      </header>
    </div>
  );
};

export default App;

