import React from "react";
import { useTranslation } from "react-i18next";
export default function ContentCard() {
  const { t } = useTranslation();
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
       <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D] mb-4">
            {t("requirements_title")}
          </h2>
          <p className="italic lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-4">{t("requ1")}</p>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("requirements_title_info1")}
          </p>
          <br />
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
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
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info1")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info2")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info3")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info4")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info5")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info6")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info7")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info8")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info9")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info10")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info11")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("requirements_title1_info12")}
        </li>
      </ol>
      <p className="italic lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D]  mb-6">{t("requ2")}</p>
      <div className="space-y-6">
       

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title3")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("requirements_title3_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title4")}
          </h2>
          <div className="space-y-1.5 pl-4">
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ3")}</p>
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ4")}</p>
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ5")}</p>    
          </div>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("requirements_title5")}
          </h2>
          <div className="space-y-1.5 pl-4">
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ6")}</p>
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ7")}</p>
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ8")}</p>    
              <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("requ9")}</p>    
          </div>
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
          <ul className="list-disc ml-6 space-y-2 mb-6">
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
          <p className="italic lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D]  mb-12">{t("requ10")}</p>
        </section>
        
      </div>
      {/* Header Section - Centered Title */}
      <header className="mb-8">
        <h1 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D] mb-6">
        {t("requ11")}
        </h1>
        
        {/* DOI and Classification - Left Aligned */}
        <div className="space-y-2 text-left">
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ12")}</span> {t("requ13")}</p>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ14")}</span></p>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ15")}</span> {t("requ16")}</p>
        </div>
      </header>

      {/* Paper Title - Left Aligned */}
      <div className="text-center mb-4">
        <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D]">{t("requ17")}</h2>
      </div>

      {/* Author Photo Box - Right Aligned */}
      <div className="flex flex-col md:flex-row justify-end mb-8">
        <div className="border border-[#21466D]  p-4 w-full md:w-72">
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D] mb-2">{t("requ18")}</h3>
          <div className="space-y-2">
            <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="font-bold">{t("requ19")}</span> {t("requ20")}</p>
            <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="font-bold">{t("requ21")}</span>{t("requ22")}</p>
          </div>
        </div>
      </div>

      {/* Author Information - Left Aligned */}
      <div className="space-y-4 mb-8">
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl font-bold">{t("requ23")}</span> {t("requ24")}</p>
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl font-bold">{t("requ25")}</span> {t("requ26")}</p>
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl font-bold">{t("requ27")}</span> {t("requ28")}</p>
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl font-bold">{t("requ29")}</span>{t("requ30")}</p>
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"><span className="lg:text-2xl font-bold">{t("requ31")}</span> {t("requ32")}</p>
      </div>

      {/* Main Content Sections - Left Aligned */}
      <div className="space-y-6">
        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ33")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ34")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ35")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ36")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ37")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ38")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ39")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ40")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ42")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ43")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ44")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ45")}</p>
        </section>
        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ46")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ47")}</p>
        </section>

        <section>
          <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ48")}</h3>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ49")}</p>
        </section>
      </div>

      {/* References - Left Aligned */}
      <div className="space-y-4 mt-6">
        <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ50")}</h3>
        <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ51")}</p>
        <h3 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D]">{t("requ52")}</h3>
        <ol className="list-decimal list-inside space-y-2">
          <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ53")}</li>
          <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">{t("requ54")}</li>
          <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]"></li>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">.....</p>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">20.</p>
        </ol>
      </div>

      <div className="mt-8 text-center ">
        <p className="italic lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D]">{t("requ55")}</p>
      </div>
    </div>
  )
}

