import { ChevronDown } from 'lucide-react';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
export default function NavItem({ text, hasDropdown = false }){
  const {t}=useTranslation();
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-white/90 hover:text-white py-6">
          <Link to={text===t("home_page")?"/":text===t("about_us")?"/":text===t("for_authors")?"/":text===t("articles")?"/article":text===t("archive")?"/archive":text===t("contacts")?"/contact":"/"}>
          <span className='font-manrope text-base font-normal leading-[1.37rem] text-left text-white hover:text-[#FFC82A]'>{text}</span>
          </Link>
          {hasDropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />}
        </button>
        
        {hasDropdown==="about" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/plans" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("about_journal")}
            </Link>
            <Link to="/editorial" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("editorial_board")}
            </Link>
            <Link to="/reviewers" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
             {t("review_board")}
            </Link>
            
          </div>
        ): hasDropdown==="authors" ? (
          <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <Link to="/authors" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("list_of_authors")}
            </Link>
            <Link to="/guidelines" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("instructions")}
            </Link>
            <Link to="/send_article" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("send_article")}
            </Link>
            <Link to="/checklist" className="block px-4 py-2 font-manrope text-base font-normal leading-[1.37rem] text-left  hover:text-[#FFC82A]">
              {t("checklist")}
            </Link>
          </div>
        ):false}
      </div>
    );
  };
  