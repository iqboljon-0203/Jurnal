import  { useState } from 'react';
import { Download, Eye, Quote } from 'lucide-react';

const ResearchPaperCard = ({ date, views, citations }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow">
      <h2 className="text-[#1d4164] font-semibold mb-2">
        MODERN METHODS OF MATHEMATICAL MODELING IN BIOMEDICAL RESEARCH
      </h2>
      <p className="text-gray-600 text-sm mb-3">
        Samarqand Uchun Harmonlashga Sharxsizot
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Quote className="w-4 h-4" />
            <span>{citations}</span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
          <Download className="w-4 h-4" />
          <span>Yuklab olish</span>
        </button>
      </div>
    </div>
  );
};

const ResearchPapersList = () => {
  const [visibleItems, setVisibleItems] = useState(8);
  
  // Sample data array with 16 items
  const papers = Array(16).fill({
    date: '10/10/2024',
    views: 9,
    citations: 11
  });

  const loadMore = () => {
    setVisibleItems(prev => prev + 8);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="space-y-4">
        {papers.slice(0, visibleItems).map((paper, index) => (
          <ResearchPaperCard
            key={index}
            date={paper.date}
            views={paper.views}
            citations={paper.citations}
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

