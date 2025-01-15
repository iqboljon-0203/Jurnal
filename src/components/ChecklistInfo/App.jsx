import React from "react";
import { useTranslation } from "react-i18next";
export default function ContentCard() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
       <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title_info1")}
          </p>
          <br />
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title_info2")}
          </p>
          <br />
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title_info3")}
          </p>
          <br />
        </section>
      <h1 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-4">
        {t("requirements_title1")}
      </h1>

      <ol className="list-decimal space-y-4 ml-6 mb-8">
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info1")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info2")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info3")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info4")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info5")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info6")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info7")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info8")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info9")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info10")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info11")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("requirements_title1_info12")}
        </li>
      </ol>

      <div className="space-y-6">
       

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title3")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title3_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title4")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title4_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title5")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title5_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title6")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("requirements_title6_info1")}
          </p>
        </section>
        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title13")}
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info1")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info2")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info3")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info4")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info5")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("requirements_title13_info6")}
            </li>
          </ul>
        </section>
        
      </div>
    </div>
  )
}

