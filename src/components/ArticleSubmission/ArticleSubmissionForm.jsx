import { useState, useRef, useEffect } from "react";
import { Plus, Upload, Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchScienceFields } from "../../features/scienceField.js";
import { submitArticle } from "../../features/articleSubmissionSlice.js";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const AuthorForm = ({ onRemove, index }) => {
  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const { fields, status, error } = useSelector((state) => state.scienceFields);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchScienceFields(lang));
    }
  }, [status, dispatch, lang]);

  if (status === "loading") {
    return <div>Yuklanmoqda...</div>;
  }

  if (status === "failed") {
    return <div>Xatolik: {error}</div>;
  }

  return (
    <div className="space-y-4 pb-6 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name={`firstName${index}`}
          placeholder={t("name")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name={`lastName${index}`}
          placeholder={t("last_name")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name={`country${index}`}
          placeholder={t("country")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name={`city${index}`}
          placeholder={t("city")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name={`workplace${index}`}
          placeholder={t("workplace")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
        <input
          type="text"
          name={`education${index}`}
          placeholder={t("education")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <input
          type="email"
          name={`email${index}`}
          placeholder={t("email")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          required
        />
       <div className="w-full rounded-md">
      <PhoneInput
        country={'uz'}
        inputProps={{
          name: `phone${index}`,
          required: true,
        }}
        placeholder={t("phone_number")}
        containerClass="w-full"
        inputClass="w-full border  border-gray-300"
        buttonClass="border border-gray-300 px-3 bg-gray-300 py-2 hover:bg-gray-100"
        containerStyle={{
          width: '100%',
        }}
        inputStyle={{
          width: '100%',
          background: '#fff',
          height: '42px', // Matches py-2 (8px top and bottom padding) + default input height
          lineHeight: '42px',
          color:"#6B7280",
          fontWeight:"500"
        }}
        buttonStyle={{
          background: 'transparent',
          height: '42px',
        }}
        defaultValue={'+998'}
      />
    </div>
        <input
          type="text"
          name={`telegram${index}`}
          placeholder={t("telegram_account")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
        />
        <input
          type="text"
          name={`whatsapp${index}`}
          placeholder={t("whatsapp_account")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <select
          required
          name={`academicDegree${index}`}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
        >
          <option  value="" >
            {t("academic_degree")}
          </option>
          <option value="PHD_ECON">{t("phd_economics")}</option>
          <option value="PHD_PED">{t("phd_pedagogics")}</option>
          <option value="PHD_TECH">{t("phd_technical")}</option>
          <option value="DSC_ECON">{t("dsc_economics")}</option>
          <option value="DSC_PED">{t("dsc_pedagogics")}</option>
          <option value="DSC_TECH">{t("dsc_technical")}</option>
        </select>
        <select
          required
          name={`academicTitle${index}`}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
        >
          <option  value="">
            {t("academic_title")}
          </option>
          <option value="DOCENT">{t("associate_professor")}</option>
          <option value="PROFESSOR">{t("professor")}</option>
          <option value="ACADEMIC">{t("academic")}</option>
        </select>
        <input
          required
          maxLength={16}
          type="text"
          name={`orcid${index}`}
          placeholder={t("orcid_number")}
          className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1  gap-4">
        <select
          required
          name={`scienceField${index}`}
          className="w-full px-3 py-2 text-gray-500 border border-gray-300 rounded-md"
        >
          <option  value="">
            {t("direction")}
          </option>
          {fields.map((field) => (
            <option key={field.id} value={field.id}>
              {field.name} ({field.code})
            </option>
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
  const filePlagatRef = useRef(null);
  const [plagat, setPlagat] = useState(null);
  const dispatch = useDispatch();
  const { status, error, result } = useSelector(
    (state) => state.articleSubmission
  );

  const addAuthor = () => {
    if (authors.length >= 5) return;
    setAuthors([...authors, { id: authors.length + 1 }]);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();
      if (["docx"].includes(fileExtension)) {
        setFile(uploadedFile);
      } else {
        alert(t("article_file"));
      }
    }
  };
  const handlePlagatFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileExtension = uploadedFile.name.split(".").pop().toLowerCase();
      if (["pdf"].includes(fileExtension)) {
        setPlagat(uploadedFile);
      } else {
        alert(t("article_file_new"));
      }
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current.click();
  };
  const triggerPlagatFileUpload = () => {
    filePlagatRef.current.click();
  };

  const resetForm = () => {
    setAuthors([{ id: 1 }]);
    setFile(null);
    setPlagat(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    if (filePlagatRef.current) {
      filePlagatRef.current.value = "";
    }
    // Form elementini topib, uning barcha inputlarini tozalaymiz
    const form = document.querySelector("form");
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
      references: event.target.annotation_new.value,
      anti_plagiarism_certificate: plagat,
      original_file: file,
      authors_data: authors.map((author, index) => ({
        first_name: event.target[`firstName${index}`].value,
        last_name: event.target[`lastName${index}`].value,
        country: event.target[`country${index}`].value,
        city: event.target[`city${index}`].value,
        workplace: event.target[`workplace${index}`].value,
        level: event.target[`education${index}`].value,
        email: event.target[`email${index}`].value,
        phone: event.target[`phone${index}`].value,
        telegram_contact: event.target[`telegram${index}`].value,
        whatsapp_contact: event.target[`whatsapp${index}`].value,
        academic_degree: event.target[`academicDegree${index}`].value,
        academic_title: event.target[`academicTitle${index}`].value,
        orcid: event.target[`orcid${index}`].value,
      })),
    };

    dispatch(submitArticle(formData));
  };

  useEffect(() => {
    if (status === "succeeded") {
      resetForm();
    }
  }, [status]);

  return (
    <div className="container mx-auto px-4 py-12">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-6">
          <h2 className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
            {t("editor")}
          </h2>
          {authors.map((author, index) => (
            <AuthorForm key={author.id} index={index} />
          ))}

          <button
            type="button"
            onClick={addAuthor}
            className="flex items-center gap-2 text-[#1d4164] hover:text-[#2a5885] transition-colors "
          >
            <div className="bg-[#21466D] pt-3  pr-6  pb-3  pl-6  rounded-xl">
              <Plus className="w-5 h-5 text-white " />
            </div>
            <span className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
              {t("add_author")}
            </span>
          </button>
        </div>

        <div className="space-y-4 pt-6">
          <h2 className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
            {t("article_title_inner")}
          </h2>
          <input
            type="text"
            name="title"
            placeholder={t("article_title_placeholder")}
            className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
            {t("keyword_title")}
          </h2>
          <input
            type="text"
            name="keywords"
            placeholder={t("keyword_placeholder")}
            className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
            {t("annotation")}
          </h2>
          <textarea
            maxLength={100}
            name="annotation"
            placeholder={t("annotation")}
            rows={6}
            className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md resize-none"
          />
        </div>

        <div className="space-y-4">
          <h2 className="sm:text-2xl text-xl font-bold leading-[1.80rem] text-left text-[#21466D] uppercase">
            {t("annotation_new")}
          </h2>
          <textarea
            name="annotation_new"
            placeholder={t("annotation_new")}
            rows={6}
            className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md resize-none"
          />
        </div>
        <div className="space-y-4">
          <input
            type="file"
            ref={filePlagatRef}
            onChange={handlePlagatFileUpload}
            accept=".pdf"
            className="hidden"
          />
          <button
            type="button"
            onClick={triggerPlagatFileUpload}
            className="flex items-center gap-2 px-4 py-2 border border-[#1d4164] text-[#1d4164] rounded-md hover:bg-gray-50 transition-colors"
          >
            <Upload className="w-5 h-5" />
            <span>{plagat ? plagat.name : t("article_file_title_new")}</span>
          </button>
          <p className="text-sm text-gray-500">
            {plagat
              ? `${t("article_file_placeholder")}: ${plagat.name}`
              : t("article_file_new")}
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".docx"
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
          className={`md:w-auto px-8 ${
            status === "succeeded"
              ? "flex items-center bg-[#21466D59]"
              : "block"
          } py-2 bg-[#ffc107] text-[#21466D] text-base font-medium  text-left rounded-md mx-auto hover:bg-[#ffcd38] transition-colors  gap-2`}
        >
          {status === "succeeded" && <Check className="w-5 h-5" />}
          {status === "loading"
            ? t("loading")
            : status === "succeeded"
            ? t("submitted")
            : t("submit")}
        </button>
      </form>
    </div>
  );
};

export default ArticleSubmissionForm;
