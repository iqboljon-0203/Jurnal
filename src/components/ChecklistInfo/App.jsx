export default function ContentCard() {
  return (
    <div className="max-w-[81.25rem] mx-auto px-4 py-12">
      <div className="w-full">
        {/* Top section with dark background and yellow left border */}
        <div className="p-6 mb-8 relative">
          {/* Yellow border on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
          <p className="text-xl font-semibold leading-7 text-left text-[#21466D]"> {/* Added left padding to accommodate the border */}
            Fan va Texnologiyalar Universiteti kirishni tanlagan barcha abiturientlar uchun bir nechta ta'lim formatlari mavjud. Ulardan biri - Kechki ta'lim. Kunduzgi ta'lim bilan band bo'lgan talabalari uchun. Fan va Texnologiyalar Universiteti eng zamonaviy va samarali xalqaro ta'lim standartlarini o'z ichiga olgan. Fan va Texnologiyalar Universiteti kirishni tanlagan barcha abiturientlar uchun bir nechta ta'lim formatlari mavjud. Ulardan biri - Kechki ta'lim. Kunduzgi ta'lim bilan band bo'lgan talabalari uchun.
          </p>
        </div>
        
        {/* Bottom section with lorem ipsum */}
        <div className="p-6">
          <p className="text-xl font-normal leading-7 text-left text-[#21466D]">
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
      </div>
    </div>
  )
}

