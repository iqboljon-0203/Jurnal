import Wiley from "../../assets/logos/brand_logo.png";
import IEEE from "../../assets/logos/brand_logo1.png";
import Taylor from "../../assets/logos/brand_logo2.png";
import Springer from "../../assets/logos/brand_logo3.png";
import { useTranslation } from 'react-i18next'; 
const PublisherScroll = () => {
  const { t } = useTranslation();
  const publishers = [
    { name: 'Wiley', logo: Wiley },
    { name: 'IEEE', logo:IEEE },
    { name: 'Taylor & Francis', logo: Taylor },
    { name: 'Springer', logo: Springer }
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

