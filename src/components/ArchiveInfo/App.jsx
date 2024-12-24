
import {Link} from 'react-router-dom'
import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchiveJournalIssues } from '../../features/archiveJournalIssueSlice.js';
const JournalCover = ({ imageUrl,id }) => {
  return (
    <Link to={`/archieve/${id}`}>
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
  const dispatch = useDispatch();
  const { issues, status, error } = useSelector((state) => state.archiveJournalIssue);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArchiveJournalIssues());
    }
  }, [status,dispatch]);

  if (status === 'loading') {
    return <div>Yuklanmoqda...</div>;
  }

  if (status === 'failed') {
    return <div>Xatolik: {error}</div>;
  }
 

  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {issues.map((cover,index) => (
          <JournalCover key={index} id={cover.slug} imageUrl={cover.image} />
        ))}
      </div>
    </div>
  );
};

export default LatestIssues;

