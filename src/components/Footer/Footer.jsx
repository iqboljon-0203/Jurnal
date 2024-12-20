import { Facebook, Instagram, Send } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LicenseUz from "../../assets/logos/license1.png";
import LicenseRus from "../../assets/logos/license2.png";
import LicenseEng from "../../assets/logos/license3.png";
import { Link } from 'react-router-dom';
const UniversityHeader = () => {
    const universityLicenses=[
        {
            name:"Uzbek",
            link:LicenseUz
        },
        {
            name:"Russian",
            link:LicenseRus
        },
        {
            name:"English",
            link:LicenseEng
        }
    ]
  return (
    <div className="bg-[#1d4164] text-white rounded-tl-2xl rounded-tr-2xl">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with logo and navigation */}
        <div className="flex items-start justify-between ">
          {/* Logo and name */}
            <div className='w-4/12'>
            <img
              src={UsatLogo}
              alt="University Logo"
              width={300}
              height={60}
              className='mb-4'
            />
            {/* Description */}
        <p className="text-base font-normal leading-[1.40rem] text-left text-white mb-6">
          USAT Scholarly Journal xalqaro, har chorakda bir marta ko'rib
          chiqiladigan, jamoatchilikning sifatli tadqiqot kun tartibiga
          xizmat ko'rsatishga bag'ishlangan ochiq kirish jurnalidir.
        </p>

        {/* Social Media Icons */}
        <div className="flex gap-4">
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
          <nav className="w-4/12 flex justify-center">
            <ul className="flex flex-col lg:flex-row gap-6">
              <li className="relative group">
                <Link to="#" className="text-xl font-bold leading-7 text-left hover:text-[#ffc107] hover:underline transition-colors">
                  Biz haqimizda
                </Link>
                <ul className="mt-4">
                  <li>
                    <Link to="/journal" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Jurnal haqida
                    </Link>
                  </li>
                  <li>
                    <Link to="/plans" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Rejalar va Vazifalar
                    </Link>
                  </li>
                  <li>
                    <Link to="/editorial" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Tahririyat hay'ati
                    </Link>
                  </li>
                  <li>
                    <Link to="/reviewers" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Taqrizchilar kengashi
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <Link to="#" className="text-xl font-bold leading-7 text-lefthover:text-[#ffc107] hover:underline transition-colors">
                  Mualliflar uchun
                </Link>
                <ul className="mt-4 ">
                  <li>
                    <Link to="/guidelines" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Yo'riqnomalar
                    </Link>
                  </li>
                  <li>
                    <Link to="/send_article" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Maqola yuborish
                    </Link>
                  </li>
                  <li>
                    <Link to="/checklist" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Tekshirish ro'yhati
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* License Images */}
          <div className="w-4/12 flex justify-end gap-4">
            {universityLicenses.map((item,index) => (
              <Link to='https://license.gov.uz/registry?filter%5Bnumber%5D=331658' className='hover:shadow-2xl' key={index}>
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

