import React from "react";
import { useTranslation } from "react-i18next";
function SubmissionGuidelinesFull() {
  const { t } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const rubrika = {
    uz: `UO‘K - universal o‘nlik klassifikator (УДК). Har bir maqola boshida UO‘K raqami qo‘yilishi lozim. UO‘K raqamini aniqlash va u haqida qo‘shimcha ma’lumotni olish uchun quyidagi havoladan foydalanish mumkin (
      <a href="https://perviy-vestnik.ru/udc/" target="_blank">
        (https://perviy-vestnik.ru/udc/)
      </a>
    ). Amerika Iqtisodiy Assotsiatsiyasi tomonidan ishlab chiqilgan va veb-saytida taqdim etilgan Journal of Economic Literature (JEL) mavzu klassifikatori iqtisodiyot bo‘yicha nashrlar mavzusini belgilash uchun xalqaro miqyosda tan olingan kod tizimidir. Jahon davriy nashrlarida birorta ham zamonaviy maqola JEL kodlarisiz chop etilmaydi (
      <a href="https://www.aeaweb.org/jel/guide/jel.php" target="_blank">
        (https://www.aeaweb.org/jel/guide/jel.php)
      </a>
    ), JEL raqamini aniqlash va u haqida qo‘shimcha ma’lumotni olish uchun quyidagi havoladan foydalanish mumkin (
      <a href="https://library.fa.ru/files/JEL.pdf" target="_blank">
        (https://library.fa.ru/files/JEL.pdf)
      </a>
    )  .`,
    ru: `УДК - универсальный десятичный классификатор. Каждая статья должна иметь номер УДК, указанный в начале текста. Для определения индекса УДК и получения дополнительной информации о нем можно воспользоваться ресурсом (
      <a href="https://perviy-vestnik.ru/udc/" target="_blank">
        (https://perviy-vestnik.ru/udc/)
      </a>
    ).
Тематический классификатор Journal of economic literature (JEL), разработанный Американской экономической ассоциацией и представленный на веб-сайте, только для экономических статей необходимо указать соответствующие коды JEL, которые являются международным стандартом для классификации публикаций в области экономики. Ни одна современная статья в мировых периодических изданиях не публикуется без кодов JEL (
      <a href="https://www.aeaweb.org/jel/guide/jel.php" target="_blank">
        (https://www.aeaweb.org/jel/guide/jel.php)
      </a>
    ), для определения номера JEL и получения дополнительной информации о нем можно воспользоваться ресурсом (
      <a href="https://library.fa.ru/files/JEL.pdf" target="_blank">
        (https://library.fa.ru/files/JEL.pdf)
      </a>
    ) .`,
    en: `UDC is a universal decimal classifier (UDC). Each article must include a UDC code at the beginning of the text. 
The Journal of Economic Literature (JEL) codes, developed by the American Economic Association and presented on its website, Economic articles must include JEL classification codes to enhance their alignment with international indexing standards. Guidance on JEL codes can be found at: (
      <a href="https://www.aeaweb.org/jel/guide/jel.php" target="_blank">
        https://www.aeaweb.org/jel/guide/jel.php
      </a>
    ), the JEL number can be determined and additional information about it can be obtained from the following link : (
      <a href="https://library.fa.ru/files/JEL.pdf" target="_blank">
        https://library.fa.ru/files/JEL.pdf
      </a>
    ).`,
  };
  return (
    <div className="max-w-[81.25rem] mx-auto xl:px-4 px-8 py-12">
      <h1 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-4">
        {t("guidelines_title1")}
      </h1>

      <ol className="list-decimal space-y-4 ml-6 mb-8">
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("guidelines_title1_info1")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("guidelines_title1_info2")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("guidelines_title1_info3")}
        </li>
        <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
          {t("guidelines_title1_info4")}
        </li>
      </ol>

      <div className="space-y-6">
        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {" "}
            {t("guidelines_title2")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title2_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title3")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {language === "uz"
              ? rubrika.uz
              : language === "ru"
              ? rubrika.ru
              : rubrika.en}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title4")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title4_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title5")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title5_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title6")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title6_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title7")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title7_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title8")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title8_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title9")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title9_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title10")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title10_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title11")}
          </h2>
          <p className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
            {t("guidelines_title11_info1")}
          </p>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title12")}
          </h2>
          <ol className="list-decimal ml-6 space-y-2">
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info1")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info2")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info3")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info4")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info5")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info6")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              <ul className="list-disc ml-6">
                <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
                  {t("guidelines_title12_info7")}
                </li>
                <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
                  {t("guidelines_title12_info8")}
                </li>
                <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
                  {t("guidelines_title12_info9")}
                </li>
                <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
                  {t("guidelines_title12_info10")}
                </li>
                <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
                  {t("guidelines_title12_info11")}
                </li>
              </ul>
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info12")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info13")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title12_info14")}
            </li>
          </ol>
        </section>

        <section>
          <h2 className="lg:text-2xl text-xl font-bold leading-[1.88rem] text-left text-[#21466D] mb-2">
            {t("guidelines_title13")}
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title13_info1")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title13_info2")}
            </li>
            <li className="lg:text-xl text-lg font-normal leading-[1.88rem] text-left text-[#21466D]">
              {t("guidelines_title13_info3")}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SubmissionGuidelinesFull;
