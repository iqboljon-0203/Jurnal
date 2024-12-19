import { Search } from "lucide-react";
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from "../LanguageSelector/App";
import { Download } from "lucide-react";
import NavItem from "../Navbar/Navbar";
const App = () => {
  return (
    <div className="h-[44.38rem] bg-[#1a365d]">
      <header className="h-full  flex flex-col container mx-auto px-4 ">
        <nav className="flex items-center justify-between py-4 bg-[#FFFFFF1A] px-6">
          <img src={UsatLogo} alt="University Logo" className="h-12 w-50" />

          <div className="flex items-center gap-6">
            <NavItem text="Biz haqimizda" hasDropdown="about" />
            <NavItem text="Maulliflar uchun" hasDropdown="authors" />
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

        <main className="flex-grow flex flex-col items-center justify-center -mt-20">
          <div className="main_article_path text-base font-normal leading-[1.37rem] text-center text-white mb-6">
            Bosh sahifa /{" "}
            <span className="text-base font-normal leading-[1.37rem] text-left">
              Mualliflar uchun
            </span>{" "}
            /{" "}
            <span className="text-base font-normal leading-[1.37rem] text-left text-[#FFFFFF80]">
              Tekshirish roʻyxati
            </span>
          </div>
          <h2 className="w-2/3 main_article_title text-5xl font-bold leading-[3.30rem] text-center text-white uppercase mb-6">
            Tekshirish roʻyxati
          </h2>
          <p className="w-1/2 text-lg font-normal leading-[1.57rem] text-left text-white mb-6">
            Iltimos: <br />
            1. Umumiy ma'lumotga ega bo'lish va maqolangiz ushbu jurnalga mos
            kelishini baholash uchun "Yo‘nalishlar" bo‘limini o'qing; <br />
            2. Qo'lyozmangizni tayyorlash uchun Microsoft Word shablonidan
            foydalaning; <br />
            3. Nashr etikasi, mualliflik huquqi, rasm formatlari, ma'lumotlar va
            havolalar formati masalalari tegishli tarzda ko'rib chiqilganligiga
            ishonch hosil qiling; <br />
            4. Barcha mualliflar taqdim etilgan maqola mazmunini
            ma’qullaganligiga ishonch hosil qiling va ular Mualliflar uchun
            yo‘riqnomani o‘qiganliklarini tasdiqlang.
          </p>
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
