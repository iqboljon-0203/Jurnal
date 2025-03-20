import { Download, Eye, User,Calendar,FileText} from 'lucide-react';
import Jurnal from "../../assets/logos/jurnal.webp";
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';
const ResearchPaper = ({ title,slug, authors, start_page, end_page, views_count, downloads_count,download_url,publication_date }) => {
  const { t } = useTranslation();
  return (
    <Link to={`/article/${slug}`} className="block ">
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow">
      <h3 className="text-[#1d4164] font-semibold mb-2">{title}</h3>
      <div className='flex items-center sm:gap-2 gap-1 sm:mb-2 mb-4'>
        <User className="w-4 h-4" />
        <p className="text-gray-600 text-sm">{authors.map((author) => {
          return (
            author.first_name + ' ' + author.last_name
          )
        }).join(', ')}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center sm:gap-4 gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{publication_date.slice(0, 10)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" />
            <span>{start_page}-{end_page}</span>
          </div>
          <div className="sm:flex items-center hidden gap-1">
            <Download className="w-4 h-4" />
            <span>{downloads_count}</span>
          </div>
        </div>
        <Link to={download_url} onClick={(event) => event.stopPropagation()} className="flex items-center sm:gap-2 gap-1 sm:px-4 px-2 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-4 h-4" />
          <span>{t("download")}</span>
        </Link>
      </div>
    </div>
    </Link>
  );
};

const CategorySection = ({ title, papers }) => {
  return (
    <div className="mb-8">
      <h2 className="xl:text-2xl lg:text-xl text-lg font-bold leading-[2.70rem] mb-6 text-[#21466D] text-center uppercase">
        {title}
      </h2>
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <ResearchPaper key={index} {...paper} />
        ))}
      </div>
    </div>
  );
};

const JournalLayout = () => {
  const { t } = useTranslation();
  
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      if (containerRect.bottom >= contentRect.bottom) {
        container.style.position = 'relative';
      } else {
        container.style.position = 'sticky';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { issueDetail } = useSelector((state) => state.journalIssueDetail);
  console.log(issueDetail);
  
  

  if (!issueDetail) return null;
  return (
    <div className="container mx-auto py-4 px-4">
      <div ref={containerRef} className="max-w-[81.25rem] mx-auto lg:h-[40.25rem] h-auto  sticky top-0">
        <div className="flex lg:flex-row flex-col h-full gap-8">
          {/* Left Sidebar - Fixed */}
          <div  className="xl:w-4/12 lg:w-5/12 w-full flex-shrink-0 h-full overflow-hidden">
            <div className="space-y-4 overflow-y-auto">
              {/* Journal Cover */}
                <img
                  src={issueDetail?.image}
                  alt="Journal Cover"
                  className="w-full h-auto"
                />
             
              {/* Journal Info new*/}
              <div className="flex lg:gap-4 gap-2 items-center justify-between pt-3">
                <div className="flex items-center lg:gap-2 gap-1 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{issueDetail?.publication_date.slice(0, 10)}</span>
                </div>
                <div className="flex items-center lg:gap-2 gap-1 text-gray-600">
                  <Eye className="w-4 h-4" />
                  <span>{issueDetail?.views_count}</span>
                </div>
                <div className="flex items-center lg:gap-2 gap-1 text-gray-600">
                  <FileText className="w-4 h-4" />
                  <span>{issueDetail?.start_page}-{issueDetail?.end_page}</span>
                </div>
                
                <Link to={issueDetail?.download_url} className="flex items-center justify-center lg:gap-2 gap-1 lg:px-4  px-2 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
                  <Download className="w-4 h-4" />
                  <span>{t("download")}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div ref={contentRef} className="flex-grow h-full overflow-y-auto scrollbar-hide sm:pr-4 pr-0">
            
            {issueDetail?.directions.map((category, index) => (
              <CategorySection
                key={index}
                title={category.name}
                papers={category.articles}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalLayout;

