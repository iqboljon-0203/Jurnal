import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react'
import {Link} from "react-router-dom";
export default function ContactSection() {
  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-4">
          {/* Email */}
          <Link 
            to="mailto:journal@usat.uz" 
            className="flex items-center gap-4 bg-white p-3 rounded-2xl group hover:bg-[#21466D] hover:text-white transition-colors duration-200"
          >
            <div className="bg-[#21466D] group-hover:bg-white group-hover:text-[#21466D] text-white p-3 rounded-lg">
              <Mail size={20} />
            </div>
            <span className="text-base font-normal leading-[1.40rem] text-left">journal@usat.uz</span>
          </Link>

          {/* Phone */}
          <Link 
            to="tel:+99878888388" 
            className="flex items-center gap-4 bg-white p-3 rounded-2xl group hover:bg-[#21466D] hover:text-white transition-colors duration-200"
          >
            <div className="bg-[#21466D] group-hover:bg-white group-hover:text-[#21466D] text-white p-3 rounded-lg">
              <Phone size={20} />
            </div>
            <span className="text-base font-normal leading-[1.40rem] text-left">78 888 38 88</span>
          </Link>

          {/* Address */}
          <div className="flex items-center gap-4 bg-white p-3 rounded-2xl group hover:bg-[#21466D] hover:text-white transition-colors duration-200">
            <div className="bg-[#21466D] group-hover:bg-white group-hover:text-[#21466D] text-white p-3 rounded-lg">
              <MapPin size={20} />
            </div>
            <span className="text-base font-normal leading-[1.40rem] text-left">Toshkent sh. Diydor ko'chasi, 71</span>
          </div>

          {/* Telegram */}
          <Link 
            to="https://t.me/usatuzb" 
            className="flex items-center gap-4 bg-white p-3 rounded-2xl  group hover:bg-[#21466D] hover:text-white transition-colors duration-200"
          >
            <div className="bg-[#21466D] group-hover:bg-white group-hover:text-[#21466D] text-white p-3 rounded-lg">
              <Send size={20} />
            </div>
            <span className="text-base font-normal leading-[1.40rem] text-left">Telegram</span>
          </Link>

          {/* Instagram */}
          <Link 
            to="https://www.instagram.com/usatuz/" 
            className="flex items-center gap-4 bg-white p-3 rounded-2xl group hover:bg-[#21466D] hover:text-white transition-colors duration-200"
          >
            <div className="bg-[#21466D] group-hover:bg-white group-hover:text-[#21466D] text-white p-3 rounded-lg">
              <Instagram size={20} />
            </div>
            <span className="text-base font-normal leading-[1.40rem] text-left">Instagram</span>
          </Link>
        </div>

        {/* Map Section */}
        <div className="space-y-4">
          <h2 className="text-3xl text-center font-bold leading-[2.40rem] text-[#21466D]">GOOGLE XARITADA BIZNING MANZIL</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.213724571546!2d69.16111987643488!3d41.26068220384445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89998837c2dd%3A0x17a930c5c7d93e28!2sUniversity%20of%20Science%20and%20Technologies!5e0!3m2!1sen!2sus!4v1734521531906!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
