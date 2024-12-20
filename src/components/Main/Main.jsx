import { Search } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import Jurnal from "../../assets/logos/jurnal.png";
import LanguageSelector from '../LanguageSelector/App';
import NavItem from "../Navbar/Navbar";
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className="h-[34.38rem] bg-[#1a365d] rounded-bl-2xl rounded-br-2xl">
      <header className="h-full  flex flex-col w-full ">
        <nav className="flex items-center justify-between py-4 bg-[#FFFFFF1A] px-12">
          
        <Link to={"/"}>
            <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />
          </Link>
            
          
          <div className="flex items-center gap-6">
            <NavItem text="Bosh sahifa" />
            <NavItem text="Biz haqimizda" hasDropdown="about" />
            <NavItem text="Mualliflar uchun" hasDropdown="authors" />
            <NavItem text="Maqolalar" />
            <NavItem text="Arxiv" />
            <NavItem text="Bog'lanish" />
          </div>
          <div className="font-manrope  flex items-center gap-4 ml-4">
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

        <main className="flex-grow flex items-center justify-between gap-12 container mx-auto px-4">
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

