import { MdEmail } from "react-icons/md";
import { FaPhone, FaTelegram, FaViber, FaWhatsapp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();
  return (
    // <footer className="bg-gray-900 text-gray-300 py-8">
    //   <div className="container flex flex-col md:flex-row justify-between items-start mx-4 space-y-6 md:space-y-0 px-6">
    //     {/* Left Section - Logo and Company Name */}
    //     <div className="flex items-center">
    //       {/* <img
    //             src="/logo.png"
    //             alt="sama Logo"
    //             className="w-20 object-cover"
    //           /> */}
    //       <div className="flex flex-col items-start mt-0 md:mt-2">
    //         <h3 className="text-xl font-bold text-white">
    //         {t("footer.companyName")}
    //         </h3>
    //         <p className="text-sm text-gray-400">
    //         {t("footer.rights")}
    //         </p>
    //       </div>
    //     </div>

    //     <div className="flex flex-col rtl:items-end">
    //       <div className="flex items-center gap-3 mt-3 ">
    //         <FaPhone />
    //         <a href="tel:+964 7710314292">07710314292</a>
    //       </div>

    //       <div className="flex items-center gap-3 mt-3">
    //         <MdEmail />
    //         <a href="mailto:info@albasra-heavy-machinery.iq">
    //           <p>info@albasra-heavy-machinery.iq</p>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        {/* Right Section - Contact Information */}
        <div>
          <div className="text-left rtl:text-right mb-2">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {t("footer.companyName")}
            </h3>
            <p className="text-sm text-gray-400">{t("footer.rights")}</p>
          </div>

          <div className="flex flex-col ">
            <div className="flex items-center gap-3">
              <FaPhone />
              <a href="tel:+9647707873923" className="hover:text-gray-200">
                07707873923
              </a>
              <FaWhatsapp />
              <FaTelegram />
              <FaViber />
            </div>
            <div className="flex items-center gap-3">
              <MdEmail />
              <a
                href="mailto:info@albasra-heavy-machinery.iq"
                className="hover:text-gray-200"
              >
                {t("footer.email")}
              </a>
            </div>
            {/* New Google Maps Location Section */}
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <a
                href="https://maps.app.goo.gl/YY18PMjkj6fzb9J38"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                {t("footer.location")}
              </a>
            </div>
          </div>
        </div>

        <img
          src="/logo.png"
          alt="albaraa Logo"
          className="hidden md:block md:w-40 object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
