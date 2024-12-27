import  { useState, useRef, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
function CardSlider() {
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

  const cards = [
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
    {
      title: t("plans_info_title"),
      content: t("plans_info_text")
    },
      
  ];

  return (
    <div className="w-full">
      <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
        {/* Top text section */}
        <div className="mb-16">
          <p className="text-[#21466D] lg:text-xl text-lg font-normal leading-[1.88rem] text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et masami. Aliquam in hendrerit urna.
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
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 xl:w-1/3 lg:w-1/2 w-full bg-[#F5F6FA] h-[28.25rem] p-5 px-6-8 rounded-2xl">
                <div className="rounded-full bg-white lg:p-4 sm:p-6 lg:mb-6 sm:mb-8 mb-4 p-4 inline-block">
                  <Check className="lg:w-12 lg:h-12 sm:w-14 sm:h-14 w-8 h-8  text-[#21466D]" />
                </div>
                <h2 className="lg:text-3xl sm:text-4xl text-xl font-bold leading-[2.40rem] text-left text-[#21466D] mb-4">
                  {card.title}
                </h2>
                <p className="lg:text-lg sm:text-xl text-md font-normal leading-[1.57rem] text-left text-[#21466D59]">
                  {card.content}
                </p>
              </div>
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

