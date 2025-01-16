import { Facebook, Instagram, Send } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import Logo from "../../assets/logos/logo.svg"
import Circle from "../../assets/logos/circle.svg";
import Circle1 from "../../assets/logos/circle1.svg";
import Circle2 from "../../assets/logos/circle2.svg";
import Circle3 from "../../assets/logos/circle3.svg";
import Circle4 from "../../assets/logos/circle4.svg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const UniversityHeader = () => {
  const {t}=useTranslation();  
  const language=localStorage.getItem("i18nextLng")||'uz';
  return (
    <div className="bg-[#1d4164] text-white rounded-tl-2xl rounded-tr-2xl">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex lg:flex-nowrap flex-wrap items-start justify-between ">
          {/* Logo and name */}
            <div className='xl:w-5/12 lg:w-4/12 sm:w-5/12 w-full'>
            <img
              src={language==="uz"?UsatLogo:Logo}
              alt="University Logo"
              width={300}
              height={60}
              className='mb-4 sm:ms-0 mx-auto'
            />
            {/* Description */}
        <p className="w-11/12 text-base font-normal leading-[1.40rem] sm:text-justify text-center text-white mb-6">
          {t("footer_text")}
        </p>

        {/* Social Media Icons */}
        <div className="flex sm:justify-start justify-center sm:mb-0 mb-6 gap-4">
          <Link
            to="https://t.me/journal_usat"
            className="w-16 h-10 flex items-center justify-center p-3  rounded-full border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Send className="w-5 h-5 group-hover:text-[#1d4164]" />
          </Link>
          <Link
            to="https://www.instagram.com/usatuz/"
            className="w-16 h-10 flex items-center justify-center p-3  rounded-full border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Instagram className="w-5 h-5 group-hover:text-[#1d4164]" />
          </Link>
          <Link
            to="https://www.facebook.com/usatuz/"
            className="w-16 h-10 flex items-center justify-center rounded-full p-3  border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Facebook className="w-5 h-5 group-hover:text-[#1d4164]" />
          </Link>
        </div>
            </div>
            
            

          {/* Navigation */}
          <nav className="xl:w-7/12 lg:w-7/12 sm:w-7/12 w-full flex justify-center">
            <ul className="flex sm:flex-col lg:flex-row flex-col  xl:gap-20 lg:gap-12 sm:gap-8 gap-12">
              <li className="relative group">
                <Link to="#" className="sm:text-xl text-lg font-bold leading-7 text-left hover:text-[#ffc107] hover:underline transition-colors">
                  {t("about_us")}
                </Link>
                <ul className="lg:mt-4 sm:mt-2 mt-4">
                  <li>
                    <Link to="/about_journal" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("about_journal")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/editorial" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("editorial_board")}
                    </Link>
                  </li>
                  
                  
                </ul>
              </li>
              <li className="relative group">
                <Link to="#" className="sm:text-xl text-lg font-bold leading-7 text-lefthover:text-[#ffc107] hover:underline transition-colors">
                  {t("for_authors")}
                </Link>
                <ul className="lg:mt-4 sm:mt-2 mt-4">
                  <li>
                    <Link to="/send_article" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("send_article")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/requirements" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("journal_requirements")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/guidelines" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("instructions")}
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/authors" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("list_of_authors")}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link to="/contact" className="sm:text-xl text-lg font-bold leading-7 text-lefthover:text-[#ffc107] hover:underline transition-colors">
                  {t("contacts")}
                </Link>
                <ul className="lg:mt-4 sm:mt-2 mt-4">
                <li className='flex items-center mb-3'>
                    <img className='mr-2' src={Circle2} alt="" />
                    <Link to="https://maps.app.goo.gl/B75TfzHVBtop9HLN9" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("adress_new")}
                    </Link>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='mr-2' src={Circle} alt="" />
                    <Link to="tel:+998884112045" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      88 411 20 45
                    </Link>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='mr-2' src={Circle3} alt="" />
                    <Link to="mailto:journal@usat.uz" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      journal@usat.uz
                    </Link>
                  </li>
                  <li className='flex items-center mb-3'>
                    <img className='mr-2' src={Circle1} alt="" />
                    <Link to="https://t.me/journal_usat_admin" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      @journal_usat_admin
                    </Link>
                  </li>
                  <li className='flex items-center'>
                    <img className='mr-2' src={Circle4} alt="" />
                    <Link to="https://t.me/journal_usat" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      t.me/journal_usat
                    </Link>
                  </li>
                  
                  
                </ul>
              </li>
            </ul>
          </nav>
           {/* License Images */}
           
        </div>
        
        
      </div>
    </div>
  );
};

export default UniversityHeader;

