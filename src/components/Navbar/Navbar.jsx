import { ChevronDown } from 'lucide-react';
import {Link} from "react-router-dom";
export default function NavItem({ text, hasDropdown = false }){
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-white/90 hover:text-white py-6">
          <Link to={text==="Maqolalar"?"/article":text==="Bog'lanish"?"/contact":text==="Arxiv"?"/archive":"/"}>
          <span className='font-manrope text-base font-normal leading-[1.37rem] text-left text-white hover:text-[#FFC82A]'>{text}</span>
          </Link>
          {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />}
        </button>
        
        {hasDropdown==="about" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/journal" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Jurnal haqida
            </Link>
            <Link to="/plans" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Rejalar va vazifalar
            </Link>
            <Link to="/editorial" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Tahririyat hay'ati
            </Link>
            <Link to="/reviewers" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Taqrizchilar kengashi
            </Link>
            
          </div>
        ): hasDropdown==="authors" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/guidelines" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Yo'riqnomalar
            </Link>
            <Link to="/send_article" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Maqola yuborish
            </Link>
            <Link to="/checklist" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              Tekshirish ro'yxati
            </Link>
            
          </div>
        ):false}
      </div>
    );
  };
  