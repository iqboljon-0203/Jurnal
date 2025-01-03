import { useState, useRef, useEffect } from 'react';
import { Plus, Upload } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScienceFields } from '../../features/scienceField.js';
import { submitArticle } from '../../features/articleSubmissionSlice.js';
import { useTranslation } from 'react-i18next';
const AuthorForm = ({ onRemove, index }) => {
  const lang=localStorage.getItem("i18nextLng");
  const {t}=useTranslation()
  const { fields, status,error } = useSelector((state) => state.scienceFields);
  const dispatch = useDispatch();
  useEffect(() => {
     if (status === 'idle') {
      dispatch(fetchScienceFields(lang)); 
     }
   }, [status,dispatch,lang]);
 
   if (status === 'loading') {
     return <div>Yuklanmoqda...</div>;
   }
 
   if (status === 'failed') {
     return <div>Xatolik: {error}</div>;
   }

 
  
  return (
    <div className="space-y-4 pb-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name={`firstName${index}`}
          placeholder={t("name")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name={`lastName${index}`}
          placeholder={t("last_name")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name={`country${index}`}
          placeholder={t("country")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name={`city${index}`}
          placeholder={t("city")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      <input
        type="text"
        name={`workplace${index}`}
        placeholder={t("workplace")}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="email"
          name={`email${index}`}
          placeholder={t("email")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="tel"
          name={`phone${index}`}
          placeholder={t("phone_number")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name={`messenger${index}`}
          placeholder={t("messenger_account")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <select name={`academicDegree${index}`} className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option value="PHD_ECON">{t("phd_economics")}</option>
          <option value="PHD_PED">{t("phd_pedagogics")}</option>
          <option value="PHD_TECH">{t("phd_technical")}</option>
          <option value="DSC_ECON">{t("dsc_economics")}</option>
          <option value="DSC_PED">{t("dsc_pedagogics")}</option>
          <option value="DSC_TECH">{t("dsc_technical")}</option>
        </select>
        <select name={`academicTitle${index}`} className="w-full px-3 py-2 border border-gray-300 rounded-md">
          <option value="DOCENT">{t("associate_professor")}</option>
          <option value="PROFESSOR">{t("professor")}</option>
        </select>
        <input
          type="text"
          name={`orcid${index}`}
          placeholder={t("orcid_number")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1  gap-4">
        <select name={`scienceField${index}`} className="w-full px-3 py-2 border border-gray-300 rounded-md">
          {fields.map((field) => (
            <option key={field.id} value={field.id}>{field.name} ({field.code})</option>
          ))}
        </select>
      </div>
    </div>
  );
};

const ArticleSubmissionForm = () => {
  const { t } = useTranslation();
  const [authors, setAuthors] = useState([{ id: 1 }]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { status, error, result } = useSelector((state) => state.articleSubmission);
 
  const addAuthor = () => {
    setAuthors([...authors, { id: authors.length + 1 }]);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split('.').pop().toLowerCase();
      if (['doc', 'docx', 'txt',"odt"].includes(fileExtension)) {
        setFile(uploadedFile);
      } else {
        alert('Faqat doc, docx, txt va odt kabi fayl turlariga ruxsat beriladi');
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };

  const resetForm = () => {
    setAuthors([{ id: 1 }]);
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    // Form elementini topib, uning barcha inputlarini tozalaymiz
    const form = document.querySelector('form');
    if (form) {
      form.reset();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      direction_id: parseInt(event.target.scienceField0.value),
      title: event.target.title.value,
      keywords: event.target.keywords.value,
      annotation: event.target.annotation.value,
      original_file: file,
      authors_data: authors.map((author, index) => ({
        first_name: event.target[`firstName${index}`].value,
        last_name: event.target[`lastName${index}`].value,
        country: event.target[`country${index}`].value,
        city: event.target[`city${index}`].value,
        workplace: event.target[`workplace${index}`].value,
        email: event.target[`email${index}`].value,
        phone: event.target[`phone${index}`].value,
        messenger_contact: event.target[`messenger${index}`].value,
        academic_degree: event.target[`academicDegree${index}`].value,
        academic_title: event.target[`academicTitle${index}`].value,
        orcid: event.target[`orcid${index}`].value,
      })),
    };

    dispatch(submitArticle(formData));
  };

  useEffect(() => {
    if (status === 'succeeded') {
      resetForm();
    }
  }, [status]);

  return (
    <div className="container mx-auto px-4 py-12">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h2 className="text-lg font-semibold text-[#1d4164]">{t("editor")}</h2>
          {authors.map((author, index) => (
            <AuthorForm key={author.id} index={index} />
          ))}

          <button
            type="button"
            onClick={addAuthor}
            className="flex items-center gap-2 text-[#1d4164] hover:text-[#2a5885] transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>{t("add_author")}</span>
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">{t("article_title_inner")}</h2>
          <input
            type="text"
            name="title"
            placeholder={t("article_title_placeholder")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">{t("keyword_title")}</h2>
          <input
            type="text"
            name="keywords"
            placeholder={t("keyword_placeholder")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#1d4164]">{t("annotation")}</h2>
          <textarea
            name="annotation"
            placeholder={t("annotation")}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
          />
        </div>

        <div className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".doc,.docx,.pdf"
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerFileUpload}
            className="flex items-center gap-2 px-4 py-2 border border-[#1d4164] text-[#1d4164] rounded-md hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            <span>{file ? file.name : t("article_file_title")}</span>
          </button>
          <p className="text-sm text-gray-500">
            {file
              ? `${t("article_file_placeholder")}: ${file.name}`
              : t("article_file")}
          </p>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-2 bg-[#ffc107] text-black rounded-md hover:bg-[#ffcd38] transition-colors"
        >
          {t("submit")}
        </button>
        {status === 'loading' && <p>Yuborilmoqda...</p>}
        {status === 'succeeded' && <p>Muvaffaqiyatli yuborildi!</p>}
        {status === 'failed' && <p>Xato yuz berdi: {error}</p>}
      </form>
    </div>
  );
};

export default ArticleSubmissionForm;

