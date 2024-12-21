import {  Search } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from '../LanguageSelector/App';
import NavItem from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?s=${encodeURIComponent(searchQuery.trim())}`);
    }
  };
  return (
    <div className="h-[34.38rem] bg-[#1a365d]">
      <header className="h-full w-full flex flex-col  ">
        <nav className="flex items-center justify-between py-4 bg-[#FFFFFF1A] px-12">
          
        <Link to={"/"}>
            <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />
          </Link>
            
          
          <div className="flex items-center gap-6">
            <NavItem text="Bosh sahifa" />
            <NavItem text="Biz haqimizda" hasDropdown="about" />
            <NavItem text="Mualliflar uchun" hasDropdown="authors" />
            <NavItem text="Maqolalar" />
            <NavItem text="So'ngi nashr" />
            <NavItem text="Arxiv" />
            <NavItem text="Bog'lanish" />
            
            
          </div>
          <div className="flex items-center gap-4 ml-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="search"
                  placeholder="Izlash..."
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white w-72 h-10 pt-2  pr-2  pb-2  pl-4  rounded-3xl border-2 border-white focus:outline-none focus:ring-1 focus:ring-white/70"
                />
                <button type='submit'>
                <Search className="rounded-3xl absolute  right-4 top-1/2 -translate-y-1/2 h-6 w-6 text-white" />
                </button>
              </form>
              
              <LanguageSelector></LanguageSelector>
            </div>
        </nav>

        <main className="flex-grow flex flex-col items-center justify-center -mt-20 container mx-auto px-4">
          <div className='main_article_path text-base font-normal leading-[1.37rem] text-center text-white mb-6'>
          <Link className="hover:text-[#FFC82A]" to={"/"}>Bosh sahifa</Link> /{" "}
            <Link className="hover:text-[#FFC82A]" to={"/"}>
            <span className="text-base font-normal leading-[1.37rem] text-left">
              Mualliflar uchun
            </span>
            </Link>{" "}
            /{" "}
             <span className='text-base font-normal leading-[1.37rem] text-left text-[#FFFFFF80]'>Maqola yuborish</span>
          </div>
          <h2 className='w-2/3 main_article_title text-5xl font-bold leading-[3.30rem] text-center text-white uppercase'>
          Jurnalda chop etish uchun maqolalar yuborish
          </h2>
        </main>
      </header>
    </div>
  );
};

export default App;

