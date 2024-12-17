import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = [
    {
      title: "OLIY TA'LIMNI BOSHQARISH VA MONITORINGINI YURITISH JARAYONLARINI RAQAMLASHTIRISH MASALASI VA ISTIQBOLLARI",
      subtitle: "Xalqaro/milliy Oliy ta'lim/ilm-fan/ta'lim, Abdulaev Alisher Sultonov Xurshid"
    },
    {
      title: "OLIY TA'LIMNI BOSHQARISH VA MONITORINGINI YURITISH JARAYONLARINI RAQAMLASHTIRISH MASALASI VA ISTIQBOLLARI",
      subtitle: "Xalqaro/milliy Oliy ta'lim/ilm-fan/ta'lim, Abdulaev Alisher Sultonov Xurshid"
    },
    {
      title: "OLIY TA'LIMNI BOSHQARISH VA MONITORINGINI YURITISH JARAYONLARINI RAQAMLASHTIRISH MASALASI VA ISTIQBOLLARI",
      subtitle: "Xalqaro/milliy Oliy ta'lim/ilm-fan/ta'lim, Abdulaev Alisher Sultonov Xurshid"
    },
    {
      title: "OLIY TA'LIMNI BOSHQARISH VA MONITORINGINI YURITISH JARAYONLARINI RAQAMLASHTIRISH MASALASI VA ISTIQBOLLARI",
      subtitle: "Xalqaro/milliy Oliy ta'lim/ilm-fan/ta'lim, Abdulaev Alisher Sultonov Xurshid"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-[#1a365d] text-2xl font-semibold">
          MAQOLALAR
        </h2>
        <a 
          href="/article" 
          className="text-blue-600 hover:text-blue-700 text-sm"
        >
          Barcha maqolalar &gt;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            subtitle={article.subtitle}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;

