
import {Link} from 'react-router-dom';
import { fetchJournalIssues } from '../../features/jurnalIssueSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
const JournalCover = ({ imageUrl }) => {
 
  return (
    <Link to="/archive">
      <div className="group cursor-pointer">
      <div className="aspect-[3/4] rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        <img 
          src={imageUrl} 
          alt="Journal cover" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </Link>
  );
};

const LatestIssues = () => {
  const { t } = useTranslation();

  const { issues } = useSelector(state => state.journalIssues);
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.journalIssues);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJournalIssues());
    }
  }, [status,dispatch]);

  if (status === 'loading') {
    return <div>Yuklanmoqda...</div>;
  }

  if (status === 'failed') {
    return <div>Xatolik: {error}</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#1a365d] text-4xl font-bold leading-[2.40rem] text-left uppercase">
          {t("latest_issues")}
        </h2>
        <Link 
          to="/archive" 
          className="text-lg font-semibold leading-[1.57rem] text-left text-[#21466D59] hover:text-[#FFC82A]"
        >
          {t("all_issues")} &gt;
        </Link>
      </div>

      <div className="max-w-[62.50rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {issues.map((cover, index) => (
          <JournalCover key={index} imageUrl={cover.image} />
        ))}
      </div>
    </div>
  );
};

export default LatestIssues;

