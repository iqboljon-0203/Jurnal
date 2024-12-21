import React from 'react';

function ResearchCategories() {
  const categories = [
    {
      title: "Mualliflar ro'yxati",
      members: [
        "Mirat Raxmatullayev",
        "Fazliddin Maxmudov",
        "Azamjon Muminov",
        "Sabina Umirzakova",
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov",
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov",
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov",
        "Shahnoza Muksinova",
        "Shabir Ahmad",
        "Abdinabi Muhammadiyev",
        "Jamshid Elov"
      ]
    },
    
  ];

  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="space-y-8">
        {categories.map((category, index) => (
          <div key={index} className="flex">
            {/* Category Title */}
            <div className="w-1/2 pr-4">
              <h2 className="text-3xl font-bold leading-[1.80rem] text-left text-[#21466D]">
                {category.title}
              </h2>
            </div>
            
            {/* Members List */}
            <div className="w-1/2">
              <ol className="list-decimal list-outside pl-12 space-y-2">
                {category.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="text-xl font-normal leading-[1.88rem] text-left text-[#21466D]">
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

