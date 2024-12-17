import { Download, Eye, Quote, Calendar, Users } from 'lucide-react';
import Jurnal from "../../assets/logos/jurnal.png";
const ResearchPaper = ({ title, author, date, views, citations }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4 hover:shadow-md transition-shadow">
      <h3 className="text-[#1d4164] font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{author}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{date}</span>
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

const CategorySection = ({ title, papers }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-center mb-4   py-4 z-10">
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
  
  const categories = [
    {
      title: 'TEXNIKA FANLARI',
      papers: Array(4).fill({
        title: 'MODERN METHODS OF MATHEMATICAL MODELING IN BIOMEDICAL RESEARCH',
        author: 'Samarqand Uchun Harmonlashga Sharxsizot',
        date: '10/10/2024',
        views: 9,
        citations: 11
      })
    },
    {
      title: 'IJTIMOIY FANLAR',
      papers: Array(3).fill({
        title: 'MODERN METHODS OF MATHEMATICAL MODELING IN BIOMEDICAL RESEARCH',
        author: 'Samarqand Uchun Harmonlashga Sharxsizot',
        date: '10/10/2024',
        views: 9,
        citations: 11
      })
    },
    {
      title: 'MATEMATIKA VA FIZIKA FANLARI',
      papers: Array(3).fill({
        title: 'MODERN METHODS OF MATHEMATICAL MODELING IN BIOMEDICAL RESEARCH',
        author: 'Samarqand Uchun Harmonlashga Sharxsizot',
        date: '10/10/2024',
        views: 9,
        citations: 11
      })
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-[81.25rem] mx-auto">
        <div className="flex gap-8">
          {/* Left Sidebar - Fixed */}
          <div  className="w-4/12  flex-shrink-0 ">
            <div className="sticky top-4 space-y-4">
              {/* Journal Cover */}
                <img
                  src={Jurnal}
                  alt="Journal Cover"
                  className="w-full h-auto"
                />
             
              {/* Journal Info */}
              <div className="flex gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>10/10/2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Quote className="w-4 h-4" />
                  <span>11</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>5</span>
                </div>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ffc107] hover:bg-[#ffcd38] text-black rounded-md transition-colors">
                  <Download className="w-4 h-4" />
                  <span>Yuklab olish</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content - Scrollable */}
          <div className="flex-grow">
            
            {categories.map((category, index) => (
              <CategorySection
                key={index}
                title={category.title}
                papers={category.papers}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalLayout;

