import React from 'react';
import { useTranslation } from 'react-i18next';
function OrganizationStructure() {
  const { t } = useTranslation();
  const language=localStorage.getItem("i18nextLng")||'uz';
  const editorMain=[
    { title: "Xamdamov Anvar Norovich – rektor, f.f.n., dotsent" },
  ]
  const editorMain_ru = [
    { title: "Хамдамов Анвар Норович – ректор, кандидат физико-математических наук (к.ф.-м.н.), доцент" }
  ];
  const editorMain_en = [
    { title: "Khamdamov Anvar Norovich - Rector, PhD, Associate Professor" }
  ];
  
  const editorMainSecond=[
    { title: "Gaibnazarova Zumrat Talatovna – ilmiy ishlar va innovatsiyalar bo‘yicha prorektor, iqtisodiyot fanlari doktori, professor" },
  ]
  const editorMainSecond_en = [
    
    { title: "Gaibnazarova Zumrat Talatovna - Vice-Rector for Research and Innovation, Doctor of Economic Sciences, Professor" }
  ];
  const editorMainSecond_ru = [
    { title: "Гаибназарова Зумрат Талатовна – проректор по научной работе и инновациям, доктор экономических наук, профессор" }
  ];
  const editor=[
    { title: "Ortiqova Xamida Maxmud qizi - filologiya fanlari bo‘yicha falsafa doktori (PhD)" },
  ]
  const editor_ru = [
    { title: "Ортикова Хамида Махмуд кизи – доктор философии пофилологии (PhD)" }
  ];
  const editor_en = [
    { title: "Ortikova Hamida Makhmud kizi - Doctor of Philosophy in Philology (PhD)" }
  ];
  
  const assistant=[
    { title: "Yo‘ldosheva Dilnoza G‘ayrat qizi" },
  ]
  const assistant_en = [
    { title: "Yuldasheva Dilnoza Gayrat kizi" }
  ];
  const assistant_ru = [
    { title: "Йулдoшева Дилноза Гайрат кизи" }
  ];
  
  const webadmin=[
    { title: "Musayev Jonibek Jambulovich" },
  ]
  const webadmin_ru = [
    { title: "Мусаев Жонибек Джамбулович" }
  ];
  const webadmin_en = [
    { title: "Musaev Jonibek Jambulovich" }
  ];
  
  const economics = [
    { title: "Gulyamov Saidaxror Saidaxmedovich - iqtisodiyot fanlari doktori, professor, akademik" },
    { title: "Gulamov Abdulaziz Abdullayevich - iqtisodiyot fanlari doktori, professor" },
    { title: "Maxmudov Nosir Maxmudovich - iqtisodiyot fanlari doktori, professor" },
    { title: "Irisbekova Mavlyuda Narinbayevna - iqtisodiyot fanlari doktori, professor" },
    { title: "Raxmonboyeva Roza Abduraxmanovna - iqtisodiyot fanlari doktori, professor" },
    { title: "Shodiyeva Gulnora Mardiyevna - iqtisodiyot fanlari doktori, professor" },
    { title: "Xonkeldiyeva Guzal Sherovna - iqtisodiyot fanlari doktori, professor" },
    { title: "Abdullayeva Matlyuba Nematovna - iqtisodiyot fanlari doktori, dotsent" },
    { title: "Musayeva Dilnoza Dilshatovna - iqtisodiyot fanlari bo‘yicha falsafa doktori (PhD)" },
    { title: "Jill J. McCluskey - PhD, professor, Vashington davlat universiteti, Pulman, AQSH" },
    { title: "Mark Beattie - PhD, dotsent, Vashington davlat universiteti, Everett, AQSH" },
    { title: "Guo Shuhong - iqtisodiyot fanlari doktori, professor, Dalyan politexnika universiteti, Dalyan, Xitoy" },
    { title: "Kelesbayev Dinmuxamed Nurmaxanbetovich - PhD, professor, Ahmad Yassaviy nomidagi Qozoq-turk universiteti, Turkiston, Qozog‘iston" },
    { title: "Yakushenko Kseniya Valentinovna - iqtisodiyot fanlari doktori, dotsent, Belarus milliy texnika universiteti, Minsk, Belarus" },
    { title: "Shamardina Irina Aleksandrovna - iqtisodiyot fanlari nomzodi, dotsent, Belarus milliy texnika universiteti, Minsk, Belarus" },
    { title: "Morozevich Olga Anatolevna - iqtisodiyot fanlari nomzodi, dotsent, Belarus davlat iqtisodiyot universiteti, Minsk, Belarus" },
    { title: "Korolenok Gennadiy Antonovich - iqtisodiyot fanlari doktori, professor, Belarus davlat iqtisodiyot universiteti, Minsk, Belarus" },
    { title: "Klimchenya Lyudmila Sergeyevna - iqtisodiyot fanlari nomzodi, dotsent, Belarus davlat iqtisodiyot universiteti, Minsk, Belarus" },
    { title: "Shalupayeva Natalya Sergeyevna - iqtisodiyot fanlari nomzodi, dotsent, Belarus davlat universiteti, Minsk, Belarus" }
  ];
  const economics_ru = [
    { title: "Гулямов Саидахрор Саидахмедович – доктор экономических наук, профессор, академик" },
    { title: "Гуламов Абдулазиз Абдуллаевич – доктор экономических наук, профессор" },
    { title: "Махмудов Носир Махмудович – доктор экономических наук, профессор" },
    { title: "Ирисбекова Мавлюда Наринбаевна – доктор экономических наук, профессор" },
    { title: "Рахмонбаева Роза Абдурахмановна – доктор экономических наук, профессор" },
    { title: "Шодиева Гульнора Мардиевна – доктор экономических наук, профессор" },
    { title: "Хонкелдиева Гузаль Шеровна – доктор экономических наук, профессор" },
    { title: "Абдуллаева Матлюба Нематовна – доктор экономических наук, доцент" },
    { title: "Мусаева Дилноза Дильшатовна - доктор философии по экономическим наукам" },
    { title: "Джилл Дж. МакКласки – доктор философии (PhD), профессор, Университет штата Вашингтон, Пуллман, США" },
    { title: "Марк Битти – доктор философии (PhD), доцент, Университет штата Вашингтон, Эверетт, США" },
    { title: "Го Шухун – доктор экономических наук, профессор, Даляньский политехнический университет, Далянь, Китай" },
    { title: "Келесбаев Динмухамед Нурмаханбетович – доктор философии (PhD), профессор, Казахско-Турецкий университет имени Ахмада Яссави, Туркестан, Казахстан" },
    { title: "Якушенко Ксения Валентиновна – доктор экономических наук, доцент, Белорусский национальный технический университет, Минск, Беларусь" },
    { title: "Шамардина Ирина Александровна – кандидат экономических наук, доцент, Белорусский национальный технический университет, Минск, Беларусь" },
    { title: "Морозевич Ольга Анатольевна – кандидат экономических наук, доцент, Белорусский государственный экономический университет, Минск, Беларусь" },
    { title: "Короленок Геннадий Антонович – доктор экономических наук, профессор, Белорусский государственный экономический университет, Минск, Беларусь" },
    { title: "Климченя Людмила Сергеевна – кандидат экономических наук, доцент, Белорусский государственный экономический университет, Минск, Беларусь" },
    { title: "Шалупаева Наталья Сергеевна – кандидат экономических наук, доцент, Белорусский государственный университет, Минск, Беларусь" }
  ];
  const economics_en = [
    { title: "Gulyamov Saidakhror Saidakhmedovich - Doctor of Economic Sciences, Professor, Academician" },
    { title: "Gulamov Abdulaziz Abdullaevich - Doctor of Economic Sciences, Professor" },
    { title: "Makhmudov Nosir Makhmudovich - Doctor of Economic Sciences, Professor" },
    { title: "Irisbekova Mavlyuda Narinbaevna - Doctor of Economic Sciences, Professor" },
    { title: "Rakhmonbaeva Roza Abdurakhmanovna - Doctor of Economic Sciences, Professor" },
    { title: "Shodieva Gulnora Mardievna - Doctor of Economic Sciences, Professor" },
    { title: "Khonkeldieva Guzal Sherovna - Doctor of Economic Sciences, Professor" },
    { title: "Abdullaeva Matlyuba Nematovna - Doctor of Economic Sciences, Associate Professor" },
    { title: "Musayeva Dilnoza Dilshatovna - Doctor of Philosophy in Economics (PhD)" },
    { title: "Jill J. McCluskey - PhD, Professor, Washington State University, Pullman, USA" },
    { title: "Mark Beatty - PhD, Associate Professor, Washington State University, Everett, USA" },
    { title: "Guo Shuhong - Doctor of Economic Sciences, Professor, Dalian Polytechnic University, Dalian, China" },
    { title: "Kelesbayev Dinmukhamed Nurmakhanbetovich - PhD, Professor, Akhmad Yassawi Kazakh-Turkish University, Turkestan, Kazakhstan" },
    { title: "Yakushenko Ksenia Valentinovna - Doctor of Economic Sciences, Associate Professor, Belarusian National Technical University, Minsk, Belarus" },
    { title: "Shamardina Irina Aleksandrovna - Candidate of Economic Sciences, Associate Professor, Belarusian National Technical University, Minsk, Belarus" },
    { title: "Morozevich Olga Anatolyevna - Candidate of Economic Sciences, Associate Professor, Belarusian State University of Economics, Minsk, Belarus" },
    { title: "Korolenok Gennady Antonovich - Doctor of Economic Sciences, Professor, Belarusian State University of Economics, Minsk, Belarus" },
    { title: "Klimchenya Lyudmila Sergeevna - Candidate of Economic Sciences, Associate Professor, Belarusian State University of Economics, Minsk, Belarus" },
    { title: "Shalupaeva Natalya Sergeevna - Candidate of Economic Sciences, Associate Professor, Belarusian State University, Minsk, Belarus" }
  ];
  
  const pedagogy = [
    { title: "Djurayev Risboy Xaydarovich - pedagogika fanlari doktori, professor, akademik" },
    { title: "Maxmudov Sarvar Yuldashevich - pedagogika fanlari doktori, professor" },
    { title: "Xalilova Shaxnoza Turgunovna - pedagogika fanlari doktori, dotsent" },
    { title: "Mirdjalolova Lobar Rustamovna - pedagogika fanlari nomzodi, dotsent" },
    { title: "Xodjayev Begzod Xudoyberdiyevich - pedagogika fanlari doktori, professor" },
    { title: "Mavlonova Klara Mahmudovna - pedagogika fanlari doktori, dotsent" },
    { title: "Abdullayev Safibullo Xabibullayevich - pedagogika fanlari doktori, professor" },
    { title: "Abdullayeva Ozoda Safibullayevna - pedagogika fanlari doktori, professor" },
    { title: "Paul Whitney - PhD, Vashington davlat universiteti, Pulman, AQSH" },
    { title: "Joseph Sapienza - PhD, Raqamli iqtisodiyot va agrotexnologiyalar universiteti, O‘zbekiston" }
  ];
  const pedagogy_ru = [
    { title: "Джураев Рысбой Хайдарович – доктор педагогических наук, профессор, академик" },
    { title: "Махмудов Сарвар Юлдашевич – доктор педагогических наук, профессор" },
    { title: "Халилова Шахноза Тургуновна – доктор педагогических наук, доцент" },
    { title: "Мирджалолова Лобар Рустамовна – кандидат педагогических наук, доцент" },
    { title: "Ходжаев Бегзод Худойбердиевич – доктор педагогических наук, профессор" },
    { title: "Мавлонова Клара Махмудовна – доктор педагогических наук, доцент" },
    { title: "Абдуллаев Сафибулло Хабибуллаевич – доктор педагогических наук, профессор" },
    { title: "Абдуллаева Озода Сафибуллаевна – доктор педагогических наук, профессор" },
    { title: "Пол Уитни – доктор философии (PhD), Университет штата Вашингтон, Пуллман, США" },
    { title: "Джозеф Сапиенца – доктор философии (PhD), Университет цифровой экономики и агротехнологий, Узбекистан" }
  ];
  const pedagogy_en = [
    { title: "Dzhuraev Rysboy Khaidarovich - Doctor of Pedagogical Sciences, Professor, Academician" },
    { title: "Makhmudov Sarvar Yuldashevich - Doctor of Pedagogical Sciences, Professor" },
    { title: "Khalilova Shakhnoza Turgunovna - Doctor of Pedagogical Sciences, Associate Professor" },
    { title: "Mirjalolova Lobar Rustamovna - Candidate of Pedagogical Sciences, Associate Professor" },
    { title: "Khojaev Begzod Khudoyberdievich - Doctor of Pedagogical Sciences, Professor" },
    { title: "Mavlonova Klara Makhmudovna - Doctor of Pedagogical Sciences, Associate Professor" },
    { title: "Abdullaev Safibullo Khabibullaevich - Doctor of Pedagogical Sciences, Professor" },
    { title: "Abdullaeva Ozoda Safibullaevna - Doctor of Pedagogical Sciences, Professor" },
    { title: "Paul Whitney - PhD, Washington State University, Pullman, USA" },
    { title: "Joseph Sapienza - PhD, University of Digital Economy and Agrotechnology, Uzbekistan" }
  ];
  
  const it = [
    { title: "Beknazarova Saida Safibullayevna - texnika fanlari doktori, professor" },
    { title: "Ravshanov Normaxmad - texnika fanlari doktori, professor" },
    { title: "Magrupov Talat Madiyevich - texnika fanlari doktori, professor" },
    { title: "Nazirova Elmira Shodmonovna - texnika fanlari doktori, professor" },
    { title: "Muxamediyeva Dildora Kabilovna - texnika fanlari doktori, dotsent" },
    { title: "Muxamediyeva Dilnoz Tulkunovna - texnika fanlari doktori, professor" },
    { title: "Muxamadiyev Abdivali Shukurovich - fizika-matematika fanlari doktori, dotsent" },
    { title: "Sergey Lapin - professor, Vashington davlat universiteti, Everett, AQSH" },
    { title: "Jacob Murray - PhD, professor, Vashington davlat universiteti, Everett, AQSH" },
    { title: "Shih-Lien Lu - professor, Vashington davlat universiteti, Everett, AQSH" },
    { title: "Brusakova Irina Aleksandrovna - texnika fanlari doktori, professor, Sankt-Peterburg davlat elektrotexnika universiteti, Sankt-Peterburg, Rossiya" },
    { title: "Yuldashev Zafar Muxammedovich - texnika fanlari doktori, professor, Sankt-Peterburg davlat elektrotexnika universiteti, Sankt-Peterburg, Rossiya" }
  ];
  const it_ru = [
    { title: "Бекназарова Саида Сафибуллаевна – доктор технических наук, профессор" },
    { title: "Равшанов Нормахмад – доктор технических наук, профессор" },
    { title: "Магрупов Талат Мадиевич – доктор технических наук, профессор" },
    { title: "Назирова Эльмира Шодмоновна – доктор технических наук, профессор" },
    { title: "Мухамедиева Дилдора Кабиловна – доктор технических наук, доцент" },
    { title: "Мухамедиева Дильноз Тулкуновна – доктор технических наук, профессор" },
    { title: "Мухамадиев Абдивали Шукурович – доктор физико-математических наук, доцент" },
    { title: "Сергей Лапин – профессор, Университет штата Вашингтон, Эверетт, США" },
    { title: "Джейкоб Мюррей – доктор философии (PhD), профессор, Университет штата Вашингтон, Эверетт, США" },
    { title: "Ши-Лиен Лу – профессор, Университет штата Вашингтон, Эверетт, США" },
    { title: "Брусакова Ирина Александровна – доктор технических наук, профессор, Санкт-Петербургский государственный электротехнический университет, Санкт-Петербург, Россия" },
    { title: "Юлдашев Зафар Мухаммедович – доктор технических наук, профессор, Санкт-Петербургский государственный электротехнический университет, Санкт-Петербург, Россия" }
  ];
  const it_en = [
    { title: "Beknazarova Saida Safibullaevna - Doctor of Technical Sciences, Professor" },
    { title: "Ravshanov Normakhmad - Doctor of Technical Sciences, Professor" },
    { title: "Magrupov Talat Madievich - Doctor of Engineering Sciences, Professor" },
    { title: "Nazirova Elmira Shodmonovna - Doctor of Engineering Sciences, Professor" },
    { title: "Mukhamedieva Dildora Kabilovna - Doctor of Engineering Sciences, Associate Professor" },
    { title: "Mukhamedieva Dilnoz Tulkunovna - Doctor of Engineering Sciences, Professor" },
    { title: "Mukhamadiev Abdivali Shukurovich - Doctor of Physical and Mathematical Sciences, Associate Professor" },
    { title: "Sergey Lapin - Professor, Washington State University, Everett, USA" },
    { title: "Jacob Murray - PhD, Professor, Washington State University, Everett, USA" },
    { title: "Shi-Lien Lu - Professor, Washington State University, Everett, USA" },
    { title: "Brusakova Irina Aleksandrovna - Doctor of Engineering Sciences, Professor, Saint Petersburg State Electrotechnical University, Saint Petersburg, Russia" },
    { title: "Yuldashev Zafar Mukhammedovich - Doctor of Engineering Sciences, Professor, Saint Petersburg State Electrotechnical University, Saint Petersburg, Russia" }
  ];
  
  return (
    <div className="max-w-[75.00rem] mx-auto xl:px-4 px-8 py-12">
      {/* Editorial Board Section */}
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('muharrir')}</h2>
        <ol className="sm:w-1/2  sm:list-outside list-inside space-y-2 sm:ml-12 ml-0 list-none">
          {(language==="uz"?editorMain:language==="ru"?editorMain_ru:editorMain_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('muharrir_zam')}</h2>
        <ol className="sm:w-1/2 list-none sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?editorMainSecond:language==="ru"?editorMainSecond_ru:editorMainSecond_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('muharrir_main')}</h2>
        <ol className="sm:w-1/2 list-none sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?editor:language==="ru"?editor_ru:editor_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('kotib')}</h2>
        <ol className="sm:w-1/2 list-none sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?assistant:language==="ru"?assistant_ru:assistant_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-12">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('web-admin')}</h2>
        <ol className="sm:w-1/2 list-none sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?webadmin:language==="ru"?webadmin_ru:webadmin_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('editorial_board')}:</h2>
        
      </div>
      <div className="w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8">
        <h2 className="sm:w-1/2 lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('economics')}</h2>
        <ol className="sm:w-1/2 list-decimal sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?economics:language==="ru"?economics_ru:economics_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>

      <div className='w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8'>
        <h2 className="sm:w-1/2  lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t('pedagogics')}</h2>
        <ol className="sm:w-1/2  list-decimal sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?pedagogy:language==="ru"?pedagogy_ru:pedagogy_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
      <div className='w-full flex sm:flex-row flex-col justify-center items-center sm:items-start sm:justify-between mb-8'>
        <h2 className="sm:w-1/2  lg:text-4xl md:text-3xl sm:text-2xl text-3xl sm:mb-0 mb-4 font-bold leading-[1.80rem] sm:text-left text-center text-[#21466D]">{t("it_management_graphics")}</h2>
        <ol className="sm:w-1/2  list-decimal sm:list-outside list-inside space-y-2 sm:ml-12 ml-0">
          {(language==="uz"?it:language==="ru"?it_ru:it_en).map((member, index) => (
            <li key={index} className="lg:text-xl text-lg  font-normal leading-[1.88rem] sm:text-left text-center text-[#21466D]">
              {member.title}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default OrganizationStructure;

