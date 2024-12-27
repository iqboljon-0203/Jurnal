import React from 'react';
import { useTranslation } from 'react-i18next';
function ResearchCategories() {
  const { t } = useTranslation();
  const categories = [
    {
      title: t("economics"),
      members: [
        "Mirat Raxmatullayev",
        "Fazliddin Maxmudov",
        "Azamjon Muminov",
        "Sabina Umirzakova"
      ]
    },
    {
      title: t("pedagogics"),
      members: [
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov"
      ]
    },
    {
      title: t("it_management_graphics"),
      members: [
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov"
      ]
    },
 
  ];

  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index} className="flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between">
            {/* Category Title */}
            <div className="sm:w-1/2 pr-4">
              <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl sm:mb-0 mb-4  font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">
                {category.title}
              </h2>
            </div>
            
            {/* Members List */}
            <div className="sm:w-1/2">
              <ol className="list-decimal sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
                {category.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="lg:text-xl text-lg  font-normal leading-[1.88rem] text-left text-[#21466D]">
                    {member}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResearchCategories;

