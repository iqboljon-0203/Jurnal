import { ChevronDown } from 'lucide-react';
export default function NavItem({ text, hasDropdown = false }){
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-white/90 hover:text-white py-6">
          <a href={text==="Maqolalar"?"/article":text==="Bog'lanish"?"/contact":text==="Arxiv"?"/archive":"/"}>
          <span className='font-manrope text-base font-normal leading-[1.37rem] text-left text-white hover:text-[#FFC82A]'>{text}</span>
          </a>
          {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />}
        </button>
        
        {hasDropdown==="about" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <a href="/journal" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Jurnal haqida
            </a>
            <a href="/plans" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Rejalar va vazifalar
            </a>
            <a href="/editorial" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Tahririyat hay'ati
            </a>
            <a href="/reviewers" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Taqrizchilar kengashi
            </a>
            
          </div>
        ): hasDropdown==="authors" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <a href="/guidelines" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Yo'riqnomalar
            </a>
            <a href="/send_article" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Maqola yuborish
            </a>
            <a href="/checklist" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Tekshirish ro'yxati
            </a>
            
          </div>
        ):false}
      </div>
    );
  };
  