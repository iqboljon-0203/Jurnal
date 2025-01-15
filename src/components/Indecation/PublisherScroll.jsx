import Doaj from "../../assets/logos/Mask group.png";
import Crossref from "../../assets/logos/image 97.png";
import WordJournals from "../../assets/logos/Mask group-1.png";
import ResearchBib from "../../assets/logos/Mask group-2.png";
import Crossreff from "../../assets/logos/Mask group-3.png";
import Base from "../../assets/logos/Mask group-4.png";
import eLibrary from "../../assets/logos/Mask group-5.png";
import Cyberleninka from "../../assets/logos/Mask group-6.png";
import Googlescholar from "../../assets/logos/Mask group-7.png";
import Europup from "../../assets/logos/Mask group-8.png";
import OpenAire from "../../assets/logos/Mask group-9.png";
import { useTranslation } from 'react-i18next'; 
const PublisherScroll = () => {
  const { t } = useTranslation();
  const publishers = [
    { name: 'Doaj', logo: Doaj },
    { name: 'Crossref', logo: Crossref },
    { name: 'WordJournals', logo: WordJournals },
    { name: 'ResearchBib', logo: ResearchBib },
    { name: 'Crossreff', logo: Crossreff },
    { name: 'Base', logo: Base },
    { name: 'eLibrary', logo: eLibrary },
    { name: 'Cyberleninka', logo: Cyberleninka },
    { name: 'Googlescholar', logo: Googlescholar },
    { name: 'Europup', logo: Europup },
    { name: 'OpenAire', logo: OpenAire },
  ];

  // Double the array to create seamless loop
  const duplicatedPublishers = [...publishers, ...publishers];

  return (
    <>
    <div className="container mx-auto px-4 py-2">
        <h2 className="text-[#21466D] xl:text-4xl lg:text-3xl md:text-2xl  text-xl font-bold leading-[2.40rem] text-left lg:mb-4 mb-2 uppercase">{t("indexing")}</h2>
      </div>
    <div className="bg-[#1a365d] w-full overflow-hidden">
      
      
    <div className="relative overflow-hidden container mx-auto px-4 lg:py-8 py-4 bg-[#1a365d]">
        <div className="flex animate-scroll">
          {duplicatedPublishers.map((publisher, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-12 lg:w-48 w-28 flex items-center justify-center"
            >
              <img
                src={publisher.logo}
                alt={`${publisher.name} logo`}
                className="h-12 object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default PublisherScroll;

