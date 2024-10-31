/* eslint-disable react/no-unknown-property */
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation(); // Initialize useTranslation hook
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Mini Image */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center mb-8">
          {/* <img
            src="/logo.png" // Ensure this path is correct based on your project structure
            alt="About Us Hero"
            className="w-64 h-48 object-cover rounded-full mb-6"
          /> */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          {t("aboutUs.title")}
          </h1>
        </div>
        <p className="text-lg text-gray-700 ltr:text-left leading-relaxed max-w-2xl mx-auto text-center md:text-right">
          {t("aboutUs.content")}
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {t("aboutUs.history")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center md:text-right ltr:text-left">
        {t("aboutUs.historyContent")}
        </p>
      </section>

      {/* History Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6  text-center">
        {t("aboutUs.ourServices")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto text-center">

          <ul class="list-disc text-center md:text-right ltr:text-left">
            <li>{t("aboutUs.services.1")}</li>
            <li>{t("aboutUs.services.2")}</li>
            <li>{t("aboutUs.services.3")}</li>
            <li>{t("aboutUs.services.4")}</li>
            <li>{t("aboutUs.services.5")}</li>
            <li>{t("aboutUs.services.6")}</li>
            <li>{t("aboutUs.services.7")}</li>
            <li>{t("aboutUs.services.8")}</li>
            <li>{t("aboutUs.services.9")}</li>
            <li>{t("aboutUs.services.10")}</li>
            <li>{t("aboutUs.services.11")}</li>
            <li>{t("aboutUs.services.12")}</li>
            <li>{t("aboutUs.services.13")}</li>
            <li>{t("aboutUs.services.14")}</li>
            <li>{t("aboutUs.services.15")}</li>
          </ul>
        </p>
      </section>

      {/* Promise Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        {t("aboutUs.ourGoals")}
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto ltr:text-left md:text-right">
        {t("aboutUs.Goals")}
        </p>
      </section>
    </div>
  );
};

export default About;
