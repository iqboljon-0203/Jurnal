import  { useState, useRef } from 'react';
import { Plus, Upload } from 'lucide-react';

const AuthorForm = ({ onRemove, index }) => {
  return (
    <div className="space-y-4 pb-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Adullo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Familiya"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="*Daraja"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="*Shahar"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <input
        type="text"
        placeholder="Ish joyi"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="tel"
          placeholder="Telefon raqami"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Telegram/WhatsApp"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option value="">Ilmiy unvon</option>
          <option value="professor">Professor</option>
          <option value="dotsent">Dotsent</option>
        </select>
        <input
          type="text"
          placeholder="ORCID raqami"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

const ArticleSubmissionForm = () => {
  const [authors, setAuthors] = useState([{ id: 1 }]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const addAuthor = () => {
    setAuthors([...authors, { id: authors.length + 1 }]);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
      if (['doc', 'docx', 'rtf'].includes(fileExtension)) {
        setFile(uploadedFile);
      } else {
        alert('Faqat doc, docx va rtf kabi fayl turlariga ruxsat beriladi');
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <form className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#1d4164]">MUALLIFLAR</h2>
          {authors.map((author, index) => (
            <AuthorForm key={author.id} index={index} />
          ))}
          
          <button
            type="button"
            onClick={addAuthor}
            className="flex items-center gap-2 text-[#1d4164] hover:text-[#2a5885] transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>YANA MUALLIF QO'SHISH</span>
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">MAQOLA SARLAVHASI</h2>
          <input
            type="text"
            placeholder="Maqola sarlavhasi yozing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">KALIT SO'ZLAR</h2>
          <input
            type="text"
            placeholder="Misol: Suniy intellekt, Axborot texnologiyalari"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">ANNOTATSIYA</h2>
          <textarea
            placeholder="Annotatsiya"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
          />
        </div>

        <div className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".doc,.docx,.rtf"
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerFileUpload}
            className="flex items-center gap-2 px-4 py-2 border border-[#1d4164] text-[#1d4164] rounded-md hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            <span>{file ? file.name : 'MAQOLA FAYLI'}</span>
          </button>
          <p className="text-sm text-gray-500">
            {file 
              ? `Yuklangan fayl: ${file.name}`
              : 'Faqat doc, docx va rtf kabi fayl turlariga ruxsat beriladi'}
          </p>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-2 bg-[#ffc107] text-black rounded-md hover:bg-[#ffcd38] transition-colors"
        >
          Jo'natish
        </button>
      </form>
    </div>
  );
};

export default ArticleSubmissionForm;

