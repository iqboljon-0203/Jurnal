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
        <a href="/article">
        <h2 className="text-[#21466D] text-4xl font-bold leading-[2.20rem] text-left hover:underline">
            MAQOLALAR
        </h2>
        </a>

        <a 
          href="/article" 
          className="text-lg font-semibold leading-[1.57rem] text-left text-[#21466D59] hover:text-[#FFC82A]"
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

