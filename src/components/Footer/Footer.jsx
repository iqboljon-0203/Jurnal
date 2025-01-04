import { Facebook, Instagram, Send } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.webp";
import LicenseUz from "../../assets/logos/license1.jpg";
import LicenseRus from "../../assets/logos/license2.jpg";
import LicenseEng from "../../assets/logos/license3.jpg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const UniversityHeader = () => {
  const {t}=useTranslation();  
    const universityLicenses=[
        {
            name:"uz",
            link:LicenseUz
        },
        {
            name:"ru",
            link:LicenseRus
        },
        {
            name:"en",
            link:LicenseEng
        }
    ]
  return (
    <div className="bg-[#1d4164] text-white rounded-tl-2xl rounded-tr-2xl">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex lg:flex-nowrap flex-wrap items-start justify-between ">
          {/* Logo and name */}
            <div className='xl:w-4/12 lg:w-3/12 sm:w-5/12 w-full'>
            <img
              src={UsatLogo}
              alt="University Logo"
              width={300}
              height={60}
              className='mb-4 sm:ms-0 mx-auto'
            />
            {/* Description */}
        <p className="text-base font-normal leading-[1.40rem] sm:text-left text-center text-white mb-6">
          {t("footer_text")}
        </p>

        {/* Social Media Icons */}
        <div className="flex sm:justify-start justify-center sm:mb-0 mb-6 gap-4">
          <Link
            to="https://t.me/usatuzb"
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
          <nav className="xl:w-4/12 lg:w-5/12 sm:w-7/12 w-full flex justify-center">
            <ul className="flex sm:flex-col lg:flex-row flex-row lg:gap-6 sm:gap-4 gap-12">
              <li className="relative group">
                <Link to="#" className="sm:text-xl text-lg font-bold leading-7 text-left hover:text-[#ffc107] hover:underline transition-colors">
                  {t("about_us")}
                </Link>
                <ul className="lg:mt-4 sm:mt-2 mt-4">
                  <li>
                    <Link to="/journal" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("about_journal")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/plans" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("editorial_board")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/editorial" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("review_board")}
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
                    <Link to="/guidelines" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("instructions")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/send_article" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("send_article")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/checklist" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      {t("checklist")}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* License Images */}
          <div className="lg:w-4/12 w-full lg:mt-0 mt-8 flex items-center lg:justify-end justify-center gap-4 ">
            {universityLicenses.map((item,index) => (
              <Link target='_blank' to={`https://document.licenses.uz/certificate/uuid/bd531c8c-8983-4295-b251-cc4f688a1f08/pdf?language=${item.name}`} className='hover:shadow-2xl' key={index}>
                <img
                src={item.link}
                alt={item.name}
                width={150}
                height={210}
                className="border border-white/20"
              />
              </Link>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UniversityHeader;

