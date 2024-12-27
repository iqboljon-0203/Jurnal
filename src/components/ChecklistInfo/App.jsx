import React from "react";
import { useTranslation } from "react-i18next";
export default function ContentCard() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
      <div className="w-full">
        {/* Top section with dark background and yellow left border */}
        <div className="p-6 mb-8 relative">
          {/* Yellow border on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
          <p className="lg:text-xl text-lg font-semibold leading-7 text-left text-[#21466D]"> {/* Added left padding to accommodate the border */}
            {t("checklist_info_title")}
          </p>
        </div>
        
        {/* Bottom section with lorem ipsum */}
        <div className="p-6">
          <p className="lg:text-xl text-lg font-normal leading-7 text-left text-[#21466D]">
            Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et maxim. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
          </p>
        </div>
      </div>
    </div>
  )
}

