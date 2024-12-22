import  { useState } from 'react';
import { Download, Eye, User,Calendar,FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createSlug } from './utils/slugUtils';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../features/articlesSlice';
import { useEffect } from 'react';
const ResearchPaperCard = ({  id,title, author, date, views,pages, citations,download_url }) => {
  const paperSlug = createSlug(title);
  return (
    <Link to={`/article/:${id}/${paperSlug}`} className="block ">
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow">
      <h2 className="text-[#1d4164] font-semibold mb-2">
        {title}
      </h2>
      
      <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
        <User className='w-4 h-4'/>
        {author}
      </p>
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{pages}</span>
          </div>
          <div className="flex items-center gap-1">
            <Download className="w-4 h-4" />
            <span>{citations}</span>
          </div>
        </div>
        <Link to={download_url} className="flex items-center gap-2  px-4 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-4 h-4" />
          <span>Yuklab olish</span>
        </Link>
      </div>
    </div>
    </Link>
  );
};

const ResearchPapersList = () => {
  const dispatch = useDispatch();
  const { articles, status, error } = useSelector(state => state.articles);
  const [visibleItems, setVisibleItems] = useState(8);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    }
  }, [status, dispatch]);
  if (status === 'loading') {
    return <div>Yuklanmoqda...</div>;
  }

  if (status === 'failed') {
    return <div>Xatolik: {error}</div>;
  }
  // Sample data array with 16 items
  const papers = articles;

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="space-y-4">
        {papers.slice(0, visibleItems).map((paper, index) => (
          <ResearchPaperCard
            id={paper.id}
            title={paper.title}
            author={paper.authors.map(author => {
              return author.first_name + ' ' + author.last_name
            }).join(', ')}
            key={index}
            date={paper.publication_date.slice(0,10)}
            views={paper.views_count}
            pages={paper.start_page+' - '+paper.end_page}
            citations={paper.downloads_count}
            download_url={paper.download_url}
          />
        ))}
      </div>
      
      {visibleItems < papers.length && (
        <div className="text-center mt-8">
          <button
            onClick={loadMore}
            className="flex items-center px-6 py-3 mx-auto bg-[#1d4164] text-white rounded-md hover:bg-[#2a5885] transition-colors"
          >
            <Download className="w-4 h-4 me-2" />
            <span>Ko'proq yuklash</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ResearchPapersList;

