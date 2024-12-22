import  { useState, useRef } from 'react';
import { Plus, Upload } from 'lucide-react';
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScienceFields } from '../../features/scienceField.js';
import { submitArticle } from '../../features/articleSubmissionSlice.js';


const ArticleSubmissionForm = () => {
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.scienceFields);
  useEffect(() => {
    dispatch(fetchScienceFields('uz')); // 'uz' - o'zbek tili uchun
  }, [dispatch]);
 
  
  const [authors, setAuthors] = useState([{ id: 1 }]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const { status, error } = useSelector((state) => state.articleSubmission);
  const [formData, setFormData] = useState({
    direction_id: 0,
    title: '',
    keywords: '',
    annotation: '',
    file: null,
    authors_data: [
      {
        first_name: '',
        last_name: '',
        country: '',
        city: '',
        workplace: '',
        email: '',
        phone: '',
        messenger_contact: '',
        academic_degree: 'PHD_ECON',
        academic_title: 'DOCENT',
        orcid: '',
      },
    ],
  });

  const handleInputChange = (e, index = null) => {
    if (index !== null) {
      const newAuthorsData = [...formData.authors_data];
      newAuthorsData[index] = { ...newAuthorsData[index], [e.target.name]: e.target.value };
      setFormData({ ...formData, authors_data: newAuthorsData });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const addAuthor = () => {
    setFormData({
      ...formData,
      authors_data: [
        ...formData.authors_data,
        {
          first_name: '',
          last_name: '',
          country: '',
          city: '',
          workplace: '',
          email: '',
          phone: '',
          messenger_contact: '',
          academic_degree: 'PHD_ECON',
          academic_title: 'DOCENT',
          orcid: '',
        },
      ],
    });
  };

  const removeAuthor = (index) => {
    const newAuthorsData = formData.authors_data.filter((_, i) => i !== index);
    setFormData({ ...formData, authors_data: newAuthorsData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitArticle(formData));
  };

  

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
      if (['doc', 'docx', 'pdf'].includes(fileExtension)) {
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
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#1d4164]">MUALLIFLAR</h2>
          {formData.authors_data.map((author, index) => (
            <div key={index} className="space-y-4 pb-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={author.first_name}
                placeholder="Ismi"
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Familiya"
                value={author.last_name}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={author.country}
                onChange={(e) => handleInputChange(e, index)}
                placeholder="*Davlat"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="*Shahar"
                value={author.city}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            
            <input
              type="text"
              placeholder="Ish joyi"
              value={author.workplace}
              onChange={(e) => handleInputChange(e, index)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="email"
                placeholder="E-mail"
                value={author.email}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="tel"
                placeholder="*Telefon raqami"
                value={author.phone}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Telegram/WhatsApp"
                value={author.messenger_contact}
                onChange={(e) => handleInputChange(e, index)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <select onChange={(e) => handleInputChange(e, index)} value={author.academic_degree} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="ilmiy_daraja">Ilmiy daraja</option>
                <option value="iqtisod_nomzodi">(PhD), Iqtisod fanlari nomzodi</option>
                <option value="pedagogika_nomzodi">(PhD), Pedagogika fanlari nomzodi</option>
                <option value="texnika_nomzodi">(PhD), Texnika fanlari nomzodi</option>
                <option value="iqtisod_doktori">(DSc), Iqtisod fanlari doktori</option>
                <option value="pedagogika_doktori">(DSc), Pedagogika fanlari doktori</option>
                <option value="texnika_doktori">(DSc), Texnika fanlari doktori</option>
              </select>
              <select onChange={(e) => handleInputChange(e, index)} value={author.academic_title} className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option value="ilmiy_unvon">Ilmiy unvon</option>
                <option value="professor">Professor</option>
                <option value="dotsent">Dotsent</option>
              </select>
              <input
                value={author.orcid}
                onChange={(e) => handleInputChange(e, index)}
                type="text"
                placeholder="ORCID raqami"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1  gap-4">
              <select  className="w-full px-3 py-2 border border-gray-300 rounded-md">
                {fields.map((field) => (
                  <option key={field.id} value={field.id}>{field.name}{" "} ({field.code})</option>
                ))}
              </select>
              
            </div>
            {formData.authors_data.length > 1 && (
              <button
                type="button"
                onClick={() => removeAuthor(index)}
                className="text-red-500 text-sm"
              >
                Muallifni o'chirish
              </button>
            )}

          </div>
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
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Maqola sarlavhasi yozing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">KALIT SO'ZLAR</h2>
          <input
            type="text"
            value={formData.keywords}
            onChange={handleInputChange}
            placeholder="Misol: Suniy intellekt, Axborot texnologiyalari"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">ANNOTATSIYA</h2>
          <textarea
            placeholder="Annotatsiya"
            value={formData.annotation}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
          />
        </div>

        <div className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}

            onChange={handleFileChange}
            accept=".doc,.docx,.pdf"
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

