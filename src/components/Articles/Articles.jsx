import ArticleCard from './ArticleCard';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../../features/articleLatest';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
const Articles = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { books, status, error } = useSelector(state => state.articleLatest);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <Link to="/article">
        <h2 className="text-[#21466D] text-4xl font-bold leading-[2.20rem] uppercase text-left hover:underline">
            {t("articles")}
        </h2>
        </Link>

        <Link 
          to="/article" 
          className="text-lg font-semibold leading-[1.57rem] text-left text-[#21466D59] hover:text-[#FFC82A]"
        >
          {t("all_articles") } &gt;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            subtitle={article.authors?.map(author => {
              return author.first_name + ' ' + author.last_name
            }).join(', ')}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;

