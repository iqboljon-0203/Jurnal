import React from 'react';
import { useTranslation } from 'react-i18next';
function OrganizationStructure() {
  const { t } = useTranslation();
  const editorialBoard = [
    { title: "t.f.d., prof. O'tkir Xamdamov (hay'at raisi)" },
    { title: "t.f.f.d., Muhriddin Muroddinov (hay'at raisi o'rinbosari)" },
    { title: "t.f.d., prof. Yakim Zaynidnov" },
    { title: "t.f.d., prof. Muzaffarmadjon Musayev" },
    { title: "t.f.d., prof. Shavkat Fazilov" },
    { title: "f-m.f.d., prof. Anipoy Mersaid" },
    { title: "f-m.f.d., prof. Alexey Raxmatillo" },
    { title: "t.f.d., prof. Mirat Raxmatullayev" },
    { title: "t.f.d., prof. Dilroz Muqamediyeva" },
    { title: "t.f.d., prof. Toxir Hasanov" },
    { title: "i.f.d., prof. To'lqin Boboqulov" },
    { title: "t.f.d., prof. Jamshid Sultanov" },
    { title: "f-m.f.d., prof. Dildora Muhamediyeva" },
    { title: "p.f.d., prof. Qurbonniyoz Panjiyev" },
    { title: "p.f.d., prof. Munabbat Hakimova" },
    { title: "t.f.d., prof. Nargiza Usmanova" },
    { title: "p.f.d., prof. Nishonboy Kiyamov" },
    { title: "t.f.d., prof. Qahrabek Qodirov" },
    { title: "t.f.d., doc. Halimjon Xujamov" },
    { title: "t.f.d., doc. Isragim Atajanov" }
  ];

  const publicCouncil = [
    { name: "Shukurullo Xasanov (O'zbekiston)" },
    { name: "Ozod Yusupov (O'zbekiston)" },
    { name: "Dilshod Rahmatov (Germaniya)" },
    { name: "O.A. Hidayov (Germaniya)" },
    { name: "Akmaljon Abdullayev (O'zbekiston)" },
    { name: "Jinsoo Cho (J. Koreya)" },
    { name: "Jamshid Bov (O'zbekiston)" },
    { name: "Fazliddin Maxmudov (J. Koreya)" },
    { name: "Faheem Khan (J. Koreya)" },
    { name: "Doston Xasanov (O'zbekiston)" },
    { name: "Shahnoza Muksinova (J. Koreya)" },
    { name: "Elmurod Umirov (O'zbekiston)" },
    { name: "Muhriddin Umarov (O'zbekiston)" },
    { name: "Akmalibek Abdusalomov (J. Koreya)" },
    { name: "Bahtiyor Akmuradov (O'zbekiston)" },
    { name: "Sherzod Abdullayev (O'zbekiston)" },
    { name: "Urmanov Odil (J. Koreya)" },
    { name: "Sobir Radjabov (O'zbekiston)" },
    { name: "Young Im Cho (J. Koreya)" },
    { name: "Mohamed Samara (J. Koreya)" },
    { name: "Alganis Kutlimuratov (O'zbekiston)" },
    { name: "Sabina Umirzakova (J. Koreya)" },
    { name: "Avaz Mirzayev (O'zbekiston)" },
    { name: "Farhod Ahmedov (J. Koreya)" },
    { name: "Sherzod Mustafaqulov (O'zbekiston)" },
    { name: "Shabir Ahmad (J. Koreya)" },
    { name: "U.B. Ahmedadov (O'zbekiston)" },
    { name: "Lilia Tightz (J. Koreya)" },
    { name: "Shahnoza Sultanova (O'zbekiston)" },
    { name: "Saifullah Khan (Buyuk Britaniya)" },
    { name: "Seyttkamal Mekenov (Fransiya)" },
    { name: "Avaz Zaxxorov (O'zbekiston)" },
    { name: "Qosim Bekmurodov (O'zbekiston)" },
    { name: "Namoz Mirzayev (O'zbekiston)" }
  ];

  return (
    <div className="max-w-[75.00rem] mx-auto px-4 py-12">
      {/* Editorial Board Section */}
      <div className="w-full flex items-start justify-between mb-8">
        <h2 className="w-1/2 text-4xl font-bold leading-[1.80rem] text-left text-[#21466D]">{t('editorial_board')}</h2>
        <ol className="w-1/2 list-decimal list-outside space-y-2 ml-12">
          {editorialBoard.map((member, index) => (
            <li key={index} className="text-xl font-normal leading-[1.88rem] text-left text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>

      {/* Public Council Section */}
      <div className='w-full flex items-start justify-between'>
        <h2 className="w-1/2 text-4xl font-bold leading-[1.80rem] text-left text-[#21466D]">{t('editorial_social')}</h2>
        <ol className="w-1/2 list-decimal list-outside space-y-2 ml-12">
          {publicCouncil.map((member, index) => (
            <li key={index} className="text-xl font-normal leading-[1.88rem] text-left text-[#21466D]">
              {member.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default OrganizationStructure;

