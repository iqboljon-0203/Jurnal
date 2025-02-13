import React from "react";
import { useTranslation } from "react-i18next";
function SubmissionGuidelinesFull() {
  const { t } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
 
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
      <h1 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-center text-[#21466D] mb-4">
        {t("guidelines_title1")}
      </h1>

      <ol className="list-decimal space-y-4 ml-6 mb-8">
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("guidelines_title1_info1")}
        </li>
        <h1 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-4">{t("field")}</h1>
      
          <div className="space-y-2">
            <p className="italic lg:text-xl text-lg font-bold leading-[1.88rem] text-left text-[#21466D]">08.00.00 - {t("economics_1")}</p>
            
            <div className="space-y-1.5 pl-4">
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.01</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_2")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.02</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_3")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.03</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_4")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.04</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_5")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.05</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_6")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.06</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_7")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.07</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_8")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.08</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_9")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.09</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_10")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.10</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_11")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.11</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_12")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.12</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_13")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.13</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_14")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.14</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_15")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.15</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_16")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.16</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_17")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">08.00.17</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("economics_18")}</span></p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="italic lg:text-xl text-lg font-bold leading-[1.88rem] text-left text-[#21466D]">13.00.00 - {t("pedagogy_1")}</p>
            
            <div className="space-y-1.5 pl-4">
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.01</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_2")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.02</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_3")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.03</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_4")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.04</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_5")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.05</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_6")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.06</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_7")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.07</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_8")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.08</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_9")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">13.00.09</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("pedagogy_10")}</span></p>
           
            </div>
          </div>
          <div className="space-y-2">
            <p className="italic lg:text-xl text-lg font-bold leading-[1.88rem] text-left text-[#21466D]">05.01.00 - {t("it_1")}</p>
            
            <div className="space-y-1.5 pl-4">
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.01</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_2")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.02</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_3")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.03</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_4")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.04</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_5")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.05</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_6")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.06</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_7")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.07</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_8")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.08</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_9")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.09</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_10")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.10</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_11")}</span></p>
              <p><span className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">05.01.11</span> - <span className="underline decoration-1 lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">{t("it_12")}</span></p>
              
            </div>
          </div>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("guidelines_title1_info2")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("guidelines_title1_info3")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("guidelines_title1_info4")}
        </li>
      </ol>

      <div className="space-y-6">
        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {" "}
            {t("guidelines_title2")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title2_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title3")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
          {t("guidelines_title3_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title4")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title4_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title5")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title5_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title6")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title6_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title7")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title7_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title8")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title8_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title9")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title9_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title10")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title10_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title11")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
            {t("guidelines_title11_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title12")}
          </h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li className=" list-none lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info1")}
            </li>
            <li className="list-none lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info2")}
            </li>
            <li className="list-none lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info3")}
            </li>
            <li className="list-none lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info4")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info5")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info6")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info7")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info8")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info9")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-justify text-[#21466D]">
              {t("guidelines_title12_info10")}
            </li>
           
          </ol>
        </section>

        
      </div>
    </div>
  );
}

export default SubmissionGuidelinesFull;
