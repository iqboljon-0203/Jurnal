import { Download } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchArticleDetails,
  incrementViewCount,
  incrementDownloadCount,
} from "../../features/articleDetailsSlice";
import { useEffect } from "react";
const ProfileDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { article, status, error } = useSelector(
    (state) => state.articleDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchArticleDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (article) {
      dispatch(incrementViewCount());
    }
  }, [article, dispatch]);

  const handleDownload = () => {
    dispatch(incrementDownloadCount());
    // Yuklab olish logikasi
  };

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
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      {article?.authors.map((author, index) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-x-8 gap-y-6 pb-6 border-b-[#21466D59] border-b mb-6"
        >
          {/* Personal Information */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Ismi:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.first_name}
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Familiya:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.last_name}
            </p>
          </div>

          {/* Location and Work */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Yashash joyi:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              `${author.country},${author.city}`
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Ish joyi:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.workplace}
            </p>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Ilmiy darajasi:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.academic_degree}
            </p>
          </div>
          <div>
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              Ilmiy unvoni:
            </h3>
            <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
              {author.academic_title}
            </p>
          </div>

          {/* ORCID - Full Width */}
          <div className="col-span-2 border-none">
            <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
              ORCID raqami:
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
          Kalit so'zlar:
        </h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          {article.keywords}
        </p>
      </div>

      {/* Abstract Section */}
      <div className="mt-8">
        <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-2">
          Annotatsiya:
        </h3>
        <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
          {article.annotation}
        </p>
      </div>

      {/* Journal Info */}
      <div className="mt-8 grid grid-cols-2 gap-x-8">
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
            Jurnal soni:
          </h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
            `${article?.journal_issue?.volume_number} jild , $
            {article?.journal_issue?.issue_number} soni`
          </p>
        </div>
        <div>
          <h3 className="text-[#21466D] text-xl font-bold leading-5 text-left mb-1">
            Sana:
          </h3>
          <p className="text-[#21466D] text-xl font-normal leading-7 text-left">
            {article.publication_date}
          </p>
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-8 flex justify-start">
        <button className="flex items-center gap-2 px-6 py-3 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-5 h-5" />
          <span className="text-[#21466D] text-base font-medium leading-[0.85rem] text-left">
            Yuklab olish
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
