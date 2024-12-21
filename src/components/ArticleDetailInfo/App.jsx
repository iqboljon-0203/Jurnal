import { Download } from 'lucide-react';

const ProfileDetails = () => {
  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 pb-6 border-b-[#21466D59] border-b">
        {/* Personal Information */}
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Ismi:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">Palonchi</p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Familiya:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">Pistonchi</p>
        </div>
        
        {/* Location and Work */}
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Yashash joyi:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">O'zbekiston, Toshkent</p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Ish joyi:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">Fan va texnologiyalar universiteti</p>
        </div>
        
        {/* Academic Information */}
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Ilmiy darajasi:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">Iqtisod fanlari nomzodi, PhD</p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Ilmiy unvoni:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">Professor</p>
        </div>
        
        {/* ORCID - Full Width */}
        <div className="col-span-2 border-none">
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">ORCID raqami:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">123456789</p>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="mt-8">
        <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-2">Kalit so'zlar:</h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z, Kalit so'z.
        </p>
      </div>

      {/* Abstract Section */}
      <div className="mt-8">
        <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-2">Annotatsiya:</h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          Cattle illnesses can greatly affect both animal health and the economic stability of farmers. Prompt and precise diagnosis is crucial for effective management and treatment of these diseases. This study explores the development of diagnostic models and algorithms for cattle diseases using Sugeno's fuzzy inference system. It includes an analytical review of mathematical methods for animal disease diagnosis and soft computing approaches for tackling classification challenges. The study proposes an algorithm to create a knowledge base from the clinical signs of diseases, enhancing the reliability of informative features. Utilizing this algorithm, a software program was developed to diagnose cattle diseases. A computational experiment was conducted, and its results now serve as additional decisionmaking tools for diagnosing diseases in cattle. Using the program, a Sugeno fuzzy logic model was constructed and its results' adequacy analyzed. The study also evaluates the performance of this model by comparing it with existing algorithms and addresses various classification and evaluation challenges. The outcomes facilitate quick diagnosis and timely intervention, reducing data analysis time and improving the diagnostic process efficiency. The scientific innovation of this research lies in the development of a knowledge base construction algorithm and enhancements to the Sugeno fuzzy logic model for cattle disease diagnosis. The findings have significant implications for veterinary medicine, particularly in the diagnosis of cattle diseases and supporting decision making in intelligent systems.
        </p>
      </div>

      {/* Journal Info */}
      <div className="mt-8 grid grid-cols-2 gap-x-8">
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Jurnal soni:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">data</p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">Sana:</h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">2112.2024</p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8 flex justify-start">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-5 h-5" />
          <span className='text-[#21466D] text-base font-medium leading-[0.85rem] text-left'>Yuklab olish</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;

