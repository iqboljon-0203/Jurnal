import { Download } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchArticleDetails,
} from "../../features/articleDetailsSlice";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
const ProfileDetails = () => {
  const { t } = useTranslation();
  const {slug} = useParams();
  
  const dispatch = useDispatch();
  const { article, status, error } = useSelector(
    (state) => state.articleDetails
  );

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleDetails(slug));
    }
  }, [slug,dispatch]);

 

 

  if (status === "loading") {
    return <div>Yuklanmoqda...</div>;
  }

  if (status === "failed") {
    return <div>Xatolik: {error}</div>;
  }

  if (!article) {
    return null;
  }
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
      {article?.authors.map((author, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 gap-x-8 gap-y-6 pb-6 border-b-[#21466D59] border-b mb-6"
        >
          {/* Personal Information */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("name")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.first_name}
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("last_name")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.last_name}
            </p>
          </div>

          {/* Location and Work */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("country")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.country}, {author.city}
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("workplace")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.workplace}
            </p>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("academic_degree")}:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.academic_degree}
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("academic_title")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.academic_title}
            </p>
          </div>

          {/* ORCID - Full Width */}
          <div className="col-span-2 border-none">
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              {t("orcid")}
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.orcid}
            </p>
          </div>
        </div>
      ))}

      {/* Keywords Section */}
      <div className="mt-8">
        <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-2">
          {t("keyword_title")}
        </h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          {article.keywords}
        </p>
      </div>

      {/* Abstract Section */}
      <div className="mt-8">
        <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-2">
          {t("annotation")} 
        </h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          {article.annotation}
        </p>
      </div>

      {/* Journal Info */}
      <div className="mt-8 grid grid-cols-2 gap-x-8 mb-12">
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
            {t("count_journal")}
          </h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
            {article?.journal_issue?.volume_number} jild , 
            {article?.journal_issue?.issue_number} soni
          </p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
            {t("publication_data")}
          </h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
            {article.publication_date.slice(0, 10)}
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8 flex justify-start">
        <Link to={article.download_url}>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-5 h-5" />
          <span className="text-[#21466D] text-base font-medium leading-[0.85rem] text-left">
            {t("download")}
          </span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfileDetails;
