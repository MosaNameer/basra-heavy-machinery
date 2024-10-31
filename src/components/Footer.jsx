import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container flex flex-col md:flex-row justify-between items-start mx-4 space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center">
          {/* <img
                src="/logo.png"
                alt="sama Logo"
                className="w-20 object-cover"
              /> */}
          <div className="flex flex-col items-start mt-0 md:mt-2">
            <h3 className="text-xl font-bold text-white">
            {t("footer.companyName")}
            </h3>
            <p className="text-sm text-gray-400">
            {t("footer.rights")}
            </p>
          </div>
        </div>

        <div className="flex flex-col rtl:items-end">
          <div className="flex items-center gap-3 mt-3 ">
            <FaPhone />
            <a href="tel:+964 7710314292">07710314292</a>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdEmail />
            <a href="mailto:info@sama-alsayer.iq">
              <p>info@sama-alsayer.iq</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
