import { Facebook, Instagram, Send } from 'lucide-react';
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LicenseUz from "../../assets/logos/license1.png";
import LicenseRus from "../../assets/logos/license2.png";
import LicenseEng from "../../assets/logos/license3.png";
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
    <div className="bg-[#1d4164] text-white">
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
          <a
            href="https://t.me/usatuzb"
            className="w-16 h-10 flex items-center justify-center p-3  rounded-full border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Send className="w-5 h-5 group-hover:text-[#1d4164]" />
          </a>
          <a
            href="https://www.instagram.com/usatuz/"
            className="w-16 h-10 flex items-center justify-center p-3  rounded-full border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Instagram className="w-5 h-5 group-hover:text-[#1d4164]" />
          </a>
          <a
            href="https://www.facebook.com/usatuz/"
            className="w-16 h-10 flex items-center justify-center rounded-full p-3  border-2 border-white hover:bg-[#ffc107] transition-colors group"
          >
            <Facebook className="w-5 h-5 group-hover:text-[#1d4164]" />
          </a>
        </div>
            </div>
            
            

          {/* Navigation */}
          <nav className="w-4/12 flex justify-center">
            <ul className="flex flex-col lg:flex-row gap-6">
              <li className="relative group">
                <a href="#" className="text-xl font-bold leading-7 text-left hover:text-[#ffc107] hover:underline transition-colors">
                  Biz haqimizda
                </a>
                <ul className="mt-4">
                  <li>
                    <a href="/journal" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Jurnal haqida
                    </a>
                  </li>
                  <li>
                    <a href="/plans" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Rejalar va Vazifalar
                    </a>
                  </li>
                  <li>
                    <a href="/editorial" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Tahririyat hay'ati
                    </a>
                  </li>
                  <li>
                    <a href="/reviewers" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Taqrizchilar kengashi
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <a href="#" className="text-xl font-bold leading-7 text-lefthover:text-[#ffc107] hover:underline transition-colors">
                  Mualliflar uchun
                </a>
                <ul className="mt-4 ">
                  <li>
                    <a href="/guidelines" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Yo'riqnomalar
                    </a>
                  </li>
                  <li>
                    <a href="/send_article" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Maqola yuborish
                    </a>
                  </li>
                  <li>
                    <a href="/checklist" className="block text-base font-normal leading-[1.40rem] text-left py-1 hover:text-[#ffc107] hover:underline transition-colors">
                      Tekshirish ro'yhati
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* License Images */}
          <div className="w-4/12 flex justify-end gap-4">
            {universityLicenses.map((item,index) => (
              <img
                key={index}
                src={item.link}
                alt={item.name}
                width={150}
                height={210}
                className="border border-white/20"
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default UniversityHeader;

