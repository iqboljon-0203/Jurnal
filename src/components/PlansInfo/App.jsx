import  { useState, useRef, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LicenseUz from "../../assets/logos/license1.jpg";
import LicenseRus from "../../assets/logos/license2.jpg";
import LicenseEng from "../../assets/logos/license3.jpg";
import {Link } from "react-router-dom"
function CardSlider() {
  const language=localStorage.getItem("i18nextLng")||'uz';
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScrollEvent = () => {
        setScrollPosition(container.scrollLeft);
      };
      container.addEventListener('scroll', handleScrollEvent);
      return () => container.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);
  
  const info={
    uz:"O‘zbekiston Respublikasi Prezidentining “Litsenziyalash va ruxsat berish tartib-taomillarini tubdan takomillashtirish chora-tadbirlari to‘g‘risida”gi 2020-yil 24-avgustdagi PF-6044-son Farmoni, O‘zbekiston Respublikasi Vazirlar Mahkamasining “Maxsus elektron tizim orqali ruxsat etish xususiyatiga ega ayrim hujjatlarni berish tartib-taomillari to‘g‘risidagi yagona nizomni tasdiqlash haqidagi” 2022-yil 22-fevraldagi 86-son qarori, hamda 2010-yil 22-iyuldagi “Respublikada qog‘ozni tejash va undan ratsional foydalanish bo‘yicha qo‘shimcha chora-tadbirlar haqida”gi 155-sonli qarorida belgilangan vazifalar ijrosi, shuningdek, bugungi axborot asrida raqamli iqtisodiyotning shiddat bilan rivojlanayotgani, barcha sohalarda uning zamonaviy texnologiyalari samarali qo‘llanilayotganligi, elektron hukumat va elektron hujjat aylanish tizimlaridan samarali foydalanish orqali sarf-xarajatlarni tejash jarayonlarining o‘sib borayotganligi, axborot va raqamlashgan jamiyatning shakllanib borishi bilan umumfoydalanishdagi telekommunikatsiya tarmoqlaridagi veb-saytlar negizida tashkil qilinayotgan elektron ommaviy axborot vositalarining salmog‘i ortib bormoqda. Bu turdagi nashrlarning keng amaliyotga joriy etilishi nafaqat axborotlarni tezkor yetkazib berishni oshiradi, balki mamlakatimiz va xorijiy olimlarning o‘zaro ilmiy-tadqiqot yangiliklarini almashish maydoni sifatida ham samarali foydalanishga olib keladi.",
    uz1:"Mamlakatimizda iqtisodiyot, pedagogika va texnika sohalaridagi ilmiy innovatsion tadqiqotlarni yanada chuqurlashtirish, ushbu sohalarning ilmiy-amaliy ahamiyatini oshirish va ularni keng ommaga yetkazish maqsadida Fan va texnologiyalar universiteti muassisligida “Yangi iqtisodiyot, pedagogika va texnologiyalar sari” ilmiy elektron jurnali O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi tomonidan 2024-yil 6-dekabr kuni ro‘yxatga olingan (ommaviy axborot vositasi davlat ro‘yxatidan o‘tkazilganligi to‘g‘risidagi Guvohnoma №517474) va nashr faoliyatini boshlagan. Ushbu ilmiy elektron jurnalda mualliflar ilmiy maqolalarini iqtisodiyot, pedagogika, raqamli texnologiyalar va ularning zamonaviy yo‘nalishlariga oid dolzarb mavzularda chop etishlari mumkin bo‘ladi. Bizning ilmiy elektron jurnal, ilmiy-analitik yo‘nalishdagi tadqiqot natijalarini jahon ilmiy hamjamiyatiga yetkazishga xizmat qiladi. 2025 yildan chop etila boshlandi. Ushbu ilmiy elektron jurnal ommaviy axborot vositasi sifatida faoliyatini o‘zbek, rus va ingliz tillarida amalga oshiradi hamda har chorakda 1 marta nashr qilinadi va yil davomida 4 ta soni chop etiladi.",
    uz2:"Ilmiy elektron jurnalga qabul qilingan har bir maqola uchun DOI raqam biriktiriladi. DOI orqali maqolalar xalqaro ilmiy bazalar - DOAJ (Directory of Open Access Journals) (OAK 25), Ulrich’s Periodicals Directory (OAK 18), Index Copernicus (OAK 12), ReaserchBib (OAK 14), CrossRef (OAK 35), BASE (Bielefeld Academic Search Engine) (OAK 13), eLIBRARY.RU (РИНЦ), Cyberleninka, Europub, Google Scholar, OpenAIRE, OpenArchivesda indeksatsiya qilinishi yo‘lga qo‘yiladi. Bu esa respublikamiz va xorijiy mamlakatlar yetuk olimlarining xalqaro bazalardagi mavjud profillari orqali H-indeksi va har bir ishlanmaga beriladigan iqtiboslar sonining oshishiga ijobiy ta’sir ko‘rsatishiga erishiladi. Ilmiy elektron jurnalning asosiy maqsadi respublikamizning yetuk olimlari va amaliyotchilarining nufuzli ilmiy ishlari natijalari bilan yosh olimlar, tayanch doktorant va doktorantlar hamda talaba va magistrantlarni yaqindan tanishtirib borish hisoblanadi. Shuningdek, jurnalning faoliyati respublikamizda iqtisodiyot, menejment, marketing, tadbirkorlik, moliya, bank, soliqqa tortish, pedagogika, aniq fanlar, raqamli va yashil iqtisodiyot texnologiyalari, muhandislik, sun’iy intellekt va jurnal yo‘nalishiga mos boshqa sohalarda ilmiy va amaliy tadqiqotlar samaradorligini oshirish hamda foydalanishning amaliy va uslubiy jihatlari, muammolari va yechimlari, jahon miqyosidagi xorijiy tajribalarni o‘rganish va uning  tahlili, zamonaviy axborot-kommunikatsiya va texnika-texnologiyalaridan foydalanish jarayonlariga bag‘ishlangan.",
    uz3:"O‘zbekiston, 100208, Toshkent sh., Chilonzor tumani, Diydor ko‘chasi, 71-uy",
    ru:"Реализация задач, определенных Указом Президента Республики Узбекистан от 24 августа 2020 года № УП-6044 «О мерах по коренному совершенствованию лицензионно-разрешительных процедур», Постановлением Кабинета Министров Республики Узбекистан № 86 от 22 февраля 2022 года «Об утверждении единого положения о порядке выдачи отдельных документов, имеющих разрешительный характер, посредством специальной электронной системы», а также Постановлением Кабинета Министров № 155 от 22 июля 2010 года «Об экономии и рациональном использовании бумаги в республике», наряду со стремительным развитием цифровой экономики в эпоху информационных технологий, эффективным использованием современных технологий во всех отраслях, активным внедрением электронного правительства и систем электронного документооборота для сокращения затрат, а также процессами экономии и формирования информационного и цифрового общества, подчеркивают возрастающее значение электронных средств массовой информации. Электронные публикации, не только ускоряют процесс доставки информации, но и обеспечивают эффективное использование в качестве платформ для обмена научными и исследовательскими новостями между отечественными и зарубежными учеными.",
    ru1:"В целях углубления научных и инновационных исследований в области экономики, педагогики и технологий в нашей стране, а также для повышения их научной и практической значимости и обеспечения доступности для широких слоев населения, издается научный электронный журнал «К новой экономике, педагогике и технологиям», созданный Университетом науки и технологий. 6 декабря 2024 года журнал был зарегистрирован в Агентстве информации и массовых коммуникаций при Администрации Президента Республики Узбекистан (Свидетельство о государственной регистрации СМИ № 517474), что ознаменовало начало его издательской деятельности. Научный электронный журнал предоставляет авторам возможность публиковать статьи по актуальным вопросам экономики, педагогики, цифровых технологий и их современным направлениям. Журнал служит платформой для распространения результатов научных и аналитических исследований в мировом научном сообществе. Публикация журнала началась с 2025 года. Издание функционирует как средство массовой информации на узбекском, русском и английском языках, выходя ежеквартально (4 выпуска в год). Каждой опубликованной статье присваивается уникальный DOI (Digital Object Identifier), обеспечивающий индексирование в ведущих международных научных базах, таких как: DOAJ (Directory of Open Access Journals), Ulrich’s Periodicals Directory, Index Copernicus, ReaserchBib, CrossRef, BASE (Bielefeld Academic Search Engine), eLIBRARY.RU (РИНЦ), Cyberleninka, Europub, Google Scholar, OpenAIRE, OpenArchives. Обеспечение индексацией каждой статьи на международных научных базах будет способствовать к повышению видимости и цитируемости публикаций, а также росту H-индекса зарубежных и отечественных ученых.",
    ru2:"Основная цель научно электронного журнала является ознакомление молодых ученых, докторантов, соискателей, магистрантов и студентов с результатами исследований, проводимых ведущими учеными и практиками. Также деятельность журнала посвящена повышению эффективности научных и практических исследований в области экономики, менеджмента, маркетинга, предпринимательства, финансов, банковского дела, налогообложения, педагогики, точных наук, технологии цифровой и зеленой экономики, инженерии, искусственного интеллекта и других областях, соответствующих направлению журнала. Особое внимание уделяется практическим и методологическим аспектам использования результатов исследований, проблемам и их решениям, изучению и анализу зарубежного опыта в мировом масштабе, а также процессам использования современных информационно-коммуникационных и технико-технологических средств.",
    ru3:"Узбекистан, 100208, г. Ташкент, Чиланзарский район, ул. Дийдор, 71",
    en:"The tasks outlined in several key legislative documents, such as the President of Uzbekistan’s Decree No. UP-6044 from August 24, 2020, titled «On Measures to Radically Improve Licensing and Permitting Procedures», and the Cabinet of Ministers Resolution No. 86 from February 22, 2022, «On Approval of the Unified Regulation for Issuing Certain Permit Documents via a Special Electronic System», underscore the pressing need to modernize administrative processes. Furthermore, the Cabinet of Ministers Resolution No. 155 from July 22, 2010, «On Saving and Rational Use of Paper in the Republic», highlights the necessity for innovation in the digital economy, especially as technology evolves. In this context, implementing e-government initiatives and electronic document management systems aims to reduce operational costs and facilitate the transition toward a more information-oriented and digital society.",
    en1:"Electronic platforms are proving invaluable, not only in accelerating the dissemination of information but also in providing avenues for sharing scientific research between domestic and international scholars. To foster scientific and innovative research in areas such as economics, pedagogy, and technology within Uzbekistan, the University of Science and Technology has launched the electronic scientific journal «Towards a new economy, pedagogy and technologies». This journal is designed to enhance the research’s scientific and practical relevance, ensuring it remains accessible to the broader public. Registered on December 6, 2024, by the in the Agency for Information and Mass Communications under the Administration of the President of the Republic of Uzbekistan (Certificate of State Registration of Media No. 517474), the journal has officially begun publishing its content. The publication operates as a mass media in Uzbek, Russian and English languages, publishing quarterly (four issues a year).The journal invites authors to submit articles addressing current issues in economics, pedagogy, and digital technologies, among other pertinent topics. Publication of the journal began from 2025. It serves as a platform for sharing scientific and analytical research outcomes with the global academic community.Published quarterly in Uzbek, Russian, and English, each article is assigned a unique DOI (Digital Object Identifier), enhancing indexing in prominent international scientific databases, such as: DOAJ (Directory of Open Access Journals), Ulrich’s Periodicals Directory, Index Copernicus, ReaserchBib, CrossRef, BASE (Bielefeld Academic Search Engine), eLIBRARY.RU, Cyberleninka, Europub, Google Scholar, OpenAIRE, OpenArchives.Ensuring of indexed each article is in international scientific databases will contribute to enhancing the visibility and citation rates of publications, as well as improving the h-index of both foreign and domestic scientists.The main purpose of the scientific electronic journal is to familiarize young scientists, doctoral students, master’s and students with the results of research conducted by leading scientists and practitioners.",
    en2:"The journal’s activities are also dedicated to improving the effectiveness of scientific and practical research in the fields of economics, management, marketing, entrepreneurship, finance, banking, taxation, pedagogy, exact sciences, digital and green economy technologies, engineering, artificial intelligence and other areas relevant to the journal’s field. Particular attention is paid to the practical and methodological aspects of using research results, problems and their solutions, studying and analyzing foreign experience on a global scale, as well as the processes of using modern information and communication and technical-technological tools.",
    en3:"Uzbekistan, 100208, Tashkent, Chilanzar district, Diydor str, 71"
  }
  const universityLicenses=[
         {
             name:"uz",
             link:LicenseUz
         },
         {
             name:"ru",
             link:LicenseRus
         },
         {
             name:"en",
             link:LicenseEng
         },
         
     ]

  return (
    <div className="w-full">
      <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
        {/* Top text section */}
        <div className="mb-16">
          <p className="text-[#21466D] lg:text-xl text-lg font-normal leading-[1.88rem] text-justify">
          {language === 'uz' ? <p>{info.uz} <br /> <br /> {info.uz1} <br /> <br /> {info.uz2} <br /> <br /> {info.uz3}</p>  : language === 'ru' ? <p>{info.ru} <br /> <br /> {info.ru1} <br /> <br /> {info.ru2} <br /> <br /> {info.ru3}</p> : <p>{info.en} <br /> <br /> {info.en1} <br /> <br></br> {info.en2} <br /> <br /> {info.en3}</p>}  
          </p>
        </div>

        {/* Card slider */}
        <div className="relative bg-white p-3 gap-[0.63rem] rounded-3xl">
          <div 
            ref={containerRef}
            className="w-full flex overflow-x-auto gap-3 scroll-smooth no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {universityLicenses.map((item,index) => (
              <Link target='_blank' to={`https://document.licenses.uz/certificate/uuid/bd531c8c-8983-4295-b251-cc4f688a1f08/pdf?language=${item.name}`} className='hover:shadow-2xl' key={index}>
                <img
                src={item.link}
                alt={item.name}  
                className="border border-white/20"
              />
              </Link>
            ))}
          </div>
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSlider;

