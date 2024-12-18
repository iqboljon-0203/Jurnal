import React from 'react';

const ArticleCard = ({ title, subtitle }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <a href="/article">
      <h3 className="text-[#21466D] text-2xl font-bold leading-[1.80rem] text-left mb-6 hover:underline">
        {title}
      </h3>
      </a>
      <p className="text-[#21466D59] text-base font-normal leading-[1.40rem] text-left">
        {subtitle}
      </p>
    </div>
  );
};

export default ArticleCard;

